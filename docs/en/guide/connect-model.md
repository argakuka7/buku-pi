---
title: Log in to your account so Pi can answer you
description: Complete the first authentication, choose an available model, and run one connectivity test with no file operations.
prev:
  text: Installing Pi and opening it for the first time
  link: /en/guide/install-pi
next:
  text: Enter the practice directory and confirm the basic settings
  link: /en/guide/ready-to-work
---

<span class="library-status">MODULE 01 · STEP 03</span>

# Log in to your account so Pi can answer you

Pi provides an interactive interface and file tools, but what actually produces replies is the model service you choose. So after installing Pi, you still need to connect one service you can already use.

Before you start, you need to already have one usable credential: a subscription login that is currently officially supported, or an API Key that has been activated on the relevant model service. A chat-product account alone, which does not include API usage quota, may not be able to call models in Pi. Subscription login may open a browser; the API Key route is usually billed by the model provider according to usage.

::: warning Confirm the cost first, then log in
**A subscription is not the same as an API, and being able to log in does not mean calls are free.** Subscription authentication, plan quota, extra usage, and API balance rules differ for each Provider; on some routes, even when authorized with a subscription account, calls inside a third-party Harness can still incur a separate charge. Do not infer Pi's costs from a "subscribed" label on a chat product page.
:::

::: info Windows users
If you just finished the [Mandarin-language Windows installation path](/en/guide/windows-setup), then "ordinary terminal" in this lesson and the next means Git Bash. Replace `~/Downloads/pi-practice` below with the `~/pi-practice` you already created; commands such as `/login` and `/model` in Pi's edit area do not change.
:::

## Choose your model access method first: official API and subscription

The prices and access routes below were verified on **September 14, 2026**. These four options suit different needs; choose one you can use until the practice succeeds. Model lists, prices, quotas, and promotions can change, so open the relevant official page again to check before paying.

**Recommendation note:** These are my personal choices based on upfront cost and how Pi connects, with no sponsorship, commission, or other conflict of interest with the service providers below; every link in this piece points to an official page and contains no referral link of mine.

### DeepSeek official API · pay as you go

Suited to readers who want to start with a single Chinese model and pay for actual usage. Open the API on the [official DeepSeek Platform](https://platform.deepseek.com/), create a Key, and make sure it has a balance; Pi already has the `deepseek` Provider built in, so you can choose DeepSeek in `/login`, enter the official Key, then use `/model` to see the models currently available. The [official Pi connection guide](https://pi.dev/docs/latest/providers) lists `DEEPSEEK_API_KEY`. This is **not a monthly subscription**: calls are billed by input and output tokens; whether the cache hits, which model you use, and peak and off-peak hours all affect the price. The [official DeepSeek pricing page](https://api-docs.deepseek.com/quick_start/pricing) is updated over time, so check the current balance and billing rules before your first test.

### ChatGPT Plus · $20/month

Suited to readers who mainly want to use OpenAI's Codex models while also using ChatGPT. The [official OpenAI price](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) is $20/month. Pi supports the **ChatGPT Plus/Pro (Codex)** option in `/login`, but which models you can choose depends on the current account and Pi's model list; you cannot say that "the entire GPT series can be used in Pi". Plus also does not cover OpenAI API usage, which is billed separately. [See the Pi connection guide](https://pi.dev/docs/latest/providers)

### OpenCode Go · $10/month

Suited to readers who want to use a variety of coding models at a lower monthly cost. The [official Go explanation](https://opencode.ai/docs/go/) lists $10/month; Pi already has the `opencode-go` Provider built in, and you log in with a Go API Key. The current list includes GLM, Kimi, Qwen, DeepSeek, MiniMax, MiMo, as well as GPT, Grok, and others, so it cannot be summed up as "all Chinese models". Each model's monthly usage limit differs; the 5-hour and weekly windows each use at most 20% and 50% of that model's monthly limit. [See the Pi connection guide](https://pi.dev/docs/latest/providers)

### Command Code GOAT · $10/month

Suited to readers who are willing to configure a custom Provider and want to move among many models. The [official GOAT explanation](https://commandcode.ai/docs/plans/goat) lists $10/month; its [Provider API](https://commandcode.ai/docs/provider) can use the models and quota inside the plan. Pi has no built-in GOAT login item, so you need to connect it through the [Pi custom-model guide](https://pi.dev/docs/latest/models) to a compatible API. Its list includes both Chinese open models and some GPT, Gemini, Grok, and other models. Officially it lists a 5-hour usage window of $14 and a weekly window of $35; how much you can use each month still depends on the model you choose.

**How to choose:** If you want to use Chinese models and pay only for actual usage, look at the DeepSeek official API first; if you want to use OpenAI's Codex models while also using ChatGPT, look at ChatGPT Plus first; if you want to try a variety of coding models at a lower monthly cost, consider OpenCode Go; if you are willing to configure the interface yourself and also need GOAT's model list, then consider Command Code GOAT. "Can be used intensively" only means that some plans have a certain amount of usage room, **not that calls are unlimited**; for APIs paid by usage, you must watch the balance and your spending yourself. On the first try, still check the account quota and whether extra billing is enabled.

For OpenCode Go's "invite others and get $5" promotion, no fixed campaign terms can currently be found on the [official Go explanation](https://opencode.ai/docs/go/) they publish publicly, so it is not counted in the prices or quotas above. If your account shows an invitation campaign, follow the reward type, claim conditions, and validity period listed in the dashboard at that time; using a quota reward is not the same as a discount on the monthly fee.

## 1. Choose one login method

First determine your route with the table below. Do not rush to activate a paid service you do not yet understand just because a model in the list looks more capable.

| Access route you already have | Entry point in Pi | What you must confirm before starting |
| --- | --- | --- |
| A subscription currently listed as supported by official Pi | The related Provider's subscription/OAuth login | Whether your subscription tier qualifies; whether calls in Pi use plan quota, extra usage, or another balance |
| Already subscribed and issued an API Key, or already have API balance; that Provider is built into Pi | Choose the related Provider's API Key in `/login` | Which account this Key belongs to; its billing, balance, or limit; how to revoke the Key |
| The plan provides a compatible API, but Pi does not have that Provider built in (for example GOAT) | First see the [Pi custom-model guide](https://pi.dev/docs/latest/models); this lesson's login menu has no ready-made entry | Whether the plan opens the API, how to configure the Key, whether the models are included in the plan, and its usage limits |
| You only have an ordinary chat-product account | Do not proceed yet | Whether that account really includes a model access route supported by Pi |
| You have neither, or cannot be sure | Do not proceed yet | Read the current Provider documentation first; do not top up a balance blindly just to finish the tutorial |

Before connecting, complete three checks first:

1. State clearly whether you are using "subscription authentication" or an "API Key"; do not just say "I have an account".
2. Check the billing or quota status in the relevant service provider account; the prices above are only a selection reference that lists a verification date, not a substitute for the payment page and account balance.
3. Set this lesson's stopping condition as one connectivity test with no files. Before the cost is confirmed, do not start a long task, and do not try several models one after another.

If you already quit Pi after the previous lesson, enter the practice directory again in the terminal.

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

If in Lesson 1 you used a different practice directory name, first replace `pi-practice` in that command. Make sure `pwd` ends with your actual practice directory name. If you use a Provider built into Pi, after entering Pi type:

```text
/login
```

This `/login` command is typed in the **edit area at the bottom of Pi**, not after returning to an ordinary terminal. Once typed, press `Return`. When the menu appears, use the up and down arrow keys to move between items, press `Return` to select, and press `Esc` to go back to the previous layer or cancel.

![Illustration: Si Hitam stands in front of four doors holding a key, choosing one; the doors are labelled cara login, API resmi, and langganan.](/en/images/02-pi-cara-login.webp)

This is only the selection entry point, so nothing is sent yet. You can move between the account-login and API Key routes; confirm the one you want before selecting it. Real keys, verification codes, and any account information must never be visible to others.

Follow the interface prompts to choose one route, and complete only the one you already confirmed.

- If you already have a supported subscription, choose the matching service, then complete login by following the browser authorization flow. A successful browser authorization only proves that the credential was returned, not that later calls will not incur cost.
- If you already have an API Key, choose the matching service, and enter it only in Pi's local login interface. An API Key is a calling credential, not free quota; the real cost and limits are set by the account that owns the Key.

If any step asks you to write the Key into a project file, a chat input area, a screenshot, or ordinary terminal command history, press `Esc` to cancel and do not paste it. This lesson accepts only Pi's local authentication entry or an officially stated environment-configuration method.

Some login methods open the browser automatically. After you finish confirming in the browser, return to the original terminal window. The login flow has returned only once Pi's input area appears again in the terminal. Do not close the whole terminal just because the browser shows "success".

Subscriptions, API Keys, and the rules for officially supported providers can change, so use [Pi Providers](https://pi.dev/docs/latest/providers) as your reference, and keep reading the billing documentation of the service provider you choose. The existence of a chat-product account does not mean that account necessarily includes the model access permissions Pi needs.

::: danger Never publish credentials
Never paste a real API Key into a chat, a tutorial, a screenshot, or a GitHub repository. If you suspect a key has leaked, immediately revoke the old key in the service provider's dashboard and create a new one.
:::

## 2. Choose a model available to the current account

Once connected, type:

```text
/model
```

Move with the up and down arrow keys, then press `Return` to select a model. Once the list closes and you are back in the edit area, look at the status bar at the bottom and make sure the current model name is shown.

![Illustration: Si Hitam turns one of five dials on a panel, labelled pilih model and akun aktif.](/en/images/03-pi-pilih-model.webp)

The picker shows only the models available from the Providers currently configured. That list changes with the account and over time, so confirm the current item before selecting it, and after selecting still return to the bottom status bar to double-check the model name.

If you want it to persist on the next launch, press `Ctrl+S` in the model picker to save it as the startup default. Do not treat one model name in a tutorial as the only correct answer; model names, availability, and billing can all change.

## 3. Run one connectivity test with no file operations

Return to the edit area and send this sentence:

```text
Reply only with “Pi is connected”. Do not read, create, or modify any file, and do not run any command.
```

After pasting it into Pi's bottom edit area, press `Return`. The interface may first show that it is thinking or waiting on the network; do not resend at that point. Wait until the model actually returns text and the bottom edit area can be typed in again; only then is this round over.

Only a complete "Pi is connected" reply counts as passing. A generic opening greeting, or merely seeing a "login successful" notice, cannot prove that the current model completed this actual call.

If Pi is about to read or write a file or run a command, press `Esc` to stop it. This test does not need any tool.

::: warning No reply received
- If you do not see any available model, for a built-in Provider go back to `/login` and check authentication; for a custom Provider, check the model configuration first.
- If the status bar does not change after you select a model, cancel the current operation first and open `/model` again to check; do not switch providers one after another.
- If the test request does not come back for a long time, press `Esc` first to stop this round, save the model name in the status bar and the error text, then check the network and that service's status.
- If an `unauthorized`, balance, or quota error appears, save the original text and check the current account permissions.
- If the browser authorization does not return to Pi, cancel this login, confirm the account in the browser, then try again.
- If you cannot tell where the error is, copy the whole section from the first error line to the bottom input area, but cover up the API Key, email address, and personal paths first.
:::

## Verifying this lesson

- I can state clearly whether this time I used subscription authentication or an API Key, and I have looked at the quota or billing status of the relevant account.
- I have completed authentication through `/login`, or configured one usable custom Provider.
- The status bar at the bottom shows the current model.
- The test replies with exactly "Pi is connected", and with no tool calls.

[Next lesson: get ready to work in the right directory →](/en/guide/ready-to-work)
