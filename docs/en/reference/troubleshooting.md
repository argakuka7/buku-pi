---
title: Pi troubleshooting guide
description: Narrow down Pi problems step by step based on symptoms such as startup, models, Extensions, Skills, Sessions, unresponsiveness, Context, and plugin conflicts.
prev:
  text: Pi Frequently Asked Questions (FAQ)
  link: /en/reference/faq
next:
  text: Glossary of Popular AI and Agent Terms
  link: /en/reference/glossary
---

<span class="library-status">TROUBLESHOOTING · Narrow the scope by symptom</span>

# Pi troubleshooting guide

This is not an encyclopedia of error codes, and it does not start from knowledge categories like “Session, Context, Extension”. First find the symptom right in front of you, then handle it along one and the same path: **preserve the initial state → check the minimum requirements → build a clean baseline → restore one variable at a time → stop when the stop condition is reached.**

Content concerning current commands and behavior was verified on **September 11, 2026**, with the Pi version on this machine at `0.80.10`. If the actual output is inconsistent, prefer `pi --help` on your machine and the [latest official Pi documentation](https://pi.dev/docs/latest).

::: warning Do not do this first
Do not immediately reinstall, empty `~/.pi/agent/`, delete Sessions, run `pi update --all`, or disable a whole batch of plugins you do not remember yourself. These actions change the initial state and make the original problem harder to trace; the authentication directory can also contain private sessions and credentials.
:::

## Determine in one minute which layer the problem is in

| Visible symptom | Go to section |
| --- | --- |
| A normal terminal shows `command not found`, or the Pi interface cannot be opened at all | [Cannot start](#cannot-start) |
| Pi opens, but the model list is empty, the target model is missing, or a request reports an authentication error | [Model missing](#model-missing) |
| At startup, errors appear for `.ts`, imports, tool or command registration | [Extension failed to load](#extension-failed) |
| A Skill is visible but never runs, or `/skill:name` does not exist | [Skill not triggered](#skill-not-triggered) |
| `pi -c` and `pi -r` cannot find the original task | [Session not found](#session-missing) |
| The interface is open, but after sending there is no new content for a long time | [Suddenly not responding](#not-responding) |
| Context is near its limit, compaction fails, or important requirements are forgotten after compaction | [Context full](#context-full) |
| Fine when enabled individually, but errors appear or behavior changes when enabled together | [Plugins conflict with each other](#resource-conflict) |
| Pi reads the wrong directory, changes files outside the boundary, or “claims to be done” but the files are wrong | [Unusual file and tool results](#wrong-files) |

### Creating a minimal baseline

Many problems need to start by answering one question: **without project resources or automatically discovered resources, can Pi still run normally?**

Run this in a normal terminal:

```bash
pi --no-approve --no-extensions --no-skills --no-context-files \
  --no-prompt-templates --no-themes --verbose
```

This command is only for troubleshooting. It temporarily ignores project resources, Extensions, Skills, context files, prompt templates, and themes, but it is not a sandbox and will not fix anything.

- The baseline also fails: check the installation, Node, the terminal, authentication, or the Provider first.
- The baseline works: the problem more likely comes from the project directory, a Session, or one of the extra resources.
- A failure appears only after restoring one resource: the scope is now narrowed to that resource or its combination with the current environment.

## 1. Why can't Pi start? {#cannot-start}

**Symptoms you see**

- A normal terminal shows `pi: command not found`.
- `pi` produces output, but exits before reaching the interactive interface.
- The interface hangs during startup, with an error mentioning Node, a module, configuration, or a resource path.

**What to check first**

First distinguish between “the system cannot find the command” and “Pi started but failed to initialize”. Do not treat Pi's edit area as a normal terminal, and do not change PATH at random based on old tutorials.

```bash
pwd
command -v node
node --version
command -v pi
pi --version
pi --help
```

Windows users run these commands in the Git Bash agreed on in this book. If `command -v pi` produces nothing, the problem has not reached inside Pi; go back to [Installing and running Pi](/en/guide/install-pi) to check the installation method and the current official requirements.

**How to narrow the scope**

If `pi --version` works but the interactive interface cannot be opened, first run the [minimal baseline](#creating-a-minimal-baseline) on this page. If it still hangs at the network stage during startup, try once more:

```bash
pi --offline --no-approve --no-extensions --no-skills \
  --no-context-files --no-prompt-templates --no-themes --verbose
```

`--offline` is only used to assess whether network operations during startup play a part. Being able to open offline does not mean Provider calls are necessarily fine, and do not jump to the conclusion that “the network is the only cause”.

**When to stop**

- The error asks for system permission escalation, changes to system directories, or running an unknown installation script.
- You plan to delete the entire configuration directory just to “try things out”.
- The origin of Node or Pi cannot be determined, and the error concerns a replaced executable.

Save the version, the full error, the terminal type, and the path from `command -v`, then ask for help.

## 2. Why doesn't the model show up? {#model-missing}

**Symptoms you see**

- The `/model` list is empty, or the model mentioned in a tutorial is not there.
- A model can be selected, but after sending, a message appears saying not logged in, unauthorized, quota insufficient, or model unavailable.
- The Provider has released a new model, but it does not appear in the local directory.

**What to check first**

First separate three things: whether the model is in the directory, whether credentials are currently present, and whether the account actually has permission to call that model. Simply installing Pi does not automatically give you models or quota.

```bash
pi --list-models
pi --list-models keyword
pi update --models
```

The first two commands only inspect the current directory; the third refreshes the model directory, not Pi itself. Then run Pi, and in the edit area use `/login` to check the Provider and `/model` to select again.

**How to narrow the scope**

| Common result | More likely direction |
| --- | --- |
| `--list-models` does not include the target Provider at all | Model directory or custom Provider configuration |
| The list includes the model, but it is not available in `/model` | Current Provider, scope filters, or authentication status |
| A request returns 401 / 403 | Credentials, subscription, or account permissions; prefer the original error from the Provider |
| A request returns 429 | Quota, rate limits, or concurrency limits; do not immediately retry many times |
| A request returns 404 / model not found | Model ID, region, Provider, or a stale directory |
| A request times out or returns 5xx | Network, proxy, or Provider service status |

The meaning of status codes can differ between Providers, and this table only points you in a direction. Confirm the cost before testing a paid model; never paste an API Key into a chat, a screenshot, a project file, or command arguments.

**When to stop**

- The login page, callback domain, or Provider origin is untrusted.
- Retries keep incurring costs, or the 429 has not recovered.
- You would need to copy `auth.json`, a full Token, or an API Key to continue asking for help.

## 3. Why does the Extension fail to load? {#extension-failed}

**Symptoms you see**

- Startup output shows a failure to load a particular `.ts` / `.js` file.
- A command or tool registered by the Extension does not appear.
- After loading, Pi can run, but an error appears when calling a custom tool.

**What to check first**

First save the **full file path and the first exception** in the error. An Extension executes code inside the Pi process, so the problem can come from the discovery path, Project Trust, an import, a dependency, a version, or runtime logic.

```bash
pi --no-extensions --verbose
pi --no-extensions -e ./path/to/extension.ts --verbose
```

The first command checks “whether Pi can run without Extensions”; the second turns off automatic discovery and loads only the target file explicitly.

**How to narrow the scope**

- Works without Extensions, but explicit loading fails: the problem is now narrowed to that file, its dependencies, or compatibility with the current Pi.
- Explicit loading works, but automatic discovery fails: check the global and project discovery locations, settings, Packages, and Project Trust.
- Startup works, and only tool execution fails: save the input and error of that Tool Call; the problem is in the execution path, not in “not loading”.
- It fails only after `/reload`: restart to do a cold load, then distinguish between the reload state and the file itself.

Use `pi list` to see registered Packages, and `pi config` to see which Extensions are enabled. Do not run `pi update --all` first just for troubleshooting; updating many Packages at once introduces more variables.

**When to stop**

- The origin of the Extension is unclear, or it asks for credentials, system permissions, file deletion, or sending data outside.
- The error points to dependency installation, but you have not reviewed `package.json` and the install scripts.
- The problem disappears after disabling the Extension, but re-enabling it repeatedly produces out-of-bounds writes or dangerous commands.

## 4. Why isn't the Skill triggered? {#skill-not-triggered}

**Symptoms you see**

- You think the task should match a Skill, but Pi does not read it.
- `/skill:name` does not exist.
- The Skill is read, but its result is not followed as instructed.

**What to check first**

First distinguish between “not found”, “found but not selected automatically”, and “loaded but its execution deviates”. Make sure the real entry point is `SKILL.md`, with frontmatter that has at least a valid `name` and a non-empty `description`.

```bash
test -f ./path/to/skill/SKILL.md
sed -n '1,40p' ./path/to/skill/SKILL.md
pi --no-skills --skill ./path/to/skill/SKILL.md --verbose
```

`--no-skills` turns off automatic discovery, but an explicit `--skill` still loads the given path. Once inside Pi, `/skill:name` can be used to force the Skill to be read; automatic matching does not guarantee it will always trigger.

**How to narrow the scope**

- `/skill:name` does not exist: check the path, frontmatter, naming rules, and startup warnings.
- The command exists, but the task does not trigger it automatically: the `description` may not describe the use case accurately, or the model chooses not to read it; verify first with an explicit command, and do not immediately change the description to “applies to all tasks”.
- The Skill is read but its script is not found: check whether relative paths are based on the Skill directory, and whether its companion files are complete.
- A duplicate-name warning appears: Pi keeps the same-named Skill found first; first confirm which source is actually loaded, then deal with the collision.

**When to stop**

- The Skill tells you to run an unreviewed script, install dependencies, read credentials, or access directories outside the task.
- You are about to write a broad description covering every task just to raise the trigger rate.
- You cannot determine which same-named Skill is currently loaded.

## 5. Why isn't the Session found? {#session-missing}

**Symptoms you see**

- `pi -c` does not open the task you just worked on.
- A session name you know does not appear in the `pi -r` or `/resume` list.
- After the project is moved, renamed, or you switch computers, old sessions no longer appear.

**What to check first**

Pi Sessions are organized by working directory by default. `pi -c` continues the latest Session from the **current project**, not the latest chat overall.

```bash
pwd
pi -r
```

In the picker, `Ctrl+P` shows paths and `Ctrl+N` shows only named Sessions. After entering a candidate session, use `/session` to check the file, ID, message count, Tokens, and cost; if you picked the wrong one, just exit — do not keep writing.

**How to narrow the scope**

- Return to the original directory where the Session was created, then run `pi -r`.
- If you know the Session file or ID, use `pi --session <path or ID>` to open it precisely.
- If you used `--no-session` at the time, that conversation was indeed never saved.
- If you used `--session-dir` at the time, you must return to the same directory setting or provide the specific Session path.
- When a repository is moved or renamed, old Sessions may still exist; they are just not automatically mapped to the new path.

**When to stop**

- You are about to edit the JSONL directly to “fix” the session tree.
- The session contains private prompts, credentials, or client data, but you are about to upload the whole thing publicly.
- The path and name are not confirmed, but you are about to delete many old Sessions at once in the picker.

## 6. Why has it suddenly stopped responding? {#not-responding}

**Symptoms you see**

- After sending, there is no text for a long time, but the status bar still shows it is working.
- It is stuck on a single tool call, network request, or Compaction.
- The interface is still operable; only the current Session is no longer moving forward.

**What to check first**

First wait a reasonable time for the current tool to finish, then press `Esc` once to stop this turn. `Esc` can stop unfinished work, but it cannot undo file writes, commands, publishing, or sending data outside that have already happened.

After it stops, immediately note down: the current model, the last Tool Call, the last visible error, whether any files have changed, and whether this request may incur costs.

**How to narrow the scope**

Run a minimal test that saves nothing, uses no tools, and uses no extra resources:

```bash
pi --no-session --no-tools --no-extensions --no-skills \
  --no-context-files --verbose
```

Send only one short sentence; do not let it read files or run commands.

- The minimal request also gets no reply: check authentication, network, proxy, Provider status, and quota first.
- The minimal request works, but an old Session does not: check the Context, the Session history, or that particular model.
- Works without tools, but hangs as soon as tools are enabled: trace the last Tool Call and the external process.
- Works without Extensions: continue to [Extension troubleshooting](#extension-failed) or [Conflict troubleshooting](#resource-conflict).

**When to stop**

- The same request may incur costs, but you have already retried it repeatedly.
- The last action involved deployment, deletion, payment, or sending data outside, and the outcome status is unknown.
- An external command may still be running in the background while you are about to rerun the same task.

Check the real system status independently first; do not equate “the interface is not replying” with “the action did not happen”.

## 7. Why is the Context full? {#context-full}

**Symptoms you see**

- Context usage in the status bar is approaching the limit.
- Pi automatically starts Compaction, or `/compact` fails.
- After compaction it can still continue, but the initial requirements, the original error text, or the file status are missed.

**What to check first**

First write the facts that must not be lost into a checkpoint in the project: the goal, what is forbidden, what is done, the actual file changes, the original failure text, and the single next step. Do not let important status live only in a chat that is about to be compacted.

In Pi, use `/session` to view the current Session information; when you need to compact, use:

```text
/compact
```

Compaction requires a model to produce a summary. It rebuilds the next Context from the summary and the most recent messages, does not undo changes on disk, and does not guarantee that every old detail is kept word for word.

**How to narrow the scope**

- Several unrelated tasks got mixed together before compaction: create a new named Session and reread the checkpoint; this is usually clearer than compacting again and again.
- A single tool's output is very large: next time read only the parts you need, save long logs to a file, and pull out the key lines.
- `/compact` itself fails: save the error; check whether the current model is usable and whether the request can still call the Provider.
- After compaction a requirement was missed: ask Pi to reread the initial requirements and the checkpoint, then restate them one by one; do not paper over the problem with a long new explanation.

**When to stop**

- The summary has lost safety boundaries or forbidden actions, while the next step has side effects.
- Repeated compaction still cannot accommodate one very large input or tool result.
- You cannot explain which source is trustworthy: the files on disk, the Session history, or the current Context.

## 8. Why do plugins conflict with each other? {#resource-conflict}

**Symptoms you see**

- Two Packages work when enabled individually, but fail when run together.
- A same-named command, tool, or Skill points to an unexpected source.
- After loading a new plugin, the System Prompt, model, tool choices, or interface behavior change.

**What to check first**

Do not update all plugins first. First note the resource combination at “the last time it worked”, then look at what is currently registered:

```bash
pi list
pi --no-approve --no-extensions --no-skills --no-context-files \
  --no-prompt-templates --no-themes --verbose
```

If the clean baseline works, start from zero and add one resource explicitly at each step:

```bash
pi --no-extensions -e ./one-extension.ts --no-skills --verbose
pi --no-skills --skill ./one-skill/SKILL.md --no-extensions --verbose
```

**How to narrow the scope**

1. Fix the same directory, Pi version, model, and test task.
2. Test A first, then B, then A+B.
3. Record which resources are actually loaded at each startup and the first behavioral difference.
4. Only if A and B each work alone but A+B fails is there evidence of a “conflict”.
5. Once the source is clear, `pi config` can be used to pause one resource inside a Package; change only one switch at a time.

Same-named Skills can collide over discovery order and name; Extensions can also register same-named commands, tools, or event handlers. Do not guess capabilities from the Package name alone; check whether what is actually loaded is an Extension, a Skill, a template, or a theme.

**When to stop**

- The origin, version, or actual code of either resource cannot be determined.
- The conflict involves command interception, permission control, credentials, deployment, or deletion protection.
- You would need to delete the entire Package directory, the global configuration, or all caches to keep experimenting.

## 9. Why does it read the wrong file, change the wrong directory, or “finish” without results? {#wrong-files}

**Symptoms you see**

- Pi answers with some content, but the target file does not exist or has not changed.
- Changes appear in another project with the same name.
- The Agent says its tests pass, but when you rerun them in a normal terminal they fail.
- After `Esc` you think the action was cancelled, when in fact the file has already changed.

**What to check first**

Go back to the real environment; do not ask the Agent itself whether it is done:

```bash
pwd
git status --short
git diff --check
git diff
```

If it is not a Git project, open the target file directly and check the modification time, contents, and output path. Then review the Tool Calls that actually happened in the Session, not just the final summary.

**How to narrow the scope**

- `pwd` is wrong: stop the current Session, go back to the correct directory, then create or restore the task.
- The status includes files outside the scope: save the diff first, distinguish pre-existing changes from this round's changes, and do not do a mass restore.
- The Agent reports success but there is no command output: run the checks the project defines yourself in a normal terminal.
- The local file is correct but the online one is not: continue checking the deployment version, build directory, cache, and official URL; passing locally does not mean passing online.

**When to stop**

- It turns out credential files, user directories, or repositories outside the task were read or changed.
- The final status of publishing, payment, deletion, or message sending cannot be determined.
- For recovery, you are about to use a destructive command that overwrites an entire repository or user directory.

## Preparing a minimal evidence package before asking for help

Do not just send “it is broken” or a screenshot that happens to cut off the error. Copy the template below and fill in only the parts relevant to the problem:

```text
Symptoms:
Expected result:
Operating system and terminal:
Pi version (pi --version):
Node version (node --version):
Current directory (pwd; private parent path segments may be masked):
The actual startup command (remove Keys and Tokens):
First full error:
Can the minimal baseline run:
Result when only the target resource is enabled:
Provider and model name (do not provide credentials):
Session name or ID (do not upload an entire private Session):
File changes or external status that have already happened:
```

A good evidence package lets others judge whether the problem belongs to installation, the Provider, a Session, the Context, or an extra resource, and it also keeps you from repeating actions that already failed and may have side effects.

## Global stop conditions

If any of the following situations arise, stop automatic retries and let a human confirm first:

- Credentials, payment, quota, or account permissions are unclear;
- The final status of deletion, overwriting, publishing, or sending data outside is unknown;
- The origin of an Extension or Skill is unclear, but it asks you to run code or install dependencies;
- The actual path goes outside the task directory, or file changes appear whose origin cannot be traced;
- The same request keeps incurring costs, keeps returning 429, or the external service is still processing;
- The fix demands clearing authentication, Sessions, the entire configuration directory, or the entire repository;
- You have no way to save the current error, its diff, and its recovery point.

## References and further reading

- [Pi Using Pi: commands, tools, and resource parameters](https://pi.dev/docs/latest/usage)
- [Pi Providers: login, directories, and credential resolution](https://pi.dev/docs/latest/providers)
- [Pi Sessions: storage locations, the picker, and precise recovery](https://pi.dev/docs/latest/sessions)
- [Pi Compaction: triggers, summaries, and Context rebuilding](https://pi.dev/docs/latest/compaction)
- [Pi Skills: discovery, explicit loading, and validation](https://pi.dev/docs/latest/skills)
- [Pi Extensions: discovery locations, permissions, and error handling](https://pi.dev/docs/latest/extensions)
- [Pi Packages: viewing, filtering, and disabling resources](https://pi.dev/docs/latest/packages)
- [Permissions, isolation, and verification](/en/guide/safety)
