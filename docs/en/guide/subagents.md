---
title: How Subagents divide work
description: 'Understand Subagent collaboration from four sides: role, input, result, and verification.'
prev:
  text: Extension requirements and verification
  link: /en/guide/first-extension
next:
  text: 'How Pi works: from a single Prompt to a complete Agent Loop'
  link: /en/guide/how-pi-works
---

<span class="library-status">MODULE 04 · STEP 12 · trainable</span>

# How Subagents divide work

A single Agent can get a lot done on its own. When a task at the same time needs technical review, text editing, and checking by a real user, splitting the work among several Subagents is where you might save time.

As of 2026-09-09, the official documentation clearly states that Pi's core has no built-in Subagent; what the official code repository provides is an example Extension. The absence of a task-division button in the interface does not mean the installation failed. This lesson first completes the same task-division structure with two separate sessions, does not require installing a community Package, and does not write manual exercises as a built-in capability.

## What kind of task is suitable to divide

Subtasks that are suitable to run in parallel have two traits: clear boundaries and the ability to be handed off independently. For example, one update to this Buku Pi's content can be divided into:

| Role | Input | Result |
| --- | --- | --- |
| Beginner reader | The installation chapter | Finds the sections that leave a reader confused about where to type and what result to look at |
| Technical reviewer | Official documentation and technical chapters | Lists statements that are outdated, inaccurate, or lack boundaries |
| Managing editor | Full chapters and the learning path | Checks repetition, missing steps, and before-and-after disconnections |

The situation that does not suit parallelism is when several Agents modify the same file at the same time with no clear owner. That very easily causes overwrites, conflicts, and inconsistent standards.

## How to write a division of work that can be verified

The description given to a Subagent contains at least:

- Only handle certain files or a certain problem.
- Whether it may modify, or may only check read-only.
- What evidence to return when done.
- Which judgments must be returned to the main Agent and must not expand the scope on their own.

The main Agent's responsibility is not just to send tasks and then be done. It has to merge results, handle conflicts, run an overall check, and be responsible for the final result.

## Do not grow the team too early

If you cannot yet write a verifiable task for one Agent, adding Subagents will usually only make the problem harder to understand. First finish three to five real tasks with one Agent, then divide up the parts that are already stable, independent, and repetitive.

## Companion practice: CASE 05 · Two independent review tracks

This lesson no longer maintains a second set of operational steps. Go to [CASE 05 · Two independent review tracks](/en/cases/independent-review) and practice once all the way through following the fixed material inside: three sessions, the original task text, independent verification, and failure recovery.

This case study deliberately separates two review tracks, and then the main session merges the evidence. What is practiced is the boundary of subtasks and the responsibility to merge, not writing manual sessions as a built-in core Pi Subagent feature.

## Verifying this lesson

- Can explain which tasks are suitable to separate, and which files must have only one final owner.
- Can write down for each track: input, read-only or modify permission, handover evidence, and what is not yet known.
- Has checked the two independent results and the main session's merge notes following CASE 05, or can explain the verification relationship accurately.
- Can explain: this is a manual exercise of the task-division method, and does not mean Pi's core has built-in Subagents.

### Basis for this chapter

- [Design principles in the Pi usage guide](https://pi.dev/docs/latest/usage#design-principles)
- [The index of official Pi Extension examples](https://pi.dev/docs/latest/extensions#examples-reference)

The boundary of the core's capability was verified on 2026-09-09.
