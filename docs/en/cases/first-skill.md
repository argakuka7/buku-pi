---
title: CASE 03 · Turning a method into a Skill
description: Load one learning Skill explicitly and reuse its review rules for an action list.
prev: { text: CASE 02 · Before and after compaction, link: /en/cases/compaction-before-after }
next: { text: CASE 04 · Loading a minimal Extension, link: /en/cases/first-extension }
---

<span class="library-status">CASE 03 · Trainable</span>

# Turning a method into a Skill

## Result

Turn “set the input, keep four fields, do not guess what is unknown, check again after writing” into a Skill that can be read, and at the same time produce one review version of the action list.

## Fixed materials

- Input: <a href="/en/examples/first-task/meeting-notes.md" download>fictional meeting note for CASE 01</a>
- Skill: <a href="/en/examples/skill/action-list-review/SKILL.md" download>download action-list-review/SKILL.md</a>

## 1. Download and Review

Prepare a separate practice directory in an ordinary terminal; you do not have to finish CASE 01 first:

```bash
cd ~/Downloads/pi-practice
mkdir -p input output bluebook-examples/action-list-review
curl -fL https://pi-bluebook-id.pages.dev/en/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
curl -fL https://pi-bluebook-id.pages.dev/en/examples/skill/action-list-review/SKILL.md \
  -o bluebook-examples/action-list-review/SKILL.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
sed -n '1,160p' bluebook-examples/action-list-review/SKILL.md
```

Windows users should change the first line to `cd ~/pi-practice`, and replace `shasum -a 256` with `sha256sum`. The Skill content should contain only `name`, `description`, and review rules about meeting notes; stop if any unrelated command appears.

## 2. Load Explicitly and Send the Task

Run in an ordinary terminal:

```bash
pi --no-skills --skill ./bluebook-examples/action-list-review/SKILL.md
```

Once inside Pi, send:

```text
/skill:action-list-review Please review input/notulen-rapat.md again,
then write the result to output/daftar-tindakan-revisi.md. Do not modify the input file;
for information that is not in the original source write “not explained in the source”. When you are done, read the output again and report its path.
```

If `/skill:action-list-review` does not appear, check the Skill commands in `/settings` first, then run Pi again; do not copy the file into several automatic discovery directories and hope that it works.

Read the whole `SKILL.md` through to the end before loading it explicitly with `--no-skills --skill <path>`. Do not put work instructions you do not understand straight into an automatic discovery directory.

![Illustration: Si Hitam slides a card into a machine slot and a light turns on, labelled muat Skill and Skill aktif.](/en/images/05-pi-memuat-skill.webp)

The command is still only typed, not run, so take this moment to check the Skill name, the input path, and the current working directory once more before executing it.

[Lesson 10](/en/guide/skills-extensions-packages) explains the boundary between the three kinds of Extension; this page already loads all the operations you need to finish the case study.

## Key Symptoms

Once the Skill has been loaded explicitly, the same task gets a visible, reviewable set of review rules; the Skill does not provide input for you, and it does not automatically prove that the output is correct. Verification still comes back to the fixed original text, the output file, and the input fingerprint.

## Independent Verification

After exiting Pi, run:

```bash
test -f output/daftar-tindakan-revisi.md && echo "PASS: review version exists"
shasum -a 256 -c input-before.sha256
sed -n '1,160p' output/daftar-tindakan-revisi.md
```

Git Bash on Windows should replace `shasum -a 256 -c` with `sha256sum -c`.

- The file that was actually loaded and the file that was checked are on the same path.
- The output is a new file, and the input fingerprint is unchanged.
- All three items have a subject, an owner, a date, and a constraint; missing information is not invented.
- After exiting Pi this time, `--skill` is no longer passed, so that learning Skill will not keep being loaded.

## One More Step: Change the Review Rules Yourself

First save the original Skill, then copy it into a new exercise:

```bash
mkdir -p bluebook-examples/action-list-latest
cp bluebook-examples/action-list-review/SKILL.md bluebook-examples/action-list-latest/SKILL.md
```

Open the new file, change the `name` in the frontmatter to `action-list-latest`, then add one rule: “Sort the results by deadline from latest to earliest; dates that are unknown go at the very bottom, and you must not fill in the dates yourself.” Keep the other rules.

Run Pi again, and load only the new file explicitly:

```bash
pi --no-extensions --no-skills --skill ./bluebook-examples/action-list-latest/SKILL.md
```

Type `/skill:action-list-latest` in Pi, then ask Pi to read the same input and write to `output/daftar-tindakan-urutan-terbalik.md`. When verifying, the owner order should be Sari, Bayu, Rani, with dates 2026-09-01, 2026-08-30, and 2026-08-28 respectively; the constraints of those three items must not disappear because of the sorting.

Finally, check the input fingerprint again to make sure the old Skill was not overwritten along with it. That way, what you practice is “turning a repeated rule into your own method”, not just loading a file someone else provided. If you want to try another kind of input, continue to the [content migration exercise](/en/cases/content-workflow).

## Failure Recovery

If the Skill is not used, check its path, metadata, and launch parameters; if the result is wrong, go back to verifying the original text, and do not rush to change the Skill to cover up one task mistake. Stop loading if the source or its content looks abnormal.