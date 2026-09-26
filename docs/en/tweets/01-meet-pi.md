---
title: Getting to know Pi out of curiosity
description: Pi learning notes, stage 1, containing 27 original texts.
outline: false
prev:
  text: Tweet Learning Table of Contents
  link: /en/tweets/
next:
  text: Finish your first task first
  link: /en/tweets/02-first-tasks
---

<span class="library-status">Personal learning notes · STAGE 01</span>

# Getting to know Pi out of curiosity

**The problem to solve at this stage**　First, understand what Pi is, why it stays simple, and how the Agent Harness affects the real experience.

At this stage there is no need to rush into installing many plugins. Start from Pi's position, its author, its design direction, and the point where I began learning. The articles are arranged by publication time, from earliest to latest; you will see how I slowly moved from “why is it so small” to “I want to tidy up my own learning process”.

This page contains 27 original texts. The content comes from the archive of original texts on a personal Google Drive, with x.com addresses and t.co media short links removed. The product versions and statuses mentioned in the original texts refer to their publication dates.

<article class="tweet-entry" id="post-2086991504451792928">

## Pi Agent somehow went viral, even though I had been using it for a long time; here I sum up some of its strengths:

<span class="tweet-meta">2026-08-11 09:42:03 · Original text</span>

> Pi Agent somehow went viral, even though I had been using it for a long time. Here are some of its strengths:
>
> 1. Almost no system prompt, clean and tidy, small context
>
> 2. Token-efficient because there are almost no external components
>
> 3. Extensibility in almost every part; if there is something you are not comfortable with, you can install an extension or write your own plugin to fill it in
>
> But it is not recommended for beginners, because there is no built-in permission control component. If the AI's ability is not strong or there is a semantic problem, there can be consequences that cannot be undone.

</article>

<article class="tweet-entry" id="post-2087509640334746086">

## Pi Agent is already quite small and compact, are there still Agents that are even smaller?

<span class="tweet-meta">2026-08-12 20:00:56 · Original text</span>

> Pi Agent is already quite small and compact, are there still Agents that are even smaller?
>
> This Agent only needs 15 MB to run, truly unconventional for the size of an agent.
>
> Written in Rust: lightweight, practical, and resource-efficient. Most importantly, it adds many special features so it can be combined with third-party Agents like Claude Code and Codex. I highly recommend giving it a try.
>
> See the article below for the full content👇

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2091350038165492014">

## This sharp review of Pi is quite on point.

<span class="tweet-meta">2026-08-23 10:21:19 · Original text</span>

> This sharp review of Pi is quite on point.
>
> Right now people are still racing to compare whose model is stronger and who has more Tools.
>
> What is really prone to trouble is after an Agent runs continuously for several hours: context gets cut, tool results can no longer be found, the process dies halfway, and it itself does not know whether the work just now is finished or not.
>
> This is something I often experience when using Hermes. Once repeated tasks pile up, tokens get drained by tool logs; once the middle part is pruned, even a smart model can only guess.
>
> So now I no longer think about directly switching to a stronger model; what is more practical is these three things:
>
> 1.  Low-complexity but wasteful tasks, throw them to a small local model
>
> 2.  Save tool output to disk first, do not make context your only memory
>
> 3.  Design permissions and recovery assuming “it will fail”, not assuming the demo will run smoothly
>
> Models will only get cheaper going forward. If the Harness side does not adapt too, the longer it runs the more painful it becomes.

</article>

<article class="tweet-entry" id="post-2091562941862838780">

## Pi Agent's slogan is: There are many agent harnesses, but this one is yours.

<span class="tweet-meta">2026-08-24 00:27:19 · Original text</span>

> Pi Agent's slogan is: There are many agent harnesses, but this one is yours.
>
> Translation: there are many Agents, but this one is yours.
>
> This is why I like it.
>
> Other Agents have everything ready for you from the start — convenient, but it is hard to change them the way you want.
>
> Pi Agent does the opposite: it gives you a very clean house, and the model, tools, Skills, and workflow can all be combined by you yourself.
>
> From my summary, there are several strengths:
> 1. Almost no built-in system prompt, the model's context is very clean, and testing the model's ability becomes very accurate
>
> 2. Very Token-efficient; few external components, so for the same work the savings are genuinely real
>
> 3. If there is something you are not comfortable with, just add a Skill or write a plugin; extensibility is very strong
>
> 4. Not tied to one model; DeepSeek, small local models, GPT, all can be connected freely
>
> 5. It is more like a character editor, not a ready-made max-level account
>
> I recommend beginners to learn it, but I do not suggest total beginners make it their first Agent right away, because the default permissions are quite loose and you need to have your own awareness of limits.
>
> But if you already use Claude Code, Codex, or Hermes, Pi is really worth adding to your daily work to feel the fun of a DIY Agent.
>
> Once again, starting to use it is far more important than anything else.

</article>

<article class="tweet-entry" id="post-2091709706402488671">

## Many people use Pi, but not necessarily know who is behind it.

<span class="tweet-meta">2026-08-24 10:10:30 · Original text</span>

> Many people use Pi, but not necessarily know who is behind it.
>
> The author of Pi Agent is Mario Zechner, with the X account @badlogicgames. He is Austrian and previously was not involved in AI but in game frameworks. libGDX is his work, and games like Ingress and Slay the Spire use it.
>
> After that he also created RoboVM; the company was sold and then shut down by Microsoft, and he experienced how a community can turn on you. Because of that he is now very reluctant to raise a lot of money and become a CEO.
>
> At the end of 2025 he built a minimalist coding agent himself, written in two nights, initially just for himself. It ships with only four tools: read, write, edit, bash; the system prompt is trimmed very short, and the rest you add entirely yourself. The slogan is blunt too: There are many agent harnesses, but this one is yours.
>
> Then the company of Armin Ronacher, the author of Flask, namely Earendil, acquired Pi; Mario became a shareholder and joined the team. The title of the piece he published himself is I've sold out, written very openly: he does not want to repeat the high pressure of the startup world, he has children at home, but he also wants Pi to keep being maintained so it does not stop being updated. The technical direction is still his to decide, and at heart it stays open source.
>
> This person speaks bluntly; his bio reads Old man yelling at Claudes. He does not like Agents getting heavier and prompts getting longer. He even tested MCP and CLI himself, and the conclusion is the same as what many people feel: the CLI is often more economical and more stable.
> So the shape of Pi today is not a list of features piled up by a product manager, but a shell made by a senior open source author according to his own taste. If you like it because it is clean, modifiable, and not tied to one model, almost all of it can be traced back to his personality.
>
> If you are interested, you can read his blog at @badlogicgames. His product account is @pidotdev.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2091721408221168104">

## Many people use Pi, but not necessarily know who is behind it.

<span class="tweet-meta">2026-08-24 10:57:00 · Original text</span>

> Many people use Pi, but not necessarily know who is behind it.
>
> The author of Pi Agent is Mario Zechner, with the X account @badlogicgames. He is Austrian and previously was not involved in AI but in game frameworks. libGDX is his work, and games like Ingress and Slay the Spire use it.
>
> After that he also created RoboVM; the company was sold and then shut down by Microsoft, and he experienced how a community can turn on you. Because of that he is now very reluctant to raise a lot of money and become a CEO.
>
> At the end of 2025 he built a minimalist coding agent himself, written in two nights, initially just for himself. It ships with only four tools: read, write, edit, bash; the system prompt is trimmed very short, and the rest you add entirely yourself. The slogan is blunt too: There are many agent harnesses, but this one is yours.
>
> Then the company of Armin Ronacher, the author of Flask, namely Earendil, acquired Pi; Mario became a shareholder and joined the team. The title of the piece he published himself is I've sold out, written very openly: he does not want to repeat the high pressure of the startup world, he has children at home, but he also wants Pi to keep being maintained so it does not stop being updated. The technical direction is still his to decide, and at heart it stays open source.
>
> This person speaks bluntly; his bio reads Old man yelling at Claudes. He does not like Agents getting heavier and prompts getting longer. He even tested MCP and CLI himself, and the conclusion is the same as what many people feel: the CLI is often more economical and more stable.
> So the shape of Pi today is not a list of features piled up by a product manager, but a shell made by a senior open source author according to his own taste. If you like it because it is clean, modifiable, and not tied to one model, almost all of it can be traced back to his personality.
>
> If you are interested, you can read his blog at @badlogicgames. His product account is @pidotdev.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2091773823658131469">

## Many people confuse Pi and Pi coding agent until they cannot tell them apart; let me explain in one minute😄

<span class="tweet-meta">2026-08-24 14:25:17 · Original text</span>

> Many people confuse Pi and Pi coding agent until they cannot tell them apart; let me explain in one minute😄
>
> The conclusion first:
> Pi is a set of base framework (harness), while Pi coding agent is the finished product made with that framework and specifically used to write code for you.
>
> By analogy, the Pi framework is components like the engine, wheels, and frame. Pi coding agent is more like a complete car already assembled from those components.
>
> Let's break it down in more detail:
>
> 1. They are on different levels
> Pi itself covers several layers: a unified interface for various models, the core loop where the agent runs, a terminal interface, and an extension system. The pi command you usually type after installation is actually just the topmost and most frequently used layer, namely the coding version, aka Pi coding agent.
>
> 2. What they provide by default is different
> Pure Pi is cleaner, almost nothing pre-installed, everything depends on what you add. Pi coding agent has four of the most basic tools ready: reading files, writing files, editing files, and running commands (read / write / edit / bash). That is why many people can start working right after installing it.
>
> 3. The way to extend is the same, but the usage scenarios differ
> Whatever you use, the basic mechanism for adding Skills, writing plugins, and installing extensions stays the same. The difference: one is assembling your own Agent from scratch, the other is using the coding version that has already been assembled, then adding more if something is still missing.
>
> 4. Why people confuse them
> Because on the official site, in the documentation, and in group chats, the Pi people mention in speech almost always refers to the Pi coding agent you can use right away by typing commands to write code. Only those who really want to change the base layer, build their own Agent, or embed it into another product will touch the full Pi harness.
>
> 5. How to choose in practice
> If you just want to quickly use AI to write code and modify projects → just install Pi coding agent. If you want to define the Agent's behavior yourself, change tools, change the workflow, or even make another shape → what you are actually playing with is the Pi base layer.
>
> In one sentence: Pi is a shell that carries its author's own Agent philosophy, while Pi coding agent is the code-writing version prepared for you. Most people use the second but think they are using Pi as a whole.
>
> I think after reading this, next time you will not be confused about telling the two apart. This is also the result of my own deeper study; ordinary people may indeed not notice the difference between them.

</article>

<article class="tweet-entry" id="post-2092202209526301103">

## Why does the X bio of Pi's creator, Mario Zechner, contain this sentence?

<span class="tweet-meta">2026-08-25 18:47:32 · Original text</span>

> Why does the X bio of Pi's creator, Mario Zechner, contain this sentence?
>
> Old man yelling at Claudes.
>
> Actually many people, like me, also find it strange. But if you read his inner journey, you will understand.
>
> At first Mario was actually a heavy Claude Code user; he even patched the client himself, captured the system prompt, and studied what exactly changed in each update.
>
> But the deeper he used it, the more he could not stand one thing:
>
> Claude Code keeps changing.
>
> The system prompt changes, the tools change, the hidden rules change too. The Prompt, Skill, and Workflow you painstakingly tuned can suddenly produce a completely different result after one update.
>
> Then he also tried Codex, OpenCode, and other Agents, and in the end found the problem was more or less the same:
>
> The Harness controls too much and gives too little freedom; slowly he began to tire of it.
>
> So at the end of 2025, he directly spent two nights writing Pi himself.
>
> It ships with only four tools: read, write, edit, bash; the system prompt is made as short as possible, the model is not locked in, and all other abilities are left entirely to the user to develop themselves.
>
> This is why Pi has a very distinctive slogan:
>
> There are many agent harnesses, but this one is yours.
>
> What Mario wanted to build was never just the Agent with the most features.
>
> Rather, a Harness that is clean enough, transparent, stable, and in the end still under your control.
>
> If you use Pi but do not yet understand why it is so “simple”, why many things that clearly could be built are deliberately not done.
>
> A video of Mario telling the story of how Pi was born might give you the answer.

</article>

<article class="tweet-entry" id="post-2092238018447020036">

## If you also want to start learning Pi, please take a look at my learning experience sharing🔥

<span class="tweet-meta">2026-08-25 21:09:50 · Original text</span>

> If you also want to start learning Pi, please take a look at my learning experience sharing🔥
>
> Pi is actually not as hard as you imagine; it is just that most people start off in the wrong direction, immediately studying the Harness, Agent Loop, Extension, and the like.
>
> If it were up to me, I would suggest learning through these 5 steps:
>
> 1. First, understand what Pi really is
>
> First understand the relationship between Pi, Pi Coding Agent, Claude Code, and Codex. You only need to know that Pi's biggest trait is being light enough, and many abilities can be added by you yourself.
>
> 2. Master the most basic features first
>
> Install, log into a model, create a new Session, continue a previous task, then master a few commonly used commands. Let Pi truly enter your daily work, rather than immediately studying the source code after installing it.
>
> 3. Then start adding abilities to Pi
>
> Learn how to install Extensions and Skills, then try SSH, security plugins, context tools, and things that can really improve the experience. This step is basically also the most fun stage of Pi.
>
> 4. After that, understand Context and Token
>
> After actually using it for a while, then understand why Pi's System Prompt is short, its tools are few, the cache is easy to hit, and what Compaction actually does when the context is full. This is far easier than forcing yourself to swallow the concepts from the start.
>
> 5. Finally, try Pi's truly fascinating advanced games
>
> Remote from your phone, multi-device collaboration, Sub-agents, division of labor between models, and even slowly assembling your own Pi. That is when you truly understand why many people regard Pi as a Harness, not just another Coding Agent.
>
> By learning along these five points, I am sure you too can feel the pleasure of using Pi, namely the feeling of freedom, where anything you want you can create yourself.
>
> For a learning site, I recommend only one:

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2092265777214951636">

## Looking back at the version iteration history of Pi feels like watching the history of Agent development all over again!

<span class="tweet-meta">2026-08-25 23:00:08 · Original text</span>

> Looking back at the version iteration history of Pi feels like watching the history of Agent development all over again!
>
> Seeing the author go from a simple idea to a real product, actually every point inside is a form of the author's refusal to compromise on the Agent he wanted.
>
> From the many versions, I picked these five most representative ones.
>
> 1. Starting to deal with the context problem (0.12)
>
> This version added Context Compaction: when the context is nearly full, old content is summarized automatically and the latest messages are kept. Session also began to support Branch. You could say this is where Pi truly gained a foundation for working over long periods.
>
> 2. Extensions officially become the core game (0.35)
>
> Hooks and Custom Tools that were previously scattered were unified into Extension. From then on, you could add tools, commands, UI, status, and permission control to Pi. Most of the Pi plugins we see today grew along this mechanism.
>
> 3. Pi starts to have its own ecosystem (0.50)
>
> Extension, Skill, Prompt, and Theme can be packaged into a Pi Package, installed and shared with one click. This also means Pi began to shift from “an Agent you tinker with yourself” into an ecosystem where people can share abilities with one another.
>
> 4. Starting to pay attention to safety and usage cost (0.79)
>
> Project Trust was added: configuration and Extensions inside a project are no longer loaded directly by default. Pi even displays the Prompt Cache Hit Rate at the bottom of the interface. It is clear that the official side began to take safety, Token, and cache efficiency seriously.
>
> 5. Starting to feel more and more like an Agent Harness (0.84)
>
> AGENTS.override.md, control over built-in tools, and Remote Session related abilities appeared one by one. You can control Context, tools, and Session in more detail. Pi also slowly grew from a minimalist Coding Agent into an Agent Harness you can assemble yourself.
>
> In between, I also took the time to study the author's history, then combined it with some of his statements and his past open source experience, so that I could slowly understand why he wrote his own Agent himself.
>
> Many people say this Pi Agent tool leans toward geeky, but only those who really understand know how hard it is to have your own tool that can be assembled and optimized however you like.
>
> Only by understanding deeply will you also be like me: understanding the design philosophy inside it.
>
> Maybe this is the part of Pi that makes me most addicted.

</article>

<article class="tweet-entry" id="post-2092930420090519653">

## The real way to use Pi is to build your own Agent🔥

<span class="tweet-meta">2026-08-27 19:01:11 · Original text</span>

> The real way to use Pi is to build your own Agent🔥
>
> Recently I have been studying Pi in depth, and today an idea suddenly came to me:
>
> Since Pi itself already handles the most troublesome parts of an Agent, could I build my own Agent on top of its simple architecture?
>
> I analyzed the related things and summarized them into the following aspects:
>
> 1. Pi first gives you the Agent's base framework
>
> How the model is connected, how the Session is stored, how Tools are called, how Context is compacted — Pi itself already handles all of that.
>
> You do not need to reimplement the Agent Loop; more often you just add things on top of a foundation that is already done.
>
> 2. The part that is truly yours is actually the combination of abilities
>
> For example, if I want to make a research Agent, I can add search, browser, YouTube, Memory.
>
> If I want to make a server Agent, add SSH, Docker, log analysis.
>
> Even if I want to make a long-term personal Agent, you can keep adding memory, message channels, and scheduled tasks.
>
> At this point Pi is more like a foundation that can keep being assembled, not a Coding Agent with a fixed shape.
>
> 3. Even the client does not have to use Pi's native terminal
>
> Pi already provides interfaces like SDK and RPC, so you can rebuild Web, desktop, or mobile on the outside, while underneath it still runs the same Pi.
>
> This is also my biggest impression after recently studying the desktop and mobile versions of Pi:
>
> You are not necessarily changing Pi; it could be that you are using Pi to build your own product.
>
> 4. What ultimately makes the difference may not be the model
>
> Everyone can use GPT, Claude, or Qwen, but which Skill, Extension, Memory, tools, and working rules you install on the Agent, that is what slowly makes it something truly different.
>
> So now I feel more and more that the most fun part of Pi may not be comparing it with Claude Code or Codex to see which is stronger.
>
> Rather, because you can treat it as a ready-made Agent foundation, then stack your habits and abilities little by little.
>
> In the end, the result may no longer be Pi.
>
> Rather, an Agent that is truly your own.

</article>

<article class="tweet-entry" id="post-2092983677626331480">

## Pi is not hard, it is just that many people reverse the learning order.

<span class="tweet-meta">2026-08-27 22:32:49 · Original text</span>

> Pi is not hard, it is just that many people reverse the learning order.
>
> Many people study the architecture first, then only afterwards come back to install the software; their bookmark folder is packed full, but their computer is empty.
>
> There are actually not many complicated things; just follow the five steps below, and everything can be done in a day.
>
> 1. That day, only do the initial setup
> Install the official way, do not look for third-party tutorials first.
>
> After it is installed, first configure a model whose quota you have, create a new Session, then throw it one real job: change one function, write a script, or trace one error. It can run, can be stopped, and can be continued — only then is this step considered passed.
>
> 2. Turn basic operations into muscle memory
> Just memorize these few: create / switch Session, continue the last task, /scoped-models to narrow your subscribed models into a short list, and Ctrl+P to switch. Settle on one main model first, do not switch five models in a day.
>
> Do not open many new windows before a task is done; the context will get messy.
>
> 3. Add only abilities you will use repeatedly
> First write or install a Skill: put into SKILL.md the workflow that “has to be explained again every time”.
>
> Then install an Extension: SSH, security interception, context viewer. A Skill is an instruction manual, while an extension actually changes the runtime.
>
> To install packages use pi install; look in the official documentation and the plugin marketplace. Do not use commands copied from group chats yet. Set MCP aside for now.
>
> 4. Wait until the window is full, then adjust Context
> Work on one somewhat long thing continuously, and see when Token, cache, and Compaction start to work. That is when you understand why the Prompt is short and the built-in tools are few.
>
> Experiencing a context blow-up once first, then deciding whether to add compaction or switch to a light model, is far more useful than memorizing concepts first.
>
> 5. After a stable week, then play with combinations
> Once you can no longer do without it in daily life, then try remote, multi-device, Sub-agents, one model writing and one model reviewing. Master a single session first, then go parallel.
>
> Before going parallel, first think clearly: who writes, who checks, and where the results go. Otherwise it is just opening a few more windows.
>
> Remember, the hard part of learning Pi is not understanding, but starting to act. Only by really trying and learning can you truly master it.
>
> Go use it safely on your computer right away.🔥

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093013305237598446">

## Do not just save documentation when learning Pi; watching this video is more useful than saving ten tutorials.

<span class="tweet-meta">2026-08-28 00:30:32 · Original text</span>

> Do not just save documentation when learning Pi; watching this video is more useful than saving ten tutorials.
>
> This time I have prepared the video directly so you understand this PI Agent system as a whole:
>
> 1. The model is responsible for understanding and judging
> 2. The context tells it the background and project rules
> 3. Tools are responsible for reading, modifying, and running
> 4. The Session stores the entire work process
> 5. Skills and Extensions add new abilities
> 6. RPC, SDK, and the like connect it to other flows
>
> You submit a task, the model makes decisions, tools run operations, and the results go back to the model — this is the real working cycle of Pi.
>
> Pi's strength is not how luxurious its built-in features are, but that its core is light enough that the brain, tools, and rules can all be chosen by you yourself.
>
> Understand this structure first, then install plugins, write Skills, and build automation. Otherwise, the more you install, the less clear it is where Pi's real power lies.
>
> Two minutes, explaining Pi's complete setup at once.👇

</article>

<article class="tweet-entry" id="post-2093675914836255111">

## Pi and Oh My Pi are pushing Agent Harness to two extremes🔥

<span class="tweet-meta">2026-08-29 20:23:31 · Original text</span>

> Pi and Oh My Pi are pushing Agent Harness to two extremes🔥
>
> Basically both were born from the same parent; Oh My Pi itself is even a Fork of Pi. But in later development, the two moved further apart toward opposite extremes.
>
> Pi's approach is simple: keep the core as small as possible, and hand extra features to plugins.
>
> Few built-in tools, short system prompt; for Extension, Skill, Memory, Subagent, and the like, it avoids making decisions for you wherever possible.
>
> So Pi is more like an unfinished house: not much inside, but the structure is clean, and almost every ability is under your control.
>
> Oh My Pi is just the opposite: anything the Harness can do, I put into it as much as possible.
>
> Let's briefly compare a few of the most striking things:
>
> 1. Pi's built-in tools are very restrained; Oh My Pi directly includes LSP, Debugger, AST, Browser, Subagent, and Memory.
>
> 2. Pi leans more toward the traditional way of editing code; Oh My Pi even rebuilt the Edit Protocol, using Hashline to reduce positioning problems and conflicts when modifying code.
>
> 3. Pi keeps Context simple; Oh My Pi even made SnapCompact, which renders historical context into an image and hands it to a visual model to keep reading.
>
> I actually would not say which direction is right or wrong, because I often weigh it based on the group of users in question.
>
> Not everyone is a geek or likes an Agent that is compact and free; more are beginners, and what they need is a solution that can be used right away.
>
> Community development in many directions is exactly what I hope for; more and more things will get finished.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093697448527233162">

## Pi 0.84.4 (2026-08-28) is the latest version at the moment; the official tweet highlights these 3 things:

<span class="tweet-meta">2026-08-29 21:49:05 · Original text</span>

> Pi 0.84.4 (2026-08-28) is the latest version at the moment; the official tweet highlights these 3 things:
>
> 1. Large tool results are compacted right away
>
> When tool output is too large, it now performs compaction first in the same process, then continues to the next reply, so the context does not easily explode.
>
> 2. Support for DeepSeek V4 Flash Vision (experimental)
>
> The built-in DeepSeek Provider can directly use this model with visual ability.
>
> 3. Terminal abilities can be overridden manually
>
> Support for hyperlinks, images, and true color no longer depends entirely on automatic detection; you can force it on or off yourself.
>
> All of it, compacted into one sentence: context compaction is optimized, matching for a new model is added, and more terminal abilities are unlocked.
>
> Update command: pi update.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094089240812691764">

## It used to be me watching Pi change code, now someone has started letting Pi optimize by itself to the extreme😂

<span class="tweet-meta">2026-08-30 23:45:55 · Original text</span>

> It used to be me watching Pi change code, now someone has started letting Pi optimize by itself to the extreme😂
>
> Recently I saw a project very much worth trying: pi-autoresearch.
>
> It was inspired by Karpathy Autoresearch and directly moved that approach into Pi.
>
> You do not need to tell it step by step how to optimize; just give it one clear metric.
>
> It does the rest itself:
>
> Find an idea → change → test → compare results → if better keep it → if worse roll back → continue to the next round.
>
> Some very interesting things:
>
> 1. The target is very clear
>
> Not telling the Agent vaguely to “optimize the code”, but aiming directly at one number, for example test time, build speed, Bundle Size, or Lighthouse score. Whether there is an improvement can be judged at a glance.
>
> 2. The cost of failure is very low
>
> Pi can dare to try various approaches. If the result is bad, it is rolled back immediately; I do not need to keep watching every change, and only results that genuinely improve are kept.
>
> 3. It can run continuously for many rounds
>
> An ordinary Agent usually stops after one change; Autoresearch is more like experimenting. If one approach does not work, switch to the next, until the metric slowly rises.
>
> 4. The experiment process can keep accumulating
>
> Every round of attempts, results, and changes is recorded. Even if the Context is reset later, it can continue the previous experiment, not guess again from zero.
>
> I feel it is best suited to solving one interesting kind of problem:
> I do not know how to optimize the next step, but I know what kind of result is better.
>
> I also used a similar framework before to run and iterate repeatedly, even running several branches at the same time, then deciding the version with the highest score.
>
> The idea of this plugin is actually the same: let AI evolve on its own according to your target, give it a score each time, and approach the final goal step by step.
>
> If you have also been playing with Pi recently, pi-autoresearch is highly recommended to try.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094260899712548912">

## The most contradictory point of Pi: chasing simplicity, or complexity🔥

<span class="tweet-meta">2026-08-31 11:08:02 · Original text</span>

> The most contradictory point of Pi: chasing simplicity, or complexity🔥
>
> Recently I saw a fairly interesting project: Plannotator.
>
> Maybe many people have already heard of it or even installed it; from my observation, it is a plugin that represents complexity.
>
> Pi itself is actually very restrained; many abilities are not put into the Core. But Plannotator is just the opposite, specifically complementing Pi with visual Review.
>
> After the Agent writes a Plan, you can directly add notes, delete, and change it on the page; after the code is done, you can also view the Diff like when reviewing a PR, give feedback at specific positions, then ask Pi to fix it again.
>
> Its strengths are clear:
>
> 1. Plans no longer have to be forced to be read in the terminal; wherever there is a problem, it is changed right there.
>
> 2. Code Review is more intuitive: Pi writes, the human makes the important decisions.
>
> 3. Notes can accumulate, and later can even be tidied into your own Review Skill.
>
> Its shortcomings are also blunt:
>
> 1. It makes Pi heavy.
>
> Previously it was enough to open the Terminal to work, now there is an extra browser layer and Review flow. If you actually like the Agent finishing on its own and then reporting, this feels a bit excessive.
>
> So is Pi actually simple or complicated?
>
> Now I lean more toward:
>
> What is simple about Pi is its Core, not your final workflow.
> It merely leaves the choice of whether to be complicated to you.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094294968307487038">

## Wow, it turns out Slay the Spire is connected to Mario Zechner, the author of Pi🔥

<span class="tweet-meta">2026-08-31 13:23:25 · Original text</span>

> Wow, it turns out Slay the Spire is connected to Mario Zechner, the author of Pi🔥
>
> To be exact, Slay the Spire was not made by Mario, but the game development framework it uses, libGDX, is Mario's long-time open source project.
>
> I did not know this before, and as I kept tracing his history, it suddenly became easier to understand why Pi grew the way it has.
>
> Around 2009 Mario started working on libGDX; at first it was just because the development experience of making Android games felt very painful, then it slowly became a set of cross-platform game framework.
>
> Then libGDX was used by many games; Slay the Spire is one of the most famous, besides that there is Ingress and Spine which are also built on it.
>
> What is interesting is not that Mario once made a very successful game framework.
>
> Rather, that more than ten years later, his approach makes Pi still feel familiar.
>
> libGDX does not make games for you; it only hands over the basic abilities needed to make games.
>
> The same goes for Pi.
>
> Pi does not rush to put Sub-agents, Plan Mode, Memory, and every feature into the Core. It provides basic abilities like Agent Loop, Session, Tool, Context, and Extension, then leaves it to you what to assemble them into.
>
> One of them eventually grew Slay the Spire.
>
> The other is now growing all kinds of Agents.
>
> Before, I more often saw Pi only as a Coding Agent newly made by Mario. Now, looking back at libGDX, RoboVM, then Pi, it seems he has always liked the same kind of work:
>
> Not finishing a product for others, but first making a foundation free enough that others can create their own things.
>
> Maybe the trait of Pi today, “wanting to hand everything over to your own decision”, already showed its shadow back in libGDX more than ten years ago.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094627740440047962">

## I found a new way: running Pi Agent with Grok Bot🔥

<span class="tweet-meta">2026-09-01 11:25:44 · Original text</span>

> I found a new way: running Pi Agent with Grok Bot🔥
>
> I just tested running an Agent related to Grok Bot, and everything worked perfectly there. Installation itself is not hard because Grok Bot is basically a server.
>
> But I still want to share the pitfalls I ran into along the way:
>
> 1. During installation, specify that you mean its own computer environment; otherwise it may check your computer environment instead. Here make sure the AI can distinguish clearly.
>
> 2. The default environment is still a bit old; best to upgrade the supporting environment so compatibility is better.
>
> 3. Besides that, the environment variables to run it need to be configured by you yourself; otherwise the Pi application may not be found.
>
> I am still exploring whether there is a low-latency solution, for example doing tunneling (hole punching) at Grok Bot or binding a fixed domain, so its server can connect to the external network environment for use.
>
> Right now there are two options: using Tailscale, which is the simplest, or using CloudFlare Tunnel; each has its own advantages.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094765507207708692">

## In less than a year, Pi already has 100 thousand Stars🔥

<span class="tweet-meta">2026-09-01 20:33:10 · Original text</span>

> In less than a year, Pi already has 100 thousand Stars🔥
>
> At the end of 2025, Mario Zechner wrote a minimalist coding agent for himself. He did not expect that in such a short time it would pass one hundred thousand Stars.
>
> Pi's slogan: There are many agent harnesses, but this one is yours.
>
> In January 2026, Armin Ronacher, the author of Flask, openly said this architecture was worth spending time and energy to build and refine.
>
> In April, his company, Earendil, acquired the project. Mario became a shareholder but still guides the technical direction; the repository was moved from his personal account to earendil-works/pi, with the license remaining MIT.
>
> July 70 thousand stars. Today 100 thousand.
>
> Today is a milestone stage, because the official side only added one sentence: Pi v2 coming soon.
>
> I am really looking forward to the arrival of Pi v2; what kind of surprise will you bring me?

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095857935255798186">

## I want to share my Pi learning process

<span class="tweet-meta">2026-09-04 20:54:05 · Original text</span>

> I want to share my Pi learning process
>
> At first I was just curious and tried this Pi Agent product, published some related content, and it turned out quite a few people saw it.
>
> Over time I published more and more content in this direction, from sharing the simplest plugins to reading the source code, all gone through step by step.
>
> Sometimes I also dig into deeper things.
>
> For example, why the author developed the Pi product; I also dug into the author's blog and his whole journey.
>
> I gained a lot, because pi is not his first open source work; he has already open-sourced many works.
>
> Precisely because of the wounds from his previous work, in this open source work he maintained absolute autonomy.
>
> I also slowly understood that he was once a loyal fan of Claude Code, but because the Claude Code official side updates very frequently and keeps adding burden, he felt he lost control over his agent, so he resolved to develop an Agent that can be freely combined and assembled.
>
> This is also the original intention of this whole product.
>
> Honestly, at first I also did not know I would study it this deeply.
>
> From the small details one by one I peeled apart and understood all of Pi; from mere curiosity, I changed into truly wanting to understand it.
>
> From this whole learning process, I found one lesson:
>
> If you want to truly learn something, you must take the time to use it.
>
> The more often it is used, the more you understand, and only then can you truly master it.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095918886445330713">

## Recommending a very interesting Pi project, pi-vs-claude-code.

<span class="tweet-meta">2026-09-05 00:56:17 · Original text</span>

> Recommending a very interesting Pi project, pi-vs-claude-code.
>
> At first I thought from its name that it only compared Pi with Claude Code, but after I looked into it, it turned out to be completely different.
>
> It is more like doing one thing:
>
> Seeing whether the features Claude Code has can be built one by one with Pi.
>
> If you have started tinkering with Extension, Subagent, and custom Pi workflows, I highly recommend taking a look; many things inside can even have their ideas copied directly.
>
> There are several main ways to play:
>
> 1. Adding your own Subagent to Pi
>
> You can run several Pis in the background to work on different tasks; the main Agent keeps working, and you can still see the execution progress of each Agent.
>
> 2. Assembling your own Agent Team
>
> You can define Planner, Builder, Reviewer, Scout in advance; different Agents do different things, and can even be given different models.
>
> 3. Complementing Pi with security and permissions
>
> Intercepting dangerous operations, protecting sensitive files, some commands requiring confirmation — these things Claude Code has natively can also be added to Pi yourself through Extension.
>
> 4. Pi can communicate directly with Pi
>
> Not only the main Agent calling a Subagent; several Pis can even send messages to each other, and can communicate across machines, already feeling like an Agent Network.
>
> 5. You can even tell Pi to make Pi itself
>
> Inside this project there is a Pi Pi, which first finds several expert Agents to research Extension, Skill, Tool, and TUI, then helps you produce your own Pi features.
>
> I think the most interesting part of this project is not who is stronger than whom.
>
> Rather, you will slowly realize:
>
> Many features that Claude Code provides can actually be assembled by you yourself in Pi.
>
> If you are no longer satisfied with just installing a few plugins and want to really start changing your own Pi, this project is very worth using as a reference library.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096461907666579807">

## Although the Pi core is simple, when combined it is not simple at all.

<span class="tweet-meta">2026-09-06 12:54:03 · Original text</span>

> Although the Pi core is simple, when combined it is not simple at all.
>
> It can be turned into your own workbench, simply perfect.
>
> Through the Extension API, many things that used to be fixed can now be changed by you yourself, so you can really slowly make Pi your AI workbench:
>
> 1. Making a status bar that is always visible
> Model, Thinking, Token, Context, and Git branch information placed directly at the bottom, so the current status can be seen at a glance.
>
> 2. Sticking on a Todo / Task panel
> Leave the current target, completed steps, and next tasks in the interface; when running a long task, you do not need to repeatedly ask Pi how far along it is.
>
> 3. Making Context visual
> How much System Prompt, Skill, and Tool each take up, how much context remains, and when to Compact, all can be seen directly.
>
> 4. Then combine with pi-cc-extensions to complete the reading experience
> Folding of Tool Call, Rich Diff, Markdown, Mermaid, and long output handled together, so the rather plain default Pi reading experience is basically complete.
>
> What feels most distinctively Pi is that these things do not need to wait for the official side to add them slowly.
>
> You can even directly ask Pi to write an Extension for you; after it is changed, /reload, and use it again right away.
>
> I like this feeling more and more now:
>
> Not looking for a Coding Agent with the most complete features, but taking a Pi that is simple enough, then slowly changing it into your own working environment.

</article>

<article class="tweet-entry" id="post-2096847370902544442">

## Understanding the charm of Pi's design may only take a minute.

<span class="tweet-meta">2026-09-07 14:25:45 · Original text</span>

> Understanding the charm of Pi's design may only take a minute.
>
> Today I suddenly understood why Pi designs its own Session, handles the compaction algorithm, and builds its own context system: all of it is for the sake of not compromising!
>
> Context: try to keep the prefix stable so the Prompt Cache keeps hitting, Token is more efficient, and it is not easily changed at will by the Harness.
>
> Session: the complete record is in your own hands, not dependent on one model vendor to store state, and can still be continued after switching models.
>
> Compaction: you yourself decide what is kept and what is discarded; the content after compaction is still visible, can be changed, and can be moved, not turned into a black box that only the Provider can read.
>
> Model: GPT, Claude, Gemini, even local models, are all just one layer that can be replaced at any time.
>
> Harness: Pi also does not want you to end up merely moving from being locked to a vendor to being locked by another Harness.
>
> These designs look very restrained, even a bit stubborn, but in the end they point to only one thing:
>
> No compromise.
>
> The model can be replaced, the Provider can be replaced, the Harness can be replaced too.
>
> But Session, Context, and Memory should always be your own.
>
> Only then is it called a truly free Agent.

</article>

<article class="tweet-entry" id="post-2096905514995331392">

## If you are not currently learning and researching Pi, these must-read articles certainly should not be missed🔥

<span class="tweet-meta">2026-09-07 18:16:48 · Original text</span>

> If you are not currently learning and researching Pi, these must-read articles certainly should not be missed🔥
>
> Often just looking at source code and simple concepts does not give much insight; just reading the README also makes it hard to truly understand the author's original design intent.
>
> It is exactly these articles that can show the author's thinking, so you slowly know why Pi is designed the way it is now.
>
> 1. Prompt Caching In Agents
>
> Discusses Prompt Cache, prefix stability, and cache hits; I think this is the article best suited for understanding Pi's design ideas.
>
> 2. How Compaction Works in Pi
>
> Specifically discusses Pi's compaction mechanism: when it is triggered, what is kept, and how the Session continues after compaction.
>
> 3. The Session You Cannot Take With You
>
> This one I highly recommend.
>
> Discusses Session portability, the Provider black box, and whether an Agent's history is truly yours.
>
> 4. AgentHarness v2
>
> If you want to dive deeper into the base layer, read this one.
>
> Session, Lane, persistence, and recovery mechanisms; here you can see some of Pi's deeper designs for the Agent Runtime.
>
> 5. Pi Real Sessions
>
> Real Pi Session data that Mario made public.
>
> You can directly see Tool Call, Thinking, Compaction, and Branch to understand how a real Agent actually works.
>
> If I could only recommend three articles, the must-reads are:
>
> Prompt Caching In Agents
> How Compaction Works in Pi
> The Session You Cannot Take With You
>
> After reading these three articles, I think you can basically start to understand Pi.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096905691852333156">

## If you are also learning and researching Pi, these must-read articles should not be missed🔥

<span class="tweet-meta">2026-09-07 18:17:30 · Original text</span>

> If you are also learning and researching Pi, these must-read articles should not be missed🔥
>
> Often just looking at source code and simple concepts does not give much insight; just reading the README also makes it hard to truly understand the author's original design intent.
>
> It is exactly these articles that can show the author's thinking, so you slowly know why Pi is designed the way it is now.
>
> 1. Prompt Caching In Agents
>
> Discusses Prompt Cache, prefix stability, and cache hits; I think this is the article best suited for understanding Pi's design ideas.
>
> 2. How Compaction Works in Pi
>
> Specifically discusses Pi's compaction mechanism: when it is triggered, what is kept, and how the Session continues after compaction.
>
> 3. The Session You Cannot Take With You
>
> This one I highly recommend.
>
> Discusses Session portability, the Provider black box, and whether an Agent's history is truly yours.
>
> 4. AgentHarness v2
>
> If you want to dive deeper into the base layer, read this one.
>
> Session, Lane, persistence, and recovery mechanisms; here you can see some of Pi's deeper designs for the Agent Runtime.
>
> 5. Pi Real Sessions
>
> Real Pi Session data that Mario made public.
>
> You can directly see Tool Call, Thinking, Compaction, and Branch to understand how a real Agent actually works.
>
> If I could only recommend three articles, the must-reads are:
>
> Prompt Caching In Agents
> How Compaction Works in Pi
> The Session You Cannot Take With You
>
> After reading these three articles, I think you can basically start to understand Pi.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2097275917915853200">

## Getting ready to tidy up my own Pi learning process

<span class="tweet-meta">2026-09-08 18:48:38 · Original text</span>

> Getting ready to tidy up my own Pi learning process
>
> I do not know how many people will see it, but sharing is a meaningful thing; tidying it up is also a review of the learning.
>
> These two months, from the simple Pi Agent to studying the source code, analyzing its contents, and learning to grow step by step until starting to write my own plugins.
>
> At first it was pure curiosity: why did such a simple Agent appear, and why did Openclaw choose it as a foundation to develop. Then I slowly understood the reason.
>
> I highly suggest you take time amid learning to trace the author's history; it is not just a historical recap, but a collision of ideas, and at the same time answers why it became like this.
>
> No need for many words, I am starting to act now. If you are also interested, let me know in the comments👇

</article>

## Next

After finishing this stage, continue reading [Stage 2　Finish your first task first](/en/tweets/02-first-tasks).
