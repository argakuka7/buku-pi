---
title: CASE 06 · Recovery from a checkpoint
description: Simulate an interruption in a long task with three practice materials, restore processing through a progress file, then check whether the continuation repeats nothing and skips nothing.
prev: { text: CASE 05 · Independent task division, link: /en/cases/independent-review }
next: { text: CASE 07 · Safety boundary, link: /en/cases/safe-review }
---

<span class="library-status">CASE 06 · Trainable</span>

# Recovery from a checkpoint

## Result

Process one article and then stop, after which a new session reads `long-task/progress.md` to finish the two remaining articles; in the end all three articles are neither repeated nor skipped, and failed items are recorded.

## Fixed materials

- <a href="/en/examples/long-task/source/article-a.md" download>article-a.md</a>
- <a href="/en/examples/long-task/source/article-b.md" download>article-b.md</a>
- <a href="/en/examples/long-task/source/article-c.md" download>article-c.md</a>
- <a href="/en/examples/long-task/progress-template.md" download>Progress template</a>

All three materials are short fictional texts; the progress template clearly separates the completed, already processed, failed, and next-step sections.

## 1. Prepare an Empty Task

```bash
cd ~/Downloads/pi-practice
mkdir -p long-task/source long-task/output
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/long-task/source/article-a.md -o long-task/source/article-a.md
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/long-task/source/article-b.md -o long-task/source/article-b.md
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/long-task/source/article-c.md -o long-task/source/article-c.md
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/long-task/progress-template.md -o long-task/progress.md
find long-task -type f -print
```

Windows users should replace the first line with `cd ~/pi-practice`. Before starting, there should be only three files in `source` and `progress.md`; if there are old files in `output`, move to a new directory and do not overwrite them to continue.

## 2. The First Session Handles Only One Article

```bash
pi --name "Checkpoint practice - first step"
```

Send:

```text
Read long-task/progress.md and long-task/source/article-a.md.
In long-task/output/index.md, use “## file name” as the level-two heading; on the next line write the title of the original text and a one-sentence summary,
then update the number of completed items, the files already processed, and the next step in long-task/progress.md.
Work on only this article, then stop and wait for my verification.
```

Exit Pi, open `index.md` and `progress.md`, and make sure the number of completed items is 1, the list contains only `article-a.md`, and the next step still points to material that has not been processed.

## 3. A New Session Recovers from the Checkpoint

```bash
pi --name "Checkpoint practice - recovery"
```

Send:

```text
Read long-task/progress.md first, then list the files in long-task/source that have not been processed.
Finish the remaining files one by one; in long-task/output/index.md keep using “## file name” as the level-two heading,
and each time an article is finished, update long-task/output/index.md and long-task/progress.md at the same time.
Do not repeat files already recorded as complete. If you find a damaged or unreadable file, record it in the failure list and then stop.
```

## Key Symptoms

The recovery session reads the progress on disk first, rather than guessing how far the previous session got. [Lesson 13](/en/guide/vps-and-long-running) explains more about the limits of VPS and tmux.

![Illustration: Si Hitam compares a clipboard with a round measuring tool, labelled checkpoint and progres.](/en/images/07-pi-checkpoint-tugas-panjang.webp)

The recovery session reads `progress.md` first, and when it is done it checks the input count, the index, and the progress record against one another. Do not conclude that the task is finished just because “the session is still there”.

## Independent Verification

```bash
find long-task/source -type f -name '*.md' | wc -l
grep -c '^## ' long-task/output/index.md
sed -n '1,180p' long-task/progress.md
```

The number of input files, the number of index entries, and the number of completed items in the progress are all 3; the list of processed files contains no duplicates, and the failure list matches reality. Also check the summary of each article one by one; do not just compare numbers.

## Failure Recovery

After an interruption, read the existing progress and output first; do not blindly re-run from the start. If you find duplicates, preserve the field state, list the duplicate items together with where they came from, then decide on the fix; if a file is damaged, write it into the failure list and then stop.
