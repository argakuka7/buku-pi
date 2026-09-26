---
title: Permissions, isolation, and verification
description: Build awareness of least privilege, untrusted input, isolation, and human verification when using an Agent.
prev:
  text: Long-running tasks and VPS
  link: /en/guide/vps-and-long-running
next:
  text: CASE 08 · Graduation project
  link: /en/cases/graduation-project
---

<span class="library-status">MODULE 05 · STEP 14 · trainable</span>

# Permissions, isolation, and verification

Pi is not just a chat window. It can read and write files, run commands, and Extensions can even add more capabilities. This is why it can finish real tasks, and also why you have to take setting its boundaries seriously. Built-in tools, Extensions, and ordinary local processes run with the permissions of the process that starts Pi; Pi has no built-in sandbox or per-operation permission dialog.

## Text boundaries are not a security sandbox

Writing “do not access other directories” inside a task is very much necessary, because it explains the scope of work. But that sentence does not cancel permissions at the operating system level. If Pi runs under your user identity, the commands and Extensions it calls generally have that user's permissions too.

When dealing with repositories, scripts, or data you do not trust, you need a real isolation boundary such as a container, a virtual machine, or a dedicated account. Project Trust only determines whether project-level configuration and resources are loaded, not the runtime sandbox. Do not keep approving projects whose origin is unclear.

Project Trust also has a clear exception: `AGENTS.override.md`, `AGENTS.md`, and `CLAUDE.md` are still loaded as context files by default. Refusing to trust does not mean “do not read any project text at all”; for a foreign repository, inspect it first in an isolated environment, or turn off this kind of context loading with `--no-context-files`, and still follow the principle of least privilege.

Repository documentation, comments, and build output can all contain Prompt Injection. Project Trust cannot reliably recognize or prevent this kind of content from influencing the Agent; untrusted input must still be handled like untrusted code and data.

Containers also have to be looked at from their mount boundary: if the host working directory is mounted into the container in a writable mode, writing inside the container will still change host files; accidentally mounting `~/.pi/agent` will also expose authentication and sessions. When using Pi on the host and pointing some tools at an isolated environment, other Extensions can still run on the host. Before you really isolate, you have to see clearly where the processes, files, credentials, and network of each part are.

## Four questions before you start

Before letting Pi run any foreign project, answer first:

1. Is the source material trustworthy, and could it contain text that steers the Agent into running operations?
2. Are there keys, client data, or private files in the directory that are unrelated to the task?
3. Will the task run unknown scripts, install dependencies, or access the network?
4. Will the task overwrite, move, or delete files, or send content outside?

If even one of these cannot be answered clearly, stop execution first. You can do a read-only check in an isolated copy, or ask someone experienced to review it again; do not treat “I already wrote a prohibition in the prompt” as permission control.

## Three layers of defense

### The first layer is reducing the scope

Use a self-contained practice directory, and put in only the material needed to finish the task. Do not place passwords, API Keys, client data, and private files unrelated to the task in the same directory.

### The second layer is keeping a recovery point

Use Git for code projects, and keep backups for documents and materials. Before a high-risk operation, ask Pi to list the targets, the amount, and the impact first, then run it. When deleting, prefer a recoverable method.

### The third layer is independent verification

Do not use the Agent's final summary as the only evidence. Check the real result according to the kind of task:

- Tidying files: check the number of files, the original fingerprint, and the content fields.
- Changing code: look at the diff of the changes, run the build and tests, then do a manual operation on the important interfaces.
- Publishing a site: visit its official domain, check the desktop and mobile views, and make sure the deployment matches the latest commit.
- Sending outside: keep a human confirmation at the last step, and check the recipient, the scope, and the attachments.

## When something goes wrong, keep the scene intact

If you find a wrong path, or a file that should not have changed turns out to have changed, stop new operations first. Do not immediately tell the Agent to “clean everything up”, because you might also delete the investigative clues. First note what happened and which files were affected, then recover from Git or a backup.

Security is not a single button. It is a set of working habits that can be repeated: reduce the scope, keep recovery points, observe real actions, and verify results independently.

## A recovery exercise that does no damage

This exercise does not delete files. Suppose you find that the Agent may have written to the wrong directory; immediately stop sending further tasks, and note in a normal terminal:

```bash
pwd
date
find . -maxdepth 3 -type f -print
git status --short 2>/dev/null || true
```

Write the commands actually run, the errors you saw, and the paths you suspect were affected into a temporary incident note. After that, only look at the diff or the backup, and do not immediately run mass cleanup. If the project uses Git, you can look at status and diff; whether to recover, and which files to recover, must be decided separately once the targets are clear.

The core of this sequence is preserving evidence: stop new operations → note the location and symptoms → confirm the impact → confirm the recovery targets → run the recovery → verify once more. This is more controlled than simply saying “clean everything up”.

## Completion check for the whole book

- The practice directory is separate from real work material, and contains no keys or private files.
- You can tell apart a normal terminal, Pi's edit area, project resources, and the system isolation boundary.
- Important tasks have input, output, a session name, a checkpoint, and a recovery path.
- The origin of a Skill or Extension can be read, its loading scope is clear, and it can be disabled.
- Task results are verified through files, diffs, tests, or a real interface, not only from the Agent's summary.
- Sending outside, payments, publication, and operations that cannot be undone still keep a human confirmation.

If you cannot do these things consistently yet, go back first to the related lesson or the [case studies](/en/cases/), and do not rush to expand work to foreign repositories, long-term unattended tasks, or high-permission environments.

### Basis for this chapter

- [Pi Security](https://pi.dev/docs/latest/security)
- [Pi Containerization](https://pi.dev/docs/latest/containerization)
- [Project Trust in the Pi usage guide](https://pi.dev/docs/latest/usage#project-trust)

The security boundaries and Project Trust were verified on 2026-09-09.
