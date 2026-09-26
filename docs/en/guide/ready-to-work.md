---
title: Enter the practice directory and confirm the basic settings
description: Understand the current directory, the model, and Project Trust, then go through the final verification of the installation module.
prev:
  text: Log in to your account so Pi can answer you
  link: /en/guide/connect-model
next:
  text: 'Your first task: learn how to verify it first'
  link: /en/guide/first-task
---

<span class="library-status">MODULE 01 · STEP 04</span>

# Enter the practice directory and confirm the basic settings

Installation and login are done, but now you still need to make sure of where Pi will start working. This step directly affects which project contents it sees, and also determines where the next lesson's practice files go.

::: info Windows users
Keep using Git Bash, and replace `~/Downloads/pi-practice` in this lesson and the next with `~/pi-practice`. If you forget the path equivalent, go back to the [Mandarin-language Windows installation path](/en/guide/windows-setup) to see the equivalence table.
:::

## 1. Run from a directory you know clearly

First type `/quit` in Pi's bottom edit area, then press `Return`. Once you see the ordinary terminal command prompt again, run the lines one by one:

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

The first line enters the practice directory, the second shows the current position, and the third runs Pi. Press `Return` each time you finish typing a line, and wait for that command to finish before typing the next line.

If in Lesson 1 you used `pi-practice-2` or another name, also replace `pi-practice` here with your own practice directory name.

The `pwd` result should end with `/Downloads/pi-practice`. Once Pi is open, look again at the status bar at the bottom and make sure the current working directory has not changed.

If `cd` shows `No such file or directory`, the practice directory was not created earlier or the name does not match. Go back to [Checks before installation](/en/guide/before-install) and recreate the directory with the same name.

If the directory is wrong, do not send a task. Quit Pi, return to the terminal, and `cd` to the correct location again.

## 2. Check only the settings you need right now

Type `/model` and make sure a model is already selected. If you need to change it, choose from the list; if you want it to persist on the next launch, press `Ctrl+S` to save it as the default model.

Type `/settings` to open commonly used settings. At this stage, leaving the defaults is enough. Themes, context compaction, and other options will be covered when you actually face the need for them.

If you accidentally open an unfamiliar settings page, press `Esc` to go back. Do not follow someone else's screenshots and change many options in this lesson; the display can differ between versions and terminals.

## 3. Understand Project Trust correctly

A completely new, empty directory usually does not trigger a Project Trust prompt. A fresh Pi may ask whether you trust it when the directory contains project-level `.pi` configuration, an Extension, a Skill, or other project resources.

Trust only projects you created yourself or have already inspected. For repositories of unclear origin, reject loading their project resources first, then inspect `.pi/` and `.agents/skills/`.

When a trust prompt appears, use this minimal decision card:

- A new, empty practice directory you just created: check the path and its contents first; with no project resources there is usually no prompt.
- A project you downloaded from someone else: reject or exit first, then in an ordinary terminal just list what files are in `.pi/` and `.agents/skills/`, and only then read their contents.
- You do not know where the files came from, or do not understand the Extension or its install script: do not trust it in this lesson, and do not go on to run it.
- You have checked everything one by one and decide to trust it: what you approve is "allowing project resources to load", not gaining security isolation.

::: danger Project Trust is not a sandbox
Rejecting project resources will not confine Pi to the current directory. The built-in read, write, and edit tools and commands still run with the current user's permissions. If you need genuine isolation, use a container, a virtual machine, or a policy-based sandbox.

There is one more easily missed exception: the current official documentation states that context files such as `AGENTS.override.md`, `AGENTS.md`, and `CLAUDE.md` are loaded by default and are not protected by a Project Trust rejection, unless context-file loading is explicitly turned off. When facing a foreign repository, you still need to inspect those files first; you must not inspect only `.pi/`.
:::

## 4. Do the final check

Before moving on to your first file task, confirm one by one:

- [ ] I can open a terminal and see the current position with `pwd`.
- [ ] `node --version`, `npm --version`, and `pi --version` all return version numbers.
- [ ] I only run Pi in the new, empty practice directory created in Lesson 1.
- [ ] The status bar at the bottom shows the correct working directory and model.
- [ ] I have received one model reply with no tool calls.
- [ ] I know how to stop generation with `Esc` and quit Pi with `/quit`.

If you can do all of that, you have met the prerequisites for your first task.

After verification is done, you may stay in Pi's edit area, since the next lesson starts right here; you can also use `/quit` to return to an ordinary terminal. Whichever you choose, before sending a task in the next lesson, make sure again that `pwd` or the status bar still points to the same practice directory.

::: tip If one part has not passed yet
Stop at the current lesson and fix only that part. Save the full error text, the commands you ran, and the `pwd` result. Do not reinstall Node.js, Pi, and the terminal all at once, because it will be hard to tell which step actually worked.
:::

[Next lesson: organizing meeting notes and independent verification →](/en/guide/first-task)

If you need to understand how to update, switch accounts, or uninstall, see [Lifecycle management after installation](/en/guide/lifecycle-management).

### Basis for this module

- [Pi Quickstart](https://pi.dev/docs/latest/quickstart)
- [Pi usage documentation](https://pi.dev/docs/latest/usage)
- [Pi settings documentation](https://pi.dev/docs/latest/settings)
- [Pi security documentation](https://pi.dev/docs/latest/security)
