---
title: If Coding Is Solved, What Now? — Measuring Code Sloppiness
description: 'The complete English edition of the official Earendil article, “If coding is solved, what now?: Measuring the sloppiness of code”; it discusses how to measure verbosity, erosion, and accumulation in AI-generated code.'
prev:
  text: An Invitation to Begin a Correspondence
  link: /en/translations/invitation
next:
  text: Earendil's Officially Licensed Translations
  link: /en/translations/
---

<span class="library-status">Officially licensed Earendil translation · 11</span>

# If Coding Is Solved, What Now? — Measuring Code Sloppiness

> - **Original title** *If coding is solved, what now?: Measuring the sloppiness of code*
> - **Author** Sebastian, Earendil `<sebastian@earendil.com>`
> - **Publication date** 2026-09-10
> - **Original address** [earendil.com/posts/measuring-code-sloppiness](https://earendil.com/posts/measuring-code-sloppiness/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

LLMs are now nearly perfect at producing code, but that is not where the problem ends. Code that is structurally correct is not necessarily free of unnecessary abstractions, duplication, or bad decisions overall. This is not a new observation: most people who have built a project through vibe coding have already found that each added feature sometimes makes the number of lines of code (LOC) balloon quickly.

This weakens human autonomy, because on projects that grow by millions of lines of code every month, humans struggle to keep up.<sup id="fnref-1"><a href="#fn-1">1</a></sup> Some people might say that this is not a problem at all, because they believe their Agent can handle it. I have bad news: Agents actually cannot truly handle this kind of sloppy code either.

My background is in physics, so I am used to taking an experimental and quantitative approach when solving problems. When I first joined Earendil, my task was to figure out how to measure the level of code sloppiness. My first instinct was to survey the relevant literature, then see what other companies were doing.

Honestly, aside from a few very insightful research papers, I was disappointed to see how much this industry still operates “by feel”. During my research and on X, I kept seeing promotions like “end-to-end coding agents”, “AI that not only suggests code but also ships it to production”, or “human-level evaluation without the cost of humans”. Like all well-packaged stories, those claims also contain some truth.

LLMs are indeed capable of writing code that is **almost** entirely correct. This is because code has properties that can be scaled and verified. Asking an LLM to produce code, then checking it with hidden tests, is fairly straightforward and produces a clear reward signal. By contrast, judging the “sloppiness level” of code like that often demands human intuition and taste, and is generally very difficult. I think the best way to explain why is to go through the possible measurement methods one by one.

**Let AI be the judge:** This is probably the most common method in the industry for assessing code quality, but in my observation it rarely works. The most naive approach is to ask a model to rate code quality on a scale of 1 to 10; this is essentially equivalent to a random number generator. A subtler approach is to hand option A and option B to a judge model, then ask it to decide which option it prefers; but the problem is that after swapping the A/B labels or the presentation order of the two options, [the model's preference can change](https://arxiv.org/pdf/2604.16790). I sound a little cynical here, and the effect is not so noticeable on larger models, but the core problem still holds. Letting an LLM judge code it wrote itself cannot replace genuinely reliable evaluation. Although directions such as scoring rubrics or asking an LLM to write tests are interesting efforts, they are all still far from actually eliminating sloppy code.

**Let humans judge AI:** If we set aside the fact that software engineers vary widely in ability, this would be the best way to ensure code stays readable by humans. The drawback is that, both for training AI and for building large benchmarks that span many model providers and Agent Harnesses, this approach does not scale.<sup id="fnref-2"><a href="#fn-2">2</a></sup>

**The simplest method:** In my research and testing, measuring the direct change in lines of code turned out to be a very effective indicator of sloppiness. Ironically, as soon as we start optimizing for it specifically, the indicator [loses its meaning as a measure](https://en.wikipedia.org/wiki/Goodhart%27s_law).

The next two metrics come from the paper [SlopCodeBench](https://arxiv.org/html/2603.24755v1#A7). Both distinguish well between established codebases and sloppy LLM code, so they look promising.

**Verbosity:** Seeks to measure the proportion of duplicated lines of code and unnecessarily long lines of code.<sup id="fnref-3"><a href="#fn-3">3</a></sup>

<div class="translation-formula" dir="ltr">
  <code>Verbosity = |AST-Grep flagged lines ∪ clone lines| / LOC</code>
</div>

That is, the numerator is the number of lines in the union of AST-Grep flagged lines and duplicated lines of code, while the denominator is all lines of code.

**Erosion:** Seeks to measure how much of a codebase's mass is concentrated in a few large, complex functions.

<div class="translation-formula" dir="ltr">
  <code>mass(f) = CC(f) × √SLOC(f)</code>
</div>

Here, `f` represents a function, SLOC is the number of source lines of code, and `CC(f)` is the function's [cyclomatic complexity](https://ieeexplore.ieee.org/document/1702388).

<div class="translation-formula" dir="ltr">
  <code>Erosion = Σ<sub>f: CC(f) &gt; 10</sub> mass(f) / Σ<sub>f</sub> mass(f)</code>
</div>

The erosion rate is: the proportion of the total mass of functions with cyclomatic complexity above 10 to the total mass of all functions.

If the code produced during the SlopCodeBench evaluation is compared with the average verbosity and erosion of a set of established codebases, the difference is striking. The average verbosity of established codebases is `0.15 ± 0.06`, while Agent code is `0.33 ± 0.10`. For erosion, established codebases are `0.31 ± 0.17`, while Agent code is `0.68 ± 0.20`. On average, Agent code's verbosity and erosion are roughly double those of human code. After that, I also examined several of my own projects built with vibe coding; many of them had verbosity as high as `0.4` and erosion as high as `0.75`. So these results are very likely not merely an artifact of the evaluation method.<sup id="fnref-4"><a href="#fn-4">4</a></sup>

To return to the question of why Agents cannot truly handle sloppy code on their own, we need to look at how SlopCodeBench evaluates. Other coding benchmarks usually give the Agent a complete list of instructions up front, then set up a set of hidden tests to judge whether the program meets the requirements; SlopCodeBench does the opposite. This benchmark sets up multiple turns of instruction iteration and testing, and clears the model's context between different checkpoints. This is closer to the iterative process humans go through when actually using a coding agent. As a result, bad programming decisions keep accumulating over time. Measured by a complete end-to-end completion standard, namely “all test results across all checkpoints must meet the requirements”, even the most advanced models have a full end-to-end success rate of `0%`.<sup id="fnref-5"><a href="#fn-5">5</a></sup> For those who happily add tens of thousands or even hundreds of thousands of lines of code every day, this should be a warning signal. Of course, the usual caveats still apply, such as tests that may be too strict, or certain problem descriptions that are somewhat ambiguous; but the overall trend still holds.

I hope that after understanding these metrics, you can see more clearly why judging the sloppiness of code is so difficult, and why human intuition and taste still enter the evaluation process, both implicitly and explicitly.

There are still several promising directions worth pursuing, such as the degree of coupling between functions, the volume of code changes, cohesion, and so on. If you also research evaluation and are willing to talk, I would be glad to discuss: [`sebastian@earendil.com`](mailto:sebastian@earendil.com)

## Footnotes

1. <span id="fn-1">This reminds me of a saying: “Measuring progress in programming by lines of code is like measuring progress in building an airplane by its weight.”</span> [Back to the main text](#fnref-1)
2. <span id="fn-2">I do not want to force anyone to review millions of lines of code just to get a ranking of model providers that keeps changing.</span> [Back to the main text](#fnref-2)
3. <span id="fn-3">The rules here are a set of human-made heuristics implemented through [AST-Grep](https://ast-grep.github.io/), which once again shows that a human factor is involved.</span> [Back to the main text](#fnref-3)
4. <span id="fn-4">However, there is one well-known open project that “relies heavily on feel” and does not score too high on these two metrics; this may be because the coupling between its functions is very high, and/or the large number of unrelated functions lowers its average.</span> [Back to the main text](#fnref-4)
5. <span id="fn-5">Not yet tested on Fable 5.1 or Astra; already tested on models such as GPT 5.6 sol xhigh.</span> [Back to the main text](#fnref-5)

::: info Translator's note
This document is the complete English edition of the original Earendil text. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; where anything is ambiguous, the [original English text](https://earendil.com/posts/measuring-code-sloppiness/) is the reference.
:::

## Read next

- [Original English text: If coding is solved, what now?: Measuring the sloppiness of code](https://earendil.com/posts/measuring-code-sloppiness/)
- [Previous: An Invitation to Begin a Correspondence](/en/translations/invitation)
- [Back: The list of officially licensed translations](/en/translations/)
