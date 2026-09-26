---
title: Pi Release Notes
description: Browse the complete official release notes of Pi Coding Agent by version number, year, type of change, and topic.
aside: false
lastUpdated: false
---

<span class="library-status">RELEASE ARCHIVE · A snapshot of the official release notes</span>

# Pi Release Notes

To find out which version introduced a feature, what changed in a single version bump, or whether an error has been fixed, you no longer have to comb through thousands of lines of changelog paragraph by paragraph.

This page organizes Pi Coding Agent's official `CHANGELOG.md` into a searchable archive. **The version numbers, release dates, and English-language change details all come from the official notes**; only the search tags, categories, and explanations of the five key points are the Buku Pi's own content, and no guess is turned into an official fact. The official changelog currently starts at `0.10.0`, and this page does not invent release content for earlier versions.

<PiReleaseExplorer />

## Data Boundaries and How This Page Is Maintained

- Source of facts: [Pi Coding Agent official changelog](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/CHANGELOG.md). Every release note can be traced back and checked against the corresponding official text.
- The page keeps a verified local snapshot, so building the site does not depend on a browser's temporary requests to GitHub; even with no network, the versions already indexed stay searchable.
- When updating the data, run `npm run sync:pi-releases`, then run `npm run check:releases` and `npm run check`. The page will show the verification date of this snapshot.
- The official English notes are used under the license of the upstream repository; the categories and key-point explanations on this page are content composed by the Buku Pi. The project's license boundaries can be found in the `LICENSE-CONTENT.md` file.

If you plan to upgrade Pi, first read [Updates, logout, and uninstall](/en/guide/lifecycle-management), note the current `pi --version`, then compare it here to check the Breaking Changes and the migration guidance for the target version.
