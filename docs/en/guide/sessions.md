---
title: Sessions and resuming work
description: Understand how Pi sessions are saved automatically, then learn how to name, resume, and branch from an earlier node.
prev:
  text: Files and working directory
  link: /en/guide/files-and-context
next:
  text: Context and compaction
  link: /en/guide/context-and-compaction
---

<span class="library-status">MODULE 02 · STEP 07 · trainable</span>

# Sessions and resuming work

After finishing the first task, many people ask: once the terminal is closed, does that conversation just disappear?

By default Pi saves sessions automatically and organizes them by working directory. You do not need to save manually every time you talk, but you do need to learn to name sessions; otherwise they will be hard to find again later.

Sessions are saved by default under `~/.pi/agent/sessions/` and organized by working directory as JSONL files. In Pi, type `/session` to see the current session file, ID, message count, tokens, and cost; the contents may include personal prompts, paths, and tool results, so do not upload or publish them carelessly.

## One matter, one session

A practical starting rule is: one clear goal, one session. Tidying meeting notes, fixing site navigation, and translating a single article should not all be put into one conversation.

Once a task begins, type in Pi's input area:

```text
/name Meeting-notes cleanup practice
```

The name should describe the task, not say "test 1" or "today's conversation". When you come back a week later, you can still guess what it contained from its name.

After typing, press `Return`. `/session` can show the current session file, ID, message count, tokens, and cost information; the most direct entry point for checking the session name again is the `/resume` picker discussed later. For now, continue the exit-and-restore exercise in this section.

## Resuming after closing

If you just left Pi and want to continue the latest session in the current directory, first go back to the practice directory in a normal terminal:

```bash
cd ~/Downloads/pi-practice
pwd
pi -c
```

`pwd` should show the correct practice directory. After `pi -c` opens, first check that the message history really belongs to the earlier meeting-notes task; when you need to check the name, open `/resume`, and that list should contain "Meeting-notes cleanup practice"; press `Esc` to cancel the selection and return to the current session.

If this project has several sessions, use:

```bash
cd ~/Downloads/pi-practice
pwd
pi -r
```

This opens the session history picker. Find the matching name with the up and down arrow keys, press `Return` to open it, and press `Esc` to cancel. You can also type `/resume` inside an already-open Pi. Before choosing, look at the session name and its working directory, so you do not connect to a similar project by mistake.

If the practice directory you use is not named `pi-practice`, change the directory name in both `cd` commands at the same time.

### When you do not return to the expected session

- The history `pi -c` opens is not the right one: do not keep writing files in this session, type `/quit`, confirm `pwd`, then switch to `pi -r`.
- The `pi -r` list is empty: first make sure the current working directory is the same as when the session was created. Pi sessions are organized by working directory, so when the directory differs you will not see the same group of sessions.
- You picked a similar-looking name by mistake: check with `/session`, exit right away, then choose again.
- The session truly cannot be found: do not claim the conversation has been restored. Create a new session, ask Pi to re-read the input, output, and handover files in the project, then continue from the results on disk.

::: tip For now, just remember these two entry points
`pi -c` continues the latest session, `pi -r` picks from a list. Other options can be learned when you actually face the need.
:::

## Getting to know `/tree` when you go off course

A conversation does not only run straight down. Pi sessions are stored in a tree structure. In the interactive interface, type `/tree` to go back to an earlier node, then continue from there. This lesson introduces it as an advanced entry point; do not jump around carelessly in an important session.

Scenarios where it fits well include:

- You realize that since three rounds ago you have misunderstood the task.
- You want to keep the current plan while also trying another path.
- The conversation is full of temporary debugging information, and you want to start again from a relatively clean node.

Jumping will not restore files already written to disk to their previous state. The session tree manages conversation history, while file versions are managed by Git or backups.

`/tree` only moves the current node within the same JSONL session file; `/fork` creates a new session from an earlier user message, and `/clone` copies the current active branch into a new session. When leaving the current branch, Pi may also ask whether to create a Branch Summary for the path left behind. That summary is used to carry useful information to the new path, and will not roll back files on disk.

If you have a session file from somewhere else, open it with `pi --session <path or ID>`, or import it with `/import <file>` in the interactive interface. First make sure of the file's source, because it may contain personal content, project paths, and tool records.

As a beginner, there is no need to force branching practice in an important session. Once you have a throwaway test session, type two different plans, then use `/tree` to return to the user message before the branch and continue the other path. The verification point is not whether the interface displays a tree, but whether you can state clearly: after moving the conversation node, files already written to disk still need to be checked or restored separately.

## New task, new session

When the goal has changed, type `/new` in Pi. The previous session stays saved, and the new task gets a clean starting point.

## Verifying this lesson

Before leaving this chapter, complete one fixed exercise:

1. Name the current session, open `/resume` and find its name in the list, then press `Esc` to return.
2. Exit with `/quit`, and make sure you are back in a normal terminal.
3. Run `pi -c` in the correct directory, check the message history, and find its name again in the `/resume` list.
4. Make sure the earlier messages are still there, then open the output file from the previous lesson and confirm the result on disk is also there.

A consistent name, message history, and working directory show that you restored the right session; an output file that still exists only proves the disk contents are still there. Do not mix up these two kinds of evidence.

### Basis for this chapter

- [Pi Sessions](https://pi.dev/docs/latest/sessions)
- [Pi usage explained](https://pi.dev/docs/latest/usage)