---
title: Migration exercise · Repairing a small program
description: Reproduce a bug in an action-list program with four fixed tests, ask Pi to fix it minimally, then verify the tests and the scope of the change yourself.
prev: { text: Content-writing migration exercise, link: /en/cases/content-workflow }
next: { text: Graduation project, link: /en/cases/graduation-project }
---

# Repairing a small program

You can already check the fields of an action list. Now apply the same verification habit to code: a function is supposed to filter out unfinished items and sort them by date, but finished items slip in anyway, and the caller's original list changes too.

To work through this example, you need to already be able to use Pi and have Node.js 22 or newer. This material has no third-party dependencies, so there is no need to run `npm install`. The program is deliberately written wrong for teaching and has nothing to do with the production code of this site.

## 1. Reproduce the Bug in a New Directory

Run in an ordinary terminal; macOS, Linux, and Windows Git Bash can all use the following home-directory path:

```bash
mkdir ~/pi-code-repair
cd ~/pi-code-repair
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/code-repair/action-list.mjs -o action-list.mjs
curl -fL https://buku-pi-dariargakuka.netlify.app/en/examples/code-repair/action-list.test.mjs -o action-list.test.mjs
node --test action-list.test.mjs
```

If the directory already exists, switch to a new name so an old fix does not overwrite the starting state. Read both files first, then run the tests; this time you should see **4 tests, 2 pass, 2 fail**. Those failures are the starting point you need to record. If everything passes from the start, first check the downloaded materials and the directory.

The four tests check: excluding finished items and sorting by date, not modifying the input, preserving the original order for equal dates, and correctly returning an empty list for an empty array. The date format is already limited to `YYYY-MM-DD` or `null`; this example does not handle natural-language dates or time zones.

Keep a copy of the two original files:

```bash
cp action-list.mjs action-list.before.txt
cp action-list.test.mjs tests.before.txt
pi --no-extensions --no-skills --no-context-files
```

## 2. Ask Pi to Fix Only One File

Inside Pi, enter:

```text
Read action-list.mjs and action-list.test.mjs, then run
node --test action-list.test.mjs to reproduce the failure, and explain the cause.
Change only action-list.mjs: return the unfinished items, dates in ascending order, unknown dates last;
for equal dates keep the original order, and do not modify the array or object passed in.
Do not change the tests, the original copies, or any other file; do not install dependencies, and do not access the network or other directories.
After fixing it, run the tests again and report the location of the change and the actual result.
```

The execution scope is set explicitly by the prompt, not by an operating-system sandbox. The whole exercise uses only teaching files that have been reviewed after downloading.

## 3. Exit Pi and Verify Independently

Type `/quit` to return to the ordinary terminal:

```bash
node --test action-list.test.mjs
cmp action-list.test.mjs tests.before.txt
diff -u action-list.before.txt action-list.mjs
ls -A
```

Now you should see **4 pass, 0 fail**. The test file is confirmed unchanged if `cmp` produces no output and its exit code is 0; `diff` should show the implementation change, and an exit value of 1 only means the two files differ. Finally, check that the directory contains only two programs and two original copies, with no added dependencies or irrelevant files.

Do not delete tests, loosen assertions, or hardcode the example answers just to make them pass. Understand the basic shape of the fix: first produce a new array containing the unfinished items, then sort it; unknown dates are handled separately, and the original array's order stays unchanged. The existing fixed tests only prove this requirement's scope, and do not prove that every input is necessarily correct.

## How to Continue After a Failure

Return the name of the failing test, the expected value, and the actual value to Pi, then ask it to fix only the related problem. If the test file changes, preserve the field state and start over in a new directory; do not treat “all tests green” as permission to change the behavior of the tests.

When you are done, you can continue to the [Graduation project](/en/cases/graduation-project) and apply the same method to a real repository that has navigation, bilingual content, and a build check.

## Maintainer's Reproduction Note

On 12 September 2026, this was reproduced in a new practice directory on macOS using Pi `0.84.3` and Node.js `24.14.1`: the starting materials produced 2 pass and 2 fail; after Pi changed only `action-list.mjs`, the maintainer re-ran independently and got 4 pass and 0 fail, and confirmed the test file was unchanged through a byte-for-byte comparison. The way to fix it may differ between models; what remains the reference is the test result and the file difference in your own run at that time.
