---
title: CASE 01 · Meeting-notes action list
description: Produce an action list from a fictional meeting note, then check the input and output independently.
prev: { text: Case study collection, link: /en/cases/ }
next: { text: CASE 02 · Before and after compaction, link: /en/cases/compaction-before-after }
---

<span class="library-status">CASE 01 · Trainable</span>

# Meeting-notes action list

## Result

From three fictional meeting notes, produce `output/daftar-tindakan.md`; the original file stays unchanged, and the owner, date, and constraint of the three action items correspond one to one.

## Fixed materials

- <a href="/en/examples/first-task/meeting-notes.md" download>Download the fictional meeting note</a>
- Working directory: a separate `pi-practice`

The materials must contain three tasks from Rani, Bayu, and Sari, along with their respective dates and constraints. This is teaching text with no personal information.

## 1. Prepare the Input and a Fingerprint

On macOS, run this in an ordinary terminal:

```bash
mkdir -p ~/Downloads/pi-practice/input ~/Downloads/pi-practice/output
cd ~/Downloads/pi-practice
curl -fL https://pi-bluebook-id.pages.dev/en/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
test ! -e output/daftar-tindakan.md && echo "PASS: output does not exist yet"
```

Windows users should use Git Bash, change the directory to `~/pi-practice`, and replace `shasum -a 256` with `sha256sum`. If `PASS` does not appear in the end, move to a new, empty practice directory; do not continue with old results.

## 2. The Original Task Text

Run `pi` in the current practice directory, then give it the whole paragraph below:

```text
Read input/notulen-rapat.md, then organize it into output/daftar-tindakan.md.

Write each item on its own line, and you must preserve the item, the owner, the deadline, and the risk reminder;
do not modify the original file inside input, and do not access anything outside the current practice directory.
When you are done, list the files you added and changed, then explain how I should verify it.
```

## Key Symptoms

- The only object read is `input/notulen-rapat.md`.
- The object written is the new file `output/daftar-tindakan.md`.
- If you are about to write into `input` or a path outside the practice directory shows up, press `Esc` to stop.

[Lesson 5](/en/guide/first-task) explains why this task needs to state the input, output, constraints, and verification all at once; finishing this case study does not require you to go back to the lesson to copy the steps.

## Independent Verification

Exit Pi. On macOS run:

```bash
cd ~/Downloads/pi-practice
shasum -a 256 -c input-before.sha256
test -f output/daftar-tindakan.md && echo "PASS: output file exists"
sed -n '1,120p' output/daftar-tindakan.md
```

Windows Git Bash users should replace the first check with `sha256sum -c input-before.sha256`.

1. The fingerprint check before execution is still `OK`.
2. The output file exists and contains exactly three items.
3. Rani, Bayu, and Sari each pair with the correct date and constraint.
4. The actual read-write log does not contain any path outside the practice directory.

## Failure Recovery

If the input changed, the output is mixed with old content, or the path is wrong, stop making further changes and preserve the field state; re-download the materials into a new, empty practice directory and create a new fingerprint. Do not replace re-verification with the Agent's “already fixed”.
