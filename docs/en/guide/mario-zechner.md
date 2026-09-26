---
title: 'Prologue: Meet the author of Pi, Mario Zechner'
description: From libGDX and RoboVM to Pi and Earendil, a timeline of how Mario Zechner's experience made its way into Pi's design.
prev:
  text: Guidelines and notes for the 2026 open learning edition
  link: /en/guide/edition-2026
next:
  text: Before installation, set up your terminal and environment first
  link: /en/guide/before-install
---

<span class="library-status">PROLOGUE · The author and his work</span>

# Meet the author of Pi, Mario Zechner

Before installing Pi, take a little time to get to know its author.

Mario Zechner is a software developer, coach, speaker, and angel investor. On his personal site, he summarizes that he has more than 15 years of experience across academia, entrepreneurship, industry, and open source, with technical work spanning computer graphics, compilers, data science, and applied machine learning. Pi is not the first development tool he has built, and not a sudden experiment that pivoted to AI by coincidence. Behind it is a chain of more than ten years of open source projects, the ups and downs of commercialization, and experience designing tools.

![Mario Zechner's personal site and article list](/images/mario-zechner/01-mario-website.webp)

<p class="image-caption">Mario's personal site lists his identity as a developer, coach, and speaker. The screenshot was captured on 2026-09-09; the page content will keep being updated.</p>

::: info How to read this timeline
This is a timeline of public career experience, not a personal biography. Years and facts are prioritized from Mario's own writing, the official libGDX history, and official Pi pages; birth year, education, and personal experiences that public sources do not clearly state will not be guessed. The phrase “influenced Pi” in this text is the editor's analysis based on his public statements, and is kept separate from the presentation of facts.
:::

## A quick look at the whole timeline

| Time | Stage | What it left behind |
| --- | --- | --- |
| 2009 | Created AFX, starting from an Android game development problem | Solve your own pain point first |
| 2010—2014 | AFX was open-sourced and grew into libGDX, releasing 1.0 | A cross-platform framework, an open source community, and a foundation that can be extended |
| 2013—2016 | Took part in RoboVM's commercialization, experiencing acquisition, source closing, and discontinuation | Long-term wariness about open source control and commercial limits |
| 2016—2024 | Gradually handed over libGDX, continued independent development, consulting, teaching, and public projects | Keeping a project maintained after it moves beyond an individual |
| 2025 | Dove into using Coding Agents, joined VibeTunnel, developed Sitegeist and Pi | Moving from using someone else's Agent to building his own Harness |
| 2026-04 | Joined Earendil, bringing Pi into the team | Seeking a balance between family, open source sustainability, and commercial support |
| 2026 to now | Continues to be responsible for Pi's technical direction; core remains MIT | “Keep the foundation small, let users decide the workflow” |

## 2009: It all started with the discomfort of Android game development

In mid-2009, to build Android games, Mario began developing a framework called AFX (Android Effects). At the time, deploying changes to an Android device to test them was very cumbersome, so he made the same code also run on the desktop. This small, seemingly specific problem later became one of libGDX's most important traits: covering many platforms with one way of developing.

This starting point explains Mario's later working method very well. He usually does not design a grand platform first, but finds an obstacle he cannot put up with, then builds a tool that is small enough and that he himself wants to use every day.

## 2010—2014: libGDX turns from a personal tool into an open source framework

In March 2010, Mario open-sourced AFX under the LGPL license; on March 6, 2010, the first libGDX code was published. The project quickly gained contributors, and as its tutorials, installation experience, and features gradually improved, it was used by more and more Android game developers.

![The official libGDX history page](/images/mario-zechner/02-libgdx-history.webp)

<p class="image-caption">The official libGDX history begins with AFX in 2009, and records the project's open sourcing, community growth, and later handovers. The screenshot was captured on 2026-09-09.</p>

After 2012, libGDX kept expanding to HTML5/WebGL and iOS, and moved to more mature collaboration and dependency systems such as GitHub and Maven. On April 20, 2014, after four years of development, libGDX 1.0 was officially released.

libGDX was later used by many games and tools. One thing needs to be clearly distinguished: Mario did not help make Slay the Spire; that game uses the libGDX framework he started. Ingress also used libGDX at one point, while Pokémon Go did not. What is really worth noting is not “there is a famous work connected to the author”, but a personal open source framework that eventually became the foundation for other people's creations.

![Slay the Spire in the libGDX Showcase](/images/mario-zechner/08-libgdx-slay-the-spire.webp)

<p class="image-caption">The official libGDX showcase includes Slay the Spire, built with this framework. The framework's author and the game's author are two different things.</p>

## 2013—2016: The commercialization experience and lessons of RoboVM

So that Java/JVM applications could get onto iOS, the libGDX community used RoboVM. RoboVM can compile JVM code ahead of time and run it on iOS; Mario joined the team from the beginning, and was responsible for the first proprietary commercial component — the debugger. The team later grew, and completed commercial capabilities such as IDE integration and Xcode storyboard support.

RoboVM was later acquired by Xamarin, and its open source core was closed along with it; after Xamarin was acquired by Microsoft, RoboVM was discontinued. In a 2026 retrospective, Mario said frankly that this experience made him wary for a long time of venture-backed entrepreneurship and open source commercialization. He was not the controlling shareholder, but he still had to face community criticism over the decision to close the source.

But this history also left another result: libGDX contributors forked the old code into MobiVM, gradually restored its capabilities, and continued to support libGDX's iOS backend. For Mario, “anyone may fork” is not decoration on a license page, but a path of project survival he experienced himself.

## 2016—2024: Handing over the project, while bringing technology to public problems

Around 2016, Mario handed the main libGDX maintenance work to the core contributor team. The official libGDX history records that in 2017 the first version not released by Mario appeared. The project did not stop because of that, and continued to be updated, migrate its build system, and hold community activities.

During this period, he remained involved in Spine, a commercial tool built on libGDX, and also worked as an independent developer, consultant, coach, speaker, and investor. He also applied data and software skills to food prices, public policy, and social issues. His personal site summarizes this experience not as one continuous job title, but as a combination of academia, entrepreneurship, industry, open source, and public participation.

This stage matters for understanding Pi: a healthy open source project should not have to depend solely on its author carrying it forever, and a tool also does not need to decide for its users what they ultimately have to do.

## 2025: From intensive Coding Agent use to building Pi himself

In April 2025, Mario began using Claude Code intensively. He liked the simplicity and predictability of its early version, but gradually could not accept a tool that kept adding features he did not need, hiding context, and changing the system prompt and model behavior. He wanted to see clearly what the model actually receives, to save a complete Session that can be processed, and to be free to swap models, tools, and interfaces.

In May of the same year, he built VibeTunnel together with Peter Steinberger and Armin Ronacher; after that he developed the browser Agent Sitegeist. Entering 2025, he began to distill years of experience using LLMs and developing Agents into Pi: writing the unified multi-model interface `pi-ai` first, then the Agent loop, the terminal interface, and finally the Coding Agent.

![Mario's article explaining the building of a minimalist Coding Agent](/images/mario-zechner/03-pi-building-article.webp)

<p class="image-caption">Mario published a long piece on 2025-11-30 that systematically explains Pi's composition and design choices. The terminal recording in the screenshot comes from the author's page.</p>

His public principle is very straightforward: if he does not need it himself, do not put it in the core. That is why Pi does not enshrine plan mode, subagents, MCP, background commands, or permission dialogs as the only answer, but instead provides Extension, Skill, templates, and themes, so that users can assemble them themselves.

This is not “few features because it is unfinished”, but a product design with a position: the core provides only primitives, and the right to decide the workflow is handed to the user.

## 2026: Pi steps from a personal project into Earendil

Pi was increasingly used by other projects, including OpenClaw, which is built on Pi. Attention grew as well; Mario received investment and job offers, and also faced the choice of whether to start a business of his own around Pi.

In the end he did not found a high-pressure startup centered only on Pi. In “I've sold out”, Mario writes clearly: he wants to be there for his young child, and also wants to form a small team so that Pi's open source development can be sustainable, while avoiding a repeat of the RoboVM history.

On April 8, 2026, he announced joining Earendil, home to Armin Ronacher and his colleagues, and brought Pi into the team. Pi's ownership moved to Earendil; Mario is a shareholder in the company, and together with Armin and Colin is responsible for Pi decisions, while continuing to lead the technical direction, roadmap, merges, and open source boundaries.

![Mario's article announcing that he joined Earendil](/images/mario-zechner/04-earendil-announcement.webp)

<p class="image-caption">“I've sold out” is not merely a statement that “the project was sold”. The main content of the article discusses family choices, open source sustainability, lessons from RoboVM, and Pi's governance.</p>

The project repository later moved from Mario's personal account to the Earendil organization, and the package name was changed to `@earendil-works/pi-coding-agent`. At the time this page was verified, Pi's core still used the MIT License, and its official site was `pi.dev`.

![The Pi official site homepage](/images/mario-zechner/07-pi-homepage.webp)

<p class="image-caption">The Pi official site defines the project as a minimal agent harness: make Pi fit your workflow, not the other way around.</p>

![Mario Zechner's X profile page](/images/mario-zechner/05-mario-x-profile.webp)

<p class="image-caption">Mario's public account is <a href="https://x.com/badlogicgames">@badlogicgames</a>. Follower counts and bios are dynamic information; the screenshot only represents the page's state on 2026-09-09.</p>

![The Pi X profile page](/images/mario-zechner/06-pi-x-profile.webp)

<p class="image-caption">Pi's public account is <a href="https://x.com/pidotdev">@pidotdev</a>; the official site and documentation still refer to <a href="https://pi.dev/">pi.dev</a>.</p>

## How this timeline helps you understand Pi

If you only look at its feature list, Pi is easy to read as “one more terminal Coding Agent”. Once Mario's experience is put together, several design choices become clearer:

- **Why the core stays controllable:** libGDX and Pi both start from their author's real problem, not from a feature count.
- **Why extensibility is emphasized:** the value of a foundation lies in other people being able to build their own tools and works on top of it.
- **Why visible context and Session are a priority:** Mario does not want the Harness behind the scenes making too many unverifiable decisions on the user's behalf.
- **Why it keeps an open source core that can be forked:** RoboVM's source closing and the community fork made this more than an idea.
- **Why he joins a team but still leads technically:** this is a realistic arrangement for balancing open source sustainability, commercial support, and personal life.

So learning Pi is not just memorizing commands. The Session tree, the minimal tool set, Extension, and the Skills you will see next can all trace their origins to this experience.

## Main public sources

- [Mario Zechner's personal site and introduction](https://mariozechner.at/)
- [The official libGDX history](https://libgdx.com/history/)
- [Mario: What I learned building an opinionated and minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)
- [Mario: I've sold out](https://mariozechner.at/posts/2026-04-08-ive-sold-out/)
- [The Pi official site](https://pi.dev/)
- [Pi's current GitHub repository](https://github.com/earendil-works/pi)

::: warning Screenshot and rights notes
The screenshots on this page come from the public pages of Mario Zechner, libGDX, Pi, and X, to explain the history of the person and the project; third-party pages, trademarks, game visuals, and screenshot content are not covered by this site's MIT License for original content, and the rights belong to their respective holders.
:::

[Continue to Lesson 1: Pre-installation checks →](/en/guide/before-install)
