---
title: The Session You Cannot Take With You
description: The complete English edition of the official Earendil Engineering article, “The Session You Cannot Take With You”.
prev:
  text: Earendil's Officially Licensed Translations
  link: /en/translations/
next:
  text: How Compaction Works in Pi
  link: /en/translations/compaction-in-pi
---

<span class="library-status">Officially licensed Earendil translation · 01</span>

# The Session You Cannot Take With You

> - **Original title** *The Session You Cannot Take With You*
> - **Author** Earendil Engineering `<rfc@earendil.com>`
> - **Publication date** 2026-07-30
> - **Original address** [earendil.com/posts/session-portability](https://earendil.com/posts/session-portability/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

The original promise of an inference API was simple and pleasant: send some input, receive some output. If you keep both, you have saved the conversation. You can inspect it, archive it, or replay it, and you can also hand it to another model.

That abstraction never entirely held. For example, the [prompt cache](/en/translations/prompt-caching) sits on someone else's GPU; every model tokenizes differently; and sampling cannot be reproduced—deliberately so. Yet the **semantic record** of a session, in the form of a transcript, can still belong to the user. A transcript should include the instructions, messages, tool calls, and tool results. Another model that is capable enough may not be able to continue it in exactly the same way, but it can understand what has happened and take over the next piece of work.

Annoyingly, inference APIs are slowly drifting away from this property—at least to some extent. APIs increasingly return a mixture of text and provider-bound state, and that state is deliberately designed to be non-portable.

- Inference tokens that are billed to the user but at most return a useless summary; the actual content is nothing but an encrypted data blob that cannot be read.
- Web searches that the model can see but the client cannot.
- Compressed context that only the originating provider can decrypt.
- Subagent instructions and messages hidden in the form of encrypted payloads, so that they are invisible to the application running the Agent.
- File, vector store, container, and cache references that cannot be resolved anywhere else.
- Response and conversation state that depends entirely on IDs, whose destinations are stored wholly on the provider's servers.

Providers can easily give a basic justification for each feature, and can make a good argument for why this design benefits users. But taken together, they change the ownership of an AI session in practice: the transcript on your computer is no longer equivalent to your session, but merely a partial view of some session; the running state of that session belongs to the inference provider, not to you.

We do not like this direction. Below, we want to discuss what it means for you as a user, and also what it means for us who develop tools in this space.

## A practical method for testing session ownership

By a portable session we do not mean that after moving from one model to another, the next token must be generated exactly the same. That is clearly impossible, because the capabilities, the character formed by training, the context window, and the way each model uses tools all differ, not to mention that the whole process is indeed deeply non-deterministic.

Portability refers to something simpler:

```js
const transcript = session.export();
revokeCredentials(oldProvider);
session = newProvider.continueFrom(transcript);
```

This archive must contain enough information, in an intelligible form, for another model to take over the work. It must not require the old provider to resolve an ID, decrypt a piece of data, remember a particular search result, or reconstruct a summary.

From this we get five useful test criteria:

1. **Inspect:** Can the user see what the model saw, which tool calls were made, and what was said between Agents?
2. **Export:** Besides the usual artifacts that can also be downloaded, is the session itself self-contained?
3. **Replay:** Can another implementation reconstruct a semantically equivalent context?
4. **Audit:** After the fact, can a human explain why the system performed an operation?
5. **Delete:** Can the user find and delete every server-side copy that the session depends on?

A response ID is not a transcript, because its data is stored on the server; ciphertext is not user-controlled state, because the user cannot decrypt it; and a list of references is not the evidence of the search results that were placed into the model's context, because you usually cannot obtain the same data that the model saw at the time.

## Encryption for whom?

The naming and the way these features are promoted can mislead users. `encrypted_content` sounds like a privacy feature controlled by the user. In reality, it is usually a wrapper that the client cannot read and only the provider can open. The provider chooses the keys, decrypts the contents for its own model, and defines where that data may be replayed.

A more accurate name is **provider-sealed state**.

Provider sealing can indeed deliver privacy benefits. For example, OpenAI can return encrypted reasoning content when the client sets `store: false`, then on the next request decrypt it only into memory, without persistently storing the intermediate state. For Zero Data Retention customers, this is better than requiring server-side conversation storage. But do not forget: there was never really anything that had to be encrypted in the first place!

This encryption does not hide the data from the inference provider; what it hides is your own data.

## Storage-based conversations turn a transcript into a pointer

OpenAI's Responses API stores responses by default. Its documentation states that by default response objects are stored for at least 30 days. You can use `store: false`, and you should, because it makes the interface behave more like Completions: data is not stored on OpenAI's servers.

The new Gemini Interactions API makes a similar choice. By default it sets `store: true`. Interactions on the paid tier are stored for 55 days, while the free tier stores them for one day.

Clearly, the idea of storing state on the server is very appealing:

```js
const first = responses.create({
  model: "frontier-model",
  input: "Investigate this production failure",
  store: true,
});

const second = responses.create({
  model: "frontier-model",
  previousResponseId: first.id,
  input: "Now implement the fix",
  store: true,
});
```

The application needs to send less data; the provider can store hidden reasoning and tool state; cache routing also becomes easier. But if the local application only records user messages and final text, then `first.id` becomes a foreign key pointing to a database outside the local application's control.

## The reasoning process you are not shown

All the major labs claim to have legitimate reasons for not publishing raw chains of thought. As a result, on non-open-weight models we usually cannot see these tokens.

Through the API, raw reasoning cannot be seen. When using a stored response, earlier reasoning can be recovered via `previous_response_id`. When using `store: false`, the API returns `encrypted_content`, and the client must save it and replay it on the next request. Even when `reasoning.context: "all_turns"` allows the next sample to use reasoning that has been stored, it remains opaque.

Anthropic returns the full thinking encrypted in the `signature` field. When readable thinking text is enabled, what the user sees is a summary produced by another model, not the raw chain of thought. On tool-use turns, thinking blocks must be sent back as they are. Anthropic's documentation also states that these thinking blocks are bound to the model that produced them and must be removed when switching models. So these reasoning traces, even within Anthropic itself, do not attempt to be portable.

The same situation repeats across all closed-weight models.

These encryption mechanisms allow a session to continue **within** one ecosystem, but they do not produce a portable transcript that can be handed to a model from another provider. A session archive may contain encrypted data blocks, but another model cannot make use of the meaning inside them:

```json
{"type": "reasoning", "encrypted_content": "gAAAAAB..."}
{"type": "thinking", "thinking": "", "signature": "EqQBCg..."}
{"type": "thought", "summary": [], "signature": "EpoGCp..."}
```

## The hidden search process

Take web search as an example. Server-side web search is one of the clearest cases of “hidden holes” appearing in a transcript. A client-side search tool behaves like any ordinary tool:

```js
const result = search(query);
record({
  query,
  retrievedAt: now(),
  results: result.map((item) => ({
    url: item.url,
    title: item.title,
    passages: item.passages,
  })),
});
model.send({ toolResult: result });
```

The user can inspect the ranking of results and the text passages, re-fetch pages, save a copy, or hand the same evidence to another model.

When using managed search, the provider runs a private tool loop. OpenAI, Google, and Anthropic will reveal the search actions, citations, and sometimes a list of source URLs, but not the complete text context used to produce an answer. A URL cannot produce a stable replay, because page content can change, and it may be that by then the content has been reduced to a much shorter passage before the model saw it.

The final answer may be entirely correct. The problem appears on the next turn:

> Compare the third source with the first, re-check the disputed number, and continue this research using another model.

The new model will receive the answer and a few URLs, but it will not receive the result ranking, the extracted passages, the filtered-out material, or the exact evidence the first model used. Even if the next request is sent elsewhere, the old provider remains part of this session. Even if you save the citations and re-fetch the web pages, you still cannot reproduce the exact data as it was at that time.

Managed search should provide a full-fidelity export mode that includes the query, result metadata, retrieved passages, timestamps, and stored content. The user interface can still display only concise citations, but that should not be the only record.

## Opaque compaction

Very long Agent sessions eventually need compaction. A visible, client-controlled summary is indeed lossy, but at least it can be inspected and moved. The user can review it, edit it, and also ask another model to produce a different version.

By contrast, OpenAI's server-side compaction produces an encrypted compaction item. Its documentation calls it “opaque and not intended to be human-readable”. The separate `/responses/compact` endpoint returns the “canonical next context window” and instructs the client to send it back as is.

Conceptually, the transformation is as follows:

```js
// Before: expensive but portable
let history = [
  userMessage,
  assistantMessage,
  toolCall,
  fullToolResult,
  // ... 200,000 more tokens of intelligible history
];

// After: cheap to continue only with the original provider
history = [
  {
    type: "compaction",
    encryptedContent: "enc_provider_only_state...",
  },
  ...recentItems,
];
```

OpenAI can continue from the compacted meaning, but another provider can only see an unreadable string fragment and the short recent tail—more precisely, it can actually see all of it, except that Pi never passes this kind of information on to another provider.

This is not a technical necessity. Anthropic's server-side compaction returns a `compaction` block with a readable `content` field. It allows the client to supply custom summarization instructions, and the resulting summary can be inspected and handed to another model. With any provider, compaction can also be run client-side.

OpenAI's sealed artifact may preserve more model-specific state than a plain text summary, and perform better on the original model. Making it an optional optimization is reasonable, but at the same time a readable handover summary must be provided, rather than replacing the summary with it. But once again, all of this also carries the “benefit” of locking you ever deeper into a single ecosystem.

## Subagents come with hidden instructions

Multi-Agent systems make the problem more complicated, because now there is no longer a single transcript, but a tree of sessions and a stream of messages between Agents. These messages are usually prompts like the ones a human would write, except that now one machine writes them for another.

OpenAI's managed Responses Multi-agent beta returns three new item types: `multi_agent_call`, `multi_agent_call_output`, and `agent_message`. In the `spawn_agent` example, the `message` parameter is encrypted; inter-Agent messages also contain only `encrypted_content`. Once Multi-agent is enabled, every Agent implicitly enables automatic server-side compaction, even if the client did not ask for it. It does not support reasoning summaries, and the API also injects root and subagent instructions that developers cannot edit or remove.

This is a whole bundle of non-transferable state: sealed task delegation, sealed Agent messages, contexts that are each automatically compacted, hidden reasoning, and provider-managed orchestration.

In June 2026, the open-source Codex client also merged a related change. The commit is titled [“Encrypt multi-agent v2 message payloads”](https://github.com/openai/codex/commit/5f4d06ef186b896d316620556e561d59206c3ebf), and inside it the process is explained directly:

```json
// The tool call emitted by the parent model; Codex stores it like this
{
  "name": "spawn_agent",
  "arguments": {
    "task_name": "worker",
    "message": "<ciphertext>"
  }
}

// The input received by the child model
{
  "type": "agent_message",
  "author": "/root",
  "recipient": "/root/worker",
  "content": [{
    "type": "encrypted_content",
    "encrypted_content": "<ciphertext>"
  }]
}
```

The Responses API encrypts the tool parameter emitted by the parent Agent, Codex forwards it, and the API decrypts it internally for the Subagent. Codex's own `InterAgentCommunication.content` is empty. The actual task will not appear in the rollout and history that it can read.

This may be more than an abstract problem about switching models. Imagine if a Subagent changes the wrong file, leaks a secret, duplicates another Agent's work, or follows a mistaken assumption; the user cannot even answer a simple question: **what exactly was that Agent asked to do at the time?**

A still-open [Codex issue](https://github.com/openai/codex/issues/28058) asks that encrypted transmissions keep a separately readable audit copy. This is a minimally acceptable design. A better approach is to let inter-Agent messages in plain text remain the norm.

## “Most people do not switch models mid-session”

Probably not. Most people do not switch their operating system or mobile carrier every week either. But even if you do not use that freedom, it still matters, because it changes your relationship with the provider, and it also changes how the provider treats you.

As a user, you may also be forced to migrate a session because a model is retired, a service goes down, a price changes, a policy blocks the next request (hello, Fable), a confidential phase must run locally, or an auditor needs to reconstruct what happened. Agents also make sessions longer and longer: a single programming or research session can accumulate days of decisions and evidence; a personal assistant can even accumulate session records stretching over years—roughly, anyway, because we have not actually used them for years yet.

The option to leave also creates discipline. If a provider knows that a user can continue elsewhere, it has to compete on model quality, price, reliability, and trust. If the context a user accumulates can only be interpreted by one provider, the incentives that emerge are very unfortunate.

## What a portable inference API should promise

We would like inference providers and Agent developers to adopt a small set of rules.

1. **A local event log is the canonical record.** Server storage may mirror it or speed it up, but the client must be able to reconstruct the session without resolving server IDs.
2. **Storage must be explicit.** `store: false` should be easy to use, clearly documented, and preferably the default. Features that require storing data should be explained explicitly at the point of use.
3. **No opaque item should be the sole carrier of meaning.** To achieve better results within the same provider, encrypted reasoning, compaction, and tool signatures may be included, but every item must have a readable, provider-independent handover representation.
4. **Managed tools must keep full-fidelity logs.** Record the exact inputs, outputs, evidence, filtering, sources, timestamps, and content hashes, not only the polished answer and citations.
5. **Subagent communication must be auditable.** Store the exact, readable task, messages, results, inheritance relationships, model, and tool permissions for every Agent.
6. **Compaction must be inspectable.** Return a readable summary, the instructions used to create it, and enough source information to understand which content was discarded.
7. **Artifacts must be exportable.** Files, container output, search snapshots, and generated media should all be downloadable into a local archive addressed by content.

## Distillation is actually good

At the model level, there is a related kind of lock-in as well.

Some of the largest closed-weight labs in the United States are increasingly hostile to external distillation. In [a February 2026 article](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks), Anthropic accused DeepSeek, Moonshot, and MiniMax of related actions, calling them “distillation attacks”. Anthropic's commercial terms state that customers own the output, but prohibit using its service to train a competing AI model. At the same time, Anthropic's own article also acknowledges that when leading labs use distillation on their own models, “distillation is a widely used and legitimate training method”.

Anthropic uses robots to gather data from the public web for model development, and is also known to have cut up printed books and scanned them. OpenAI similarly says it uses public internet content to train models, and argues that training models on publicly accessible internet material is fair use. Both companies describe internal distillation to produce smaller models as a normal method. OpenAI has also offered an explicit [first-party API distillation workflow](https://openai.com/index/api-model-distillation/) that allows smaller OpenAI models to be fine-tuned using the output of stronger OpenAI models.

The moral asymmetry is plain to see. These labs demand that society accept that machines may learn from the enormous body of human work placed on the internet—often without prior individual permission—but insist that other machines must not learn from the output these labs produce. The broadest version of this principle conveniently allows knowledge to flow into closed models, but not to flow back out again.

We argue that the default attitude toward distillation should change from hostile to supportive. Distillation can turn expensive frontier capabilities into smaller, cheaper, and faster models that can run locally, offline, on constrained hardware, or under the user's own control. It can increase competition, preserve capabilities after an API disappears, and reduce the computation and energy required for common tasks.

## The minimum freedom

A user should be able to close an account, save a session, and hand it to another model. The new model may disagree with earlier conclusions, may ask follow-up questions, or may perform worse, but it should not be staring at a piece of ciphertext where the old model could see the user's history, evidence, plans, and delegated work.

We do not object to providers building better stateful APIs. We object to better performance being coupled to less user control. State storage should be optional, managed tools should be observable, compaction should be readable, Agent communication should be auditable; ideally, opaque reasoning should no longer be opaque, or at least have a portable handover representation. Distillation should be a path that makes capability more widely available, not a taboo used to build ever higher walls.

::: info Translator's note
This document is the complete English edition of the original Earendil Engineering text. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; copyright in the original English text belongs to Earendil. Where anything is ambiguous, the [original English text](https://earendil.com/posts/session-portability/) is the reference.
:::

## Read next

- [Original English text: The Session You Cannot Take With You](https://earendil.com/posts/session-portability/)
- [Next: How Compaction Works in Pi](/en/translations/compaction-in-pi)
