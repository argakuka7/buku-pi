---
title: Reference Guide
description: Find Pi's core concepts, operational entry points, capability boundaries, and further reading based on the problem at hand.
prev:
  text: Case Studies
  link: /en/cases/
next:
  text: Pi Frequently Asked Questions (FAQ)
  link: /en/reference/faq
---

<span class="library-status">REFERENCE · Check here when you run into a problem</span>

# Reference Guide

This page is not meant to teach from scratch, and it does not require sequential reading. When you encounter a term, a capability, or an operational problem, enter from the matching topic; if this is your first time reading, start with [Introduction: Why read this Buku Pi guide](/en/guide/introduction), then continue along the [Buku Pi main path](/en/guide/).

::: info Read the explanation of this edition first
[Ten assessments that still hold](/en/guide/lasting-principles) distinguishes the current conclusions from the original learning archive; [Guidelines and notes for the 2026 open learning edition](/en/guide/edition-2026) records the platform path, verification cut-off, maintenance rules, and copyright limits.
:::

## Three Ways to Search Quickly

| What you are facing right now | Enter from here | Reading path |
| --- | --- | --- |
| One specific question | [Pi Frequently Asked Questions (FAQ)](/en/reference/faq) | Read the short answer first, then move into the related concept or lesson |
| One problem that has already happened | [Pi troubleshooting guide](/en/reference/troubleshooting) | Build a baseline from the symptoms, change only one condition at a time |
| One term you do not yet understand | [List of popular AI and Agent terms](/en/reference/glossary) | Read the explanation in plain language first, then understand what it means in Pi |

FAQ, the troubleshooting guide, and the list of popular terms reference each other, and keep connecting to the main-path course. FAQ answers “why”, the troubleshooting guide handles “where it is broken right now”, and the term list explains “what this word means”.

## Core Mechanisms

| What you are looking for | Topic entry point | Problem it fits |
| --- | --- | --- |
| What material Pi can see | [Files and working directory](/en/guide/files-and-context) | Working directory, file scope, and context boundaries |
| How to save and resume a task | [Sessions and resuming work](/en/guide/sessions) | Session naming, recovery, and portability |
| Why long tasks get forgotten | [Context and compaction](/en/guide/context-and-compaction) | Context, Compaction, and handover notes |
| What the Cache numbers mean | [Introduction to prompt caching](/en/guide/prompt-caching) | Cache hit, cost, and status assessment |
| How these concepts come together into one run | [How Pi works: from a single prompt to a complete agent loop](/en/guide/how-pi-works) | Context assembly, model invocation, the closed tool loop, and Session write-back |

## Capabilities and Boundaries

| Capability | Topic entry point | One sentence to remember first |
| --- | --- | --- |
| Establishing a method and adding capability | [Skill, Extension, and Pi Package](/en/guide/skills-extensions-packages) | A Skill teaches it how to do something, an Extension gives it a new execution capability |
| Choosing a third-party extension | [Pi plugin recommendations](/en/plugins/) | Confirm the need and the provenance first, try only the single plugin closest to the problem |
| Choosing a different Agent path | [Not only Pi: how to choose OMP and Selesai Code](/en/reference/pi-forks) | Distinguish original Pi from its two independent branches, decide by task whether you need to switch tools |
| Splitting up many tasks | [How Subagents divide up tasks](/en/guide/subagents) | After the division of labor, the evidence and final verification still have to be brought together |
| Running tasks safely | [Permissions, isolation, and verification](/en/guide/safety) | A successful return result is not the same as a finished business result |
| Running for a long time | [Long-running tasks and VPS](/en/guide/vps-and-long-running) | Design the checkpoint, recovery path, and stop conditions first |

## Operational Entry Points

- [Before installing, prepare the terminal and environment](/en/guide/before-install): Make sure of the environment and the practice directory.
- [Installing Pi and opening it for the first time](/en/guide/install-pi): Complete the first launch.
- [Mandarin-language Windows path: install and run Pi](/en/guide/windows-setup): Use Git Bash to prepare the Windows environment, installation, and first launch.
- [Account login and model configuration](/en/guide/connect-model): Connect the Provider and the model.
- [Start from a practice directory](/en/guide/ready-to-work): Separate experiments from real files.
- [Lifecycle management after installation](/en/guide/lifecycle-management): Update Pi, refresh the model catalog, log out, uninstall, and handle local data.

## Summary of Commonly Used Commands

Below, only the entry points actually used in the main path are listed. Do not mix ordinary terminal commands with Pi's internal commands.

| Where to type it | Command | Purpose |
| --- | --- | --- |
| Normal terminal | `pi` | Run the interactive interface in the current directory |
| Normal terminal | `pi --version` | See the currently installed version |
| Normal terminal | `pi update` | Update only Pi itself |
| Normal terminal | `pi update --models` | Refresh only the model catalog |
| Normal terminal | `pi list` | See the Packages registered in the settings |
| Normal terminal | `pi -c` | Continue the last session of the current project |
| Normal terminal | `pi -r` | Open the session picker for the current project |
| Normal terminal | `pi --no-extensions -e ./file.ts` | Ignore automatically discovered Extensions, load only one file explicitly |
| Normal terminal | `pi --no-skills --skill ./SKILL.md` | Ignore automatically discovered Skills, load only one file explicitly |
| Pi edit area | `/login` | Manage model service authentication |
| Pi edit area | `/logout` | Remove the local credentials of the selected Provider |
| Pi edit area | `/model` | Choose the current model |
| Pi edit area | `/name name` | Set the session display name |
| Pi edit area | `/resume` | Browse and switch sessions |
| Pi edit area | `/tree` | Choose a node in the current session tree |
| Pi edit area | `/fork` / `/clone` | Create a new session from an old message or the current branch |
| Pi edit area | `/compact` | Tidy the earlier context into a summary |
| Pi edit area | `/reload` | Reload the resources in automatically discovered locations |
| Pi edit area | `/quit` | Exit Pi back to the normal terminal |

Package management commands are typed in a normal terminal: `pi install <source>` to install, `pi list` to view, `pi config` to enable or disable resources, and `pi remove <source>` to remove. A Package may contain executable Extensions and Skills that direct the Agent to run actions; do not install it if its provenance and full contents are unclear.

Command behavior can change between versions; this table was verified on 2026-09-09. If you find a mismatch, run `pi --help` first, then check [Using Pi](https://pi.dev/docs/latest/usage) and the relevant topic page.

## File and Configuration Locations

| Location | Function | Boundary |
| --- | --- | --- |
| `~/.pi/agent/` | User-level authentication, settings, sessions, and resources | May contain credentials and private sessions, do not upload |
| `.pi/` | Settings, Extensions, Skills, and so on for the current project | Project resources are controlled by Project Trust |
| `.agents/skills/` | Project Skills that can be discovered by multiple Agent tools | Project-level resources, their provenance needs to be checked first |
| `AGENTS.md`, `CLAUDE.md` | Project context explanations | Built-in loading is not protected by the Project Trust refusal, can be turned off with `--no-context-files` |
| `docs/public/` | Public download material for this Buku Pi site | After the build it is copied to the site root path, do not store credentials |

## Order of Troubleshooting

First stop repeated attempts and save the complete error message, then check the input position, working directory, current model, and Session. After that, build a clean baseline without loading extra resources, and restore only one variable at a time. If it involves keys, payment, publication, deletion, or sending something outward, do not expand the action on your own.

[Open the full Pi troubleshooting guide →](/en/reference/troubleshooting)

## Term Boundaries

- **Provider**: The service that actually provides model invocation and billing, not the same as Pi itself.
- **Session**: The stored conversation tree; it does not replace file version management.
- **Context**: The input the model can refer to on this turn; not the same as permanent memory.
- **Skill**: Work instructions and companion resources read as needed; it can influence behavior, and may direct script execution.
- **Extension**: A TypeScript capability that runs inside the Pi process, with the current user's permissions.
- **Package**: A distribution combination of Skills, Extensions, prompt templates, and themes; not a safe container.
- **Project Trust**: The decision whether project resources are loaded, not a runtime sandbox.

## Further Reading

Officially licensed translations are not the main-path course. They are kept as a separate dedicated zone according to the table of contents of this edition; enter from the matching chapter to explain a mechanism further through the original author's full article:

- After finishing lesson 7: [Sessions you cannot take with you](/en/translations/session-portability)
- After finishing lesson 8: [The compaction mechanism in Pi](/en/translations/compaction-in-pi)
- After finishing lesson 9: [Prompt caching inside an Agent](/en/translations/prompt-caching)

[See all officially licensed translations](/en/translations/)

::: tip How to use the reference guide
Use the search or the topic index above first to find the problem; when you need to build a full understanding, go back to the related chapter by following the course links at the top of the page.
:::
