---
title: 'Introduction: Why read this Buku Pi guide'
description: Understand first what Pi is, who it suits, and why this Buku Pi starts from one small thing you can verify.
prev:
  text: Buku Pi main path
  link: /en/guide/
next:
  text: Ten lasting judgments from 98 tweets
  link: /en/guide/lasting-principles
---

<span class="library-status">INTRODUCTION · Start here</span>

# Why read this Buku Pi guide

You may have used ChatGPT, Claude, or another chat product before: open a window, ask a question, wait for an answer. The first time you open Pi, it also looks like a terminal window where you type text, but that is not the best way to understand it.

Pi is officially defined as a minimalist, extensible **[Agent Harness](https://pi.dev/)**. The model understands and generates, while the Harness connects the model, tools, Sessions, context, and your working directory. It can read files, change their contents, run commands, and adapt to the way you work through Skills and Extensions. So Pi is not “just another chat window”, but an Agent foundation you can master and change.

## Where it stands next to Claude Code and Codex

Claude Code, Codex, and Pi can all bring a model to real work, but their product design choices differ. Learning Pi is not about proving that it is “the stronger programmer character”, and not about replacing every other tool.

Pi's trait is that its core stays small, leaving more workflow decisions to the user. By default, the official version provides working basic capabilities, but [does not lock in Subagents, Plan Mode, permission pop-ups, and so on as the only answer](https://pi.dev/#what-we-didnt-build). You can keep using the default way, or add one capability with an Extension, Skill, template, or Package after you actually hit the need.

This freedom has two sides: it is easier to make the tool your own, but you also have to be clearer about what you install, which permissions you open, and how the final result is verified.

## Where Mandarin-speaking beginners actually get stuck

Most people do not get stuck on the abstract concept of an Agent, but on a few very concrete problems.

1. **Accounts and model access.** Installing Pi does not mean you already have a model. You still need to use a [supported subscription login or API Key](https://pi.dev/docs/latest/providers).
2. **Cost and quota.** Subscriptions and APIs are different access methods; API calls may be billed by usage, and even a subscription can have quota limits. First make sure what you can use, then start long tasks.
3. **Paths and the terminal on Windows.** macOS commands cannot simply be copied into PowerShell. This site provides a Git Bash path specifically for Windows, and gives the equivalents in the following lessons.
4. **Uncertainty caused by plugins.** Installing many plugins from the start makes it impossible to tell whether a capability comes from Pi, the model, or a third-party extension, and it becomes hard to trace the cause when something fails.

That is why this book will not immediately hand you a complete list of every feature. The first stage only asks you to set up a directory of your own, finish logging in, and have Pi complete one small thing you can check yourself.

## Five principles this edition holds

- **Do one small thing first.** Learning to give a task, check the result, and verify independently matters more than memorizing every concept.
- **Add one variable at a time.** Use the default capabilities first; when you hit a clear need, try one Skill or Extension, and check whether it really works.
- **An Agent's summary is not verification.** Whether a file opens, the data is complete, and the tests pass must be confirmed by external evidence.
- **A written boundary is not a sandbox.** “Do not access anything outside the directory” is a statement of task scope, and it does not revoke process permissions in the operating system.
- **Dynamic facts must come with a date.** Models, login methods, commands, and ecosystems all change; when you see dynamic content, hold to the verification date on the page and the official documentation.

## How to read this book

If you want to practice right away, go to [Start from Zero](/en/guide/start-here), complete installation, authentication, and your first task for your platform, then come back to understand the principles. If you want to read systematically, continue in the order of the Introduction, the ten judgments, the guidelines, the Prologue, and the five modules. The author's story and the ten judgments are not installation prerequisites.

Readers who can already use Pi steadily can pick the related module from the [Buku Pi main path](/en/guide/); when you meet a concrete concept, check the [Reference Guide](/en/reference/); if you want to know how the judgments took shape, look back at [Learning notes](/en/journey/). The officially licensed translations provide the original authors' full discussions, but they do not replace the Mandarin-language operational path in the lessons.

The next page gathers the judgments that appeared repeatedly in 98 tweets and still hold as of this edition's completion. The original tweets preserve the explorations and changes of their time, while the Buku Pi carries only the conclusions as they stand now.

## Further reading

- [Ten judgments that still hold](/en/guide/lasting-principles)
- [Guidelines and notes for the 2026 open learning edition](/en/guide/edition-2026)
- [Official Pi website](https://pi.dev/)
