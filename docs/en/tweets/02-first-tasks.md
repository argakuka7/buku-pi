---
title: Finish your first task first
description: Pi learning notes, stage 2, containing 25 original texts.
outline: false
prev:
  text: Getting to know Pi out of curiosity
  link: /en/tweets/01-meet-pi
next:
  text: Understanding Sessions and context
  link: /en/tweets/03-sessions-context
---

<span class="library-status">Personal learning notes · STAGE 02</span>

# Finish your first task first

**The problem to solve at this stage**　Learn about model selection, beginner tips, and the basic interface, then return to a small task you can verify on your own.

These notes contain tutorials from zero as well as experience using various models. Specific models and product statuses will become outdated, but the way of choosing a model is still worth keeping. When learning, finish the task first, then compare speed and price.

This page contains 25 original texts. The content comes from the personal archive on Google Drive; x.com addresses and t.co media short links have been removed. The product versions and statuses mentioned in the original tweets refer to their publication dates.

<article class="tweet-entry" id="post-2087369163572756657">

## I tested Pi Agent + Deepseek V4 Flash and finally felt what real text output speed is like

<span class="tweet-meta">2026-08-12 10:42:44 · Original text</span>

> I tested Pi Agent + Deepseek V4 Flash and finally felt what real text output speed is like
>
> It feels like taking off in place, practically without pause. After using Claude and GPT often, no other model feels slow; but the speed from today's test may really be the speed of the AI generation I want
>
> If domestic models can one day match or surpass foreign models, I will switch fully to domestic models without hesitation

</article>

<article class="tweet-entry" id="post-2087775404090114120">

## What kind of spark appears from Pi Agent + the latest Deepseek V4 Pro?

<span class="tweet-meta">2026-08-13 13:36:59 · Original text</span>

> What kind of spark appears from Pi Agent + the latest Deepseek V4 Pro?
>
> Today I used the two together to make a cool particle effect page, and the result amazed me.
>
> The point is that Pi Agent has almost no system prompt, so it best tests the model's real ability. Benchmark scores can be manipulated; often the score is high but the ability is low. But once external influence is removed, what remains is the model's most fundamental ability.
>
> Overall the result is excellent. This prompt I have run on Qwen and Kimi; in terms of fluency and completeness, this time I can only say Deepseek is still impressive!

</article>

<article class="tweet-entry" id="post-2091511349431898427">

## There is really no need to save many Pi-related sites; just a few is enough.

<span class="tweet-meta">2026-08-23 21:02:18 · Original text</span>

> There is really no need to save many Pi-related sites; just a few is enough.
>
> Official site:
> Documentation, installation, and updates all come in from here; do not go straight to third-party tutorials.
>
> Skill documentation:
> How to write SKILL.md, where to put it, when it is loaded. Repeated processes should be written as Skills, do not go straight to MCP.
>
> Extension documentation:
> Look here if you want to add commands, intercept dangerous operations, or change the status bar. A Skill is a manual, an extension changes the runtime.
>
> Package installation:
> How to use pi install. Extensions carry system privileges, so read the security explanation before installing.
>
> Plugin marketplace:
> Search for packages here first; it is more reliable than copying commands from a chat group.
>
> Official source code
> Examples of permission interception, sandbox, and subagent are all in the repository.
>
> Mandarin documentation:
> If English feels heavy, look here; the quick start section is already enough.
>
> Plugin collection:
> If you still want to search for plugins, open this again; use it as a catalog.
>
> My advice is that you should start practicing first, while looking at the documentation. Otherwise, no matter how much you save, it will not bring real improvement.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2091682103109017691">

## Many people ask what is the difference between Pi Agent and Deepseek Harness?

<span class="tweet-meta">2026-08-24 08:20:49 · Original text</span>

> Many people ask what is the difference between Pi Agent and Deepseek Harness?
>
> In fact these two paths look different, but are basically the same: both give you an Agent shell that can run, but you have to connect the model and tools yourself. What the final shape looks like, only you know.
>
> I have used both for quite a while, and the differences are fairly clear:
>
> 1.  Pi is very minimalist by default, its system prompt is short; DSH is more complete, giving you a framework that can work right away from the start
>
> 2.  Pi: if something is not comfortable, add a Skill or write an extension; in DSH everything is a plugin, even the Harness itself can be changed, and the core can be replaced directly
>
> 3.  Context handling is different. In DSH, tool results that are too long are cut in the middle, and what is cut is lost; Pi uses compaction first, writes the full content to disk, and reads it back when needed
>
> 4.  The attitude toward plugins is also starting to diverge. DSH is becoming more open, carrying the spirit that everything can be swapped; Pi has recently set boundaries: what is conversation, what is runtime, what can be persisted
>
> 5.  From experience, Pi is more like a character editor, DSH is more like open-sourcing the entire "way to build an Agent"
> So do not ask which is stronger. One gives you a clean chassis, the other gives you all the components that can be changed.
>
> Although these two Agents have many differences, basically both provide an Agent with a fairly high degree of freedom; one is plugin-based, one intervenes as little as possible, each has its strengths

</article>

<article class="tweet-entry" id="post-2091896626931749132">

## First step with Pi Agent, definitely setting up a status bar that looks good🔥

<span class="tweet-meta">2026-08-24 22:33:16 · Original text</span>

> First step with Pi Agent, definitely setting up a status bar that looks good🔥
>
> Here I recommend the pi-footer project.
>
> This is not just changing colors, but putting the current Pi model, Provider, Thinking Level, Context usage, Token consumption, Session cost, running time, and Git status all into the status bar.
>
> When Pi has been running for a long time, the things most easily missed are how much Context is left, how many Tokens are used, and which model is being used. After installing pi-footer, this information can be known at a glance, without needing to type commands often to check.
>
> There are currently 10 built-in presets, the more commonly used ones:
>
> 1. compact: concise information, suitable for terminals with narrow screens.
>
> 2. powerline: colored block effect, the best looking, but best paired with a Nerd Font.
>
> 3. git-heavy: highlights the branch, file changes, code additions/deletions, and sync status.
>
> 4. pi-footer: similar to Pi's original status bar, not many changes, but freely editable.
>
> 5. powerline-bright / blocks / mono: bright color, multi-line block, and high-contrast black-and-white styles respectively.
>
> Besides using presets directly, you can also add or remove status components, arrange their order, change colors and icons, and even create a multi-line status bar. If you like it simple, install just a few; if you want to show both Agent status and project status, you can also mix it yourself slowly.
>
> Note that the Powerline style is best paired with a Nerd Font, otherwise some icons may not display fully.
>
> In my video I had not installed a Nerd Font, so the icons shown are incomplete. But for me it is enough; with a little more detail and optimization it is truly sufficient. So I suggest you start using it.

</article>

<article class="tweet-entry" id="post-2092509979408580806">

## Pi practice from zero, the long 10,000-word tutorial has finally arrived🔥

<span class="tweet-meta">2026-08-26 15:10:30 · Original text</span>

> Pi practice from zero, the long 10,000-word tutorial has finally arrived🔥
>
> Finally there is time to tidy up the Pi learning material into an article; it does not discuss basic concepts directly, but takes you straight into practice.
>
> The article is divided in order into five parts:
>
> 1. Getting to know Pi
> First distinguish which files it can read and write, and which operations it can run. A local Agent and a local model are two different things.
>
> 2. Installation and interface
> Start installing from the practice directory, confirm the version and login, then get to know the input area, tool events, status bar, and model settings.
>
> 3. The first real task
> Use @ to reference meeting notes, write the material, actions, constraints, and verification criteria into the prompt, then produce an action list that can be opened.
>
> 4. Self-verification
> Do not just look at the summary it writes itself. Check the checksum value, output files, owners, and deadlines, then manage the next task with AGENTS.md and session commands.
>
> 5. Extensions and security
> Distinguish Skill, Extension, and Package. Project Trust is not a sandbox; "do not access outside the directory" is only a prompt, not a system lock.
>
> As long as you seriously follow the tutorial to practice, I believe you can also change from a Pi beginner to an expert who masters the Agent.
>
> If there is anything else you want to know, leave a message in the comments; next time I will try to write an article that fits😂

</article>

<article class="tweet-entry" id="post-2092599173191434612">

## Pi Agent practice from zero, a long 10,000-word article, I worry you are not patient enough to read it🔥

<span class="tweet-meta">2026-08-26 21:04:56 · Original text</span>

> Pi Agent practice from zero, a long 10,000-word article, I worry you are not patient enough to read it🔥
>
> I specifically summarized this long article into several key points, then made it into a video for you to watch.
>
> I repeated several main chapters from the article, complete with animations and relevant commands.
>
> Most importantly, I also want to try the educational short-video approach to popularize AI-related knowledge; if you like it, I will try more directions in the future.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2092808237339087232">

## In Pi, you do not need many models; three tiers are enough.

<span class="tweet-meta">2026-08-27 10:55:40 · Original text</span>

> In Pi, you do not need many models; three tiers are enough.
>
> 1. GPT 5.6 Sol
> The workhorse. Changing code, looking at structure, solving problems, tasks that are a bit tangled — I throw them all here first. It is not the cheapest, but it rarely causes rework. Now I do not directly use a free model to challenge complicated work; it saves a little money, but the repair time afterward costs more.
>
> 2. DeepSeek
> For daily tidying, mass-changing files, writing lists, and repetitive work, Flash is enough; if you need reasoning and logical alignment, then go up to Pro. Pi's Context is clean, so DeepSeek's cache and billing look tidier. If it can be finished at this tier, do not call Sol for rough work.
>
> 3. OpenRouter
> Free quota and newly released models come into Pi from here. Test a new model first with two or three small tasks: tidying meeting notes, renaming a few files, reading a small repository. If the feel is right, then move it into serious projects; if not, just swap it out, no need to feel bad. Do not use an unverified model to change code you actually use.
>
> The concrete advice is only one: make the good model you usually use your workhorse, and use cheap models for rough work, especially very repetitive work.
>
> Finally, keep one OpenRouter as a backup and a source of free models, so that if the workhorse model is unavailable we can still investigate the problem. Most importantly, free models are numerous and satisfying, good for both testing and daily use.

</article>

<article class="tweet-entry" id="post-2092853199053148319">

## Local model + Pi Agent, that is the right way to use a local model🔥

<span class="tweet-meta">2026-08-27 13:54:20 · Original text</span>

> Local model + Pi Agent, that is the right way to use a local model🔥
>
> Today I saw a video testing Pi + local Qwen3.8 model, and only then realized that for a local Agent, context size may become the next hot topic.
>
> Although a local model does not charge per Token, because of hardware limits, its context may only support 256k, or even 64K.
>
> Conclusion:
>
> 1. The longer the context, the longer the wait
>
> Every time the Agent calls the model, the previous context must be processed first. In the cloud it may just be a bigger bill, but local models are far more direct: the longer the Prompt, the slower the Prefill, and you can feel the Agent getting more sluggish as the conversation goes on.
>
> 2. Context also genuinely eats your device resources
>
> Long-running Sessions, Tool Results, and various plugin explanations are all included; what gets consumed in the end is not only Tokens, but also KV Cache, memory, and VRAM.
>
> Especially when running a model like Qwen3.8-27B locally, device resources are indeed not as abundant as the cloud, so Pi's advantages of a short Prompt and few tools become even more noticeable.
>
> 3. The more plugins, the more easily a local model is disadvantaged
>
> Pi originally had only a few tools, and Skills are loaded as needed. This design once looked merely "minimalist".
>
> But in local model scenarios, you will realize that Tool Schema, logs, and irrelevant web content: the fewer there are, the less junk data the model processes each round.
>
> 4. Saving Tokens locally actually means saving time
>
> Locally, since Tokens are already free, what we should pay more attention to is time consumption; because if it runs too slowly, time consumption also becomes a cost.
>
> In the past: saving Tokens = saving money, but now with local models:
>
> Saving Tokens = lower latency + less resource usage + larger effective Context + the Agent can work longer.
>
> So recently, when looking at Qwen3.8 and Pi, I have understood even more why Pi keeps reducing things in the context.
>
> Before I only knew its design was minimalist and its cache efficient; now looking back, this design naturally fits the reality of local models.
>
> If the day really comes when every home can spread out its own large model at home, then we need to think about how to complete our own needs as quickly as possible under limited computing power.

</article>

<article class="tweet-entry" id="post-2092899784797667540">

## Seeing GPT launch a sticker feature, I immediately installed it on the Pi I had long admired.

<span class="tweet-meta">2026-08-27 16:59:27 · Original text</span>

> Seeing GPT launch a sticker feature, I immediately installed it on the Pi I had long admired.
>
> I made a set of stickers for it; later if someone asks, I can just send the Pi stickers I made myself😂

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093506603890958446">

## Pi Agent running a large domestic model, the result is similar to my guess

<span class="tweet-meta">2026-08-29 09:10:44 · Original text</span>

> Pi Agent running a large domestic model, the result is similar to my guess
>
> There is an endpoint in the project that sometimes fails: after submitting, the loader spins, then after a refresh it is normal again. The log is a bit messy, so I let them investigate it themselves, find the cause, and report which part can be improved.
>
> The experience of using several models is quite different.
>
> 1. GLM 5.3 Flash: ran for quite a while, finally able to explain the broad outline, but the analysis was a bit dry and did not make clear enough which part should be changed
>
> 2. DeepSeek V4 Flash: much faster, the steps are also complete, and the direction given can be tried directly
>
> 3. GPT-5.6 Terra: fastest, most detailed analysis, best quality in this round
>
> 4. Kimi K3: after running for a while an overload message appeared, this round was not finished
>
> Overall, the ability of domestic models has now caught up, but the computing power has not yet caught up; even so, it is already in the process of catching up
>
> If there is time, maybe I will keep testing, to see whether the overall result makes progress or improves

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093634905037230252">

## Same model, change the Agent Harness, does it feel like changing the model?

<span class="tweet-meta">2026-08-29 17:40:33 · Original text</span>

> Same model, change the Agent Harness, does it feel like changing the model?
>
> Recently I kept seeing tests of local models like Pi + Qwen3.8, and the more I looked the more I felt that in the past, attaching the entire ability of an Agent to the model itself may have been wrong from the start.
>
> The model is certainly important, but now the Harness plays an increasingly crucial role in how AI is used.
>
> 1. What the model sees each round is indeed already different
>
> Pi's built-in tools are few, its System Prompt is also fairly restrained, and many abilities are loaded as needed.
>
> If you switch to another Harness, by default the model may already be fed a dozen Tools, more explanations, and more status.
>
> For a large cloud model, this may just be a few extra Tokens.
>
> But for a local model like Qwen3.8-27B, the Tool Schema, Context, and those extra choices themselves have the potential to change how the model reasons.
>
> 2. If the tool design is not good, no matter how smart the model is, it is useless
>
> I saw a fairly interesting Qwen test: with the same model, at first it was only given Bash, then left to use sed and Python to change files, and pass@1 on SWE-bench Pro was only about 28%.
>
> After that, just by changing the edit tool to str_replace, which is more suitable for code changes, then optimizing the way it was tested, the score immediately rose to about 50%.
>
> The model weights did not change a single line.
>
> What changed was the tool in its hands.
>
> This is very similar to asking the same person to work: one person only holds a hammer, another has a complete toolbox; the final result will clearly be very different.
>
> 3. What really distinguishes an Agent is often what happens after the first mistake
>
> What is returned after a Tool Call fails, how much log is cut, whether to Retry, when to continue, when to stop — these things cannot really be controlled by the model itself.
>
> Every time the Harness feeds the execution result back into the Context, it is essentially telling the model again:
>
> "What you did just now, and what is happening now."
>
> So the Harness is actually constantly influencing how the model judges the next step.
>
> 4. Context management also directly changes how long the Agent can last
>
> With the same 100K context, one Harness may already start doing Compaction earlier, while another still keeps a lot of original history.
>
> One side later sees the full Tool Result, code, and previous assessment; the other side has only a Summary left.
>
> At this point, even though both use the same model, they are actually no longer solving the same problem.
>
> I am also a heavy Agent user; in daily life I have used Codex, Claude Code, Pi Agent, Deepseek-Harness, Hermes, and others.
>
> But often with the same model in different Agents, I really feel a difference; some are stronger, some actually weaken.
>
> So this will become more and more important going forward.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093888400738922672">

## Sharing 4 Pi Agent usage tips that I most recommend🔥

<span class="tweet-meta">2026-08-30 10:27:51 · Original text</span>

> Sharing 4 Pi Agent usage tips that I most recommend🔥
>
> I have played with Pi for quite a while, so I will share a few usage tips from my version; these are not just command tips, but fundamental ones.
>
> 1. Do not install many Extensions right away
>
> Pi's biggest advantage is that it is light.
>
> I usually use it as is first; if there is a truly repeated need, then I add a Skill or Extension. Otherwise, tools pile up, and in the end Pi becomes heavy instead.
>
> 2. Load Skills as needed
>
> Project rules can be permanent, but tutorials, flows, and temporary material do not all need to go into Context.
>
> Let Pi read them when needed; this is especially useful for long tasks, the Context will be much cleaner.
>
> 3. For repetitive work, let Pi create its own Skill
>
> For example a fixed Code Review, tidying material, a publishing flow — now I prefer to just tell Pi:
>
> "Tidy the flow above into one Skill."
>
> After long use, Pi will slowly become a set of tools more suitable for you, rather than constantly looking for other people's plugins.
>
> 4. For complicated tasks, split them first, then consider Subagents
>
> More Subagents does not mean better.
>
> I usually only split when the task can clearly be parallelized, for example "find material + read source code + run tests".
>
> Otherwise, several Agents tossing Context back and forth can sometimes be messier than one Agent working through to the end.
>
> If summarized into one sentence:
>
> Keep the configuration as minimal as possible, add only when needed.
>
> Keep it clean and simple; install plugins only when there is a matching need, do not add too many components for features that are said to be advanced.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093978662697828756">

## Claude Code, Codex, DeepSeek Harness, and Pi — they all look like they build Agents, but actually take four very different paths.

<span class="tweet-meta">2026-08-30 16:26:32 · Original text</span>

> Claude Code, Codex, DeepSeek Harness, and Pi, they all look like they build Agents, but actually take four very different paths.
>
> I used to like comparing who writes code better, but after studying Pi intently recently, I feel more and more that what should really be noticed is: how much it wants to decide for the user, and how much control it is willing to hand over to you.
>
> 1. Claude Code: more and more like a complete Agent product
>
> Claude Code now has almost everything like Plan, Sub-agent, Hooks, Skills, MCP, and plugins; it can even be used from various entry points: CLI, IDE, Web, and Mobile.
>
> The impression it gives: Anthropic has already chosen most of the right answers for you.
>
> You do not need to study the Harness too much; just take it and it works right away, and the whole Claude ecosystem is very well aligned.
>
> If asked only which is most suitable for getting straight to work, I might still put it first.
>
> 2. Codex: more like a strictly supervised engineer
>
> What left the deepest impression about Codex is actually not any of its features, but things like Sandbox, Approval, and Network Policy.
>
> It keeps solving one very real problem: when Agent permissions grow larger, how to let it work boldly without actually wrecking the machine.
>
> Including automatic Review now, it essentially even assigns another Agent to judge whether one Agent step can be executed.
>
> So I think Codex's direction is clear:
>
> Not only to make the Agent able to work, but also to keep it working within controlled limits.
>
> 3. DeepSeek Harness: currently the most like a large experimental laboratory
>
> Its slogan now is very direct:
>
> Everything is a Plugin.
>
> Plan, Sub-agent, model, Tool, Session, including many core abilities, are all broken out toward pluginization; even the tool call itself is still divided into Native Mode and Code Mode.
>
> And now it can already connect to DeepSeek, Anthropic, OpenAI, and custom Providers, not just run DeepSeek.
>
> But it is still in Developer Preview, and the official side clearly warns that there will be Breaking Changes.
>
> So I prefer to understand it as an Agent architecture experiment that is evolving rapidly, not a finished product that is fully stable.
>
> 4. Pi: the most like "does not decide anything for you" among the four
>
> Pi is even unwilling to put into its Core things that many people think an Agent should have, like Sub-agent, Plan Mode, and Sandbox.
>
> Need something, use an Extension; want to give the Agent a workflow, use a Skill; if it is more complicated, just wrap it into a Package.
>
> The biggest advantage of this approach is that it is light, the Context is very clean, and you can almost always keep changing it.
>
> Actually after going back and forth trying all these Agents, at first my thinking was simple: whichever Agent is stronger, whichever model writes code better, that is what I use.
>
> But the more tools I use, the more I start to care about why the same model performs differently when the Harness is changed, how Context is organized, why the Tool is designed that way, which abilities should go into Core, and which should be handed to plugins.
>
> At this point, what I am studying is no longer just "which tool is more comfortable to use", but slowly forming my own judgment about Agents.
>
> Maybe what is really interesting is not choosing the strongest Agent, but slowly understanding how a good Agent should be designed.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094345513344663712">

## DeepSeek Harness and Pi, who do you think is stronger?🔥

<span class="tweet-meta">2026-08-31 16:44:16 · Original text</span>

> DeepSeek Harness and Pi, who do you think is stronger?🔥
>
> If you only look at the surface, the two are similar: both open source, both MIT, both say ability is added through plugins, and both give users a fair amount of freedom.
>
> But if you take them apart, the emphasis is actually not in the same place.
>
> 1. Pi protects the loop, dsh takes the loop apart
> Pi defaults to read / write / edit / bash, and its system prompt is pressed very short.
> Skill, Extension, and Package hang outside; Loop and Session remain at a layer you can touch.
>
> DeepSeek Harness is more extreme: model, tool, sandbox, storage, UI, even how the Agent thinks next, are all made into plugins.
> Its slogan is not marketing, but architecture — Everything is a Plugin.
>
> One is like a house without finishing: few walls, clear load-bearing structure.
> The other is like a LEGO studio: every piece can be swapped, including the way it is played.
>
> 2. The position of the complexity is different
> Pi hands the right to choose to you. Add as needed, and the Context stays clean.
> dsh turns the right to choose into a stack of configuration. Profiles stack layer after layer, the later layer overrides the earlier one; abilities change quickly, but if there is a problem you have to trace it through the whole plugin stack.
>
> So there will be an illusion: dsh has more features, so it means stronger.
> In fact it just spreads out its complexity earlier. Pi is not without those abilities, it just does not install them for you by default.
>
> 3. For now, do not choose based on who is stronger
> Someone used the same DeepSeek V4 Pro to run one round of Agent tasks in Claude Code, dsh, Hermes, Pi, and OpenCode.
> The result is quite interesting: Pi solved the most problems, and DeepSeek's own Harness was the most cost-efficient.
>
> I do not know whose design style will become the protagonist in the future, because I also do not know which path is right. But I only believe one thing: giving users enough freedom is definitely not wrong.
>
> My own needs and understanding only I know; you open it up, then I have the chance to build my own Agent!

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094658406976241811">

## Flash models can already work, many people do not yet know how pleasant it is to use Pi🔥

<span class="tweet-meta">2026-09-01 13:27:35 · Original text</span>

> Flash models can already work, many people do not yet know how pleasant it is to use Pi🔥
>
> This feels a bit strange. V4 Flash, GLM-5.3 Flash, and Qwen at that tier have their price pressed very low, but their working ability is not bad at all.
>
> For daily work like changing files, running scripts, or adding test cases, handling simple everyday tasks is generally no problem.
>
> But once actually used, most people still raise the default thinking depth to the maximum: tools piled up, system prompt written long, Plan, Sub-agent, browser, and a memory layer all switched on together.
>
> I increasingly feel Flash does not need a more complete product, but a thinner layer. Pi happens to be in this position.
>
> 1. Flash is not afraid its ability is insufficient, but afraid its instructions are too noisy
>
> The real shortcoming of cheap models now is often not that they cannot write code, but that they easily go in circles when the context is dirty. Once the tools are many, it prefers to reread the same file, messes up parameters, and spins the same thing three times. A heavy shell lays all those abilities out in the default environment; for Opus this may add polish, for Flash it is more like a disturbance.
>
> Pi defaults to only four things: read, write, edit, bash. Its System Prompt is pressed very short. Skill, Extension, and Package are all there, just not opened for you in advance. This is very important for Flash. What it can see each round becomes less, then its attention returns, and the cheap price becomes meaningful.
>
> 2. A thin shell protects its price, not reduces features
>
> Flash is called Flash not only because it is fast, but because the unit price lets you run it for more rounds. For a model like V4 Flash, input can be as low as about 0.14 dollars per million Tokens, while the context is also pulled very long. But once the shell is thick, each round sends a long prefix, idle tool descriptions, and extra personality explanations; the savings gained earlier will be eaten first by the environment.
>
> Someone used the same DeepSeek V4 Flash to run a set of fairly realistic tasks in different Harnesses. What was swapped was not the model, but the shell. Pi solved more problems, at a cost of about 0.028 dollars per success; a heavier default workflow could reach about 0.195 dollars per success. Seven times that does not come from a difference in model intelligence, but from how much is put in each round.
>
> So I record the pairing in one sentence: Flash is responsible for getting the work done, Pi is responsible for keeping the work from becoming expensive.
>
> 3. Complexity still hangs outside, it is just not handed to Flash by default
>
> Light does not mean simple. Browser, review, subagent, repository navigation, install them when needed. Flash is good for exploring a repo, changing tests, running scripts, and changing files as clearly written. Deciding the plan, touching architecture, and final checks still go back to the heavier models.
>
> Pi's advantage here is not adding one more Flash switch, but that the cost of changing models within the same Session is low. If Flash runs to a standstill, hand that round to Opus or Pro; no need to switch products, and no need to first carry the whole default plugin set.
>
> Daily summary:
>
> Daily cycle: V4 Flash or GLM-5.3 Flash + a plain Pi configuration
>
> Backup: switch to one heavy model in the same Session to look at the plan
>
> Do not do: pile up the whole default plugin set right away when starting with Flash
>
> There is one core sentence in Pi: what should not go into Core, do not put into Core. This issue meets cheap models, and only then does the saving really become noticeable.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094684026028339324">

## Two weeks using Pi, these are the essential tips you must know🔥

<span class="tweet-meta">2026-09-01 15:09:23 · Original text</span>

> Two weeks using Pi, these are the essential tips you must know🔥
>
> Pi at first glance looks like a very light Agent, yet in reality it piles login rework, routing refactor, and a question about documentation all into the same Session.
>
> Often the model does not become stupid, rather the context gets contaminated first. Sometimes the direction is wrong, and the following task becomes meaningless; patching it with context compaction or adjusting direction only wastes more time.
>
> I see people in the community who use Pi well now doing the opposite:
>
> They control the conversation first, then let the model work. Pi does not give you subagents by default; branching is done on the Session tree, not on a set of personas.
>
> 1. One matter, one Session
>
> If you are changing login, then only change login. If it gets dirty, open a new one, give it a name you can still find tomorrow.
>
> Some hope compaction can turn porridge clear. Sometimes it can save you, but when three unrelated things are tangled together, compaction only thickens the mess. Rather than praying it will become clean, better to open a new path right away.
>
> 2. If it goes off track, go back to the branch point, do not pull it back with talk
>
> When the conversation on the same path goes further and further off, go back to the sentence that had not yet strayed; if you need to try another way, grow from there.
>
> This is the habit most often mentioned, and also the easiest to ignore. Pi's conversation is not a straight line, but a tree. Wrong branch, move to another branch and continue; no need to explain the whole thing again, let alone pull in one agent to carry the context.
>
> Add one more, even more firm: if the model and the direction you want have already branched from the start, stop immediately, change the prompt sentence. Do not wait for it to finish changing files before regretting it.
>
> 3. If you can see it yourself, do not feed it straight to the model
>
> Checking status, scanning logs, confirming whether a file exists, often does not need to use the model's eyes. Run it in the terminal first, make sure it is useful, then decide whether it needs to see it. Pointing to a specific file is also safer than letting it guess paths across the whole repository.
>
> This is not showing off technique. Reduce ordering cheap and expensive models around as janitors; the Context will be tidier, and the bill will be tidier too.
>
> 4. Skills grow from your repeated habits, not from a wish list
>
> Project rules can be written very short. Tutorials, flows, and temporary material should not all be put in first.
>
> The safer way is, a few days later, to reopen the last conversation, see that you repeatedly talked about the same review, the same publishing flow, or the same kind of test change, then summarize that flow into a Skill. That way what is stored is your workflow, not a collection from the plugin marketplace.
>
> Think of the model as a tier too. For daily use take the light one, if it stalls then switch to the heavy one, and add thinking depth according to the task. The shell stays the same layer; what changes is the engine.
>
> If you may only remember one sentence:
>
> Plugins determine what else you can do, Session determines whether you can still clearly see what you are doing.
>
> Tidy the conversation first, then work more accurately and faster.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095082604169146610">

## Fable 5.1 is out, only one message when entering Pi: do not make it the default engine🔥

<span class="tweet-meta">2026-09-02 17:33:12 · Original text</span>

> Fable 5.1 is out, only one message when entering Pi: do not make it the default engine🔥
>
> 1. Choose the model according to the task
>
> In the overall test, scientific terminal rose from 24.7% to 52.6%, office automation rose from 17.1% to 31.4%, almost double. What I notice most, Agent programming, rose from 42.0% to 55.8%. If you only look at the model, this improvement is not small.
>
> But in Pi I will not make it the default model. After all, most daily work like changing files, writing tests, or running scripts can be done directly by a Flash model.
>
> Even though its ability went up and its price is also cheaper, still save where you need to save, spend where you need to spend — ride a bike to the bar.
>
> 2. Context optimization saves more
>
> Input and output did not change, still 10 dollars and 50 dollars. But the cache price dropped, cut from 1 dollar to 0.25 dollars. For long-duration, high-load tasks it is still very economical.
>
> But Fable 5.1 prefers to write long content; if thinking is opened to the maximum, the money saved may not be enough for one context load.
>
> So do not treat 1M as a bonus; the model's default context size can be adjusted, 272K is actually also enough to handle most tasks.
>
> 3. Security protection must not be lacking
>
> Although the Fable 5.1 model is sensitive, and this time the official side said the safety threshold was relaxed so it is not like before where one touch would switch back to the Opus model, I still suggest you install permission-related plugins for your Pi.
>
> Do not just trust the model's ability. If you meet an unsafe relay, man-in-the-middle poisoning, or prompt contamination, economic and property losses happen easily, so this side must not be lacking either.
>
> Although I am sure most people will not move Fable 5.1 into Pi to run — after all, the official API price is still expensive — but to truly test a model's ability, it must be released from a thick Harness.
>
> Use the model's real ability directly, and see whether it is a god or a demon.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095103024012353851">

## Pi's support for model vendors is still not broad enough🔥

<span class="tweet-meta">2026-09-02 18:54:20 · Original text</span>

> Pi's support for model vendors is still not broad enough🔥
>
> In the process of using Pi, one feeling became clearer and clearer:
>
> Often what is called model support only means the request can be sent out intact, that is all.
>
> But that does not mean that inside Pi the model can work as fully as its official Harness.
>
> 1. DeepSeek's problems mostly appear in Tool Call and Thinking
>
> The model itself can be used, but once it involves consecutive tool calls, replaying thinking content, and message order, compatibility problems easily appear.
>
> That is, it is not that the model cannot run, but how the Harness organizes context and replays Thinking will directly affect stability.
>
> 2. OpenRouter's biggest problem is that the interface is the same, the behavior is not necessarily the same
>
> On the surface everything is compatible with the Anthropic or OpenAI interface, but once the model behind it changes, Thinking Signature, Reasoning Replay, and Prompt Cache can all differ.
>
> The API looks the same, but the internal behavior is not the same thing at all.
>
> 3. Models like Kimi will still meet details like OAuth and cache statistics
>
> The model's own ability may be fine, but how cached Tokens are counted, when OAuth is refreshed, how a task continues after a disconnect — these edge details also directly affect the experience.
>
> Often, whether it can connect well is the first step of a superior Harness.
>
> I have also experienced similar problems in daily use. Although Pi is a very good Agent, in handling multi-model connections it still needs improvement.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095381382801551533">

## Pi + Gemini 3.8 Flash is really fast😂

<span class="tweet-meta">2026-09-03 13:20:26 · Original text</span>

> Pi + Gemini 3.8 Flash is really fast😂
>
> I ran the pelican riding a bicycle test, it only took about twenty seconds to finish, truly far ahead of other vendors' AI.
>
> But the test result page is decent, overall complete, and the adjustable parameters are also very good, especially the curve of its mouth. In the first wave it was still a static image, after adding parameters it moved.
>
> Please see the result👇🏻

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096048107951972445">

## This is Pi's speed, a new model is updated right after release😂

<span class="tweet-meta">2026-09-05 09:29:46 · Original text</span>

> This is Pi's speed, a new model is updated right after release😂
>
> Pi already supports the latest GPT-6 model, very fast
>
> Only one command line is needed: “pi update - -models”, then the latest model list can be updated and used right away
>
> Pi has followed the earliest; when will Hermes connect GPT-6.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096247146937028914">

## The more expensive GPT-6 gets, the greater Pi's value🔥

<span class="tweet-meta">2026-09-05 22:40:40 · Original text</span>

> The more expensive GPT-6 gets, the greater Pi's value🔥
>
> In my opinion the biggest problem with Astra is not the model's strength, but its quota that does not last; even an ordinary Plus member runs out in just a few rounds of conversation.
>
> The API price has already risen to input $10/M and output $50/M, and the official side clearly warns that in Work / Codex, Astra will consume quota faster than Sol.
>
> This is where Pi's advantage starts to show.
>
> Someone specifically tested Pi, OpenCode, and Codex; Pi's default framework at the start is only about 1.1–1.4K Tokens.
>
> In one series of MCP tasks:
>
> 1. Total Input Token 81% fewer
> 2. Non-cached input 55.5% fewer
> 3. Number of requests to the model 53% fewer
>
> In the past a minimalist design like this mostly just helped save API cost.
>
> But for a model like GPT-6, I think the meaning becomes greater
>
> The more expensive the model and the stronger its reasoning, the more the Harness should not be bloated; after all, being usable in the long run is what we truly care about. Otherwise, no matter how good the model is, it runs out in two rounds, and ordinary people cannot afford to use it at all.
>
> So after GPT-6 came out, I actually became more optimistic about minimalist Agents like Pi.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096391875913744841">

## GPT-6 gets more expensive, local models become more important🔥.

<span class="tweet-meta">2026-09-06 08:15:46 · Original text</span>

> GPT-6 gets more expensive, local models become more important🔥.
>
> Recently on X, I found a fairly interesting combination:
>
> Pi + Qwen3.8 27B.
>
> In the past the biggest problem with local models was not that they could not run, but that after being put into an Agent, they felt only good for chatting; to really work with the Agent they always felt underpowered.
>
> But Qwen3.8 27B is starting to be a bit different.
>
> 27B Dense, native context 256K, and this generation clearly strengthens Coding and Agent ability.
>
> Combined with a minimalist Harness like Pi:
>
> 1. By default only 4 core tools, the local model does not need to first chew through a pile of Tool definitions
>
> 2. The System Prompt is quite light, friendlier to Prefill, the most expensive part of a local model
>
> 3. Ollama and llama.cpp can be connected directly, the model runs entirely on your own machine
>
> 4. No API bill, no quota anxiety, you can really let the Agent work slowly in the background
>
> But in terms of scale, it clearly cannot match GPT-6; even so, its advantages cannot be ignored either.
>
> Most of my daily activity is changing files, running scripts, tidying projects, and simple Coding; a local Qwen model is entirely capable.
>
> If you really meet a problem it cannot solve, then /model switch to GPT-6.
>
> That way, GPT-6 is no longer Pi's default model, but more like an expert occasionally called in to solve hard problems.
>
> Pi + local Qwen3.8 is responsible for working, GPT-6 is responsible for being the backup.
>
> I feel this may be closer to the way I want to use an Agent, than simply chasing one strongest model.

</article>

<article class="tweet-entry" id="post-2096515795815633403">

## The stronger GPT-6 gets, the cleaner my Pi Agent becomes🔥

<span class="tweet-meta">2026-09-06 16:28:11 · Original text</span>

> The stronger GPT-6 gets, the cleaner my Pi Agent becomes🔥
>
> The Pi I use daily is actually already very clean, but now that its ability is stronger, it becomes even cleaner; it may sound a bit counterintuitive.
>
> In the past model ability was not strong enough, so we were used to constantly adding things to the Agent: Skill, AGENTS.md, various Prompts, and what maybe everyone already uses, PowerSkill or a complete skill set.
>
> But after GPT-6 Astra came out, Eric Provencher from OpenAI Codex specifically mentioned one thing:
>
> Rules that used to help older models avoid many mistakes may now be starting to hold back new models.
>
> OpenAI's official Astra guide actually also warns that GPT-6 is more sensitive to instructions in Skills and AGENTS.md than before; if there are outdated, contradictory, or too rigidly written rules inside, it will follow them obediently.
>
> So if you are preparing to switch to GPT-6, I think you can do a big cleanup of your Agent at the same time:
>
> 1. Delete repeated rules that were written so the model would not do stupid things, for example requiring it to read the whole repository or run many tests every time.
>
> 2. Make Skill descriptions as short as possible, just say when it should be used; flows, documentation, and scripts are actually loaded when needed.
>
> 3. Review AGENTS.md again, especially rules that have been used for half a year to a year so that you yourself have forgotten why they were added.
>
> These things, the more they are used, the more they return to their essence, which is handing all ability to the AI; going forward, the stronger the AI's ability, the less these bonds are needed. Give it a clean place, then let it operate on its own.

</article>

<article class="tweet-entry" id="post-2097249000252649861">

## DeepSeek launches a new model series: deepseek-v4.1-flash-expires-on-0910

<span class="tweet-meta">2026-09-08 17:01:41 · Original text</span>

> DeepSeek launches a new model series: deepseek-v4.1-flash-expires-on-0910
>
> Claimed: uses a new model structure, native multimodal support, stronger ability, faster, and lower cost.
>
> The first time I ran it directly in Pi Agent, 300 token/s still felt not enough; one word, fast
>
> Usage step: directly change the model name deepseek-v4-flash to deepseek-v4.1-flash-expires-on-0910, then it can be used right away
>
> The pelican riding a bicycle test just run👇🏻

</article>

## Next

After finishing this stage, continue reading [Stage 3　Understanding Sessions and context](/en/tweets/03-sessions-context).

