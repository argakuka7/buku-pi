---
title: Guidelines and notes for the 2026 open learning edition
description: Explains this edition's scope, platform path, verification dates, update limits, screenshot rules, and copyright ownership.
prev:
  text: Ten lasting judgments from 98 tweets
  link: /en/guide/lasting-principles
next:
  text: 'Prologue: Meet the author of Pi, Mario Zechner'
  link: /en/guide/mario-zechner
---

<span class="library-status">EDITION NOTE · 2026 open learning edition</span>

# Guidelines and notes for the 2026 open learning edition

This is a Pi learning bluebook aimed at Mandarin-speaking beginners. The website will continue to be maintained, while the **2026 open learning edition** is a body of content with a clear scope that can be cited and reviewed.

## Identity of this edition

| Item | Description |
| --- | --- |
| Version name | Pi learning bluebook · 2026 open learning edition |
| Verification basis for the initial edition | September 9, 2026; subsequent pages are updated according to their own verification notes |
| Main-flow scale | 5 modules, 14 lessons |
| Primary platform | macOS; Windows uses a separate path into the same main flow |
| Content status | Publicly readable; the website continues to be edited |
| Fixed edition media | PDF not yet published, to be produced later following this edition's arrangement |

“Open learning edition” does not mean “no page will ever change”. It means the target readers, learning order, positions taken, and content boundaries of this edition are set; changes after publication must follow the maintenance rules below.

## Reading guidelines

### 1. The main flow follows macOS; Windows enters through a separate door

The screenshots, shortcuts, and directories in the main flow are based on macOS. Windows users should first read the [Windows setup path](/en/guide/windows-setup), complete installation and the first launch in Git Bash, and only then return to lesson 3. Linux readers can use the common macOS/Linux commands and adjust the home directory path themselves.

### 2. For dynamic facts, see the date on the page

Model names, Providers, login methods, command parameters, prices, quotas, and third-party project status can all change. When discussing these things, also check the page's last-updated date, and treat the [official Pi documentation](https://pi.dev/docs/latest) and the latest information from the relevant service providers as the reference.

This book does not maintain a price list of models or a plugin ranking. Specific numbers that have gone out of date will be edited or dated, but short-term promotions will not be elevated into long-term recommendations.

### 3. Screenshots help you find the location; they do not replace the operating steps

Screenshots serve to confirm the interface area, state, and success signals. After the interface is updated, button positions and text can change; readers should keep judging by the goal, steps, and verification in the text, not just look for an identical appearance.

When it comes to system-level results, the appropriate evidence must be used. For example, notification text printed in the terminal is not the same as a desktop notification that actually appears; features that do not have a real system screenshot and reproduction scenario will be clearly marked as unverified or as advanced material.

### 4. Command blocks should by default be understood line by line

Directory names, file names, and example values inside commands apply only to the related exercise. Make sure of the current directory before pasting, and do not write real API Keys, master passwords, private paths, or production credentials into prompts, screenshots, and repositories.

A destructive operation does not automatically become safe just because it appears in a tutorial. When you find a path that does not match your environment, stop and check the target first.

### 5. “Done” must have external evidence

Every lesson gives a completion marker or verification step. An Agent's self-summary, a success message in the browser, and one line of terminal output represent only some of the signals; in the end, check the file, content, tests, remote status, or the real interface.

## How the website and fixed edition are maintained

- **The website can keep being edited:** fix typos, dead links, commands that have changed, and verification dates; add notes that do not change the learning structure.
- **This edition's structure stays stable:** the Introduction, Prologue, five modules, case studies, plugin recommendations, licensed translations, and appendix form the basic table of contents of the 2026 open learning edition.
- **Major changes are made as a new edition:** if Pi's installation, core concepts, or learning path change structurally, update the edition note rather than quietly rewriting the old edition's positions.
- **The PDF uses a clear snapshot:** a PDF published later will list its creation date, content verification cutoff, and corresponding commit, so it can be easily downloaded, printed, and cited.

## Content boundaries and copyright

The original writing and code on this site are published under the license file in the repository. Earendil's officially licensed translations keep the original title, author, date, source, and license statement, and are used in accordance with the license stated on the translation page.

Third-party screenshots, original images, trademarks, and quoted content do not automatically become original works of this site just because they appear here, and do not automatically fall under this site's MIT License. Their specific ownership follows the page attribution and the `LICENSE-CONTENT.md` file in the repository.

## Maintenance notes for this round

September 12, 2026: added a hands-on entry point, exercises on moving content organization and code fixes, revised the bilingual sync of the graduation project and the scope of read-only tools; restored site search, and added page anchors and consistency checks for traditional-script generation. The real Windows interface and system desktop notifications are still part of the separate on-device verification scope.

## Table of contents order for this edition

1. Introduction: Why read this book
2. Ten lasting judgments from 98 tweets
3. Guidelines and notes for this edition
4. Prologue: Mario Zechner and the origins of Pi
5. Five learning modules, 14 lessons
6. Companion case studies
7. Plugin recommendations and the selection map
8. Earendil's officially licensed translations
9. References and appendix

The website currently has the reading entry for the first three items built; the PDF will be produced in a later round following this book's order.

## Further reading

- [Prologue: Meet the author of Pi, Mario Zechner](/en/guide/mario-zechner)
- [The complete Buku Pi main flow](/en/guide/)
- Repository content copyright notes: `LICENSE-CONTENT.md`.
