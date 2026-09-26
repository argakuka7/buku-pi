---
title: Getting sub-Agents to share the roles
description: Pi learning notes, stage 5, containing 7 original texts.
outline: false
prev:
  text: Building your own Skills and Extensions
  link: /en/tweets/04-skills-extensions
next:
  text: Turning Pi into a long-term workflow
  link: /en/tweets/06-long-running
---

<span class="library-status">Personal learning notes · STAGE 05</span>

# Getting sub-Agents to share the roles

**The problem to solve at this stage**　Learn how to split search, tidying, and review tasks, and how to check the evidence each Agent returns.

The value of Subagents comes from dividing the work and re-checking it. This section starts from experience with various Agents, then moves into multi-Agent search, comparison of material, and concrete research scenarios.

This page contains 7 original texts. The text content comes from a personal archive on Google Drive; x.com addresses and t.co media short links have been removed. The product versions and statuses mentioned in the original texts refer to their publication dates.

<article class="tweet-entry" id="post-2090071185421955145">

## What I want to share: try various different Agents, really, you will come back to thank me!

<span class="tweet-meta">2026-08-19 21:39:36 · Original text</span>

> What I want to share: try various different Agents, really, you will come back to thank me!
>
> Because every Agent has things in common, but also many differences.
>
> For example the ones I use most often, Claude Code and Codex; to me the biggest difference between them lies in their ecosystems. Not many people can try the entire Claude product line, but Codex can.
>
> Pi Agent and DeepSeek Harness are very different even from their inner layers: one believes in simple design because AI does not need that much, the other thinks that everything is a plugin.
>
> There are also Hermes and Openclaw, which I often use. The two products are similar, but their broad directions differ: one prioritizes self-evolution, low maintenance, and skills; the other highlights a plugin ecosystem and a distinctive memory system. Each has its strengths.
>
> After using many, some of the core designs are actually the same. The more you try, the more you know which one you really need and want to use.

</article>

<article class="tweet-entry" id="post-2091841029850681551">

## The Sub-agent feature of Pi Agent is a must-try!

<span class="tweet-meta">2026-08-24 18:52:20 · Original text</span>

> The Sub-agent feature of Pi Agent is a must-try!
>
> Although officially there is no such feature inside Pi yet, you can just install a plugin to use it.
>
> When many tasks run in parallel, this feature is a good helper for improving efficiency, especially when handling simple, repetitive, high-volume data.
>
> Here I will explain a little how it works:
>
> 1. The main Agent's job is to split up tasks
>
> The Pi you usually talk to is the main Agent.
>
> For example, when analyzing a large project, it can tell scout to find the entry files, researcher to find documentation, and then reviewer to check risks.
>
> You just explain the goal and the constraints clearly, and the rest of the task distribution is left to the plugin.
>
> 2. Every Sub-agent has its own independent context
>
> Most plugins will run their own Pi process, so the Sub-agent reads files and calls tools on its own.
>
> When done, it returns only the conclusion to the main Agent, and does not cram dozens of tool calls into the main conversation.
>
> The advantage is saving context, the disadvantage is that it does not necessarily know what you talked about before. So, inside the task you should write clearly the path, the goal, and the result that needs to be returned.
>
> 3. Different Agents can use different models and permissions
>
> The scout that inspects code is given only read, grep, find access.
>
> The Agent doing Review can look at code and run tests, but does not necessarily need to change files.
>
> The worker that actually does the work is given edit, write, and bash access.
>
> Simple tasks can be handed to a cheap model, while complicated judgment uses a strong model. Not every Agent needs to use the most expensive configuration.
>
> 4. Supports single, parallel, and chained execution
>
> The official Sub-agent examples support three common ways:
>
> Single: one Agent completes one task
> Parallel: several Agents handle different tasks at the same time
> Chain: scout finds code → planner drafts a plan → worker changes → reviewer checks
>
> Combine tasks freely; tasks can not only be run separately, but also combined, and the final results of the separate processing will meet at one point.
>
> But there is also a downside, namely that Token consumption increases several times over. If your work is not too urgent, or your plan quota is not enough, you had better not use it for the long term.
>
> If you are interested in this part, next time I will introduce related plugins to turn your Pi into a multithreaded parallel development workbench.

</article>

<article class="tweet-entry" id="post-2093160756716204485">

## I always use Pi Agent's Sub-agent; recently I ran multi-Agent search again with Apodex 1.1.

<span class="tweet-meta">2026-08-28 10:16:28 · Original text</span>

> I always use Pi Agent's Sub-agent; recently I ran multi-Agent search again with Apodex 1.1.
>
> The way Apodex handles comparison of material differs from ordinary Deep Research.
>
> Pi Agent itself has no built-in Sub-agent, so it needs to be extended through a plugin. You can tell scout to find material, researcher to tidy up information, and then hand it to reviewer to check. The model used for each role, the tools and permissions opened, all of it can be configured by you.
>
> This way is very flexible and suits people who like to build their own Agent workflows.
>
> The task I gave to Apodex 1.1 this time was to check the multi-Agent capabilities of Pi Agent, Codex CLI, Claude Code, and FrontierAgent.
>
> These tools are updated quickly. A feature may not be in the old documentation and may already have been added in the latest version, or may only be supported by a plugin but eventually written in as an official built-in.
>
> So from the start I limited the scope of material: only official documentation, GitHub repositories, and version release notes.
>
> Apodex will split the search route based on the question. Several Agents check different tools, the results of the stages keep being summarized into the same task, and at the end they are compared centrally.
>
> What I want to see this time is whether it can complete a task with a lot of material and diverse versions through to the end, while also keeping the source of every conclusion.
>
> The final table will separate official built-ins and plugin implementations. When different official pages conflict, it will list the source and update time of each. Parts that the official side does not explain explicitly are marked directly as unknown, rather than adding an answer just to fill the table.
>
> The result delivered also goes through Statement Review. Important conclusions and the process of producing them are checked separately; when evidence is lacking, quotes do not match, or material conflicts, the review notes are kept.
>
> These two directions for using multi-Agent are also very clear.
>
> Pi Agent is suitable for forming your own team. Roles, models, and permissions can be adjusted in depth.
>
> Apodex is more suitable for searching across many routes, comparing scattered material, and then delivering one result that can keep being re-checked.
>
> If you often need to confirm whether a capability is officially supported, provided by a plugin, or has no clear material yet, this way of working will be quite practical.
>
> FrontierAgent is an open-source single-machine Agent harness that supports ReAct and Agent Team. On macOS and Linux it can be run with a single command, without having to install Docker first. If you find it useful, please give it a Star on GitHub.
>
> Apodex 1.1 mini is a 35B model with open weights that can be run locally, and it is also used together with FrontierAgent.
>
> The Apodex 1.1 online Workbench has been released. New users who register get credits and can upload their own documents, data, or tables to run it once. Its API platform is currently free for two weeks.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093177805433704718">

## I connected Pi to Apodex 1.1 so it could help me check whether Sun Yuchen's words are true 🔥

<span class="tweet-meta">2026-08-28 11:24:12 · Original text</span>

> I connected Pi to Apodex 1.1 so it could help me check whether Sun Yuchen's words are true 🔥
>
> After Sun Yuchen's article titled "My Girlfriend Jing Tian" was published, the related topic quickly shot up to the trending list.
>
> The article contains many details of a romance and property dispute, while at the beginning and end it carries a note that everything is fiction. After that, his lawyer openly mentioned a property dispute of more than thirty million yuan, and Jing Tian's side also responded.
>
> After several sources got mixed together, much of the content was already hard to distinguish between public facts, one-sided claims, or stories processed by independent media from the original text.
>
> It happened that I had just connected Apodex 1.1 to Pi Agent, so I ran it on this news story.
>
> I asked the model to find on its own Sun Yuchen's original text, the responses of both sides, and his lawyer's open statement, then keep tracing the origin of the media coverage. Conflicting claims had to be preserved, original pages that could not be opened also had to be clearly marked, and content with insufficient evidence was not to be written as fact.
>
> Pi Agent provides search and web-reading tools; Apodex 1.1 decides where the search starts and which content needs cross-verification, then tidies the news into a timeline and a fact-check table with sources.
>
> What is being tested here is the Apodex model's real search and information-integration ability; you surely know that running a model inside Pi can reflect its actual ability fairly realistically.
>
> Whether this is true or false, just try testing it first.
>
> The Apodex API platform is currently free for a limited time of two weeks; those interested can try it themselves, I put the link in the comments.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093222498943025525">

## Seeing this example of searching for "Dream of the Red Chamber" with Apodex, I think Pi's Sub-agent is very well suited to this kind of problem.

<span class="tweet-meta">2026-08-28 14:21:48 · Original text</span>

> Seeing this example of searching for "Dream of the Red Chamber" with Apodex, I think Pi's Sub-agent is very well suited to this kind of problem.
>
> Many questions around Dream of the Red Chamber involve different versions, the Zhiyanzhai annotations, and later research views. If the model writes following the first explanation it finds, it is very easy for the original text, editorial notes, and later people's guesses to get mixed together.
>
> Once connected to Pi, you can tell the Sub-agents to check separately. One only looks for the original text and the origin of the version, another tidies up the different research views. The main Agent then checks where the quotes come from, and preserves conflicts that cannot yet be resolved.
>
> This part strongly tests how Apodex 1.1 splits the question, and at the same time shows whether it checks the material brought back by the Sub-agents.
>
> The number of searches determines how much material can be found; the judgment of sources determines whether the final answer can be trusted.
>
> Questions that have no single standard answer like this are very suitable for testing the combination of Pi Sub-agent and Apodex 1.1.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094032795546849667">

## I have started teaching Pi how I analyze my own X tweets 🔥

<span class="tweet-meta">2026-08-30 20:01:38 · Original text</span>

> I have started teaching Pi how I analyze my own X tweets 🔥
>
> I used to review my own X tweet data almost always by myself, and it really wasted a lot of time.
>
> I had to look at impressions, likes, and saves, then review whether the opening was attractive, which part in the middle was most information-dense, and why a piece of content that was clearly well written got no views.
>
> After doing it often, I realized that my analysis pattern each time was actually almost the same.
>
> So there is no need to tell the AI every time anymore.
>
> Now I have started to etch this flow directly into Pi.
>
> For example, later when I toss my own tweet to it, it will look at it in a fixed order:
>
> 1. First, judge what the appeal of this content actually is, not just look at whether the numbers are high or low.
>
> 2. Then dissect the opening, structure, topic choice, and delivery, to find which parts are worth keeping.
>
> 3. Finally, by combining my previous high-performing content, tell me in which direction this topic can still be explored.
>
> Now I use Pi no longer just wrapping it into a skill, but realizing that habits in life can be etched in and handled for me by custom Pi plugins.
>
> This is the reason I like Pi more and more now.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095306131560431748">

## OMP is getting fiercer: a single Agent is starting to be equipped with a full team of models.

<span class="tweet-meta">2026-09-03 08:21:25 · Original text</span>

> OMP is getting fiercer: a single Agent is starting to be equipped with a full team of models.
>
> Before, when using Pi to run sub-agents, I was always torn by one question:
>
> Do all Subagents need to inherit the model level of the main thread? In real use the consumption is high and it runs slowly.
>
> But in a multi-Agent Harness like Oh My Pi, I found a still-faint direction.
>
> The main-thread Agent, the Advisor, and the Subagent need a clear division of labor about who does what. If they are all given the same strongest model, the cost is high and the speed is slow too.
>
> Now the OMP community has started discussing a complete separation of models for each role:
>
> 1. The Main Agent needs all-around ability
>
> It is responsible for understanding requirements, making decisions, and controlling the whole task, so it is more suitable to be given the most capable model.
>
> 2. The Advisor needs judgment ability
>
> It is not necessarily responsible for doing the work; it mostly oversees whether the main Agent goes off track, so reasoning and judgment matter more than speed.
>
> 3. The Subagent cares more about value for cost
>
> Finding material, scanning code, running simple tasks—if these are run a dozen at a time, they do not all need to use a top model.
>
> I myself have actually been using a similar pattern.
>
> For the main Agent I use GPT-5.6 Sol, for the Advisor GPT-5.6 Terra, and when actually running many Subagents I instead prioritize DeepSeek, GPT-5 Mini, even some free models.
>
> A strong model handles judgment, a cheap model handles the legwork, becoming the execution layer.
>
> This direction may be the way out I have been looking for: allocating tasks and models dynamically. Though complicated, the result is cheaper and more efficient.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

## Next Steps

After finishing this stage, continue reading [Stage 6　Turning Pi into a long-term workflow](/en/tweets/06-long-running).

