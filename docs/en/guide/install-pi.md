---
title: Installing Pi and opening it for the first time
description: Choose between the official installer and the npm route, confirm the version, then practice starting and quitting Pi.
prev:
  text: Before installation, set up your terminal and environment first
  link: /en/guide/before-install
next:
  text: Log in to your account so Pi can answer you
  link: /en/guide/connect-model
---

<span class="library-status">MODULE 01 · STEP 02</span>

# Installing Pi and opening it for the first time

The previous lesson already set up your terminal, an empty practice directory, Node.js, and npm. Now do just one thing: make sure the `pi` command opens and closes normally on this computer. Model login and your first task stay in their own verification stages after this.

::: info Windows users
Shortcuts and directories on this page are written for macOS. Windows users should follow the [Mandarin-language Windows installation path](/en/guide/windows-setup) instead, and should not copy this page as-is into Command Prompt or PowerShell; after you finish installation and the first launch through that dedicated path, you will return to Lesson 3.
:::

Linux users use the same installation and verification commands, but copy and paste according to your current terminal shortcuts; if the previous lesson created `~/pi-practice`, the practice directory on this page is standardized to that too. The screenshots on this page capture a Mac environment, so on Linux use the actual command output and Pi's status bar as your reference.

Open a terminal first. If you are not sure where you are, type `pwd` to see at a glance. The first installation command below installs the Pi command this computer can invoke; the directory where you later "run Pi" is what determines which files Pi will see.

## 1. Choose one official installation route

Official Pi currently offers two installation routes for macOS and Linux. Both install the same **Pi Coding Agent**; pick just one, and do not run both methods one after the other.

| Route | Who it suits | Installation command | How to remove it later |
| --- | --- | --- | --- |
| Official installer | Beginners who want the official script to handle environment checks, installation, and PATH | `curl -fsSL https://pi.dev/install.sh \| sh` | Run the installer again and choose uninstall |
| Global npm install | Readers who already manage Node.js/npm and want to use the package manager explicitly | `npm install -g --ignore-scripts @earendil-works/pi-coding-agent` | Uninstall globally through npm |

This book recommends the **official installer** for a first installation. The installer checks for Node.js 22.19.0 or newer and for npm; if the environment is incomplete, it first asks whether you want help installing them. The previous lesson already had you complete that check early, so under normal conditions the installer goes straight into installing Pi.

With your mouse, select **a full line** below and press `Command + C`; click back on the blinking cursor in the terminal, press `Command + V`, make sure the domain is `pi.dev` and there is no extra text, then press Enter.

```bash
curl -fsSL https://pi.dev/install.sh | sh
```

This command downloads and then immediately runs Pi's official installer script. Do not replace the domain with a search result, a cloud drive, or a script address someone sent you. When the installer shows its environment checks and installation actions, read the prompts until they are clear before continuing; if it is about to install a system component you did not plan for, cancel and save the prompt text.

If you explicitly choose the npm route, run the command below and do not run the installer above:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Both routes install a complete terminal application that you later open with the `pi` command. Pi uses basic components such as Pi Agent Core, but you do not need to install the core package separately and then wire up a group of plugins by hand. Skill and Extension are capabilities you add as later tasks require them. For names and hierarchy, see [The difference between Pi and Pi Coding Agent](/en/reference/faq#pi-vs-pi-coding-agent), and for the installation entry point, see the [official Quickstart](https://pi.dev/docs/latest/quickstart).

On the npm route, `-g` installs Pi as a command this computer can invoke directly; `--ignore-scripts` stops dependency packages from running lifecycle scripts during installation. A normal npm install of Pi does not need those scripts.

Once installation starts, the terminal shows checking, downloading, and installation information step by step. This is a normal wait, and you do not need to type anything. Whichever route you chose, a new installation counts as successful only if all three of the following hold at once:

1. A cursor you can type at appears again in the terminal;
2. No installation failure or `npm ERR!` error appears at the end;
3. The `pi --version` command run right after returns a version number.

If the text is still scrolling after a while, just wait; if the text has stopped but the cursor has not come back, do not type the next command right away. On a slow network, the download takes longer than an ordinary command.

After installation finishes, check whether Pi really works.

```bash
pi --version
```

What you type here is `pi --version`, and the series of version numbers that appears afterward is the output. If a version number appears and the cursor returns, rather than `command not found`, it passed. This book does not make a particular Pi version a permanent requirement; both installation routes were verified on 2026-09-23, and from here on refer to the [official Pi Quickstart](https://pi.dev/docs/latest/quickstart).

![Illustration: Si Hitam inspects three wooden crates with a magnifying glass, one labelled for each of node --version, npm --version, and pi --version.](/en/images/01-pi-cek-versi.webp)

The three checks have the same shape on your machine; your version numbers may be newer, and the way to judge them is the same: each command produces output, and the terminal cursor returns after it finishes running. Passing all three confirms that the current environment is installed; it is not evidence of how the first installation went.

### Quick Check

- [ ] The installation command has stopped, and the terminal shows no failure or `npm ERR!`.
- [ ] The `pi --version` command shows a version number.
- [ ] I did not enter `sudo` for the installation, and did not enter my computer account password to work around an error.
- [ ] I remember whether I used the official installer or npm, so that later removal does not mix up the source.

## 2. First launch

Make sure you are still in the practice directory, then run Pi.

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

These three lines run in order. The `pwd` output must end with `/Downloads/pi-practice`; if you used `pi-practice-2` in the previous lesson, the directory name in this command must also be replaced with your own name. Once the path is confirmed, only then type the last line, `pi`.

On first launch, Pi may take a moment to load. When it finishes, you will see an editor area for typing messages, and the status bar at the bottom shows the current directory and the model. You have now entered Pi's interactive interface from an ordinary terminal; do not type the status bar text inside the Pi interface as a terminal command.

If Pi asks you to log in, that does not mean the installation failed. Authentication is handled in the next lesson.

If the directory shown at the bottom is not the practice directory you saw from `pwd`, do not send any task: type `/quit` in Pi, then after returning to the terminal, run the three command lines in this section again.

### Quick Check

- [ ] `pwd` before launch shows the practice directory.
- [ ] The Pi interface already shows the input area and the status bar at the bottom.
- [ ] I have not yet asked Pi to read, create, or modify a file, or to run a command.

## 3. Learning to get back to the terminal

Now pay attention: the `/quit` below is a command **inside the Pi interface**, not one typed in an ordinary terminal. First click Pi's input area, type that command, then press Enter.

```text
/quit
```

Once Pi closes, you return to the original terminal prompt. Now type `pi` once more and press Enter; if the Pi interface can appear again, you can already tell the two states apart, namely "terminal commands" and "commands inside Pi". After this second launch, you can type `/quit` again to get ready for the next lesson.

::: warning When you hit common failures
- If the official installer's environment check fails, save the Node.js, npm, and PATH prompts it shows first; do not immediately switch to npm and repeatedly overwrite the installation.
- If the npm route shows `npm ERR!` or `EACCES`, do not immediately add `sudo`. Wait for the command to finish; then drag and select from the "installation command" through the last error line, press `Command + C` to save the full text, then make sure Node.js comes from an official LTS installation.
- If `pi: command not found` still appears after a successful installation, fully quit the terminal and open it again, then run `pi --version`. Do not change PATH yourself.
- If the network download fails, check the network and then try once more with the same official route as before; do not mix the installer with several package managers.
- If a password prompt suddenly appears in the middle of installation, do not enter it just to continue. Press `Control + C` to stop, save the text on screen, then check whether you accidentally added another command.
:::

## Verifying this lesson

- `pi --version` returns a version number.
- I can run Pi from the practice directory I created myself.
- I can quit with `/quit`, then launch it again.
- I understand that only when the terminal cursor returns is a command truly finished; errors I do not yet understand should be saved in full first, not handled with `sudo` or random commands.

[Next lesson: log in to your account and choose a model →](/en/guide/connect-model)

Finished installing and now need to update or uninstall? See [Lifecycle management after installation](/en/guide/lifecycle-management).
