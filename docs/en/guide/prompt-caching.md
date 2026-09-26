---
title: Introduction to prompt caching
description: Understand why repeated context can be faster and cheaper, and which changes invalidate the cache.
prev:
  text: Context and compaction
  link: /en/guide/context-and-compaction
next:
  text: Skill, Extension, and Pi Package
  link: /en/guide/skills-extensions-packages
---

<span class="library-status">MODULE 03 · STEP 09 · comprehension lesson</span>

# Introduction to prompt caching

::: info What kind of lesson this is
This is a comprehension lesson; you are not asked to type commands, and you are not asked to switch models or compact a session just to change the cache numbers.
:::

This chapter does not ask you to debug the cache. It only helps you understand the token, cache, and cost information at the bottom of Pi, and why “deleting a little context” is not necessarily cheaper right away.

The usage fields returned by each model and provider are not entirely the same. If the interface does not show a particular cache number, that does not mean Pi is broken, and it is not worth switching models just to make that number appear.

## What the cache reuses

Every time the model replies, it has to process a long input. In a sequential conversation, the beginning of a new round's input is often exactly the same as the previous round. Model providers that support prompt caching can reuse that already-processed prefix, reducing repeated computation.

Think of it like a book already opened at a certain page. As long as the earlier pages have not changed, reading can continue; if the book version, chapter order, or earlier content changes, it has to be processed again.

## Which changes easily break the cache

- Switching the model or provider.
- A change to the tool definitions, system prompt, or project context.
- Switching to a different branch from an earlier node in the session tree. The shared prefix before the branch may still be reusable; the actual hit depends on the provider and cache retention.
- Running context compaction, so the original earlier text is replaced by a new summary.
- The cache exceeding the provider's retention period.

Billing, validity periods, and how each model and provider presents things can change; this chapter does not provide a fixed price list. When you need to estimate costs, look at the official information from the provider you are actually using in that period.

## What this means for everyday use

First, do not delete history or force compaction every few rounds just to chase a context that looks smaller. Doing that can remove both detail and the existing cache prefix at the same time.

Second, do not treat the cache hit ratio as task quality. It only reflects how much input was reused, and does not prove the code is correct, the article reads well, or the file was not changed by mistake.

Finally, long tasks still have to come back to verifiable results. The cache helps the model process a repeated prefix more efficiently, while files, tests, Git history, and human checks are what help you confirm the task is actually done.

## Four things that are easily confused

| Name | What problem it solves | What it does not prove |
| --- | --- | --- |
| Prompt cache | Reduces reprocessing of the same input prefix | That the task is correct and the result complete |
| Context compaction | Replaces earlier content with a summary when the window is limited | That early details are preserved without loss |
| Session storage | Lets you find and continue a conversation later | That files on disk can be restored to an older version |
| File versioning and backups | Compare, restore, and review real work results | That the model still remembers all the reasoning from back then |

## Verifying this lesson

Evaluate the following two scenarios:

1. The cache hit is very high, but the output file is missing two items. Is the task done? — Not yet; you have to go back and check the input, output, and verification rules.
2. The cache numbers are very low, but the tests, the file diff, and the human check all pass. Do you need to redo the task to raise the hit ratio? — No.

As long as you no longer judge task quality by the cache numbers, and you know that quality checks must come back to real results, this lesson is passed.

To understand the mechanism more deeply, continue by reading the officially licensed translation [Prompt caching in Agents](/en/translations/prompt-caching).

### Basis for this chapter

- [Pi usage guide](https://pi.dev/docs/latest/usage)
- [Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
