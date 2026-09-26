---
title: CASE 07 · Safety review before a task
description: Assess the scope of a task, its permissions, recovery points, and verification method without executing unknown code.
prev: { text: CASE 06 · Recovery after an interruption, link: /en/cases/checkpoint-recovery }
next: { text: CASE 08 · Graduation project, link: /en/cases/graduation-project }
---

<span class="library-status">CASE 07 · Trainable</span>

# Safety review before a task

## Result

Complete a four-question review before actually executing the task, then record the directory, files, risks, and recovery points; leave everything unknown as unknown, and do not replace the isolation assessment with “the project is already trusted”.

## Fixed materials

- <a href="/en/examples/safety/review-brief.md" download>A request from a foreign repository (with no executable code)</a>
- <a href="/en/examples/safety/plan-template.md" download>Safety review template</a>

In an ordinary terminal, go into `pi-practice`, then save both files into `safety-review/`:

```bash
cd ~/Downloads/pi-practice
pwd
mkdir -p safety-review
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/safety/review-brief.md \
  -o safety-review/review-brief.md
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/safety/plan-template.md \
  -o safety-review/plan-template.md
```

Open both files first and make sure their contents are only a fixed scenario and seven empty headings, with no executable code. Then explicitly turn off Extensions and context files, and provide only the read, search, and write tools:

```bash
pi --name "Safety review practice" --no-extensions --no-context-files \
  --tools read,write,grep,find,ls
```

These parameters are not a sandbox; `write` can still write files with your current permissions. The material for this lesson is fixed, harmless teaching text, and the task only allows writing one new result. Once inside Pi, send:

```text
Read safety-review/review-brief.md and safety-review/plan-template.md.
Write the review result into safety-review/plan.md following the template.
Use only the facts stated explicitly in the scenario; for anything unknown write “unknown”, do not access the network, run commands, install dependencies,
read other directories, or modify the two input files. The final section “may it proceed” may only be filled in as “there is not enough information”, and list the things that must be confirmed before continuing.
```

During execution, the only things you should see are two input reads and one write to `safety-review/plan.md`. If another path or tool action appears, press `Esc` to stop, and preserve the field state as described in [Lesson 14](/en/guide/safety).

## Key Symptoms

The Agent may only write down the facts already present in the materials as known, while the contents of the repository, the behavior of the script, and the credential requirements are left unknown; the final conclusion must stop at “there is not enough information”. If the output immediately suggests installation or execution, then the safety review has gone beyond the available evidence.

## Independent Verification

- The plan clearly states the read-only scope, the actions that might be executed, the credential exposure surface, and the isolation it needs.
- It does not run unknown installation scripts, and does not place real keys in the practice directory.
- Project Trust is correctly explained as permission to load resources, not a sandbox.
- Before recovery, first save the path, time, status, differences, and the commands that were executed.

After exiting Pi, check independently:

```bash
test -f safety-review/plan.md && echo "PASS: safety review exists"
grep -E '^## (Known facts|Unknowns and risks|Allowed read-only checks|Actions currently prohibited|Required isolation and minimal credentials|Recovery points and evidence|May it proceed)$' safety-review/plan.md
```

The second command should display seven headings. Then open the file and make sure the final assessment is “there is not enough information”, and that the contents of the fictional repository are not written as facts already checked.

## Failure Recovery

If you have already run unknown content, first disconnect and stop the operation, then preserve the field state; do not ask the Agent to clean it up in bulk. According to the actual impact, revoke credentials, inspect the host, and restore files to an equivalent degree. This case study cannot replace professional incident response.
