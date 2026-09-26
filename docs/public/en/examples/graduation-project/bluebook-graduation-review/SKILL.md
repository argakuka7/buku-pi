---
name: bluebook-graduation-review
description: Review, read-only, the requirement coverage, change scope, navigation linkage, and verification evidence of the Buku Pi graduation project; used for an independent check after implementation is complete.
---

# Buku Pi graduation project review

1. Read the requirements file the user points to first, then read the Git status and diff the user
   provides; do not guess what changed from a final summary.
2. Check only requirement coverage, allowed paths, internal links, build evidence, and unresolved
   issues. Do not modify any file and do not request the bash, write, or edit tool.
3. For each requirement item, return `pass`, `fail`, or `not enough evidence`, together with the
   file path and line number.
4. Separately list file changes outside the requirements; if old changes and this round's changes
   cannot be told apart, mark it `not enough evidence`.
5. The build and Git commands are run by the user in an ordinary terminal; inspect the results of
   `check:content` and `check` at that time. Execution history you cannot verify yourself must be
   marked `not enough evidence`; do not claim you ran the command.
6. New files do not appear in an ordinary `git diff`, so read the new page directly; automatically
   generated content is also part of the allowed scope.
7. Do not ask to install new dependencies, deploy, commit, or push; do not read credential files.
8. At the end, give only the blocking items and the most minimal fix suggestions; do not perform the
   fix on behalf of the main Session.
