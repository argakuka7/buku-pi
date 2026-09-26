---
title: 'Pi: Minimal and Performant'
description: The complete English edition of the official Earendil article, “Pi, Minimal and Performant”.
prev:
  text: There Are Many Agent Harnesses, but This One Is Mine
  link: /en/translations/mine-agent-harness
next:
  text: Announcing Pi & Lefos
  link: /en/translations/announcing-pi-and-lefos
---

<span class="library-status">Officially licensed Earendil translation · 06</span>

# Pi: Minimal and Performant

> - **Original title** *Pi, Minimal and Performant*
> - **Author** Earendil `<rfc@earendil.com>`
> - **Publication date** 2026-08-04
> - **Original address** [earendil.com/posts/pi-autoresearch-and-databricks](https://earendil.com/posts/pi-autoresearch-and-databricks/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

## Pi's advantage lies in minimalism

AI has made code cheap. As a result, many companies, chasing better performance, are building ever larger tools: longer prompts, more orchestration, more layers, and more complexity. This also raises the cost of using the tool. Pi chooses the opposite direction.

Pi is a coding Harness that deliberately takes the minimalist path. When you first use it, it has only 4 tools, and its [system prompt](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/src/core/system-prompt.ts#L121-L159) and tool definitions combined total fewer than 1,000 tokens. The idea behind it: most work can be done with basic capabilities; if you need more, build it yourself.

Evidence keeps mounting that Pi's design is not only cleaner, but also cheaper and better performing. Users have found that vanilla Pi can produce industry-leading results even without installing Extensions tailored to their workflows and personal needs. The Databricks and Shopify case studies below both achieved ideal results.

## Case studies

### Databricks: cost per task

Databricks recently shared a piece of research: [Benchmarking coding agents on Databricks' multi-million-line codebase](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase). They wanted to know which coding agent performs best on real programming tasks, and how task performance changes with price.

To avoid the influence of [external benchmarks that are already too saturated](https://arxiv.org/html/2602.16763v3), they built an internal benchmark based on work their team's engineers do frequently. The results matched our expectations, but may surprise many in the industry. According to them, the Harness used to call the model strongly affects cost and quality; in many cases, a simple Harness like Pi performs best on their workloads.

![Cost and task pass-rate comparison on the Databricks coding agent benchmark](/images/translations/databricks-cost-per-task.webp)

*Cost and task pass-rate comparison on the Databricks coding agent benchmark. Graphic: [Databricks](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase). Image used with permission from the original Earendil article.*

With Opus 4.8, xhigh, Pi achieved the highest overall pass rate, yet at a much lower cost than Claude Code and Codex.

#### Minimalist Harness, measurable results

Pi's advantage is that it does not wrap the model in many default settings and instructions, then let it get lost in the [instruction hierarchy](https://openai.com/index/the-instruction-hierarchy/). Pi stays out of the model's way as much as possible, while teams can add exactly what their workflows need.

The Databricks research is very illuminating because it compares models and Harnesses separately.

They report: at the same thinking level, when the same model runs through different Harnesses, cost per task differs significantly—in some cases by more than double—yet quality stays the same. We call this trait Pi's “context discipline”. The context Pi sends each turn is roughly three times smaller; Pi manages context better, keeps a more compact working set, and completes tasks in fewer turns.

We agree that cost analysis must consider the end-to-end economics of engineering, not just the price per token. The same applies at the model level. For example, we observed that running complex workflows with Haiku 4.5 is often more expensive than Sonnet 4.6, especially when code execution is involved. The reason is simple: the former needs more turns to successfully complete a task.

Now we are seeing the same phenomenon at the Harness level: a strong model with a higher unit price paired with a high-performing Harness can be cheaper than the reverse combination.

### Shopify builds Pi Autoresearch: extensibility beats bloat

Minimalism is part of the core of Pi's philosophy. Minimalism works because it is not the same as rigidity. In fact, Pi is one of the first Agent infrastructures built to be extensible and to edit itself, while also being widely used.

Shopify's practice provides another valuable piece of external validation for Pi's design. In a [Shopify Engineering article](https://shopify.engineering/autoresearch), David Cortés explains how he immediately built `pi-autoresearch` as a Pi Extension: simply by asking Pi to “create an Autoresearch Extension”. Pi will read its own Extension documentation, then start building the new workflow from there.

Autoresearch is an autonomous loop that uses a coding agent to perform optimization. After you propose a change, it runs experiments, then figures out which ones worked and which caused regressions. As long as the goal is measurable, it can discard experiments that introduce regressions and keep improving results.

For Shopify and [other users](https://x.com/pidotdev/status/2080616483072225778?s=20), the Autoresearch Extension quickly became an important internal productivity tool. Cases Shopify reported include: unit test speed increased 300 times, the speed of installing React components increased 20%, build times for several projects were reduced, and even pnpm's performance improved.

![The experiment log interface of Shopify's pi-autoresearch project](/images/translations/shopify-autoresearch.webp)

*The experiment log interface of Shopify's `pi-autoresearch` project. Image source: [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch), used with permission from the original Earendil article.*

The important point is that Pi does not build all those tools into its product. What it does is make it very easy for users to build them. Pi does not assume that the vendor understands your workflow best and then try to cram every tool into the product; it assumes that you know yourself best, and hands extensibility to you so you can shape the way you work.

## Why the minimalist path wins today

About a year ago, people could still argue that a built-in Harness had a structural advantage because models were built around it. But that argument is weakening.

Today's leading models are generally able to understand and act in a terminal-style programming environment or something close to it. Anthropic's recent move to cut Claude Code's system prompt by 80% is a clear signal. As a result, the question has shifted from “how native is the Harness to the model” to “how does the Harness manage context, avoid redundancy, and act through clean basic capabilities”. Models need a clear environment interface, and they also need a Harness that does not waste context.

Pi offers exactly those things: less prompt overhead and repeated context, lower operating cost, and fewer unnecessary abstractions. Because Pi is extensible, you do not lose capability; you gain choice. You only add complexity to the system when that complexity “proves itself worth keeping”.

Local models are also advancing rapidly, and Earendil is very optimistic about their potential. Pi's context discipline is especially valuable here. Local models usually have smaller context windows, and [prefill](/en/translations/prompt-caching) can take a long time, so keeping a stable prompt prefix becomes important. Context discipline means not changing the context unless the user explicitly asks for it, thus avoiding re-prefills that can take several minutes.

A minimalist system prompt and default tool set, plus this context discipline, make Pi an ideal Harness for local models.

Pi is proving that it can do all of this at once: cheaper, more minimal, and more efficient.

::: info Translator's note
This document is the complete English edition of the original Earendil text; the case study images from the original article are used with permission from that article and retain credit to the graphic designer and the project source. The versions, benchmark results, and project status in the article refer to the publication date of the original text. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; where anything is ambiguous, the [original English text](https://earendil.com/posts/pi-autoresearch-and-databricks/) is the reference.
:::

## Read next

- [Original English text: Pi, Minimal and Performant](https://earendil.com/posts/pi-autoresearch-and-databricks/)
- [Previous: There Are Many Agent Harnesses, but This One Is Mine](/en/translations/mine-agent-harness)
- [Next: Announcing Pi & Lefos](/en/translations/announcing-pi-and-lefos)
