---
title: Recommended Pi Plugins
description: Tidying up plugins, Packages, and companion tools from Pi tweet practice, and offering selection advice based on need, risk, and sources that can be verified today.
prev:
  text: Skill, Extension, and Pi Package
  link: /en/guide/skills-extensions-packages
next:
  text: 'After installation: updates, logout, and uninstall'
  link: /en/guide/lifecycle-management
---

<span class="library-status">PLUGIN GUIDE · Start from needs, not an all-in-one package</span>

# Recommended Pi Plugins

In my tweets, I mentioned many Pi plugins at one point or another. After gathering them all, the most important conclusion is not that "they are all worth installing", but rather: **first explain what you need, then try only the one plugin that comes closest to that need.**

This page reorganizes recommendations scattered across the [tweet archive](/en/tweets/04-skills-extensions), and on 23 September 2026 re-checked project sources, installation entry points, and their main risks. The Pi Package directory changes quickly, so what is presented here is a map of options with verification dates, not a permanent ranking or a must-install list.

::: warning Look at the source code before installing third-party Packages
A Pi Package can run code with the user's current permissions. A name containing `safe`, `permission`, or `sandbox` also does not mean it is automatically trustworthy. First make sure of the repository and its maintainer, then check the source code, dependencies, and permissions; for old recommendations whose sources are unclear, this page does not provide install commands.
:::

## Level 0: Your First Task Without Plugins

If you have not yet finished the [first task](/en/guide/first-task), do not install any third-party Package yet. Plain Pi can already read, write, and edit files and run commands, and it also stores sessions. A first success needs to prove that the working directory, model, file scope, and verification flow are correct, not to prove how many plugins you can install.

"Which plugin must I install" is a question that comes up often in the community, but there is no one set of configuration that suits everyone. Interface packages, Plan Mode, sub-Agents, browsers, and permission systems solve different problems; installing all of them at once makes errors, shortcut conflicts, extra model calls, and permission changes hard to trace back to their cause.

After finishing a task without plugins, use the selection table below to try them one at a time.

## If You Only Want to Pick One First

| Your real need | Which to look at | Why | My advice |
| --- | --- | --- | --- |
| See the model, context, tokens, cost, and Git status at any time | [pi-footer](#pi-footer) | Centralized information, the benefit is felt fastest | **First choice for beginners**; load it temporarily first |
| Want terminal output, Diff, Mermaid, and status to display more fully | [pi-cc-extensions](#pi-cc-extensions) | One package covers many interaction details | Try it separately from other interface-enhancement plugins |
| Want to make a read-only plan first, then allow changes | [pi-plan-mode](#pi-plan-mode) | Only adds one clear stage of work | Better as a second plugin than sub-Agents |
| Want to annotate plans and code diffs in the browser | [Plannotator](#plannotator) | Puts human feedback at a concrete location | Fairly heavy; install it after your usage is stable |
| Want Pi to operate a browser | [Three browser options](#pilih-satu-plugin-browser) | The three differ in how they connect and in their permission limits | **Pick just one**, use a test account first |
| Want dangerous operations to go through rule-based judgment or confirmation | [Permission system](#permission-system) | Adds allow, deny, ask rules | Cannot replace a system container or sandbox |
| Want to hand exploration or review to parallel Agents | [Sub-Agents](#subagents) | Can isolate context and process in parallel | Advanced skill; understand the model and its cost first |
| Want to run repeated experiments automatically to optimize one measurable metric | [pi-autoresearch](#pi-autoresearch) | Suitable for tasks with a clear test command and score | Use only on a separate branch or worktree |
| Want to render diagrams, architecture sketches, or interactive interfaces directly | [pi-generative-ui](#pi-generative-ui) | Suitable for visual results | Check system dependencies first |
| Want to connect to a running Pi from your phone | [remote-pi](#remote-pi) | Remote operation is convenient | Experimental option; first assess relay and credential risk |

If you do not yet know what you are missing, do not install anything yet. Finish the [first task](/en/guide/first-task), hit one concrete recurring problem, then come back here to choose.

::: tip When plugins are already causing trouble, do not keep piling on more installations
For an [Extension that fails to load](/en/reference/troubleshooting#extension-failed), first check the loading location and a clean baseline; if several plugins are failing at the same time, restore them one at a time according to [plugins conflicting with each other](/en/reference/troubleshooting#resource-conflict). During diagnosis, change only one variable at a time.
:::

## Level 1: Interface Enhancements Worth Trying First

### pi-footer: Status bar {#pi-footer}

`pi-footer` centralizes the model, Provider, reasoning level, context usage, tokens, cost, and Git status at the bottom. It is best suited to the situation "I always want to know what Pi is actually using right now and how much context is left".

- Currently verified source: [wobondar/pi-footer](https://github.com/wobondar/pi-footer)
- Suitable for: monitoring daily status, controlling cost, and quickly noticing when the context is too long.
- Note: there is more than one project with the same name, so do not search by name alone when installing.

Try it temporarily first:

```bash
pi -e npm:pi-footer
```

Once you are sure it does not cover the input area and that fonts and icons display normally, then install it permanently:

```bash
pi install npm:pi-footer
```

### pi-cc-extensions: Terminal experience package {#pi-cc-extensions}

`pi-cc-extensions` is more like a collection of interface enhancements: formatted output, rich-text Diff, Mermaid, and context and status displays gathered into one Package.

- Currently verified source: [minuque/pi-cc-extensions](https://github.com/minuque/pi-cc-extensions)
- Suitable for: frequently reading code diffs, diagrams, and long output.
- Note: its scope is fairly broad. First disable the footer plugin, status bar, and other output beautifiers to avoid double rendering or shortcut conflicts.

```bash
pi -e npm:pi-cc-extensions
```

If you are satisfied, run:

```bash
pi install npm:pi-cc-extensions
```

## Level 2: Choose According to the Task

### pi-plan-mode: Lightweight read-only planning {#pi-plan-mode}

`@narumitw/pi-plan-mode` adds a read-only `/plan` stage, so Pi first explores, clarifies, and writes out an executable plan, then returns to normal mode to change files. It suits the situation "the change is fairly large, but does not yet need a browser review interface".

- Currently verified source: [narumiruna/pi-extensions · pi-plan-mode](https://github.com/narumiruna/pi-extensions/tree/main/packages/pi-plan-mode)
- Suitable for: refactors, cross-file changes, and tasks that need to establish boundaries first.
- Note: Plan Mode constrains the current stage of work, not system-level permission isolation; after leaving the planning stage, the actual changes still need to be checked.

Load it once in a test project first:

```bash
pi -e npm:@narumitw/pi-plan-mode
```

Propose only one planning task, make sure it does not change files and that its plan can point out the target files and how to verify them, and only then decide whether to install it permanently.

### Plannotator: Visual planning and code review {#plannotator}

Plannotator adds browser-based plan approval, reply annotations, and code diff review to Pi. It suits larger projects that need "the Agent hands in a plan first, a human gives notes item by item, and only then does it run".

- Currently verified source: [backnotprop/plannotator](https://github.com/backnotprop/plannotator)
- Current Package: [`@plannotator/pi-extension`](https://pi.dev/packages/%40plannotator/pi-extension)
- Suitable for: large changes, review by multiple people, and tasks that need feedback placed on a specific paragraph or line of code.
- Note: it runs a review interface in the browser and adds more operation entry points than pure terminal Plan Mode; when you are just starting to learn Pi, you do not need to install it first.

Try the current npm Package temporarily first:

```bash
pi -e npm:@plannotator/pi-extension
```

Once you are sure the review page in the browser opens, that feedback can return to the current session, and that no unnecessary background processes are left behind after exiting, then install it permanently.

### Browser plugin: pick only one {#pilih-satu-plugin-browser}

These three options are not simply "strong, medium, weak", but three different paths. Do not install all of them at once and then compare, because it will be hard to tell which plugin is controlling the browser.

| Project | Scenario it better suits | Prerequisites and limits | Current source |
| --- | --- | --- | --- |
| `pi-browser-harness` | Everyday web operations, wanting fairly complete capabilities | Browser automation itself can read pages and perform operations; use a test account and a non-sensitive environment first | [amankumarsingh77/pi-browser-harness](https://github.com/amankumarsingh77/pi-browser-harness) |
| `pi-agent-browser-native` | Wanting a lighter native bridge | Requires installing upstream `agent-browser` first, and meeting the Pi version requirements noted by the project | [fitchmultz/pi-agent-browser-native](https://github.com/fitchmultz/pi-agent-browser-native) |
| `pi-chrome` | Wanting to connect to an existing native Chrome | The Chrome extension requires fairly broad permissions such as tabs and scripts; do not connect to the main account you normally use first | [tianrendong/pi-chrome](https://github.com/tianrendong/pi-chrome) |

My order of choice: for ordinary web tasks, look at `pi-browser-harness` first; if you already use `agent-browser`, consider the native bridge; and only when you truly need an existing Chrome session should you consider `pi-chrome`.

Before installing, go into each repository and read its latest prerequisites. When verifying, give it only one page task with no sensitive data, for example: "Open the test page, read its title, do not submit any form."

### pi-generative-ui: Generative interfaces {#pi-generative-ui}

`pi-generative-ui` can render diagrams, architecture sketches, interface sketches, and the like into interactive windows; it suits tasks where "it is better to draw it directly than to explain it in text".

- Currently verified source: [Michaelliv/pi-generative-ui](https://github.com/Michaelliv/pi-generative-ui)
- Suitable for: data diagrams, system architecture, interactive prototypes, and visual explanations.
- Note: runtime dependencies differ for macOS, Linux, and Windows; for Windows in particular, first check the .NET and WebView2 requirements the project lists.

```bash
pi -e npm:pi-generative-ui
```

### pi-autoresearch: Automated experiment cycles {#pi-autoresearch}

`pi-autoresearch` keeps changing, running tests, and recording results around one measurable goal, then keeps the better experiments. It suits problems with a clear measurement method such as performance, accuracy, and build size, but does not suit goals without a scoring standard such as "make the whole project better".

- Currently verified source: [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch)
- Suitable for: experiments that have a fixed test command, a clear metric, and code that can be rolled back.
- Important limit: the project itself recommends running it on a separate branch or worktree and in a clean workspace, and explicitly warns about the risk of full user permissions.

```bash
pi -e npm:pi-autoresearch
```

First run at most three rounds of experiments in a small repository, make sure it leaves an experiment record and does not change files outside the scope, and only then consider a permanent install.

### pi-extension-doctor: Extension diagnostics {#pi-extension-doctor}

`pi-extension-doctor` is a read-only diagnostic tool triggered by a command, for finding extension conflicts and outdated APIs. It does not automatically turn "a broken plugin" into "fixed", but it can help narrow down the search space for the problem.

- Currently verified source: [dmae97/pi-extension-doctor](https://github.com/dmae97/pi-extension-doctor)
- Suitable for: having installed many Extensions and seeing load errors or behavioral conflicts.
- Note: the current package requires Node.js 22.19.0 or newer; first check your engine version and the project's latest explanation.

```bash
pi -e npm:pi-extension-doctor
```

### remote-pi: Remote control {#remote-pi}

`remote-pi` lets a phone or another device connect to Pi remotely; it suits monitoring long tasks or continuing operations when away from the computer.

- Currently verified source: [jacobaraujo7/remote_pi](https://github.com/jacobaraujo7/remote_pi)
- Suitable for: users who already understand sessions, permissions, and the risks of remote access.
- Note: remote solutions may go through external networks or relay services. Read the repository's data flow, authentication method, and security explanation carefully; do not try it right away in a session that holds production credentials.

```bash
pi -e npm:remote-pi
```

The official SSH Extension, `pi-mobile`, Pi Web, and `tmux + Tailscale` also appeared in tweets, but each of them is an official example, a client, or a remote workflow, so they should not be mixed with ordinary Packages into one "plugin ranking list".

## Level 3: Permission Systems and Sub-Agents, Install Last

<a id="permission-system"></a>

### @gotgenes/pi-permission-system: Permission rules

`@gotgenes/pi-permission-system` can set `allow`, `deny`, `ask`, and similar rules for tool, Shell, MCP, Skill, and sub-Agent operations; it suits users who already know which actions they want to intercept.

- Currently verified source: [gotgenes/pi-permission-system](https://github.com/gotgenes/pi-permission-system)
- Current Package: [`@gotgenes/pi-permission-system`](https://pi.dev/packages/%40gotgenes/pi-permission-system)
- Suitable for: adding reviewable confirmation and denial rules to a stable workflow.
- Important limit: the permission plugin itself also runs inside the Pi process, so it cannot be an operating-system security boundary, and cannot replace a separate account, container, or virtual machine.

If you are only worried that your first task will change files by mistake, use an empty practice directory, Git, and manual verification first. Load a permission system temporarily only after you can write one clear rule together with its test; do not trust something just because its package name contains `permission`.

<a id="subagents"></a>

### Sub-Agents: Install Last

Sub-Agents can put exploration, implementation, or review into a separate context, and can also run tasks in parallel. In the community there are several implementations with similar names but different interfaces, scheduling methods, and persistence capabilities; they all also generate extra model calls, and may use a default model different from your main session.

- One solution that is still active today: [tintinweb/pi-subagents](https://github.com/tintinweb/pi-subagents)
- Suitable for: subtasks that can be explained and verified independently, and whose parallel processing really shortens the time.
- Not suitable for: a first task, vaguely scoped goals like "make the whole project good", and situations where you do not yet understand model cost and session context.

Before installing any sub-Agent, you must make sure of four things: which Provider and model it calls by default; whether it is allowed to run in the background; which tools the subtasks can use; and how to find the actual results after a failure or a stop. The Buku Pi continues the discussion of dividing responsibility in [How sub-Agents divide work](/en/guide/subagents), rather than giving an unconditional "must install" answer on this page.

## Mentioned in Tweets, but No Install Command Given Yet

The following names have appeared in old tweets:

- `safe-coder`
- `pi-permission-gate`
- `pi-protected-paths`
- `pi-sandbox`
- `pi-permission-modes`
- `pi-browser-cdp-extension`

The needs they represent are still important: limiting dangerous commands, protecting sensitive paths, isolating the execution environment, and controlling the browser. However, this round of verification did not map each name uniquely to a current source that can still be confirmed. Only the search trail is kept here; install commands are not given directly based on old tweets.

If the goal is security, use the operating system's account permissions, a separate test directory, a Git branch or worktree, a container, and Pi's built-in Project Trust and resource-disabling parameters first. Third-party "security plugins" can only be an additional layer, not a replacement for these boundaries.

## These Are Standalone Skills or Tools, Not Plugins

Tweets also recommended Skills such as `browser-tools`, `brave-search`, `youtube-transcript`, `gmcli`, `gdcli`, and `transcribe`. Skills mainly provide work explanations and companion resources; they may call tools, but they are not the same as an Extension that runs inside the Pi process.

Meanwhile, Pi Desktop, Pi Web, `pi-mobile`, Steel Browser, and `tmux + Tailscale + Pi` are clients, browser services, or combined workflows. They all have value, it is just that they should not be managed with the same "installing a plugin" method. First read [Skills, Extensions, and Pi Packages](/en/guide/skills-extensions-packages), then decide which kind of capability you actually need.

## Full Table of Projects Mentioned in Tweets

So that the names in the original notes are not scattered and lost, here is a search index organized by theme. **"Already recorded" only means it was once mentioned in a tweet; it does not mean this page has confirmed its current installation source.**

| Theme | Projects appearing in tweets | How this page handles it |
| --- | --- | --- |
| Interface and context monitoring | `pi-footer`, `pi-cc-extensions`, `pi-generative-ui`, `pi-context-view` | The first three already have current sources; `pi-context-view` is awaiting re-checking |
| Browser and web | `pi-browser-harness`, `pi-agent-browser-native`, `pi-chrome`, `pi-browser-cdp-extension`, `pi-web-access` | The three browser Extensions have been tidied according to their paths; the last two are kept for now as historical traces |
| Planning, sub-Agents, and workflows | `pi-plan-mode`, `pi-subagents`, Plannotator, `pi-autoresearch`, `pi-extension-doctor` | Plan Mode and Plannotator have been separated by weight; sub-Agents are only given as advanced candidates and checked before installation |
| Remote control | `remote-pi`, `pi-telegram`, Pi Web, `pi-mobile`, official SSH Extension | Only `remote-pi` is treated as an experimental Package; the rest are tidied separately as clients or remote solutions |
| Context compaction | `pi-smart-compact`, `pi-context`, `pi-press`, Hypa | Kept in the [context tweets](/en/tweets/03-sessions-context), a separate horizontal test will be made later |
| Long-term memory | `pi-memory`, `pi-hermes-memory`, `pi-honcho`, `pi-hindsight` | These are high-impact capabilities; for now we do not directly recommend installing based on feature descriptions alone |
| Security and permissions | `@gotgenes/pi-permission-system`, `safe-coder`, `pi-permission-gate`, `pi-protected-paths`, `pi-sandbox`, `pi-permission-modes` | Only the first one's current source is confirmed; the other names remain historical traces and are not installed based on old tweets |
| Fun and specialized software | `pi-arcade`, `pi-unity` | Kept as ecosystem case studies, not included in the first install list for beginners |

This table also explains why a "Top 20 plugins" cannot simply be made: long-term memory, remote control, browser, and permission plugins all significantly expand the data and execution boundary, so they need their own hands-on testing and threat review.

## Installation and Verification: Go Through These Five Steps

1. **Make sure of the source**: open the repository, check the maintainer, the last update, the README, the license, the dependencies, and the install string.
2. **Load it temporarily first**: if it supports an npm Package, prefer `pi -e npm:package-name`, do not install it permanently right away.
3. **Do just one test**: give it a single observable task in an empty directory or a test project, and do not connect a production account.
4. **Check the side effects**: make sure new files, network connections, browser permissions, shortcuts, and the interface do not go beyond expectations.
5. **Only then decide to keep it**: use `pi install` only if there is lasting value; if it is not needed, remove it with the same source string.

Common management commands:

```bash
pi list
pi install npm:pi-footer
pi remove npm:pi-footer
```

For the full limits on installing, updating, disabling, and deleting local data, see [Lifecycle management after installation](/en/guide/lifecycle-management). The official rules and Package security warnings refer to the [Pi Packages documentation](https://pi.dev/docs/latest/packages).

## How I Will Keep Maintaining This List

Whether a project is still maintained, the install string, and the dependencies can all change. The current sources on this page were last verified on **23 September 2026**. Each time it is updated, I will note separately:

- **Practice assessment from tweets**: why it was recommended at the time, and what problem it solved.
- **Current source verification**: whether the repository is the only one, whether the installation method still applies, and whether it has been maintained recently.
- **Buku Pi advice**: who it better suits today, how best to try it, and under what conditions you should not install it.

That way, the tweets keep a real timeline, while the recommendation page serves to offer choices that can be acted on today.
