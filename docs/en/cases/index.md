---
title: Case Studies
description: A collection of reproducible Pi task case studies that you can verify independently, complete with practice materials, execution steps, expected results, and checklists.
prev:
  text: Buku Pi main path
  link: /en/guide/
next:
  text: CASE 01 · Meeting-notes action list
  link: /en/cases/meeting-notes
---

<span class="library-status">PRACTICE LAB · From materials to verification</span>

# Case Studies

We do not repeat the concepts from scratch here. Each case study sits under a Buku Pi module, starting from clear materials, then setting out the task, constraints, expected results, and how to recover after a failure, so that readers can reproduce it end to end in their own environment.

## Case Study Structure

Every official case study must contain:

1. Practice materials you can download or prepare yourself;
2. A task description you can hand straight to Pi;
3. The key symptoms you should see during execution;
4. A verification method that does not depend on the Agent's own assurances;
5. How to preserve the field state and recover it after something goes wrong.

## Case Study Roadmap

Eight case studies apply the methods in the curriculum to fixed materials, replicable tasks, key symptoms, independent verification, and failure recovery. The first seven case studies train a single skill each, while the final graduation project strings 14 lessons together into one real workflow. The teaching code is used only for minimal, non-destructive practice; for advanced effects that involve real desktop notifications, a remote server, or third-party plugins, verification still refers to the actual environment.

| Order | Module | Case study | Core evidence |
| --- | --- | --- | --- |
| 01 | Module 2 | [Meeting-notes action list](/en/cases/meeting-notes) | Input fingerprint unchanged, three fields correspond one to one |
| 02 | Module 3 | [Before and after compaction](/en/cases/compaction-before-after) | Same Session; recall from memory and recovery from disk are checked separately |
| 03 | Module 4 | [Turning a method into a Skill](/en/cases/first-skill) | Loaded explicitly, produces a new file, inactive after exit |
| 04 | Module 4 | [Loading a minimal Extension](/en/cases/first-extension) | The command appears, is executed, then disappears after a restart |
| 05 | Module 4 | [Two independent review tracks](/en/cases/independent-review) | Two isolated pieces of evidence merged centrally by the main session |
| 06 | Module 5 | [Recovery from a checkpoint](/en/cases/checkpoint-recovery) | Three materials neither repeated nor skipped, progress consistent with results |
| 07 | Module 5 | [Safety review before a task](/en/cases/safe-review) | What is unknown stays unknown, dangerous actions are not executed |
| 08 | Combined | [Buku Pi graduation project](/en/cases/graduation-project) | Closed loop from requirements, implementation, checkpoint, read-only review, to human verification |

Module 1 does not have a dedicated CASE for now: installation, Windows paths, login, and the practice directory itself are already staged practice. Module 3 only adds one comparison experiment, without adding a new lesson.

If problems with startup, the model, Session, Context, Skill, or Extension come up during practice, preserve the field state first, then build a clean baseline as described in the [Pi troubleshooting guide](/en/reference/troubleshooting). Once the problem is handled, return to the same case study and continue; do not change the task, model, and plugin all at once while an error is occurring.

::: info The boundary between case studies and personal experience
Learning notes can point the way to a case study, but they are not directly used as an operational basis. Anything involving commands, versions, plugins, and permissions needs to be re-verified before publication.
:::

## After Finishing the Basic Case Studies, Try Other Kinds of Tasks

These two migration exercises are optional and do not change the CASE 01–08 lesson numbering.

- [From materials to a verifiable draft](/en/cases/content-workflow): build a facts table, a draft awaiting confirmation, and the unknowns from two conflicting materials; suited to content writers.
- [Repairing a small program](/en/cases/code-repair): first reproduce the two failing tests, fix only the implementation, then verify the four tests and the scope of the change yourself; suited to readers who want to start working with code.
