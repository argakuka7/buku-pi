---
title: Prompt Caching in Agents
description: The complete English edition of the official Earendil Engineering article, “Prompt Caching In Agents”.
prev:
  text: How Compaction Works in Pi
  link: /en/translations/compaction-in-pi
next:
  text: What Is an Agent Harness?
  link: /en/translations/what-is-a-harness
---

<span class="library-status">Officially licensed Earendil translation · 03</span>

# Prompt Caching in Agents

> - **Original title** *Prompt Caching In Agents*
> - **Author** Earendil Engineering `<rfc@earendil.com>`
> - **Publication date** 2026-07-22
> - **Original address** [earendil.com/posts/prompt-caching](https://earendil.com/posts/prompt-caching/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

People often picture a large language model as a function: send in some text, get some text back. That is a useful abstraction, but it ignores one of the most important facts about running a coding agent: most of the input is the same as the previous input. In other words, we usually only append content at the end.

A coding agent sends a system prompt, tool definitions, a description of the project, the conversation history, tool calls, and tool results to the model. On the next turn, it sends almost all of that content again, adding only a little new material. When a session grows to tens or even hundreds of thousands of tokens, recomputing the whole prompt on every turn becomes slow and expensive.

The prompt cache makes this way of working nearly economically viable, but it is also very fragile. Changing tool definitions, switching models, or a provider changing its routing can all turn an incremental request that should be cheap into a full replay of the entire context.

So for a coding agent, cache behavior is not just an implementation detail or a performance optimization. It affects latency, cost, tool design, session design, and even which product features should be given to users.

## What the KV Cache Holds

A Transformer processes a prompt in roughly two stages. In the **prefill phase**, it reads the input tokens and computes attention states for them; in the **decode phase**, it generates one new token at a time.

At each attention layer, every token that is processed produces one key and one value. These are not exactly the same as key-value lookups in a hash table: they are arrays of numbers, usually floating-point or low-precision quantized values. When processing a new token, the model compares that token's **query** against the previous **keys** to judge how relevant each earlier token is to the current token. Then, based on those relevance scores, it mixes the associated **values** in a weighted way. In this sense, keys are what the model matches against, and values are the information it retrieves; but this lookup is fuzzy, not like a dictionary that “returns exactly one precise match”.

These keys and values are stored, so the next token that is generated can attend to all previous content without recomputing the earlier tokens. This stored state is what we call the **KV cache**.

Conceptually, a single request looks like this:

```text
Request 1:

[System][Tool][User][Assistant][Tool result][User]
<-------------------- Prefill -------------------->
                       |
                 K and V tensors for each token, each layer

Request 2:

[System][Tool][User][Assistant][Tool result][User][New]
<------------------ Reusable prefix ----------------><-->
                                                                     |
                                                             New work
```

The actual representation is much more complicated, varies between models, and is “quite” large. Its most important property: it is tied to one specific token prefix. Two prompts with the same meaning but different tokenizations cannot share a KV cache. If a single token in the middle changes, everything after it becomes a different continuation.

The prompt cache extends the lifetime of this state beyond a single generation. When the next API request from a coding agent begins with the same tokens, the inference system can reuse the old computation that matches that prefix and only run prefill for the new suffix. That is as far as the theory goes.

## Where the Cache Lives

For a cache to be useful, it must be stored somewhere and be addressable again. An inference system essentially has two ways to let the next request reuse a KV cache.

The simpler way is **session affinity**. It keeps the KV cache on or near the GPU that first ran the computation, then routes subsequent requests back to the same worker node. The session ID or prompt cache key can be a simple routing hint, so this problem may even be handled purely at the HTTP load-balancing layer, without needing to inspect the request body.

```text
Request(session-42) --> Router --> Worker node 7 --> KV cache GPU 7
Next(session-42) --> Router --> Worker node 7 --> KV cache GPU 7
```

This avoids moving a very large cache over the network. Under normal operation it is fast, but it also constrains how work can be scheduled. The chosen worker node may be overloaded, restart, or evict the relevant cache. The router may also decide that balancing load across the whole cluster matters more than preserving a session's cache. Even so, the approach remains attractive because it requires almost no extra deployment infrastructure or hardware.

The other way is a **distributed cache**. KV blocks can be stored in another memory layer, or shared across several worker nodes, so requests are less tied to one specific GPU.

```text
                          +--------------------+
Request --> Scheduler -->| Worker node 3 / GPU 3 |
                 |           +--------------------+
                 |
                 +----------> Distributed KV blocks
                 |
                 +----------> Worker node 9 / GPU 9
```

This improves scheduling flexibility and resilience to failures, but moving, indexing, and retaining KV blocks is itself a systems-engineering problem. Different implementations combine GPU memory, host memory, local storage, remote storage, prefix-aware routing, and eviction policies in their own ways.

Objectively, the KV cache is large, but in some ways not as large as one might imagine. With various techniques, the KV cache for a very long conversation can be compressed to the range of a few GB.

## Cache and Prefixes

A Pi Session is a tree, not a list. `/tree` can move the current conversation back to an earlier node, then continue along another branch. A step backward can discard the currently active suffix, but it does not delete it from the session file. A new branch may share most of its content with the old context, share only a little, or share practically nothing. This design is not unique to Pi; many coding agents have at least a conceptually similar mechanism. Even when a session is not represented as a tree, an agent with some kind of backtracking function is not rare.

```text
                             +-- E -- F  another branch
                             |
Session S: root -- A -- B -- C -- D  current branch
                   |
                   +-- Z  branch near the starting point
```

These three branches can have the same Pi session ID. From the router's point of view, they all belong to the same session; from the prompt cache's point of view, they are three token sequences that share only part of a prefix.

If the cache stores reusable prefix blocks, then when jumping from `D` to `F` it may still be able to reuse `root -> C`. But if the cache only stores the most frequently used continuation, the shared block has already been evicted, or the request is routed elsewhere, cache hits can drop sharply. When jumping to `Z`, even though it branches from `A`, all that remains may be the initial system prompt and tool definitions. The concrete cache-management behavior depends heavily on the provider.

The reverse situation can also happen. `/fork` or a new session can produce a new session ID while carrying a context that is largely identical. If the routing system isolates caches by session key, it may fail to find this useful overlap.

What really determines which work can be cached is the reusable prefix. Session identity only helps the infrastructure find potentially relevant content. On some systems, the routing key is essential to cache management; on others, it is merely an optimization.

## Explicit Prefix Cache and Automatic Prefix Cache

Providers' APIs mainly expose caching in two ways.

Anthropic's older interface uses explicit `cache_control` nodes. The client marks a boundary after a stable section, such as a system prompt, tool definitions, or recent cacheable conversation content. The server can then write or look up the prefix up to that point. The boundary is explicit, but reuse still requires the preceding content to be exactly identical. Not only is the cache node explicit, its price is explicit too: writing to the cache costs money, and you can also choose the retention duration at a different price.

Other APIs use an automatic prefix cache. The client sends requests as usual, and the provider finds reusable prefixes on its own, with no need for the client to set breakpoints. A prompt cache key or session header may improve routing or grouping, but it cannot make different prefixes identical.

## Why Tool Configuration Destroys the Cache

Tool definitions usually appear before the conversation, and inside the model they are “folded” into the system prompt. Their names, descriptions, and JSON Schema are just like any other text, namely input to the model. Adding one tool, removing one tool, changing its Schema, or even just changing the serialization order of tools can all make the first mismatch appear near the start of the prompt.

```text
Turn 1: [System][Read][Write][Shell][Conversation...........]
Turn 2: [System][Read][Write][Shell][Deploy][Conversation...]
                                                  |
                                                  Old conversation now sits
                                                  after the mismatch point
```

In plugin systems and MCP-style tool catalogs, unexpected occurrences like this are very common. Loading a tool only when it becomes relevant sounds efficient, because fewer Schemas need to be sent up front. But for most models, expanding the tool configuration later invalidates the entire conversation cached after it. Saving a few tokens of tool Schema can cause tens of thousands of conversation tokens to be reprocessed.

Some newer model APIs support **incremental tool loading**. A tool can become available at a specific tool-result position in the transcript, instead of being inserted into the initial tool list. That way, the existing prefix does not change:

```text
[System][Initial tools][Conversation][New tool][Next turn]
<---------- Already-cached prefix ---------->
```

Pi now supports this way on models that have native deferred tools. When an Extension makes a purely incremental change through `setActiveTools()`, Pi records the name of the newly added tool in the tool result. For Anthropic models that support this feature, it uses deferred definitions and `tool_reference`; for OpenAI models that support it, it sends the corresponding tool-search item. Other models use a safe fallback: Pi sends the full active tool list on the next request. Functionally it still works, but it can empty the prompt cache.

The word “incremental” is very important, because removing a tool, swapping one set of tools for another, or changing a prompt fragment will still change the input at the front. If an Extension rebuilds the system prompt, shuffles the tool order, injects a timestamp, or changes the active tool list on every turn, it can inadvertently break the cache for the whole session.

Pi's extensible nature means Pi cannot guarantee cache stability for every Extension. Pi can provide cache-friendly mechanisms, but Extensions still have to use them correctly. Based on our observations, many Extensions pay little attention to cache efficiency. Part of the reason is that, when using a flat-rate subscription, the cost of a cache miss is not clearly visible.

## Interruptions and TTL

Some important prompt caches have a very short default lifetime. Anthropic's built-in five-minute cache is worth noting, because it is shorter than much normal programming activity. If you are using Fable and then go make coffee, come back ten minutes later, and send just one sentence, “say hi”, the cost can be far higher than you expect.

The reason is that the user may assume a programming session is always continuously active, while the inference provider sees it as a series of requests separated from one another:

```text
Model request --> Run tests for 7 minutes --> Model request
              No cache traffic here
```

A long build, a test suite, lunch, a meeting, or even just pausing to review a diff can all exceed the cache's lifetime. The next request does contain the same prompt, but the stored KV state is gone, and the whole prefix is charged at the input rate again.

Because Anthropic currently does not allow Pi to be used as a tool within its subscription service, we use the five-minute default that Anthropic recommends for API users. But the Claude Code codebase shows that Anthropic extends the cache duration to one hour for its own subscription customers. However, if you pay API token prices, the extra cost of extending the cache often is not worth it.

Of course, you can also actively enable a longer retention duration. Providers such as Anthropic offer longer retention controls. When using the supported direct-connection API, Pi users can set `PI_CACHE_RETENTION=long` to make this request. But in the end it is only a request: Pi cannot force a gateway to retain cache entries, cannot prevent eviction when memory is under pressure, and cannot keep the cache alive when there are no model requests.

## The One-Time Cost of a Cache Miss

Providers usually charge different prices for uncached input, cache writes, and cache reads. Cache reads are often discounted, because the expensive prefill work is already done. Cache writes may carry a premium, because the provider promises to retain the state for later use.

Still with the Fable scenario above: imagine a programming session has accumulated 100 thousand tokens of history, then sends just one very short new request. With a normal cache, almost the entire history is charged at the cheaper cache-read rate, only a little new material needs to be processed at the normal input rate, and it may be written to the cache.

On a cache miss, the provider has to reprocess the entire 100-thousand-token history at the normal input rate, and may charge extra to write it back to the cache. So after the cache expires, even a short request like `continue` can feel very expensive. In a long session, the cost of re-reading old input can be far greater than the cost of generating the next reply.

The cache can also create incentive relationships that are not very intuitive.

Users want a high cache hit rate, because it lowers latency and price. Inference operators that own GPUs should also want a high hit rate: less prefill computation means the same hardware can serve more requests. A well-designed cache-token discount can align the interests of both sides while giving operators a better profit margin.

The incentives of a gateway or reseller can differ. If it earns revenue from input tokens charged at the no-cache rate, then a cache miss can make the customer's bill higher. Whether that also produces more profit depends on upstream costs, contracts, and who runs the cache. In a technology stack whose incentives are misaligned, the party handling routing may not have to bear the full cost of a cache miss, while the party billing the user actually earns more revenue when a cache miss occurs.

This does not mean providers deliberately break the cache, but it does show that cache performance should be observable. Users should not have to guess that something is wrong only from a bill that suddenly balloons. Knowing whether the cache is behaving abnormally can be an important clue.

Following the cache strictly also means the gateway is not free to route a request to the best option between two turns. You may be willing to sacrifice one cache hit to switch to another model that is cheaper from then on; or it may be better to balance load onto another provider.

## Why Pi Does Not Prune Aggressively

Having read this far, you probably understand why Pi does not prune tool calls. It is easy to think of controlling cost by continually deleting old tool results or rewriting history; sometimes that is indeed necessary, especially when approaching the context window limit. But as explained earlier, pruning itself also has a cache cost.

Deleting content from the middle changes the prefix at the deletion point. The entire remaining conversation after it may need to be reprocessed. The one-time cost of rewriting a long cached context can exceed the future savings from deleting a few cheaply priced cache tokens.

A rough break-even comparison looks like this:

```text
One-time rewrite cost
    ≈ tokens retained after the edit point × (no-cache price - cache-read price)

Future savings per turn
    ≈ tokens pruned × cache-read price
```

This is not only about billing. Old tool results often contain evidence that later becomes the basis for the model's decisions. Deleting them can worsen the model's performance, even if a summary preserves the core of the meaning.

So Pi prefers a stable, mostly append-only transcript, and does not treat every old token as waste. When context pressure is strong enough to justify a lossy rewrite, context compaction can be run. Because compaction deliberately builds a new context rather than inadvertently re-billing an unchanged prompt, Pi records it in the session statistics as a one-time cache reset, not as a cache failure.

The goal is not to make the prompt as short as possible, but to achieve the best balance among model context, cache reuse, latency, and price.

At the same time, pruning is sometimes beneficial too. If the provider you use does not offer a discount for good cache performance, or if for some reason you cannot achieve a high hit rate, then pruning may suit you better. Pruning also does make it easier for the router to balance load across different backends, because the cache cannot be moved.

## What Pi Can and Cannot Do

Pi tries to keep stable input stable. It passes along a consistent session ID and provider-specific cache hints, sets explicit cache nodes when the API requires them, records cache read and write usage, and supports incremental tool loading anchored to a message position when the model allows it. Its default transcript behavior also avoids rewriting old context without reason.

Once a request leaves the local machine, Pi cannot control every layer after that. It cannot determine a provider's eviction policy, cannot extend the cache beyond the limit the API allows, cannot guarantee that a given GPU stays alive, and cannot ensure that a gateway honors routing affinity. It also cannot preserve the cache for a prefix that an Extension changes.

What Pi can do is make cache health visible.

The status bar at the bottom of the interface shows total cache reads and writes with `R` and `W`, and the last request's cache hit rate with `CH`. The `/session` command shows more complete information: total cached and uncached input, cumulative hit rate, cost, and an estimate of the number of tokens and amount of money re-billed because of a [significant cache miss](https://github.com/earendil-works/pi/blob/34f3719a942ecbf3e6d23e67098f47ba2867de0a/packages/coding-agent/src/core/cache-stats.ts#L50-L90).

```text
Messages
Total: 178
User: 6
Assistant: 58
Tool: 114 calls, 114 results

Tokens
Input: 7,129,883
  Cached: 6,776,832 (95.0%)
  Uncached: 353,051
Output: 30,013
Total: 7,159,896

Cost
Total: $6.054
Cache re-billing: $0.728 (161,744 tokens, 2 misses)
```

Users who want to be notified when a cache miss happens can enable **Show cache miss notices** in `/settings`, which corresponds to `showCacheMissNotices` in `settings.json`. After that, Pi inserts a warning whenever a significant miss occurs, with the number of tokens re-billed and an estimated cost. When Pi can observe a model switch, or an idle time that exceeds the usual short TTL, Pi will also explain the cause. For other misses, it just reports the fact and does not pretend to know what happened inside the provider.

## Common Causes of Degraded Cache Performance

When a session's cache hit rate looks abnormal, the common causes include:

1. **Idle time.** A command, a code review, or a pause in the conversation exceeds the provider's retention window.
2. **Switching models or providers.** KV state is tied to the model, and usually cannot be moved between providers.
3. **Branch navigation.** `/tree`, backtracking, forks, and alternative branches can change the current token sequence, even if the session ID does not change.
4. **Context compaction or manual history rewriting.** These operations deliberately replace part of the prompt and form a new prefix.
5. **Tool changes and reasoning levels.** Adding, removing, reordering, or editing tool definitions changes the beginning of the request, unless the model supports message-position-anchored loading and the changes are purely incremental. Changing the reasoning level usually has the same effect.
6. **Dynamic system prompts.** Timestamps, random values, constantly changing project context, and prompt fragments supplied by Extensions can invalidate everything after them.
7. **Context transformations by Extensions.** An Extension that modifies old messages or a provider request payload can make Pi's seemingly stable transcript change when it is actually sent.
8. **Provider routing and eviction.** Even if the prompt is exactly identical, the cache can still miss if a request arrives at a location that can no longer retrieve the relevant KV blocks.

::: info Translator's note
This document is the complete English edition of the original Earendil Engineering text. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; copyright in the original English text belongs to Earendil. Where anything is ambiguous, the [original English text](https://earendil.com/posts/prompt-caching/) is the reference.
:::

## Read next

- [Original English text: Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
- [Previous: How Compaction Works in Pi](/en/translations/compaction-in-pi)
- [Next: What Is an Agent Harness?](/en/translations/what-is-a-harness)
