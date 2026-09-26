---
title: 'After installation: updates, logout, and uninstall'
description: Manage versions, authentication, Packages, and local Pi data safely; understand the difference between updating, logging out, uninstalling, and a full cleanup.
prev:
  text: Enter the practice directory and confirm the basic settings
  link: /en/guide/ready-to-work
next:
  text: 'Your first task: learn how to verify it first'
  link: /en/guide/first-task
---

<span class="library-status">MAINTENANCE PATH · Lifecycle after installation</span>

# After installation: updates, logout, and uninstall

Pi is now usable as normal, but sooner or later you will run into these questions: when a new-version notification appears, should you update? If you switch model accounts, do you have to reinstall? After uninstalling, are the old sessions and API Key still there?

These are not the same actions. Updating changes the program version; logging out handles the authentication Pi has stored; uninstalling only removes the `pi` command; you decide for yourself whether your local sessions, settings, and Packages are kept.

Before updating, you can open [Pi release notes](/en/releases/) and enter the current or target version to check new features, Breaking Changes, migration notes, and fixed issues. The version archive helps you understand the differences, but the actual update still follows the recovery point and verification steps on this page.

::: danger One thing that is most easily misunderstood, remember it first
According to Pi's current official documentation, uninstalling Pi **does not** automatically delete `~/.pi/agent/`. This directory can contain authentication information, sessions, settings, and Packages you have installed. Seeing `pi: command not found` is not proof that credentials and history are gone from the computer.
:::

This page also covers the official installer that Buku Pi currently uses and the npm path. To update Pi itself, you can always use `pi update`; when uninstalling, you have to go back to how you installed it in the first place. On Windows, when you see “a normal terminal”, you still have to open Git Bash.

## Decide first what you want to accomplish

| Your goal | Action to take | What does not happen automatically |
| --- | --- | --- |
| Use a new Pi version | `pi update` | Does not update all Packages at the same time |
| Only refresh the model catalog | `pi update --models` | Does not upgrade Pi itself |
| Update installed Packages | Run `pi list`, review, then `pi update --extensions` | Does not mean Pi itself has been updated |
| Switch accounts or remove credentials stored by Pi | Use `/logout` inside Pi | Does not uninstall the program or delete sessions |
| Stop using Pi for now but keep the history | Uninstall Pi the way you installed it, keep `~/.pi/agent/` | Does not automatically clean up local data |
| No longer keep Pi data on this computer | Log out and take inventory first, then handle the data directories separately | You cannot rely on the uninstall command alone |

If you are not sure, stop first at the “check the version and take inventory” stage. Check commands will not change your settings.

## 1. Leave a recovery point before updating

Do not update while Pi is changing files, running a build, or waiting for a model reply. Finish the task in progress first, type `/quit` in Pi's editor area, then return to the normal terminal.

If the current directory is a Git repository, first confirm through your normal workflow that important changes are committed or have another backup. The Pi update command only takes care of Pi; it does not create a recovery point for your project.

Record the current version and the installed Packages:

```bash
pi --version
pi list
```

Note the version number in a temporary note. `pi list` shows the Packages registered in your user settings and in the current project settings; those Packages can contain Extensions that run code, so do not update everything all at once without checking.

Then confirm whether Pi's local data directory exists, but do not print the authentication contents inside it:

```bash
test -d ~/.pi/agent && echo "FOUND: Pi local data directory exists"
ls -la ~/.pi/agent
```

`ls` is only for confirming file and directory names. Do not run `cat ~/.pi/agent/auth.json`, and do not put the contents of `auth.json` into screenshots, chats, tickets, or Git repositories.

### Verification before updating

- [ ] Pi's current task is finished, and I have returned to the normal terminal.
- [ ] Important changes in the project already have a recovery point.
- [ ] I recorded `pi --version` before the update.
- [ ] I have looked at `pi list` and do not mistake a foreign Package for Pi itself.

## 2. Update only Pi itself

A regular update uses:

```bash
pi update
```

According to the current official documentation, `pi update` by default updates only Pi itself, the same purpose as `pi update --self`. This command does not automatically upgrade all installed Packages.

After the command finishes and the input line reappears in the normal terminal, check:

```bash
pi --version
```

The new version number may change, or it may stay the same because you are already on the latest version. Do not judge success only by “lots of download text appeared”; what matters is that the update command produces no error and `pi --version` can still run.

Then run Pi from a separate practice directory and do one minimal connectivity test:

```bash
cd ~/Downloads/pi-practice
pi
```

Windows Git Bash replaces the directory with `~/pi-practice`. Once inside Pi, send:

```text
Reply with just “Connection is normal after the update”. Do not read, create, or modify files, and do not run any commands.
```

If you receive the exact reply, it means authentication and model calls are working right now. If the test fails, first save the full error and the version numbers before and after the update; do not immediately reinstall, clear settings, and switch Provider; check one variable at a time.

::: warning `--force` is not an everyday update button
`pi update --self --force` will still try to reinstall when you are already on the latest version. It suits clear repair scenarios, not a mandatory part of a regular update. Pi also explains that the experimental installer management mode does not support `--force`; such an installation has to be repaired by running the matching installer again.
:::

## 3. Distinguish Pi updates, the model catalog, and Packages

Pi currently provides the following scopes:

| Command | Actual scope | When to use it |
| --- | --- | --- |
| `pi update` | Updates only Pi | Routine upgrade of Pi itself |
| `pi update --self` | Updates only Pi | When you need to state the scope explicitly |
| `pi update --models` | Refreshes only the model catalog | When the Provider already supports a new model, but the local picker has not shown it yet |
| `pi update --extensions` | Updates installed Packages and checks pinned Git references | When the source and the changes in the Package have been confirmed one by one |
| `pi update --all` | Updates Pi and Packages | When `pi list` has been reviewed and you are ready to verify everything at once |

A Package can contain Extensions, Skills, Prompt Templates, and themes. The Extensions inside it can run code with the user's current permissions, and a Skill can also direct the model to take actions. Before updating a third-party Package, first confirm its source, current version, contents of the update, and how to roll it back.

The default order for beginners should be:

1. Run `pi update` first and verify Pi itself.
2. When you need a new model catalog, run `pi update --models` separately.
3. Only when truly necessary, look at `pi list` and then handle Packages one by one.
4. Do not make `pi update --all` your first reaction when you see an update notification.

## 4. Switching accounts or logging out

If you only want to switch model accounts, you do not need to uninstall Pi. Enter Pi, then type in the editor area at the bottom:

```text
/logout
```

Choose the Provider whose credentials you want to delete, following the interface. When you are done, you can log in to another account with `/login`, then pick an available model with `/model`.

Pi explains that tokens or API Keys stored through `/login` live in `~/.pi/agent/auth.json`, and that `/logout` is used to remove credentials. Do not open this file just to copy or manually edit part of the JSON; a format broken by manual editing will also affect other Providers.

::: warning Environment variables are another credential source
If you have ever set an API Key in your shell configuration, the system environment, or a startup script, `/logout` will not change that external configuration. Pi's current credential resolution order covers command-line arguments, `auth.json`, environment variables, and custom Provider configuration. Being able to call a Provider after logout does not necessarily mean `/logout` failed; it may be that the external environment still provides credentials.

Do not check with a command like `echo $OPENAI_API_KEY`, because that will print the real key on screen and in logs. Check only the variable name and which configuration location it comes from; if it needs to be revoked, revoke the old Key in the backend of the relevant service provider.
:::

If a computer is lost, an account has problems, or a key may have leaked, deleting the local file alone is not enough. You have to revoke the token or API Key in the service provider's backend, then create new credentials.

### Verify the logout

- `/logout` has been done for the correct Provider.
- I have not printed `auth.json` or the key contents.
- If switching accounts, after logging in again with `/login` it has been verified with one real reply.
- If the old credentials may have leaked, I have revoked them in the service provider's backend, not just cleaned local files.

## 5. Uninstall Pi the way you installed it, but keep your settings and sessions

Exit Pi first with `/quit`, then return to the normal terminal. Choose one uninstall path based on your notes from installation; if you are not sure, do not run both commands at once.

If you installed through the official installer, run the same official entry point again and choose uninstall in the menu:

```bash
curl -fsSL https://pi.dev/install.sh | sh
```

Before executing, confirm once more that the domain is `pi.dev`. The installer will check the current installation and offer the matching actions; read the menu and choose only uninstall.

If you installed globally through npm, uninstall with the same package manager:

```bash
npm uninstall -g @earendil-works/pi-coding-agent
```

After the command finishes, check whether `pi` can still be found:

```bash
if command -v pi >/dev/null 2>&1; then
  echo "CHECK: pi is still found, confirm how it was installed"
else
  echo "PASS: the pi command has been removed"
fi
```

If `pi` is still found, do not go on to delete directories. First run `command -v pi` to determine whether it comes from another Node.js version, another package manager, or an old installation location.

After uninstalling through any path, `~/.pi/agent/` is kept by default. When you reinstall later, your old settings and sessions can usually still be used; after reinstalling, still run `pi --version`, and use `/resume` to truly confirm that the sessions you need exist.

If Pi was installed through pnpm, Yarn, or Bun, remove it with the same package manager. Do not run all four commands at once just for a “clean uninstall”.

## 6. Decide how far local data is kept

After uninstalling the program, decide the following separately:

| Location | What it may contain | Common decision |
| --- | --- | --- |
| `~/.pi/agent/auth.json` | OAuth token or API Key | Handle it first with `/logout`; do not put it in ordinary backup packages |
| `~/.pi/agent/sessions/` | Sessions stored per working directory | Keep it if you need to continue or archive |
| `~/.pi/agent/settings.json` | User settings such as the default model, theme, and Packages | Usually kept when preparing to reinstall |
| `~/.pi/agent/npm/`, `git/` | User-level Pi Package files | Only handle it when the related Package is no longer used |
| `~/.pi/agent/models-store.json` | Model catalog cache | Can be refreshed again; not the same as authentication credentials |
| `.pi/` inside a project | Project settings, resources, or local Packages | Part of the project scope; does not disappear automatically because of a global uninstall |

For a first cleanup, this page does not provide a single `rm -rf ~/.pi/agent` command to delete the whole directory. A safer order is:

1. Do `/logout` one Provider at a time in Pi, and make sure the locally stored authentication is no longer needed.
2. Take inventory of names with `pi list` and `ls -la ~/.pi/agent`, without reading credential contents.
3. Back up `sessions/` and the settings notes you actually need separately; do not put `auth.json` into an unencrypted archive, a cloud share, or Git.
4. Use the operating system's trash or Recycle Bin for Pi data you no longer need, so there is still a chance to recover from a mistaken deletion.
5. Finally, check `.pi/` in the project directory; the global directory and project resources are two different scopes.

If your goal is only to “get back to something close to a fresh installation”, rename the old directory first and confirm the new environment works, instead of deleting permanently right away. This action will make Pi temporarily unable to see old settings, authentication, and sessions; do it only when you have finished taking inventory and making backups.

## 7. Complete the lifecycle verification in full

Check each item according to the actions you actually took; you do not have to actually uninstall the Pi you are using just to complete this lesson.

- **Update only:** The version before and after the update is recorded, `pi --version` works, and you receive at least one real reply.
- **Update Packages:** Check `pi list` first, then re-verify the related Extension, Skill, or theme after the update, not just whether the command succeeded.
- **Logout:** The correct Provider has been logged out, the key is not printed; after switching accounts, a real call has been made.
- **Uninstall the program only:** `command -v pi` no longer finds the command, and you know for sure whether `~/.pi/agent/` was kept.
- **Ready to clean up data:** You have told apart authentication, sessions, settings, Packages, and the project's `.pi/`; back them up or move them to the trash first, and do not run opaque whole-directory deletion commands.

**Updates, logout, uninstall, and data deletion are four independent decisions. Each time you complete one action, verify it with matching evidence.**

[Continue to lesson 5 and finish your first real task →](/en/guide/first-task)

### Basis for this page

- [Pi Quickstart: installation and uninstall](https://pi.dev/docs/latest/quickstart)
- [Pi Packages: update scopes and Package management](https://pi.dev/docs/latest/packages)
- [Pi Providers: login, logout, and credential locations](https://pi.dev/docs/latest/providers)
- [Pi Sessions: where sessions are stored](https://pi.dev/docs/latest/sessions)
- [Pi Settings: settings and update checks](https://pi.dev/docs/latest/settings)

The installer, the npm uninstall method, and the storage locations on this page were verified on 2026-09-23. When you use them, still rely on the latest official documentation and `pi --help` on your computer.
