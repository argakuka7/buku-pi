---
title: Why Pi Puts Sessions and Context in Your Hands
description: 'Reading session portability, prompt cache, context compaction, and the Agent Harness in sequence: distinguish session records, model context, and provider requests, and understand why each layer needs to be inspectable and editable.'
prev:
  text: Written Outside Buku Pi
  link: /en/journey/
next:
  text: The Session You Cannot Take With You
  link: /en/translations/session-portability
---

<span class="library-status">LEARNING NOTES · Translation Series</span>

# Why Pi Puts Sessions and Context in Your Hands

After reading ["Sessions You Cannot Carry With You"](/en/translations/session-portability), ["The Compaction Mechanism in Pi"](/en/translations/compaction-in-pi), and ["Prompt Cache in Agents"](/en/translations/prompt-caching), I increasingly felt that the three were not discussing three separate features, but one and the same question: **from a piece of Agent work, how much of it can we really carry, inspect, and change ourselves?**

Imagine you ask an Agent to fix a bug that has been going on for two days. It reads logs, changes code, rules out several guesses, and in the end is still not done. At that point you want to switch models to continue. If all you have in your hands is a session ID from one provider, or a piece of "post-compaction state" you cannot open, what does the new model actually receive? Can it know the cause of the error that was already ruled out? Can you see which step was skipped?

This is the common thread I found while reading these translations:

**Storing records means being able to trace them; controlling context means being able to decide what the model sees right now; controlling the conversion layer means not letting one model's interface determine how you work.**

These three layers only come close to being an Agent Harness of your own when they are brought together.

## First, Distinguish Three Things

1. **Session records** answer "what happened to the task". The local JSONL session, the session tree, and Extension entries store branches, tool calls, and summaries.
2. **The context of this round** answers "what the model will see on the next call". The current branch, the compaction summary, the most recent messages, and the `context` processing from Extensions together determine the material for this round.
3. **The provider request** answers "how this material is handed over to the model". Pi's adaptation layer converts the input; when needed, an Extension can inspect or adjust the request payload.

Sessions are the long-term record; the context of this round is rebuilt from the current session path, then the system prompt and tool definitions are added; the provider request then transforms that material into the form a particular interface needs. **"Being in my session" is not the same as "the model sees it right now"; "the model sees it" also does not mean "it can be plugged in as-is when switching providers".** Pi's [explanation of the session file format](https://pi.dev/docs/latest/session-format) details how session entries form model messages; the [Extension documentation](https://pi.dev/docs/latest/extensions) provides an entry point for adjusting messages and request payloads before they are sent.

The word "editable" here also has limits: Pi session files have their own JSONL structure, so Pi will not automatically recognize any arbitrary disk format you make up. What really deserves attention is that records stay stored locally and can be read, that Extensions can add entries or messages, and that they can also change the context of this round derived from those records.

<div class="concept-diagram"><img src="/en/images/diagrams/context-session-compaction.svg" alt="The Session Tree stores the full history and branches; Pi selects a path and combines it with project files read as needed and the compaction summary, then builds the current Context before handing it to the model" loading="lazy"></div>

*Diagram: the session stores "what happened", while the Context of this round determines "what the model sees right now". This figure shows the basic relationship; the next two figures explain prefix changes and handover between models. [Open the original image](/en/images/diagrams/context-session-compaction.svg)*

## Why Sessions Must Be Held On to First

The translation [about session portability](/en/translations/session-portability) made me realize that storing the chat text alone is not enough. A coding Agent's "experience" also includes system instructions, tool calls, tool results, model switches, branches, and compaction. If the important steps are hidden only inside the provider, then after leaving its service, even with a seemingly tidy chat history, the working state at that time cannot necessarily be rebuilt.

By default Pi stores sessions in local JSONL files, organized by working directory, and preserves multiple paths in a tree structure. You can continue, go back to a branch point, or open another session. Compaction is also written to the record as an entry: old content may no longer enter the model context on the next round, but the original session entry can still be reviewed. This gives us two distinct abilities: **continuing the current path**, and **asking again, after the fact, where a judgment came from**. [Pi's session documentation](https://pi.dev/docs/latest/sessions) and the [file format explanation](https://pi.dev/docs/latest/session-format) describe this mechanism.

A local session is still not an all-purpose backup. Hidden reasoning that the model provider does not return, and the internal process of managed search, cannot possibly be recorded by Pi out of thin air; the session tree also will not restore disk files for you. For another model to take over, at least keep the goal, the important decisions, the files already changed, the verification results, and the unresolved problems. The code itself still needs to be checked through files and Git.

## Why You Should Not Touch the Prefix Day to Day, and Compact Only When Needed

Long sessions have a cost that is easy to miss: the next round usually resends most of the previous content. Prompt cache can reuse **an input prefix that is exactly the same**. So, while working, continuously deleting old tool results from the middle, rearranging tool definitions, and changing the system prompt, even though it looks like shortening the prompt, can force content behind it that could have been reused to be recounted.

This explains why Pi prefers stable records and prioritizes additions. A stable prefix gives the cache a chance to hit; but "a chance" is not a guarantee, because the provider can still let the cache expire, delete it, or route the request elsewhere. A session ID also cannot turn two different prefixes into the same prefix. [The translation about prompt cache](/en/translations/prompt-caching) explains this cost very plainly.

**Compaction is another matter.** When the context approaches the model window, or you deliberately type `/compact`, Pi tidies the earlier part of the content into a readable summary, keeps the most recent messages, and then continues with "summary + recent content". This step deliberately rewrites the input prefix, so the old prompt cache usually has to be rebuilt. In other words, Pi does not "keep the original prefix in order to compact": it **keeps the prefix stable day to day, and when it really needs to, accepts a one-time cache reset in exchange for a shorter context that can still be continued**. [Pi's Compaction documentation](https://pi.dev/docs/latest/compaction) explains summaries, retention of recent messages, and the customizable compaction flow.

<div class="concept-diagram"><img src="/en/images/diagrams/prefix-cache-compaction.svg" alt="Round 1 and round 2 share the same system, tool, history, and message A prefix; after compaction, the old history becomes a readable summary, the most recent messages are retained, and the prompt cache is rebuilt from the point of change" loading="lazy"></div>

*Diagram: the second round only adds content, so the same prefix has a chance to hit the cache; compaction rewrites the earlier part, and although the most recent messages are retained, the old complete prefix is no longer the same. On mobile you can swipe left and right, or [open the original image](/en/images/diagrams/prefix-cache-compaction.svg) to enlarge it.*

This is also a compromise, not a magical "lossless memory". A summary will throw away details. If the original text of an error, a user constraint, or a verification result must not be lost, make sure it appears explicitly in the summary, or write it to a project file that can be read again. After compaction, asking the Agent to repeat the goal and the next step and then checking it against files is more reliable than just looking at the words "compaction complete".

## Why You Also Need to Be Able to Change "What the Model Sees"

If session records were always sent as-is to the model every time, we could only choose between "deleting the record forever" and "always sending the entire record". What is really needed is a third option: **the record remains traceable, while the input for this round is arranged according to the needs of the task.**

For example, a single tool run produces thousands of lines of log. You might want the session to keep the full result so it is easy to account for; while on the next call it is enough to give the model an error summary, the important line numbers, and the path of the original file. Or if you switch to a model with a smaller context window, you need a more concise handover. The `context` event on Pi Extensions can make non-destructive adjustments to a copy of the messages before each model call; a custom compaction hook can provide its own summary; custom messages can enter the context. The [Extension documentation](https://pi.dev/docs/latest/extensions) and the [compaction documentation](https://pi.dev/docs/latest/compaction) each provide such an entry point.

I understand this ability as "you can decide your context strategy yourself": deciding which facts must be kept as-is, which may be summarized, and which are given only for a particular task. This does not mean Pi automatically finds the optimal format for all models, let alone that one set of summaries can maintain the same compaction ratio across any provider. How a model tokenizes, the context window, the tool protocol, and cache billing can all differ; the KV cache after a model switch also cannot simply be moved over. **What is portable is the work record and the handover rules that you can read and change, not the internal computation state of a provider.**

<div class="concept-diagram"><img src="/en/images/diagrams/portable-context-policy.svg" alt="A readable local Session is arranged by the context strategy into the messages of this round, then converted separately into provider requests for model A and model B; the provider's internal KV cache cannot move between models" loading="lazy"></div>

*Diagram: when switching models, what continues is the readable record and the handover rules you set. The requests for A and B need to be adapted separately, and the provider's internal cache does not move with it. [Open the original image](/en/images/diagrams/portable-context-policy.svg)*

## What Is Really Worth Asking Is Not "How Short Can It Be Compacted"

Now I test this ability with a very simple handover: suppose tomorrow you have to switch models, or even switch a whole set of Agents, can I answer the following questions using only the records I have in hand?

1. What did the user originally want to accomplish, and which requirements must not change?
2. What has been finished, and in which file or tool result is the evidence?
3. Which judgments are still just guesses, and which options have been ruled out?
4. What details were removed during compaction, and is it necessary to review the original session again?
5. When the next step is handed over to another model, what will it actually receive?

If you cannot answer them, the problem is not necessarily that the model "is not smart enough". It may also be that the session is incomplete, the summary lost important constraints, or we simply never inspected the context before it was sent.

["What Is an Agent Harness?"](/en/translations/what-is-a-harness) explains how the system prompt, tools, loop, and model conversion layer together support an Agent. In my view, keeping sessions, keeping the prefix stable, compacting, and making context editable are concrete ways to keep these "seatbelts" in your own hands. None of it guarantees that every step is correct, but it gives mistakes a chance to be found, gives rules a place to be changed, and means we do not have to start from a black box when switching paths.

If you want to verify it yourself, start from [Session storage and continuation](/en/guide/sessions), [Context and compaction](/en/guide/context-and-compaction), and [CASE 02 · Before-and-after compaction comparison](/en/cases/compaction-before-after); then read the three translations in the order above. This piece is a connected reading and my own assessment, and does not mean that the original author, Earendil, combined those articles into one and the same argument.
