---
title: Before installation, set up your terminal and environment first
description: Open a terminal, create a safe practice directory, and check Node.js and npm.
prev:
  text: 'Prologue: Meet the author of Pi, Mario Zechner'
  link: /en/guide/mario-zechner
next:
  text: Installing Pi and opening it for the first time
  link: /en/guide/install-pi
---

<span class="library-status">MODULE 01 · Installation and basic setup</span>

# Before installation, set up your terminal and environment first

Installation instructions often consist of just one command line, but beginners are precisely the ones who get stuck earlier than that. Where should the command be typed? Which directory am I in right now? Does the computer have the runtime environment Pi needs?

This lesson handles only those three things. For now, do not install any third-party Extension, Skill, or Package, and do not put real files into the practice area.

::: info The environment for this lesson
The main path is written for macOS. Linux can use the same check commands; if there is no `~/Downloads` directory, replace `~/Downloads/pi-practice` in this lesson and in the following installation and login steps with `~/pi-practice` consistently. Windows users should not change the commands on this page on their own; use the complete [Mandarin-language Windows installation path](/en/guide/windows-setup): that page starts from Git Bash, Node.js, and a practice directory, then guides you through running Pi for the first time.
:::

## Get to know this window first: input and output are not the same thing

A terminal is a window for talking to the computer with a keyboard. What you type on the line with the cursor is a **command**; the text the computer shows after you press Enter is the **output**. When the output finishes, the typable line appears again, with a blinking cursor.

- `Return` (Enter) runs the current line; every item in the code boxes on this page should be typed out in full and then Enter pressed once.
- Text like `/Users/...`, version numbers, and error messages outside the code boxes are “what you are supposed to see”; do not type them again.
- Drag the mouse to select the whole line in the code box, press `Command + C` to copy; click back to the blinking cursor in the terminal, then press `Command + V` to paste. After pasting, glance at it first: the contents must match the code box exactly, then press Enter.
- Copy and paste shortcuts on Linux vary from terminal to terminal; you can use the terminal menu or the right-click menu, and make sure the pasted contents are complete before pressing Enter.
- While a command is running, wait. The appearance of a new typable line means the command has finished; do not press Enter over and over while waiting, and do not paste the next command.

If you copy text incorrectly, press `Control + C` in the terminal first to clear the input that has not been run, then paste again. `Control + C` here only cancels text that has not been entered yet; do not use it carelessly on an installation command that is still running.

## 1. Open the correct input location

On Mac, I most recommend [iTerm2](https://iterm2.com/); if you have not installed it, the system's built-in “Terminal” app can also complete every beginner step in this book. Press `Command + Space`, type “iTerm” or “Terminal”, then press Enter. Once you see a window with a cursor, type the following line and press Enter. Linux readers can open a terminal in their distribution and run the same check command.

```bash
pwd
```

`pwd` means “where am I right now”. For example, you might see:

```text
/Users/your-username
```

This line is output, and does not need to be typed. If the cursor appears again below it, the terminal is ready to accept the next command.

### Quick check

- [ ] I typed only `pwd`, not the example path.
- [ ] I see a path that starts with `/Users/`, and the cursor has returned to the next line.

## 2. Create a dedicated practice directory

Do not run Pi in the root of your downloads directory, in an Obsidian knowledge base, or in a code repository you are working on. Set up an empty practice area for it first.

```bash
mkdir ~/Downloads/pi-practice
cd ~/Downloads/pi-practice
pwd
ls -A
```

These four lines must be run in order: run `mkdir` first and wait for the cursor to return; then run `cd`; then run `pwd` and `ls -A`. The first two lines usually show no text at all when they succeed, and returning straight to a typable line is normal. `pwd` must end with `/Downloads/pi-practice`, and `ls -A` at the end shows an empty directory only if it displays no file names.

If the first command shows `File exists`, do not enter that directory yet. It may still hold old practice content. Use a new name instead, such as `pi-practice-2`, then repeat the three steps above. When a later lesson says `pi-practice`, replace it with the name you actually used.

### Quick check

- [ ] `mkdir` does not show `File exists` or another error.
- [ ] The last part of `pwd` is `Downloads/pi-practice`; if I used a new name, the last part is that new name.
- [ ] `ls -A` lists no file names.
- [ ] This directory is only for practice, and it does not yet contain any of my notes, photos, code, or work files.

## 3. Check Node.js and npm

Installing Pi through npm requires Node.js and npm. Run this in the practice directory:

```bash
node --version
npm --version
```

If both lines return version numbers and Node.js is not lower than `22.19.0`, you can move on to the next lesson. This minimum version requirement was verified on 2026-09-23; after it is published, follow the [official Pi Quickstart](https://pi.dev/docs/latest/quickstart).

For example, the first line might show `v22.19.0` or a higher version, and the second line might show another string of version numbers. The specific numbers may differ; what matters is that both commands produce version numbers, and the cursor returns after each output.

If you see `command not found`, or the Node.js version is too low, install the latest LTS version from the [official Node.js download page](https://nodejs.org/en/download). After finishing the official installation wizard, close all terminal windows, open the terminal again, then return to the practice directory and run these two check commands.

If an error appears that you do not understand, do not keep trying other commands. Drag the mouse from “the command you typed” through the last error line, press `Command + C` to copy, then paste it into a temporary note. Keep the command, the complete output, and the screenshot; if it inadvertently contains an account, a key, or a personal path, cover that part before sending it to anyone else.

::: warning Do not do this yet
Do not casually add `sudo` in front of npm commands just to get past a permission error, and do not run PATH-fixing commands from the internet at random. Keep the complete error message so the problem can be judged accurately later.
:::

### Quick check

- [ ] The version output by `node --version` is not lower than `v22.19.0`.
- [ ] `npm --version` also outputs a version number.
- [ ] If it failed, I have saved the original error message, rather than continuing to try commands I do not understand.

## Verification for this lesson

- I can open a terminal and use `pwd` to see the current position.
- I have created an empty `pi-practice` directory.
- `ls -A` lists no files, which means the practice directory is empty at the start.
- `node --version` is not lower than the requirement on this page, `npm --version` returns a version number, and the cursor reappears after both commands finish.

[Next lesson: installing and running Pi →](/en/guide/install-pi)
