---
title: How Compaction Works in Pi
description: The complete English edition of the official Earendil article, “How Compaction Works in Pi”.
prev:
  text: The Session You Cannot Take With You
  link: /en/translations/session-portability
next:
  text: Prompt Caching in Agents
  link: /en/translations/prompt-caching
---

<span class="library-status">Officially licensed Earendil translation · 02</span>

# How Compaction Works in Pi

> - **Original title** *How Compaction Works in Pi*
> - **Author** Earendil Engineering `<rfc@earendil.com>`
> - **Publication date** 2026-08-13
> - **Original address** [earendil.com/posts/compaction-in-pi](https://earendil.com/posts/compaction-in-pi/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

If you have ever run a very long programming session in a coding agent such as [Pi](https://pi.dev), Claude Code, or Codex, you have probably triggered context compaction. This article explains how compaction works and when Pi needs it.

## A single LLM conversation

The [context window](https://en.wikipedia.org/wiki/Context_window) of a large language model (LLM) is limited. The context window is what the model can “see” while generating a reply. The [Transformer architecture](https://en.wikipedia.org/wiki/Transformer_(deep_learning)) used by LLMs limits how much input it can process. The input in a coding agent session includes every earlier message and tool call, and it keeps growing as work continues. Once the input exceeds the context window, the LLM will reject the request.

When you interact with a coding agent such as Pi, the agent sends a request to the LLM and receives a reply. Every request includes the system prompt, files already loaded such as [`AGENTS.md`](https://agents.md/), tool definitions, and the conversation history.

The first request a coding agent sends to the LLM includes this initial context together with the user's first message.

```text
Request 1:
[System][Tool][User]
```

This starts a turn. The LLM may first return an assistant message containing a tool call. The agent program runs that call, then sends the complete conversation including the tool result back to the LLM, and receives the next assistant message. When the assistant finishes producing its response, the turn ends.

```text
After request 1 finishes:
[System][Tool][User][Assistant: tool call][tool result][Assistant]
                    <-------------------->       ^        <------>
                       LLM returns             |    LLM returns
                                               |
                                          Agent produces
```

We keep working and send another message.

```text
Request 2:
[System][Tool][User][Assistant: tool call][tool result][Assistant][User]
                                                                     ^
                                                           new user message
```

Each turn makes the conversation longer. Eventually, the history will exceed the context limit. The next request will return an error such as `Request exceeds the maximum size`.

```text
[System][Tool][User][Assistant][……][tool result][User]
                                      ^
                            exceeds the context window
```

## Handling context overflow

When the existing conversation can no longer continue as it is, we have two choices.

1. Start a fresh, empty conversation without the context that has already accumulated. This throws away the history, including earlier decisions and unfinished work. This step can still be a good option, because [the longer the context, the more the quality of the LLM's output declines](https://www.trychroma.com/research/context-rot).
2. If we want to continue this conversation, we need to create a smaller representation of the conversation's context. That is what compaction does.

## Compaction

In theory, compaction can be realized in many ways. For example, we could write a deterministic function that preserves part of the conversation and discards the rest. In practice, however, compaction is usually done through a single LLM request that summarizes the conversation history.

Compaction replaces part of the history with a compacted representation, making room for subsequent messages and tool calls.

```text
[System][Tool][compaction result][User]
                                   ^
                             new message
```

## Implementation in Pi

Let's take a closer look at how Pi [implements compaction](https://pi.dev/docs/latest/compaction#summary-format).

When a conversation becomes too long, Pi uses compaction to summarize the earlier part while preserving recent work. When the context size approaches the total capacity of the context window, compaction triggers automatically; users can also trigger it manually with the `/compact` command.

Pi checks whether automatic compaction is needed after a turn ends. Before that, each request keeps appending content to the end of the existing prompt, so the already-cached prefix can be reused. If Pi encounters a context overflow error in the middle of a turn, it can also run compaction midway through that turn.

When compacting, Pi keeps a number of the most recent messages as they are.

```text
Before compaction:
[System + Tool][earlier turns][most recent retained messages]
```

Because Pi uses a [configurable token budget](https://pi.dev/docs/latest/compaction#when-it-triggers), the number of messages actually retained is not fixed. Pi currently retains 20,000 tokens by default, roughly 5 to 20 turns. All messages before this split point are taken, serialized, and then summarized.

## Pi's compaction prompt

For a coding agent, a good summary ideally works like a handover report between shifts. Pi's compaction prompt emphasizes that most of the existing context is no longer relevant; the next LLM request should carry only the context that still matters.

Because of this, the compaction request Pi sends differs from an ordinary conversation request.

1. The system prompt used by the standalone compaction request is different. It does not tell the LLM “You are a professional programming assistant”, but instead tells it: [“You are a context summarization assistant.”](https://github.com/earendil-works/pi/blob/47610217098d9ba8f22d223fa7c1413f9f5fd759/packages/coding-agent/src/core/compaction/utils.ts#L152-L158)
2. The user message in the compaction request is also different. It asks for [“a structured summary of this conversation branch, to be used as context when returning later.”](https://github.com/earendil-works/pi/blob/47610217098d9ba8f22d223fa7c1413f9f5fd759/packages/coding-agent/src/core/compaction/compaction.ts#L463-L498) The prompt specifies sections such as goals, progress, and important decisions.
3. This is a standalone request that does not use the existing conversation history, so it can use another LLM without incurring unnecessary cost.

The compaction result is added to the Pi session as a compaction record, and then the session can continue. Once the compaction request finishes, the context has been compacted.

```text
After compaction:
[System][Tool][summary][recent turns][new user message]
```

Now the conversation context has room again to hold more messages.

Pi stores the compaction summary as plain text inside the session. That way, the compacted context remains readable and [portable](/en/translations/session-portability), because we can switch models in Pi and keep using that summary.

## Compaction and the prompt cache

LLM providers use [prompt cache](/en/translations/prompt-caching) to lower the cost of repeated requests in the same conversation. In an active programming session, we pay less for context the model has already produced. This cache requires an exact prefix match, so compaction breaks the prompt cache.

```text
Cache before compaction:
[System][Tool][earlier history][most recent retained turns]
<------------------ cached prefix ------------------>

First request after compaction:
[System][Tool][summary][most recent retained turns][new user message]
<-- reusable -->^
                |
      first token that changed
                |
                +-- everything from here on has to be recomputed
```

The retained turns still contain the same tokens, but they now appear after a different prefix, so the previously cached state cannot be reused.

New requests after compaction gradually start benefiting from the prompt cache again.

## Experiments

Pi is highly extensible and shapeable, so you can replace its default compaction mechanism with one of your own. If you want to test another compaction mechanism, you can ask Pi to create an Extension with a custom compaction prompt.

::: info Translator's note
This document is the complete English edition of the original Earendil Engineering text. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; copyright in the original English text belongs to Earendil. Where anything is ambiguous, the [original English text](https://earendil.com/posts/compaction-in-pi/) is the reference.
:::

## Read next

- [Original English text: How Compaction Works in Pi](https://earendil.com/posts/compaction-in-pi/)
- [Previous: The Session You Cannot Take With You](/en/translations/session-portability)
- [Next: Prompt Caching in Agents](/en/translations/prompt-caching)
