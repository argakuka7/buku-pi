---
title: CASE 05 · Two independent review tracks
description: Practice splitting subtasks with isolated read-only sessions, then merge the evidence in the main session.
prev: { text: CASE 04 · A minimal Extension, link: /en/cases/first-extension }
next: { text: CASE 06 · Recovery after an interruption, link: /en/cases/checkpoint-recovery }
---

<span class="library-status">CASE 05 · Trainable</span>

# Two independent review tracks

## Result

The field review and the safety review do not read each other's conclusions, and each returns evidence from the original text; the main session records the shared conclusions, differences, conflicts, and unknowns.

## Fixed materials

- Input: <a href="/en/examples/first-task/meeting-notes.md" download>fictional meeting note</a>

This case study uses two named, read-only Pi sessions to practice the structure of task division; it does not require installing a Package, and does not claim that Pi's core already has a built-in Subagent.

## 1. Set Up the Directory

```bash
cd ~/Downloads/pi-practice
mkdir -p input reviews
curl -fL https://pi-bluebook-id.pages.dev/en/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
```

Windows users should replace the first line with `cd ~/pi-practice`, and replace `shasum -a 256` with `sha256sum`. Open the input file yourself, make sure it is a fictional meeting note and contains no personal information, then continue.

## 2. Field Review Session

Run in an ordinary terminal:

```bash
pi --name "Field review" --no-extensions --tools read,grep,find,ls
```

Once inside Pi, send:

```text
Check input/notulen-rapat.md in read-only mode.
List the item, owner, deadline, and constraint for every action item; for anything not in the original text write “unknown”.
Do not modify the file. Return a short quote from the original text together with its line number.
```

When you are done, type `/export reviews/fields.html`, then exit Pi.

## 3. Safety Review Session

Run in the same ordinary terminal:

```bash
pi --name "Safety review" --no-extensions --tools read,grep,find,ls
```

Once inside Pi, send:

```text
Check input/notulen-rapat.md in read-only mode.
List only the constraints that concern accounts, personal paths, credentials, pre-release checks, and verification.
Do not modify the file; every conclusion comes with a short quote from the original text and its line number, and mark it “unknown” when in doubt.
```

When you are done, type `/export reviews/safety.html`, then exit Pi.

## 4. Merging in the Main Session

```bash
pi --name "Task-division merge" --no-extensions
```

Send:

```text
Read reviews/fields.html, reviews/safety.html, and input/notulen-rapat.md.
Write the merged result into reviews/merged.md, containing only: the shared conclusions, the things that appear only in the field review,
the things that appear only in the safety review, the conflicts and unknowns, and the final check after returning to the original text.
Every final conclusion comes with a line number from the original text. When the two tracks conflict, the basis must be the original text read again, not a decision by majority vote.
Do not modify the input or the two exported HTML files.
```

## Key Symptoms

The two sessions do not read each other's conclusions, and only the main session writes `merged.md`. What is practiced here is an auditable structure of task division, not the assumption that Pi's core already has a built-in “Subagent button”. [Lesson 12](/en/guide/subagents) explains the relationship between this manual task division and the Subagent Extension.

## Independent Verification

After exiting Pi, run:

```bash
test -f reviews/fields.html && echo "PASS: field review exists"
test -f reviews/safety.html && echo "PASS: safety review exists"
test -f reviews/merged.md && echo "PASS: merged notes exist"
shasum -a 256 -c input-before.sha256
sed -n '1,180p' reviews/merged.md
```

Windows Git Bash users should replace `shasum -a 256 -c` with `sha256sum -c`.

- The input scope of the two tracks differs, and both outputs include positions in the original text.
- The two tracks do not write the same file, and do not swap conclusions early.
- The main session re-reads the original text when it finds a conflict, and does not decide by majority vote.
- The final note keeps the unknowns and the reason for choosing them.

## Failure Recovery

If one track fails, re-run only that track; if you picked the wrong session, exit first and check its name. If the two roles are about to modify the same file, stop at once, change them to only returning results, and let the main session write the final draft itself.
