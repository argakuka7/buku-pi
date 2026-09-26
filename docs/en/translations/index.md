---
title: Earendil's Officially Licensed Translations
description: The complete English edition of eleven Earendil articles on Pi, Agent Harness, code quality, and the company's vision, published under an official Earendil license.
prev:
  text: Reference Guide
  link: /en/reference/
next:
  text: The Session You Cannot Take With You
  link: /en/translations/session-portability
---

<span class="library-status">Officially licensed translations · AUTHORIZED TRANSLATIONS</span>

# Earendil's Officially Licensed Translations

Here you will find the complete English edition of eleven Earendil articles on Pi, Agent Harness, session mechanics, code quality, and the company's vision. All eleven translations are officially licensed by Earendil and rendered in full, faithful to the original text.

Every page keeps the original title, author, publication date, and a link to the original text, and also includes:

> Adapted and translated with permission from Earendil.

The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans); copyright in the original English texts belongs to Earendil.

## Recommended reading order

The first six articles are closest to the Pi learning path: first understand sessions, context compaction, and the cache, then get to know the Harness, and understand Pi from two angles — that of a non-engineer and a performance case study. Articles seven through ten record the background of Pi joining Earendil, along with Earendil's long-term vision for software that is trustworthy and personal. The eleventh article examines how the quality of AI code is judged.

| What you want to understand now | Read this first | When you are done, come back to |
| --- | --- | --- |
| Why Pi is designed this way | “What is an Agent Harness?” “This harness is mine” | [Introduction](/en/guide/introduction), [How Pi works](/en/guide/how-pi-works) |
| Why long conversations lose detail | Three articles: session portability, compaction, and prompt cache | [Module three](/en/guide/context-and-compaction), [Compaction experiment](/en/cases/compaction-before-after) |
| If an Agent can already run, is the code good enough | “Measuring code sloppiness” “Pi: minimal yet efficient” | [Code repair](/en/cases/code-repair), [Capstone project](/en/cases/graduation-project) |
| You want to know the background of the author and the company | Announcement, reflection, the high ground, an invitation to correspond | Optional reading, not a prerequisite for installation |

If you want to read the four themes — sessions, compaction, cache, and the Harness — as a connected series, you can continue with [connected reading: Why Pi Keeps Sessions and Context in Your Hands](/en/journey/why-pi-keeps-context-editable). This is a personal analysis and is not part of the eleven licensed translations below.

### 01 The Session You Cannot Take With You

**Original title** *The Session You Cannot Take With You*

**Publication date** 2026-07-30

It discusses why a local transcript no longer equals an intact session once that session depends on provider-stored IDs, encrypted text, managed search, and hidden Agent messages, and what a genuinely portable inference API must provide.

[Read the licensed translation](/en/translations/session-portability) · [View the original English text](https://earendil.com/posts/session-portability/)

### 02 How Compaction Works in Pi

**Original title** *How Compaction Works in Pi*

**Publication date** 2026-08-13

Starting from the LLM context window, it explains when Pi triggers compaction, how a compaction request produces a handover summary, and why compaction resets the prompt cache.

[Read the licensed translation](/en/translations/compaction-in-pi) · [View the original English text](https://earendil.com/posts/compaction-in-pi/)

### 03 Prompt Caching in Agents

**Original title** *Prompt Caching In Agents*

**Publication date** 2026-07-22

It explains the KV cache, session affinity, prefix matching, tool configuration, and TTL, and how a cache hit affects latency, price, and the design of a coding Agent.

[Read the licensed translation](/en/translations/prompt-caching) · [View the original English text](https://earendil.com/posts/prompt-caching/)

### 04 What Is an Agent Harness?

**Original title** *What is a Harness?*

**Publication date** 2026-08-20

Through the analogy of a climbing harness, it explains the system prompt, tools, the Agent loop, and the model conversion layer, and why users can own and change their own Harness.

[Read the licensed translation](/en/translations/what-is-a-harness) · [View the original English text](https://earendil.com/posts/what-is-a-harness/)

### 05 There Are Many Agent Harnesses, but This One Is Mine

**Original title** *There are many agent harnesses, but this one is mine.*

**Publication date** 2026-09-01

A non-engineer tells how he grew from being too embarrassed to ask about technical terms to using Pi to tidy his inbox and build small tools, until the way it worked truly became his own.

[Read the licensed translation](/en/translations/mine-agent-harness) · [View the original English text](https://earendil.com/posts/there-are-many-agent-harnesses-but-this-one-is-mine/)

### 06 Pi: Minimal and Performant

**Original title** *Pi, Minimal and Performant*

**Publication date** 2026-08-04

Using the Databricks and Shopify case studies, it discusses Pi's context discipline, cost per task, and why “minimal yet extensible” can produce higher efficiency.

[Read the licensed translation](/en/translations/pi-minimal-performant) · [View the original English text](https://earendil.com/posts/pi-autoresearch-and-databricks/)

### 07 Announcing Pi & Lefos

**Original title** *Announcing Pi & Lefos*

**Publication date** 2026-04-08

Earendil announces the acquisition of Pi, Mario Zechner joining the team, and Lefos entering public Alpha.

[Read the licensed translation](/en/translations/announcing-pi-and-lefos) · [View the original English text](https://earendil.com/posts/announcing-pi-and-lefos/)

### 08 A Reflection on Our Announcement Today

**Original title** *A Reflection on our Announcement Today*

**Publication date** 2026-04-08

Armin and Colin look back at Earendil's starting point and explain the long-term principles and shared trust behind Pi, Lefos, and the early backers.

[Read the licensed translation](/en/translations/announcement-reflection) · [View the original English text](https://earendil.com/posts/announcement-reflection/)

### 09 The High Ground

**Original title** *The High Ground*

**Publication date** 2026-02-12

It discusses the changes in software and computing from 2026 to 2031, and proposes that the high ground of the future lies at the intersection of capability, customization, personalization, pleasure, simplicity, and trust.

[Read the licensed translation](/en/translations/the-high-ground) · [View the original English text](https://earendil.com/posts/the-high-ground/)

### 10 An Invitation to Begin a Correspondence

**Original title** *An Invitation to Begin a Correspondence*

**Publication date** 2026-01-18

Earendil invites readers to join a long-term correspondence about software, human autonomy, and understanding through open writing and email.

[Read the licensed translation](/en/translations/invitation) · [View the original English text](https://earendil.com/posts/invitation/)

### 11 If Coding Is Solved, What Now?

**Original title** *If coding is solved, what now?: Measuring the sloppiness of code*

**Publication date** 2026-09-10

Starting from metrics such as line count, verbosity, and erosion, it discusses why AI code that is functionally correct can still make a codebase slowly worse; and, with the help of multi-turn coding evaluation, it explains the limits of automated assessment and why human intuition and taste remain irreplaceable.

[Read the licensed translation](/en/translations/measuring-code-sloppiness) · [View the original English text](https://earendil.com/posts/measuring-code-sloppiness/)

::: info A note on translations and licensing
Copyright in all eleven original English texts belongs to Earendil. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) with a license from Earendil. These translations try to remain faithful to the structure, views, examples, images, and links of the original texts; where anything is ambiguous, the corresponding original English text prevails. Companion images from the original texts are used under each article's license, and credits to photographers, graphic designers, or project sources are retained in the translation.
:::
