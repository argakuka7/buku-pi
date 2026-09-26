---
title: Finish your first Pi task in 30 minutes
description: Choose the shortest path for your operating system, then complete installation, connection, your first file task, and independent verification in a practice directory.
prev: { text: Home, link: /en/ }
next: { text: Pre-installation checks, link: /en/guide/before-install }
---

# Finish your first Pi task in 30 minutes

When you first use Pi, do not treat “the interface is open” or “the model has replied” as the finish line. Your goal is to have Pi help tidy up one fictional meeting note, get an action list you can check yourself, and make sure the input has not changed.

This path takes about 30 minutes if the network and installation environment are normal; download speed, browser authorization, and account status can make it longer. Time is not a verification standard; all the evidence on the right side must pass for the task to count as done. This page only shows the way, while the detailed operations still follow the related lessons.

## See the complete cycle first

| Stage | Estimated time | Destination page | Passing evidence |
| --- | ---: | --- | --- |
| 1. Prepare the environment | 5 minutes | macOS/Linux: [Pre-installation checks](/en/guide/before-install); Windows: [Mandarin-language installation path](/en/guide/windows-setup) | Terminal, practice directory, Node.js, and npm checks pass |
| 2. Install Pi | 5–10 minutes | [Installing and running Pi](/en/guide/install-pi) | `pi --version` produces output; it can be started and exited |
| 3. Connect the model | 5 minutes | [Login and model setup](/en/guide/connect-model) | The model replies with exactly “Pi is connected”, without using a tool |
| 4. Confirm the working location | 2 minutes | [Starting from a practice directory](/en/guide/ready-to-work) | You can clearly explain the directory, model, and trust decision in the status bar |
| 5. Finish the first task | 10 minutes | [Your first task](/en/guide/first-task) | The input fingerprint is unchanged, the output exists, and the three action items match one by one |

::: tip For this round, stay plugin-free
The first task does not require an Extension, Skill, Package, Subagent, Plan Mode, or browser automation. First make sure installation, the model, files, and the verification cycle of original Pi all work normally; only when you hit one specific recurring need should you go to [Plugin recommendations](/en/plugins/) and choose one solution.
:::

## Before you start using an Agent, prepare these four things

1. **One computer that can work steadily.** I prefer doing command-line tasks on Mac or Linux; if what you have on hand is Windows, that works too—Pi has an [official Windows path](https://pi.dev/docs/latest/windows), and this book provides [complete Mandarin-language steps](/en/guide/windows-setup). Get Node.js, a terminal, and Pi running on the device you already have; there is no need to switch computers just to start.
2. **One terminal you are comfortable using.** On Mac I most recommend [iTerm2](https://iterm2.com/); that app only supports macOS, but the system's built-in terminal can also run Pi. On Linux, you can start with your distribution's built-in terminal. Beginners on Windows should install and open **Git Bash** first; if you like the window interface of [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/install), make sure that what is actually running is Git Bash—do not treat the PowerShell that opens by default as the same command environment. [Pi's terminal compatibility notes](https://pi.dev/docs/latest/terminal-setup)
3. **One Agent that is simple and extensible.** I recommend starting with [Pi Coding Agent](https://pi.dev/docs/latest/quickstart). What you actually install here is a complete terminal application with the `pi` command, while `pi-agent-core` at the lower layer is a component it uses; [the two are not the same layer](/en/reference/faq#pi-vs-pi-coding-agent). Pi connects the model, organizes tools, and stores sessions; installing it does not by itself include model quota. macOS/Linux can choose the official installer or npm, while Windows beginners continue along this book's Git Bash path.
4. **One workable way to access a model.** If you want to pay according to actual usage, start with the [official DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing); if you want to use OpenAI's Codex models while also using ChatGPT, you can start from [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) at $20 per month. First look at [the four options and their access limits](/en/guide/connect-model#choose-your-model-access-method-first-official-api-and-subscription). Whether Plus is enough for long-term use depends on your task volume and the quota at the time; if usage is not enough, first check the current account limits and any extra quota or higher tier available, then decide whether to upgrade. Plus does not cover separately billed OpenAI API usage.

Once these four things are ready, complete one real reply without a file first, and only then move on to the file task. **Installing Pi, logging in to a Provider, choosing a model, and finishing a task are four different verification points**; success at the previous step cannot be evidence for the next one.

The platform, terminal, and model-access information above was last verified on **23 September 2026**; when you actually buy and install, check the official pages linked in the text again.

## Beyond Pi, there are two fork paths

This book uses original Pi to teach the basics, because that makes it easier to see how the model, tools, and files genuinely work together. If you can already finish basic tasks and want more ready-made capability, read the [Comparison of OMP and Selesai Code](/en/reference/pi-forks): OMP puts more emphasis on code navigation, debugging, and the tool interface; Selesai puts more emphasis on a complete Subagent, research, and session handover. Both are independent Agents, not Pi plugins, and installing them does not automatically give you model quota.

## Find where you are now

| Your current situation | Where to start | Completion marker |
| --- | --- | --- |
| Pi not installed on Mac or Linux | [Pre-installation checks](/en/guide/before-install) → [Installing Pi](/en/guide/install-pi) | Node.js, npm, and Pi can return version numbers; it can be started and exited |
| Pi not installed on Windows | [Windows path options and Git Bash practice](/en/guide/windows-setup) | Pick one Windows environment; create a practice directory and run Pi on the Git Bash beginner path |
| Installed, but it cannot reply yet | [Login and model setup](/en/guide/connect-model) | Confirm the access method and cost, then receive one real reply |
| It can already receive replies | [Starting from a practice directory](/en/guide/ready-to-work) → [Your first task](/en/guide/first-task) | Produce an action list; three action items are complete; the input file is unchanged |

Linux users can follow the common macOS/Linux commands, using `sha256sum` for file fingerprints. This book does not provide a screen-by-screen Linux desktop interface tutorial.

## What should remain from the first success

- Real output from `pi --version`, plus one exact “Pi is connected” reply.
- `input/notulen-rapat.md`: the fixed material you check yourself.
- `output/daftar-tindakan.md`: contains action items, owners, deadlines, and risk warnings.
- The input fingerprint verification passes, and the output contains exactly three action items.

If a command is not found, the model does not reply for real, a file is missing, a column is skipped, or the input changes, none of it counts as done. Go back to the related stage and fix only that one thing; do not reinstall Pi, switch Provider, install plugins, and change terminal settings all at once.

## After finishing, how to choose your next step

If you want to understand what just happened, continue with [Files and working directory](/en/guide/files-and-context) and [Session storage](/en/guide/sessions), then follow the [complete main path](/en/guide/). If you would rather build a full conceptual picture first, you can go back to the [Introduction](/en/guide/introduction) and [How Pi works](/en/guide/how-pi-works).

After finishing the basic lessons, use the [content-organization transfer exercise](/en/cases/content-workflow) to handle materials that contradict each other, or [small code repairs](/en/cases/code-repair) to practice “reproduce the failure first, then verify the fix”. After finishing lesson 14, move on to the [graduation project](/en/cases/graduation-project) and thread the earlier methods into one complete workflow.

## When you are stuck, narrow the problem first

If it will not run, check [startup failures](/en/reference/troubleshooting#cannot-start); if no model appears, check [models and authentication](/en/reference/troubleshooting#model-missing); if the results cannot be found, check [file and directory errors](/en/reference/troubleshooting#wrong-files). When asking for help, include the book section, operating system, Pi version, where you ran it, and the error text after any credentials have been removed.
