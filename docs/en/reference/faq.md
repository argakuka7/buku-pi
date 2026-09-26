---
title: Pi Frequently Asked Questions (FAQ)
description: Answers the 20 Pi questions beginners ask most often, linking them to explanations of popular terms, the main-path course, and official material.
prev:
  text: Reference Guide
  link: /en/reference/
next:
  text: Pi troubleshooting guide
  link: /en/reference/troubleshooting
---

<span class="library-status">FAQ · Find the problem first, then continue learning</span>

# Pi Frequently Asked Questions (FAQ)

This page prioritizes conclusions over copying the full tutorials again onto the same page. Once you find the question that matches yours, read the short answer first, then follow “Further reading” to jump into the popular terms or the related lesson.

Answers that involve the Pi product, tools, Providers, permissions, and version behavior were verified on **2026-09-11**. If the actual interface does not match this page, treat the [latest official Pi documentation](https://pi.dev/docs/latest) and `pi --help` on your own machine as the reference.

## Quick Search

### Getting to Know Pi

1. [What is Pi, really?](#what-is-pi)
2. [What is the difference between Pi and Pi Coding Agent?](#pi-vs-pi-coding-agent)
3. [What is the difference between Pi and Claude Code or Codex?](#pi-vs-other-agents)
4. [What is an Agent Harness, really?](#what-is-agent-harness)
5. [Why is Pi designed to be this simple?](#why-pi-is-minimal)
6. [Why does Pi keep only a few core tools?](#why-few-tools)

### Models, Cost, and Running Locally

7. [Does Pi include a model?](#does-pi-include-models)
8. [Which models can Pi use?](#which-models)
9. [Are a local Agent and a local model the same thing?](#local-agent-vs-local-model)
10. [Why is Pi said to use fewer tokens?](#why-pi-uses-fewer-tokens)
11. [Why is Pi's cache hit ratio often fairly high?](#why-cache-hit-is-high)

### Sessions and Context

12. [What is the difference between Context and Session?](#context-vs-session)
13. [What happens when the Context Window is full?](#context-window-full)
14. [Does Compaction delete the previous chat history?](#does-compaction-delete-history)
15. [Does Pi have long-term memory?](#does-pi-have-long-term-memory)

### Extensions and Safety

16. [What is the difference between a Skill, an Extension, and a Package?](#skill-extension-package)
17. [How do I choose between a Skill and MCP?](#skill-vs-mcp)
18. [Are more Extensions always better?](#more-extensions-better)
19. [Is it safe to install third-party plugins in Pi?](#are-third-party-packages-safe)
20. [Is Project Trust a sandbox?](#is-project-trust-a-sandbox)

## What is Pi, really? {#what-is-pi}

**Short answer: Pi is a minimalist, extensible terminal Agent Harness, not a large language model.**

Pi's job is to connect the model, tools, Session, Context, and working directory, so that the model can read files, run commands, and keep working on a task. The one actually doing the reasoning is the model you connect through a Provider; Pi is responsible for organizing this whole workflow.

![Pi connects the user's goals with the model, tools, project files, and Session, and is responsible for organizing the entire workflow.](/en/images/diagrams/pi-harness-overview.svg)

*Diagram: the model is responsible for judgment, and Pi turns that judgment into work that can be run, saved, and verified.*

**Further reading:** [Pi](/en/reference/glossary#pi) · [Agent Harness](/en/reference/glossary#agent-harness) · [Introduction: Why read this Buku Pi guide](/en/guide/introduction)

## What is the difference between Pi and Pi Coding Agent? {#pi-vs-pi-coding-agent}

**Short answer: In everyday conversation, “Pi” often refers to the terminal program you open; when the discussion is about the source code structure, Pi is the whole project, Pi Coding Agent is the application we actually install, and Pi Agent Core at the lower layer is the component it relies on.**

The [official repository](https://github.com/earendil-works/pi#all-packages) lists these packages separately: `@earendil-works/pi-agent-core` handles the Agent loop, tool invocation, and state management; `@earendil-works/pi-ai` provides the model interface; `@earendil-works/pi-tui` provides the terminal interface components. `@earendil-works/pi-coding-agent` is built on top of those base components and provides the `pi` command, built-in tools for files and commands, sessions, and the complete entry point for loading Skills, Extensions, and other resources. The [official installation instructions](https://pi.dev/docs/latest/quickstart) install this Coding Agent package for general users. The relationships between the packages above were verified on **14 September 2026**.

Therefore, **Pi Coding Agent is not the same as the standalone `pi-agent-core` package**; nor is it a product that only comes together after “installing the core first, then manually installing several third-party plugins”. Extensions and Skills can be added later as needed. When following the operational steps in this book, “running Pi” means running the installed Pi Coding Agent; the distinction between the core package and the terminal application only becomes necessary when discussing architecture or developing an SDK.

**Further reading:** [Pi Coding Agent](/en/reference/glossary#pi-coding-agent) · [Installing Pi](/en/guide/install-pi) · [Official Pi repository](https://github.com/earendil-works/pi)

## What is the difference between Pi and Claude Code or Codex? {#pi-vs-other-agents}

**Short answer: All three can bring a model to real work, but their built-in capabilities, product boundaries, and ways of being customized differ; they cannot simply be ranked as “which one is stronger”.**

Pi's core orientation is to stay small, leaving workflow choices such as subagents, planning mode, and permission pop-ups to the user to fill in through Extensions, Packages, or an external isolation environment. Claude Code and Codex features will keep being updated; a serious comparison should fix the date, model, task, permissions, and verification criteria, rather than conflating model capability with Harness capability.

**Further reading:** [Coding Agent](/en/reference/glossary#coding-agent) · [Ten assessments that still hold](/en/guide/lasting-principles)

## What is an Agent Harness, really? {#what-is-agent-harness}

**Short answer: It is the layer of software outside the model that is responsible for “organizing the work”.**

A Harness prepares the system prompt and Context, explains the available tools to the model, runs the Tool Call the model chose, sends the result back to the Agent Loop, and saves the Session. The same model, moved to a different Harness, can behave differently because the way it is set up differs.

**Further reading:** [Agent Harness](/en/reference/glossary#agent-harness) · [What is an Agent Harness?](/en/translations/what-is-a-harness)

## Why is Pi designed to be this simple? {#why-pi-is-minimal}

**Short answer: This is a product-orientation choice, not “work that is not finished yet”.**

Pi keeps the core small, letting users choose the model, tools, and workflow according to real needs, while reducing built-in Context and hidden behavior. As a consequence, users have to understand better what they install, which permissions they open, and how the final result is verified.

**Further reading:** [Official Pi design principles](https://pi.dev/docs/latest/usage#design-principles) · [Ten assessments that still hold](/en/guide/lasting-principles)

## Why does Pi keep only a few core tools? {#why-few-tools}

**Short answer: Fewer built-in tools make the basic workflow easier to understand, and reduce the tool descriptions the model has to choose from and process on every turn.**

Pi currently includes tools such as `read`, `bash`, `edit`, `write`, `grep`, `find`, and `ls`; the most commonly summarized are the four core abilities of reading, writing, editing, and running commands; on Windows, a PowerShell entry point also appears. Do not read “simple by default” as “there will only ever be four built-in tools”; new capabilities that are needed can be added through Extensions.

**Further reading:** [Tool / Tool Call](/en/reference/glossary#tool-tool-call) · [Pi usage instructions](https://pi.dev/docs/latest/usage#tool-options)

## Does Pi include a model? {#does-pi-include-models}

**Short answer: No. Installing Pi does not mean you have already obtained a model or a call quota.**

Pi is responsible for organizing the Agent workflow, while the actual reasoning is done by the model provided by a Provider. Before you start using it, you still need to set up a working connection through a supported subscription login, an API Key, local model routing, or a custom Provider.

**Further reading:** [Account login and model configuration](/en/guide/connect-model) · [Pi Providers](https://pi.dev/docs/latest/providers)

## Which models can Pi use? {#which-models}

**Short answer: Use the models supported by Pi's current built-in catalog or the Providers you configure; keeping a complete table of model types in the FAQ is not recommended because it expires quickly.**

Run `/model` to see the choices actually available in the current environment; you can also extend them through custom model setups and officially supported Providers. When choosing a model, consider the task type, stability, cost, speed, and Context Window together, not just the leaderboard.

**Further reading:** [Account login and model configuration](/en/guide/connect-model) · [Pi Providers](https://pi.dev/docs/latest/providers)

## Are a local Agent and a local model the same thing? {#local-agent-vs-local-model}

**Short answer: No, they describe two different locations.**

A local Agent means the Pi process runs on your computer or server; a local model means the reasoning is also done on hardware you control. You can run Pi locally and connect it to a cloud model, or make a local Pi connect to a local model through llama.cpp and the like; the location of the files and the location of the reasoning should be assessed separately.

![A locally running Pi can connect to cloud Providers and models, or through a local interface connect to a model running on your own hardware.](/en/images/diagrams/local-agent-model.svg)

*Diagram: First ask where the Agent runs, then where the model does its reasoning.*

**Further reading:** [Agent Harness](/en/reference/glossary#agent-harness) · [Pi llama.cpp guide](https://pi.dev/docs/latest/llama-cpp)

## Why is Pi said to use fewer tokens? {#why-pi-uses-fewer-tokens}

**Short answer: Not because Pi has a technology that automatically removes tokens, but because the built-in System Prompt, basic workflow, and on-demand extensions are designed to be fairly economical.**

Skills use progressive loading, and a stable prefix can also take advantage of the Prompt Cache when the Provider supports it. However, reading large files, piling up tool results, or enabling many extensions at once will still consume Context; the real cost should refer to the current billing records of your model service provider.

**Further reading:** [Token](/en/reference/glossary#token) · [Skill](/en/reference/glossary#skill) · [Introduction to prompt caching](/en/guide/prompt-caching)

## Why is Pi's cache hit ratio often fairly high? {#why-cache-hit-is-high}

**Short answer: A stable prefix in a continuous session has a chance of being reused by the Provider, but not every model returns the same cache data.**

Pi's shorter base prompt, relatively stable tool descriptions, and append-only Sessions help maintain the same prefix; switching models, adjusting tools, changing old branches, or running Compaction can all change the cache. A high hit ratio does not mean the answer is correct; the work result still has to be verified independently.

**Further reading:** [Prompt Cache](/en/reference/glossary#prompt-cache) · [Cache Hit](/en/reference/glossary#cache-hit) · [Prompt caching inside an Agent](/en/translations/prompt-caching)

## What is the difference between Context and Session? {#context-vs-session}

**Short answer: A Session is the complete stored session structure, while Context is the input actually sent to the model on the current turn.**

A Pi Session can contain several branches, tool results, and compaction records; the current model only sees the content built from the selected path plus other material added on this turn. Because of that, “the history is still there” does not mean “the model can still see all the details right now”.

![The Session stores the complete history; Pi assembles the current Context from the selected path, project files, and compaction summary, then sends it to the model.](/en/images/diagrams/context-session-compaction.svg)

*Diagram: the Session is responsible for storing, and the Context determines what the model can actually see on this turn.*

**Further reading:** [Context](/en/reference/glossary#context) · [Session](/en/reference/glossary#session) · [Sessions and resuming work](/en/guide/sessions)

## What happens when the Context Window is full? {#context-window-full}

**Short answer: The model cannot keep receiving new content without limit; Pi usually needs to compact the earlier history or restructure the task.**

Pi decides when automatic Compaction runs based on the model window and the reserved reply space, and users can also run `/compact` manually. If a task has already been mixed with a lot of irrelevant content, starting a new Session may be clearer than compacting repeatedly; whichever way you go, write the important state to a file first.

**Further reading:** [Context Window](/en/reference/glossary#context-window) · [Compaction](/en/reference/glossary#compaction) · [Context and compaction](/en/guide/context-and-compaction)

## Does Compaction delete the previous chat history? {#does-compaction-delete-history}

**Short answer: In Pi's current implementation, Compaction mainly changes the representation of the old history that is sent to the model next; it is not the same as simply deleting the whole Session file.**

Pi writes down the compaction summary and the retained boundary; the original session is still used to record the history structure. However, what the model sees next is the summary plus the most recent original text; early details may not make it into the summary. Compaction also does not restore or undo files on disk, so important decisions still have to be saved separately to disk and checked again.

**Further reading:** [Compaction](/en/reference/glossary#compaction) · [The compaction mechanism in Pi](/en/translations/compaction-in-pi) · [Pi Compaction](https://pi.dev/docs/latest/compaction)

## Does Pi have long-term memory? {#does-pi-have-long-term-memory}

**Short answer: Pi natively has Sessions that can be restored, but do not confuse that with a long-term Memory system that automatically tidies up experience between tasks.**

A Session lets you resume the same work history, and the Context determines what the model can see on this turn; to retain preferences and experience across Sessions and across projects, you usually need files, Skills, self-made Extensions, or third-party Packages. Important knowledge should be stored as project files that can be read, reviewed, and version-controlled.

**Further reading:** [Session](/en/reference/glossary#session) · [Context](/en/reference/glossary#context) · [Sessions you cannot take with you](/en/translations/session-portability)

## What is the difference between a Skill, an Extension, and a Package? {#skill-extension-package}

**Short answer: A Skill teaches it how to do something, an Extension adds or changes its execution capability, and a Package packages and distributes those resources.**

First carry out the same need manually until it works, then tidy the repeated process into a Skill; develop or install an Extension only when there really is a missing execution capability; consider a Package when you want to use it across projects or share it with others. The three do not have a low-to-high hierarchy.

![When you lack a method, choose a Skill; when you lack execution capability, consider an Extension; when you need distribution, only then use a Package.](/en/images/diagrams/skill-extension-package.svg)

*Diagram: First confirm the real need, then decide whether code capability and distribution are necessary.*

**Further reading:** [Skill](/en/reference/glossary#skill) · [Extension](/en/reference/glossary#extension) · [Package](/en/reference/glossary#package)

## How do I choose between a Skill and MCP? {#skill-vs-mcp}

**Short answer: First determine whether what you lack is “a method for doing something”, or an external tool interface that needs to be called reliably.**

Fixed processes, inspection standards, and reference material should be written as Skills; for work that existing CLIs can already complete clearly, first let Pi read the help and call that CLI. Pi Core does not include MCP by default at present; only when you really need to expose external capabilities in a structured way and are willing to bear the cost of tool descriptions, authentication, and maintenance should you connect MCP through an Extension or Package.

**Further reading:** [Skill](/en/reference/glossary#skill) · [Tool / Tool Call](/en/reference/glossary#tool-tool-call) · [Skills, Extensions, and Packages](/en/guide/skills-extensions-packages)

## Are more Extensions always better? {#more-extensions-better}

**Short answer: No. A growing number at the same time also adds the cost of provenance, permissions, compatibility, and troubleshooting.**

Extensions can register tools, change prompts, or intercept events at runtime; when several extensions are enabled together, it is hard to determine which one actually caused a result. Keep the configuration as minimal as possible first, and once a real need appears, add them one at a time, and separately note the symptoms before enabling, after enabling, and after disabling it again.

**Further reading:** [Extension](/en/reference/glossary#extension) · [Plugin recommendations and how to choose them](/en/plugins/) · [Your first Extension](/en/guide/first-extension)

## Is it safe to install third-party plugins in Pi? {#are-third-party-packages-safe}

**Short answer: It cannot be assumed safe just like that; “it can be installed” only means the format is compatible, not that its provenance, code, and permissions have passed inspection.**

Extensions run with the current user's permissions and can execute arbitrary code; a Skill can also direct the Agent to run scripts or cause side effects. Before installing, check the author, the repository, the resources actually included, the dependencies, and the permissions; when handling important files, use the most minimal permissions, a backup, or an isolated environment, and after installation run a small verification that can be reversed.

**Further reading:** [Package](/en/reference/glossary#package) · [Permissions, isolation, and verification](/en/guide/safety) · [Explanation of Pi Packages security](https://pi.dev/docs/latest/packages)

## Is Project Trust a sandbox? {#is-project-trust-a-sandbox}

**Short answer: No. Project Trust only controls whether project-level settings, resources, Packages, and Extensions are loaded.**

Once you start working inside a directory, Pi's built-in tools and the Extensions already loaded still run with the current user's permissions; context files such as `AGENTS.md` and `CLAUDE.md` also have their own loading rules. To truly isolate an untrusted project, you need a container, a virtual machine, a limited account, or other operating-system-level boundaries; you cannot rely only on “refusing trust”.

![Project Trust only determines whether project resources are loaded; Pi's file, command, and network capabilities are still limited by the account, container, or virtual machine.](/en/images/diagrams/project-trust-boundary.svg)

*Diagram: Trust governs “whether it is loaded”, and the isolation environment governs “what it can do”.*

**Further reading:** [Pi Security](https://pi.dev/docs/latest/security) · [Permissions, isolation, and verification](/en/guide/safety)

## Still Cannot Find the Answer?

Use the site search first with a keyword in Indonesian or English, for example “context”, “compaction”, or “subagent”. If the question needs complete operational steps, go back to the [Buku Pi main path](/en/guide/); if the question comes from real usage and is not yet covered on this page, describe the version you use, where the action happens, the expected result, and the actual symptom in the project repository's issue tracker.
