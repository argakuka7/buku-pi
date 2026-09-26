---
title: CASE 02 · Before and after compaction
description: Perform a manual compaction inside the same Session, then compare the current context, the checkpoint on disk, and the optional cache data.
prev: { text: CASE 01 · Meeting-notes action list, link: /en/cases/meeting-notes }
next: { text: CASE 03 · Turning a method into a Skill, link: /en/cases/first-skill }
---

<span class="library-status">CASE 02 · Module 3 · Trainable</span>

# Before and after compaction

## What You Will Get

Inside the same Pi Session, you will leave three notes: an answer before compaction, an answer from memory after compaction, and an answer after re-reading the checkpoint. This experiment does not assume that “after compaction you must forget”; it invites you to understand the real differences: the Session, the current Context, the file on disk, and the prompt cache are different pieces of evidence.

::: warning A Cost Reminder
This case study will call the model and run `/compact` once manually. The compaction itself also needs the model to produce a summary, and it can use up a subscription plan's quota or incur API costs. Finish the [cost check in the login lesson](/en/guide/connect-model) first; if you are unsure, do not continue just to run an experiment.
:::

## Fixed materials

- <a href="/en/examples/compaction/brief.md" download>download the experiment brief brief.md</a>
- <a href="/en/examples/compaction/checkpoint.md" download>download the checkpoint checkpoint.md</a>
- <a href="/en/examples/compaction/settings.json" download>download the experiment-specific settings.json</a>

The first two materials contain only fixed teaching text, with no script, credential, or personal data. `settings.json` only lowers `keepRecentTokens` for this experiment directory to `200`, so that a short session still has older content that can be compacted; do not copy it into your everyday project or user-level configuration.

## 1. Create a Separate Experiment Directory

On macOS, run in an ordinary terminal:

```bash
cd ~/Downloads/pi-practice
mkdir -p compaction-lab/.pi compaction-lab/results
curl -fL https://pi-bluebook-id.pages.dev/en/examples/compaction/brief.md \
  -o compaction-lab/brief.md
curl -fL https://pi-bluebook-id.pages.dev/en/examples/compaction/checkpoint.md \
  -o compaction-lab/checkpoint.md
curl -fL https://pi-bluebook-id.pages.dev/en/examples/compaction/settings.json \
  -o compaction-lab/.pi/settings.json
cd compaction-lab
shasum -a 256 brief.md checkpoint.md > input-before.sha256
```

Windows users still use Git Bash, change the first line to `cd ~/pi-practice`, then after entering the experiment directory change the last line to:

```bash
sha256sum brief.md checkpoint.md > input-before.sha256
```

Make sure the end of the `pwd` output is `compaction-lab`, and open both Markdown files and `.pi/settings.json` yourself. Continue only after the contents match the explanation on this page; stop if the settings file has extra fields.

## 2. Run One Clean Session

Still in the ordinary terminal, run:

```bash
pi --name "Before and after compaction" --no-extensions --no-skills --no-context-files
```

Once inside Pi, type `/session` and make sure the session name is “Before and after compaction”. Note the Session ID shown by the interface; that ID is only used later to confirm that you are still in the same session, and does not need to be published or uploaded.

If a Project Trust prompt appears when you first enter that directory, trust this isolated practice directory only after you have checked the three downloaded materials. Project Trust lets Pi use the settings inside the directory, and does not turn it into a sandbox; if the directory or its files do not match this page, exit, do not confirm.

## 3. Leave Some Older Content That Can Be Compacted

Send the first observation round first:

```text
Read brief.md and checkpoint.md, then check one by one whether the six fixed pieces of information are consistent.
In your reply, list only those six pieces of information together with your checking conclusion; do not write files, do not access the network.
```

When that is done, send the second observation round:

```text
Do not read the files again. Based only on the current context, explain:
1. Why “the Session has been saved” is not the same as “the current Context always holds the entire original text”;
2. Why checkpoint.md can serve as the basis for recovery;
3. What the single action prohibited in this experiment is.
At most two sentences per item, do not write files, do not access the network.
```

Continue only after both rounds are finished. The low experiment-specific threshold will make the earlier round fall into the compaction scope; if you skip this step, a short session may have no content that can be compacted.

## 4. Write a Note Before Compaction

Hand the whole paragraph below to Pi:

```text
Do not read the files again. Based only on the current context, write those six pieces of information line by line to
results/before.md, in a format that must match the list in checkpoint.md.
At the end, reply with only the path you wrote; for anything unknown write “unknown”, do not guess, do not access the network.
```

The execution should only write `results/before.md`. Press `Esc` to stop if a read, a network access, another directory, or an input change occurs.

## 5. Compact Manually, Then Do One Answer from Memory

Open `/session` first, and make sure the Session ID matches step 2. Then type in Pi's edit area:

```text
/compact
```

Wait until compaction finishes, until Pi returns to a state where it can accept input. Do not run `/compact` a second time in a row.

After you see the compaction-finished notification, continue by sending:

```text
Do not read any file, and do not access the network.
Based only on the context you received at this moment, write the six fixed pieces of information of this experiment to
results/after-memory.md, in the same format as before compaction.
For any item you cannot be sure of write “unknown”, do not guess. At the end, reply with only the path you wrote.
```

If `read`, `grep`, `find`, or another read action appears in this round, stop at once: it would make the observation “does the current Context still hold the information” invalid.

## 6. Recover from the Checkpoint on Disk

Whatever the result, whether the earlier note was complete or not, still send:

```text
Now read checkpoint.md, use that file as the reference, then write the six fixed pieces of information to
results/after-file.md. The format must match the list in checkpoint.md.
If the content differs from after-memory.md, name in your reply which fields differ; do not modify the notes that already exist.
```

The goal of this step is not to make the Agent “admit it forgot”, but to verify whether the checkpoint on disk can again provide the certain information.

## Key Symptoms

| Observation target | What you need to check | What it can prove |
| --- | --- | --- |
| Session | Whether the ID before and after `/session` is the same | The conversation is still in the same saved Session |
| Current Context | Whether `after-memory.md` is consistent with the note before compaction | What information the summary and the most recent messages keep for this round |
| File on disk | Whether the fingerprint of both inputs stays the same; whether `after-file.md` is complete | Files can be stored independently and again provide the constraints |
| Prompt cache | Whether the Provider reports cache data, and whether it changes before/after compaction | It only records the cache phenomenon of the current service, not memory or task quality |

All six pieces of information still stored after compaction is a valid result; the appearance of “unknown” or of differences is also a valid result. The experiment fails in only two ways: it leaves no notes that can be compared, or it quietly re-reads the file during the answer-from-memory stage.

## Independent Verification

Exit Pi first. On macOS, run in an ordinary terminal:

```bash
cd ~/Downloads/pi-practice/compaction-lab
shasum -a 256 -c input-before.sha256
test -f results/before.md
test -f results/after-memory.md
test -f results/after-file.md
grep -F 'Project code: Paper Boat Biduk' results/after-file.md
grep -F 'Fixed order: blue → gold → grey' results/after-file.md
grep -F 'Verification phrase: the boat docks' results/after-file.md
diff -u results/before.md results/after-memory.md || true
```

Git Bash on Windows should replace `shasum -a 256 -c` with `sha256sum -c`, while the other commands do not change.

Both inputs show `OK`, the three notes exist, and `after-file.md` contains the three fixed pieces of information, which means the file recovery chain passed. The three `grep -F` lines use exactly the same literals as `checkpoint.md`, so the match must be exact. The final `diff` producing no output means the two notes are the same; if a difference appears, keep that difference, because it is the result of this experiment — do not turn it into the expected answer.

Run Pi once more and use `pi -r` to find “Before and after compaction”, then open `/session` and check the original Session ID. A session that can be reopened only proves that its history is saved; you still need to check the file on disk and the answer after compaction.

## Failure Recovery

- `/compact` shows `Nothing to compact (session too small)`: make sure the end of the current directory is `compaction-lab`, that `.pi/settings.json` is correct, and that steps 3 and 4 are done; after fixing it, create a new Session and repeat, do not keep retrying in the same session.
- `/compact` hits another error or does not return to the input area: press `Esc` to stop, save the error text and the files that already exist, do not repeat without a pause.
- The answer-from-memory stage reads a file: save that note and mark it “this round is invalid”, then create a new Session to repeat the experiment, do not overwrite the old file.
- The original Session cannot be found: do not claim that the session has been recovered; create a new session, then continue the check from `checkpoint.md` and the notes that already exist.
- The input fingerprint changed: stop the comparison, preserve the state as it is; download again into a new experiment directory, do not overwrite materials that have already changed.
- `after-file.md` is still missing fields: open `checkpoint.md` and check manually, note what is missing; do not let the Agent change it over and over until the test passes.
- If after the experiment you do not want to keep the low threshold: exit Pi, delete the whole `compaction-lab`; or delete only `.pi/settings.json` inside it. This does not change user-level settings.

## This Case Study Relates to the Following Two Assessments

- [Point 6: A Session can be saved, but that does not mean the model always remembers all of its contents](/en/guide/lasting-principles#session-and-context)
- [Point 7: Compaction and the prompt cache must be understood separately](/en/guide/lasting-principles#compaction-and-cache)

Official mechanism basis: [Pi Compaction](https://pi.dev/docs/latest/compaction) · [Pi Sessions](https://pi.dev/docs/latest/sessions)