---
title: 'Mandarin-language Windows path: install and run Pi'
description: First choose between native Git Bash, PowerShell, and WSL, then install and run Pi following the beginner Git Bash path.
prev:
  text: Buku Pi main path
  link: /en/guide/
next:
  text: Log in to your account so Pi can answer you
  link: /en/guide/connect-model
---

<span class="library-status">WINDOWS PATH · First installation and operation</span>

# Mandarin-language Windows path: install and run Pi

You opened Buku Pi on a Windows computer but found that lessons 1 and 2 are full of Mac terminals, `Command` shortcuts, and `/Users/...` paths. Do not convert those commands into Windows format word for word, and do not mix Command Prompt, PowerShell, WSL, and Git Bash all at once.

This Mandarin path first explains the three execution environments on Windows, then pins the first installation to the Git Bash path that is easiest to reproduce. After you pass the verification on this page, go straight on to [Lesson 3: login and model setup](/en/guide/connect-model), then return to the main flow.

## Choose the execution environment first

Pi can run natively on Windows, and it can also run fully inside WSL. What really matters is not “which path is the best”, but that the project files, development Tools, and shell should all sit in one environment you can explain clearly.

| Path | Where Pi and the project live | Suited to | How this book handles it |
| --- | --- | --- | --- |
| Native Windows + Git Bash | Pi, Node.js, and the project mainly live in Windows; command Tools use Git Bash | First installation, files mainly in Windows, wanting the fewest steps | **The default path on this page, with complete practice and verification** |
| Native Windows + PowerShell Tool | Pi is still a Windows process; the default Tool the model faces can be switched to PowerShell | Work that depends on PowerShell modules or native Windows commands | Configure it following the official documentation after the basic path is done, not as a prerequisite for the first installation |
| Full WSL | Pi, Node.js, Git, and the project all live in the chosen Linux distro | Your development environment is already on Linux/WSL, and you are familiar with WSL's file and network boundaries | Install following the Linux path; do not install Pi mixed between Windows and WSL |

If in doubt, choose the first row. Do not, just because the computer already has WSL installed, mix Windows Node.js, WSL npm, Git Bash paths, and PowerShell commands in one and the same installation. Readers who have long developed in WSL can go straight on to the WSL path in the [official Pi Windows guide](https://pi.dev/docs/latest/windows), then use the Linux commands in the following lessons of this book.

::: info The path this page uses
When running natively on Windows, Pi uses **Git Bash** by default. Pi looks in order: a custom Bash path, the default Git for Windows installation location `C:\Program Files\Git\bin\bash.exe`, and finally another `bash.exe` on PATH. This page is for readers installing for the first time, using only the default Git for Windows path, and not configuring Cygwin, MSYS2, WSL, or the optional PowerShell Tool.
:::

Windows readers also start with the “four preparations”: a working Windows computer, a Git Bash terminal, Pi Agent, and one available way to access a model. **You do not need to switch to a Mac or Linux device just to learn Pi, and you do not need to install iTerm2**; iTerm2 is macOS software. The first two items and the Pi installation are handled on this page, while the subscription or API Key is chosen in [the next lesson](/en/guide/connect-model).

If [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/install) is already installed, it can be used as a window interface, but its default configuration usually opens PowerShell. When following this page for the first time, open **Git Bash** directly from the Start menu and make sure you are running the same set of commands; do not copy the Git Bash steps into PowerShell just because the window is called Terminal.

## First tell apart the two input places

This page will have you enter content in two places:

1. **Git Bash window**: enter ordinary terminal commands such as `pwd`, `npm`, `pi`.
2. **Pi's bottom editor area**: enter messages after Pi opens, as well as Pi's internal commands such as `/quit`.

Copying code from a web page still uses `Ctrl+C`. When pasting into Git Bash, you can press `Shift+Insert`, or right-click in the window and choose paste. After pasting, first check the whole line, then press `Enter`; do not enter it together with the example output outside the code box.

If you mistype but have not yet pressed `Enter`, press `Ctrl+C` to cancel the current input. Once a command has started running, do not press keys repeatedly to speed it up.

## 1. Install and confirm Git Bash

Download the installer from the [official Git for Windows site](https://git-scm.com/download/win). When using it for the first time, keep the default installation location; this lesson does not ask you to change the editor, terminal emulator, or other advanced options.

After the installation finishes, close the old terminal. Find and open **Git Bash** from the Windows Start menu. Do not open “Command Prompt”, and do not enter this page's code into PowerShell first.

Run this line by line in Git Bash:

```bash
git --version
bash --version | sed -n '1p'
test -f "/c/Program Files/Git/bin/bash.exe" && echo "PASS: Pi can find the default Git Bash"
```

If it passes, you will see the Git version, the Bash version, and finally one `PASS` line. The version numbers may differ.

If the first two commands show version numbers but the last line produces no output, Git Bash may be installed in another location. This does not mean Git is broken, but this page's default path has not passed. For a first installation, it is better to go back to the default location; only readers who clearly maintain a custom environment should refer to the [official Pi Windows settings](https://pi.dev/docs/latest/windows) to configure `shellPath`.

### Quick check

- [ ] What I opened is Git Bash.
- [ ] `git --version` and `bash --version` both produce output.
- [ ] The default path check shows `PASS`.

## 2. Install and check Node.js

Installing Pi through npm requires Node.js and npm. Download the latest LTS version from the [official Node.js download page](https://nodejs.org/en/download) and finish the installation. After it finishes, close all Git Bash windows, then open a new Git Bash so the new PATH takes effect.

Run:

```bash
node --version
npm --version
```

Both commands must return version numbers, and Node.js must not be lower than `22.19.0`. The minimum version requirement was verified on 2026-09-23; if it changes after a release, follow the [official Pi Quickstart](https://pi.dev/docs/latest/quickstart).

If `command not found` appears, first make sure the Node.js installer has finished, then close Git Bash completely and open it again. Do not copy unfamiliar PATH-modifying commands from the internet, and do not switch back and forth between several Node.js installers.

## 3. Create a practice directory made for Windows

Windows paths are often written `C:\Users\your-username\...`, and Git Bash shows the same location as `/c/Users/your-username/...`. The commands in the following lessons of this book use `/`; this is normal Git Bash notation and does not need to be changed to backslashes.

Create an empty practice directory in Git Bash:

```bash
mkdir ~/pi-practice
cd ~/pi-practice
pwd
ls -A
```

`pwd` must end with `/pi-practice`; `ls -A` shows no file names, which is the sign that the directory is empty. This directory usually corresponds to `C:\Users\your-username\pi-practice` in File Explorer.

If `mkdir` shows `File exists`, do not just use a directory that may still contain old files. Use a new name and remember it:

```bash
mkdir ~/pi-practice-2
cd ~/pi-practice-2
pwd
ls -A
```

::: warning Why not just use your whole user directory
A practice directory makes the scope of the task and its results easier to check, but it is not a security sandbox. Pi's Tools still run with your Windows user permissions. Do not run Pi directly in `~`, the root of the Desktop, the whole Downloads directory, or on top of a repository that contains real work.
:::

## 4. Install Pi and make sure the command works

Still in Git Bash, run the official npm installation command:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Wait for the command to finish and the input line to reappear, then run:

```bash
pi --version
command -v pi
```

The first command must show the Pi version number; the second must show the actual location of the `pi` command that Git Bash found. The installation command was verified on 2026-09-23; after that, follow the [official Pi Quickstart](https://pi.dev/docs/latest/quickstart).

If the installation process shows `npm ERR!`, `EPERM`, or `Access is denied`:

- Do not immediately switch to administrator mode and install repeatedly.
- Wait for the command to finish, and save the full text from the installation command down to the last error line.
- Close any other Pi or Node.js processes that may be running, open Git Bash again, then try once more with only the same official command.
- If it still fails, note `node --version`, `npm --version`, and the full error; do not delete system directories you do not recognize.

If the installation finishes but `pi` shows `command not found`, close Git Bash completely and open it again, then run `pi --version`. If it still fails, save `npm prefix -g` and the error output, then do targeted troubleshooting; do not add to PATH at random.

## 5. First operation from the practice directory

Confirm the current position, then run Pi:

```bash
cd ~/pi-practice
pwd
pi
```

If you are using `pi-practice-2`, replace the directory name in all three places in this lesson with your actual name. After Pi opens, the working directory shown in the bottom status bar must match the `pwd` result from earlier.

The first operation may immediately bring up a login prompt. This means Pi is already running; authentication is postponed to the next lesson. Now enter this in **Pi's bottom editor area**:

```text
/quit
```

After exiting, you should be back in Git Bash. Run `pi` once more to make sure it can open again; after that you can `/quit` again or continue to the next lesson.

## 6. How to follow the rest of the Buku Pi main flow

Starting from the next lesson, Windows users still use Git Bash and follow this fixed set of substitutions:

| What the main flow writes | What Windows Git Bash uses |
| --- | --- |
| `~/Downloads/pi-practice` | `~/pi-practice` |
| `/Users/your-username/...` | `/c/Users/your-username/...` |
| `shasum -a 256` | `sha256sum` |
| `Command+C` / `Command+V` | Copy on the web page with `Ctrl+C`, paste in Git Bash with `Shift+Insert` |

The next practice commands, such as `curl`, `sed`, `find`, and `test`, still run in Git Bash. When Buku Pi writes “a normal terminal”, Windows users should understand it as “Git Bash”.

Pi also provides an optional `powershell` Tool, but that is not a prerequisite for this book's beginner path. Even if that Tool is enabled, `!` and `!!` in Pi's editor area still use Bash. Finish one path first, then decide whether to add a second shell.

## Verifying this page

- I have clearly chosen native Windows + Git Bash, rather than switching shells while working.
- The Git, Bash, and default path checks in Git Bash all pass.
- `node --version` is not lower than the requirement on this page, and `npm --version` produces output.
- I created an empty `~/pi-practice` and can state its Windows path equivalent.
- `pi --version` produces output, and `command -v pi` can find the command.
- I can open Pi from the practice directory, return to Git Bash with `/quit`, and open it again.
- I know how the paths and fingerprint commands in the following lessons have to be replaced.

Once it passes, you no longer need to copy lessons 1 and 2 for macOS; go straight on to login.

[Next lesson: log in and choose a model →](/en/guide/connect-model)

Finished installing and now need to upgrade or uninstall? See [Lifecycle management after installation](/en/guide/lifecycle-management).

### Basis for this page

- [Official Pi Windows settings](https://pi.dev/docs/latest/windows)
- [Official Pi Quickstart](https://pi.dev/docs/latest/quickstart)
- [Git for Windows](https://git-scm.com/download/win)
- [Node.js download page](https://nodejs.org/en/download)

The installation commands, Node.js requirements, and three Windows execution paths were verified on 2026-09-23. If Pi, Node.js, or Git for Windows are updated, check the official pages above first.
