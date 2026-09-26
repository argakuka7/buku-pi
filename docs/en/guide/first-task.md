---
title: 'Your first task: learn how to verify it first'
description: Complete your first file tidy-up with a fictional meeting note, then check the input and output independently.
prev:
  text: Enter the practice directory and confirm the basic settings
  link: /en/guide/ready-to-work
next:
  text: Files and working directory
  link: /en/guide/files-and-context
---

<span class="library-status">MODULE 02 · STEP 05</span>

# Your first task: learn how to verify it first

The meeting is over, and you are left holding scattered notes. Before you start pushing things forward tomorrow, you need to sort out the topics, owners, deadlines, and risk reminders clearly.

This is a perfect first Pi exercise. The material is short, the result is visible, and even a mistake causes no real harm. We will ask Pi to turn a fictional meeting note into an action list, then leave behind Pi's summary and check the source file and the final result ourselves.

::: warning Before you start
This chapter continues from "Installation and basic setup". You should already be able to run Pi in the `pi-practice` directory and receive model replies. If you have not finished that, go back to the [previous lesson](/en/guide/ready-to-work) first. Screenshots are only used to recognize the operations; the model, status bar, and update notices you see may differ, and that does not affect this exercise.
:::

## 1. Prepare material that is easy to check

First create a separate practice directory. The commands below apply to macOS and Linux. Windows users keep using Git Bash, and replace `~/Downloads/pi-practice` in all three lines with `~/pi-practice`.

```bash
mkdir ~/Downloads/pi-practice/input
mkdir ~/Downloads/pi-practice/output
cd ~/Downloads/pi-practice
```

If your practice directory uses another name, replace every `pi-practice` in those three lines with one same real name.

If either `mkdir` shows `File exists`, do not continue yet. That means an old exercise may still be there, and its output will interfere with this run's verification. Go back to Module 1 and create another empty directory, then use the same new name in this page's commands.

Run the following command in the current practice directory to save the practice material directly into `input`.

```bash
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
ls input
sed -n '1,12p' input/notulen-rapat.md
```

The backslash means the command is not finished yet; copy the whole code block and run it. `-f` makes a server error fail explicitly; `ls input` must show `notulen-rat.md`, and the first 12 printed lines must begin with "Project kickoff meeting notes" and contain three topics.

If the download fails, you can also open the <a href="/en/examples/first-task/meeting-notes.md" download="notulen-rat.md">practice meeting note</a> and save it with an ordinary text editor to `pi-practice/input/notulen-rapat.md`. The file name and location must be the same; after saving, run `ls input` again and the `sed` content check above.

```markdown
# Project kickoff meeting notes

Date: 2026-08-26

- The site explanation page is prepared by Rani, deadline 2026-08-28. The installation command must first be checked to see whether it is still valid.
- The tutorial screenshots are made by Bayu, deadline 2026-08-30. Accounts, personal paths, and credentials must be hidden.
- The pre-release check is Sari's responsibility, deadline 2026-09-01. Commands in the text and in the screenshots must correspond one to one.

Additional note: this time we only create practice files; do not modify other directories, do not send or upload anything.
```

Count it yourself with your own eyes. There are 3 topics, 3 owners, 3 dates, and 3 risk reminders. That is the fixed reference for verification later.

Then leave one input-file "fingerprint" before execution. On macOS use:

```bash
shasum -a 256 input/notulen-rapat.md > input-before.sha256
```

Common Linux distributions use:

```bash
sha256sum input/notulen-rapat.md > input-before.sha256
```

Git Bash on Windows also uses the `sha256sum` command above.

Finally, run `pwd` and make sure the current position ends with your practice directory name; then run `ls output`. This command means the output directory is empty only if it shows no file names at all. Old files would also pass a "file exists" check, so the first exercise must start from an empty directory.

## 2. Write the task as checkable requirements

Run `pwd` in an ordinary terminal, make sure the current position is still the practice directory, then type `pi`. Once Pi's bottom edit area appears, copy and send the following task.

```text
Read input/notulen-rapat.md, then organize it into output/daftar-tindakan.md.

Write each item on its own line, and you must preserve the item, the owner, the deadline, and the risk reminder;
do not modify the original file inside input, and do not access anything outside the current practice directory.
When you are done, list the files you added and changed, then explain how I should verify it.
```

This task states four things: **what to read, what to produce, which parts must not change, and what to report when done**. It does not chase complicated prompt techniques; it just turns the result into facts that can be checked one by one.

::: danger Task scope and security isolation are two different things
"Do not access content outside the practice directory" only sets the scope of this task. Pi's tools and Extensions run with the current user's permissions. When handling untrusted material, use an isolated environment such as a container or a virtual machine; this part is covered in the security chapter later.
:::

## 3. See clearly what is read and where Pi writes

After sending, first look at the read-write log the interface shows; do not just wait for the final "done" sentence.

1. The object read must be `input/notulen-rapat.md`.
2. The object written must be `output/daftar-tindakan.md`.
3. If another directory appears, or Pi is about to write into `input`, press `Esc` to stop the current task.

![Illustration: Si Hitam drops a rolled-up paper into a letter slot on a box lined with cursor marks, labelled kirim tugas and Pi.](/en/images/first-task-submit.webp)

This is a demonstration using fictional meeting material. The package update and the model name are not prerequisites for this exercise. The example path is an old demo directory; your working path must be `.../pi-practice`, and it does not need to match the demo text.

Pressing `Esc` can only stop an action that has not finished; it cannot undo a write that has already happened. After stopping it, you still have to check the input file; if its contents have changed, preserve the current directory as the scene of the incident, create a new empty practice directory, re-download the original material, and create a new fingerprint before starting again. Do not overwrite the scene of the incident to create the illusion of "already recovered".

## 4. Do not let the Agent grade itself

Pi's summary can offer hints, but it cannot serve as proof of completion. Quit Pi or open another terminal window, then return to the same practice directory. On macOS run in order:

```bash
shasum -a 256 -c input-before.sha256
test -f output/daftar-tindakan.md && echo "PASS: output file exists"
sed -n '1,120p' output/daftar-tindakan.md
```

Linux and Windows Git Bash replace the first line with `sha256sum -c input-before.sha256`; the next two lines do not change.

`shasum` uses the fingerprint left before execution to check whether the input file changed even a single byte, and it should show `OK`. `test -f` only checks whether the output path exists, and it should show `PASS`. `sed` prints the output contents so you can check them one by one; the command itself does not judge whether the contents are correct.

![Illustration: Si Hitam compares two sheets in front of a window with a magnifying glass, labelled input, output, and cek.](/en/images/first-task-verify-cropped.webp)

Open the meeting note and the action list, then check them one by one against the original text.

| Topic | Owner | Deadline | Risk reminder |
| --- | --- | --- | --- |
| Preparation of the official site explanation page | Rani | 2026-08-28 | Check whether the installation command is still valid |
| Creation of the tutorial screenshots | Bayu | 2026-08-30 | Hide accounts, personal paths, and credentials |
| Pre-release check | Sari | 2026-09-01 | Commands and screenshots can correspond one to one |

The existence of the file is only the first step; you also have to make sure the count is exactly those 3 topics, that none is missing, that none appeared out of nowhere, and that the owners and dates are not mixed up.

If one part does not pass, do not just tell Pi to "check again". State the mistake specifically, as in the following example.

```text
The second item is missing “Accounts, personal paths, and credentials must be hidden”.
Please modify only output/daftar-tindakan.md, complete this risk reminder, and do not change anything else.
When you are done, report where the change was made.
```

After it is fixed, run the three checks again. This task counts as complete only if the input is still `OK`, the output really exists, and all four kinds of columns correspond one to one.

## 5. Keep this exercise

You do not need to memorize every command for the first exercise. Just follow the same sequence. Prepare checkable material, write the actions and their scope clearly, watch the actual read-write log, then check the result independently.

The next lesson specifically practices [`@file` and the working directory](/en/guide/files-and-context). If you want to see the author's original notes first, you can also read [The original first-task study notes](/en/tweets/02-first-tasks).

**The Agent's summary is only a hint; only a result that can be verified independently counts as done.**

### Basis for this chapter

- [Pi Quickstart](https://pi.dev/docs/latest/quickstart)
- [Pi usage documentation](https://pi.dev/docs/latest/usage)
- [Pi security documentation](https://pi.dev/docs/latest/security)
- [Pi containerization documentation](https://pi.dev/docs/latest/containerization)
