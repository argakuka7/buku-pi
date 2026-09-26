---
title: Ten lasting judgments from 98 tweets
description: Distilling the ten judgments that still hold as of the 2026 open learning edition from the Pi learning notes.
prev:
  text: 'Introduction: Why read this Buku Pi guide'
  link: /en/guide/introduction
next:
  text: Guidelines and notes for the 2026 open learning edition
  link: /en/guide/edition-2026
---

<span class="library-status">DISTILLED NOTES · 98 notes → 10 judgments</span>

# Ten lasting judgments from 98 tweets

98 tweets record an ongoing learning process. Among them are judgments that were later kept, guesses corrected by later practice, prices that applied at the time, and short-term product statuses.

This page does not rewrite the tweets, and does not package direct personal experience into official conclusions. It only contains ten judgments that appeared repeatedly across various practices, are consistent with this book's current lessons, and as of this edition's verification can still serve as learning principles. If you want to see how they took shape, you can go back to the [tweet learning index](/en/tweets/) to read the original texts.

## 1. The biggest barrier for beginners is often the cost of use, not the concepts

Understanding Agent, Session, or Context takes time, but what really stops many people from continuing to practice is often not having a way to access a model, or being unable to estimate how much quota a task will consume. Before starting, make sure of your subscription login, API Key, balance, and limits — that is more practical than immediately comparing model rankings.

**In the lessons:** [Lesson 3](/en/guide/connect-model) first completes one working type of authentication and one call without files; official tasks start from small materials.

## 2. Pi's value is not in having the most features, but in a foundation that is small enough

Pi connects the model, tools, Session, and context; the core stays controllable, and other abilities are extended as needed. This is not “unfinished”, but a design that returns the right to decide the workflow to its users.

**In the lessons:** learn the built-in abilities first, then [tell Skill, Extension, and Package apart](/en/guide/skills-extensions-packages); do not judge a Harness by the number of features.

## 3. Installing every package first will remove cause-and-effect judgment

After adding several plugins at once, it is often hard to explain whether a capability came from the core, the model, or one of the extensions; when something goes wrong, the conflict is also hard to trace. Beginners need an environment they can explain more than one that looks versatile.

**In the lessons:** keep the configuration minimal, try one plugin at a time after a real need appears; leave observable results from before and after enabling it.

## 4. Skills should grow out of repeated work

Saving someone else's Skill is not the same as building your own workflow. A more reliable way is to finish several real tasks first, find the review, organization, or publishing steps that repeat, and only then write the stabilized method into a Skill.

**In the lessons:** the first Skill distills rules from an existing list of actions, rather than exploring the marketplace first to chase a number.

## 5. One matter, one Session

Logging in, writing an article, changing code, and casual question-and-answer all crowded into one Session leave the model facing an unrelated history. Once the direction is a mess, continuing to explain or waiting for compaction usually only preserves that mess.

**In the lessons:** [create a separate, searchable Session for each task](/en/guide/sessions); when it goes off track, return to the branching point, or open a new session right away.

## 6. A Session can be saved, but that does not mean the model always remembers everything in it {#session-and-context}

A Session stores a history structure that can keep being processed; the Context the model sees on each round is only a part built from it. The full history still exists in the file, but that does not guarantee that every old detail is always in the current context window.

**In the lessons:** write the goals, constraints, decisions, and next steps that truly must not be lost into a checkpoint file; do not hang long-term tasks on conversation memory alone.

## 7. Compaction and prompt caching should be understood separately {#compaction-and-cache}

Compaction aims to replace part of the old history with a summary when the context approaches its limit; prompt caching is a service-provider mechanism to reuse a stable prefix while billing for it. A single compaction can change the prefix and lower the cache hit at that moment, but the two are not the same feature, and the cache numbers cannot be used to judge task quality.

**In the lessons:** module three discusses [compaction](/en/guide/context-and-compaction) and [prompt caching](/en/guide/prompt-caching) separately; verification still comes back to files, constraints, and final results.

## 8. A Subagent is first of all a method of dividing work, not a built-in button

Pi by default does not enshrine subagents in the core. What really matters is whether you can break search, organization, execution, and re-checking into tasks with clear boundaries, and explain how each result is returned. Without that ability, adding more Agents will only increase cost and communication losses.

**In the lessons:** [practice dividing work and handing it over with two separate sessions](/en/guide/subagents) first, then decide whether to install a multi-Agent extension.

## 9. The prompt defines scope, the operating system defines permissions

“Only change this directory” can help the model understand the task boundary, but it is not technical isolation. Pi's tools and Extensions run with the permissions the current process has; when facing untrusted code and materials, real isolation measures such as containers, virtual machines, or dedicated accounts are needed.

**In the lessons:** [Project Trust is not treated as a sandbox](/en/guide/safety); sensitive credentials do not go into prompts, screenshots, or repositories, and dangerous operations are constrained by the external environment.

## 10. A statement of completion cannot replace independent verification

An Agent saying “done” only means it has made a judgment. Whether the file exists, whether its content is complete, whether the command succeeded, and whether the online version was updated must be checked with evidence that does not depend on that statement.

**In the lessons:** every lesson sets a visible completion marker; important changes must read the work results, run checks, and match the final state.

## The boundary between the archive and the bluebook

Tweets keep their publication dates, original wording, and changes in understanding; they are not rewritten just because this page exists. Content about specific models, prices, free periods, plugin status, and short-term recommendations will also not be elevated into long-term conclusions.

The ten judgments on this page will be reviewed as official editions come out; the website may add evidence or correct statements, but will not swell into a ranking by following every change in the ecosystem.

## Further reading

- [Guidelines and notes for the 2026 open learning edition](/en/guide/edition-2026)
- [The original archive of 98 tweets](/en/tweets/)
- [The Buku Pi main flow](/en/guide/)
