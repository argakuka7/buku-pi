---
title: Migration exercise · From materials to a verifiable draft
description: With one confirmed brief and one old discussion note, practice source priority, fact tracing, what is still unknown, and manual editing.
prev: { text: Case study collection, link: /en/cases/ }
next: { text: Repairing a small program, link: /en/cases/code-repair }
---

# From materials to a verifiable draft

When you tidy up an article, the input is often more than one file. In an old discussion, the same event is said to have recruited 20 people, while the latest brief confirms only 12; the location and time are not even set yet. If you immediately ask the Agent to “write an attractive announcement”, the old proposal can end up written as fact.

This exercise continues the file-verification method from [the first task](/en/guide/first-task), with one extra rule: every fact must be traceable back to its source. The materials are a fictional book club that does not refer to any real event, and the final result is only a draft waiting for confirmation.

## 1. Prepare Two Kinds of Sources

Run this in an ordinary terminal; macOS, Linux, and Windows Git Bash all work:

```bash
mkdir ~/pi-content-workflow
cd ~/pi-content-workflow
mkdir source output
curl -fL https://pi-bluebook-id.pages.dev/en/examples/content-workflow/confirmed-brief.md -o source/confirmed-brief.md
curl -fL https://pi-bluebook-id.pages.dev/en/examples/content-workflow/old-note.md -o source/old-note.md
cp source/confirmed-brief.md confirmed-before.txt
cp source/old-note.md old-before.txt
```

If the directory already exists, start over with a new name. After reading both materials, make sure the confirmed brief is the more recent one, and state clearly that the old discussion must yield to it. A file name and the word “latest” are not by themselves proof of credibility; this time the source priority is set explicitly by the reviewed fixed material.

## 2. Build the Facts Table First, Then Write the Draft

Run Pi:

```bash
pi --no-extensions --no-skills --no-context-files
```

Send:

```text
Read the two fictional materials in source, then write only output/brief.md.
First build a facts table containing the subject, the value used, the source file with a short original quote, and any conflicts or unknowns.
The confirmed brief takes priority over the old discussion; the old proposal must not become established fact.
After that, write one introductory paragraph for the event that is still awaiting confirmation, and set out separately the questions that must be confirmed before publication.
Do not invent the location, start time, registration link, or prize promise; do not claim that registration is already open.
Do not modify the sources or their copies, do not access the network, do not publish, and do not read other directories.
```

This time, check the facts table first, then refine the wording. The Agent must use the number 12, record the conflict that the 20 came from the old discussion, and leave the location, start time, registration link, and prize promise as unknown or unconfirmed.

## 3. Finish Editing by Comparing the Sources

Exit Pi, then check in an ordinary terminal:

```bash
cmp source/confirmed-brief.md confirmed-before.txt
cmp source/old-note.md old-before.txt
sed -n '1,220p' output/brief.md
find . -maxdepth 2 -type f
```

Neither `cmp` produces output and both exit with code 0, which means the sources are unchanged. Confirm them one by one:

| Verification item | Expected result |
| --- | --- |
| Confirmed facts | The name “Weekend book discussion”, the date 2026-09-20, 12 people, a share-and-discuss format |
| Conflict handling | The 20 people are described only as an old proposal and do not appear in the confirmed quota in the draft |
| Source tracing | Every fact has an original file name and a short quote that can be found |
| Unconfirmed content | The location, start time, registration link, and prize promise are not added as fact |
| Publication status | Clearly a draft awaiting confirmation, not yet sent or published |

If the introduction needs to be more concise, ask Pi to change only the introductory paragraph while keeping the facts table and the list of unknowns. After each edit, check this table again so that improving the language does not change the facts along with it.

## Apply This Method to Your Own Articles

When you later handle product materials, tutorials, or interviews, you can keep the order “sources → facts table → draft → manual verification”. For real technical content, you also need to check the official version and date; experiences, prices, or effects that cannot be verified should not be used directly just because they appear in the material.

After repeating this a few times, tidy the review rules that have stabilized into a [Skill](/en/cases/first-skill). If you need a code example, continue to [repairing a small program](/en/cases/code-repair) to verify a program inside an article with tests that can be run.

## Maintainer's Reproduction Note

On 12 September 2026, this material exercise was completed with Pi `0.84.3` in a new practice directory on macOS. The output used the number 12, recorded the conflict of 20 from the old discussion explicitly, and left the location, start time, registration link, and prize promise unconfirmed. Both sources and the pre-execution copies were identical byte for byte, and only `output/brief.md` was added. This proves that this fixed-material workflow ran this time, but it does not mean the model will always handle new sources correctly.