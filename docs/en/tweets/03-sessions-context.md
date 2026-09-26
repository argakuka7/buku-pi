---
title: Understanding Sessions and context
description: Pi learning notes, stage 3, containing 7 original texts.
outline: false
prev:
  text: Finish your first task first
  link: /en/tweets/02-first-tasks
next:
  text: Building your own Skills and Extensions
  link: /en/tweets/04-skills-extensions
---

<span class="library-status">Personal learning notes · STAGE 03</span>

# Understanding Sessions and context

**The problem to solve at this stage**　Understand the relationship between the session tree, long-term memory, compaction, tokens, and prompt cache.

This stage contains only seven tweets, but it is the turning point of the whole learning route. I suggest reading it chronologically: start with cache and compaction, then the Session Tree, and finally return to the correction of the understanding about “whether a smaller context is necessarily more economical”.

This page contains 7 original texts. The text content comes from a personal archive on Google Drive; x.com addresses and t.co media short links have been removed. The product versions and statuses mentioned in the original texts refer to their publication dates.

<article class="tweet-entry" id="post-2092091965244609020">

## There is one other thing in Pi that people easily overlook: the cache hit rate 🔥

<span class="tweet-meta">2026-08-25 11:29:28 · Original text</span>

> There is one other thing in Pi that people easily overlook: the cache hit rate 🔥
>
> Right now many people are still comparing which Agent is more pleasant to use and which model is stronger. I myself pay more attention to how much of the API bill can be saved.
>
> Someone ran Pi with DeepSeek V4 Flash, processing nearly 1 billion input tokens, with a cache hit rate of 99.93%, and in the end spent only 2.65 dollars. According to official statements, without cache the cost could be around 132 dollars.
>
> The same model on other Harnesses usually records a cache hit of 94% to 97%. In Pi Agent, the number can stay steadily above 99%. That gap of a few points, at large volume, makes the cost difference widen exponentially.
>
> The cause is actually not mysterious. Pi's system prompt is short, its built-in tools are few, and before a request the context can be inspected and changed. The prefix cache does not change easily, so the cache hit rate is naturally high.
>
> What I more often want to convey is that the cost of using AI may in fact be the biggest obstacle for beginners learning Agents, because not everyone can subscribe to a 20 or 200 dollar per month plan.
>
> I hope Pi keeps getting better in the future, because it has genuinely helped me save money 👍🏻

</article>

<article class="tweet-entry" id="post-2092129372178350355">

## Why is Pi thrifty with Tokens? There is actually no magical cache technology 🔥

<span class="tweet-meta">2026-08-25 13:58:06 · Original text</span>

> Why is Pi thrifty with Tokens? There is actually no magical cache technology 🔥
>
> The point is just one thing: Pi is very restrained about Context.
>
> Its five main moves:
>
> Stable prefix: System Prompt, tool definitions, AGENTS.md, and the like are made to change as little as possible, so the Prompt Cache is more likely to keep hitting.
>
> Few built-ins: Pi's System Prompt is very thin, and its built-in tools are few, so the base Context itself is already small.
>
> Mainly appending history: a Session usually continues by adding new messages behind the old Context, rather than rebuilding the Prompt every round, which better supports cache reuse.
>
> Loaded on demand: capabilities like Skills show only the name and description first, and the full text is read when needed, so that from the start you do not cram a lot of irrelevant content into the context.
>
> Compaction only for long conversations: old history is compacted only when the Context gets too long; Compaction does disrupt the cache for a while, but a stable prefix will form again afterward.
>
> Here I also correct my earlier mistake: Pi is not necessarily more cache-efficient than other Agents, but in these ways Pi optimizes its context, so the total Tokens consumed are fewer than with other Agents.
>
> Optimizing total Token consumption is also very important, not just chasing a high cache hit rate.

</article>

<article class="tweet-entry" id="post-2092158815198380343">

## The way Pi handles context compaction is more interesting than I imagined!

<span class="tweet-meta">2026-08-25 15:55:06 · Original text</span>

> The way Pi handles context compaction is more interesting than I imagined!
>
> As a quick sketch, Pi's built-in context compaction logic is actually very simple:
>
> Context almost full → summarize the old context → keep the most recent messages → keep working.
>
> But the community has already come up with several different approaches:
>
> 1. pai-acp: the forgetting stream, letting the AI decide for itself what to forget
>
> Instead of waiting for the Context to be full and then compacting it all at once, it lets the Agent judge for itself which history is no longer valuable, then compact it earlier; when needed, that history can even be searched or restored.
>
> 2. pi-smart-compact: this plugin mainly keeps the current goal, changed files, errors, important decisions, and unfinished things, more like a reminder note to itself.
>
> 3. pi-context: treats context like Git, able to checkpoint, view a timeline, then choose when to compact.
>
> 4. Hypa: its design idea is that the best compaction is not letting garbage into the context in the first place, because that saves more tokens than just compacting after the context reaches the limit.
>
> 5. pi-press: moves the compaction process earlier, producing a summary sooner when the context approaches the threshold, so that when Compact is really needed it can switch over directly and reduce the Agent's pause caused by compaction.
>
> After seeing many of these plugin design ideas, the conclusion is to choose the right content at the right time; it may be true that from the start we should not let junk data into the context.
>
> Compaction can also be done earlier, and for you the most comfortable thing is that it goes unnoticed. But what still needs to be answered is the most fundamental question: what exactly is Agent memory.
>
> So far there is no final conclusion, but these inspirations and ideas will always be there.

</article>

<article class="tweet-entry" id="post-2092565910251004299">

## After researching Pi's long-term memory, the result is more complicated than I imagined 🔥

<span class="tweet-meta">2026-08-26 18:52:45 · Original text</span>

> After researching Pi's long-term memory, the result is more complicated than I imagined 🔥
>
> By default Pi leans more toward managing Session and Context, and does not have a memory system like Hermes Agent Memory, but the community actually has memory implementations similar to Hermes.
>
> The community has now grown several completely different approaches.
>
> If you want to research this, I recommend these four projects:
>
> 1. pi-memory
>   The simplest file memory. MEMORY.md, Daily Log, Scratchpad, plus semantic search. Memory is a real file that can be opened, changed, and backed up, not handed over to a black-box system to maintain.
>
> 2. pi-hermes-memory
>   This one I am somewhat familiar with. Besides long-term memory, there is Session Search, failure memory, user preferences, automatic tidying, and Procedural Skills. This project does not just want Pi to remember many things, but hopes the Agent can slowly grow experience from failures, corrections, and its work experience.
>
> 3. pi-honcho
>   More like an independent long-term memory layer. User memory and project memory are separated; habits and preferences can persist across Sessions and across projects, while project knowledge can be maintained separately. Suitable if you really use Pi as a long-term Agent, not just as a Coding CLI.
>
> 4. pi-hindsight
>   The approach is quite interesting. Not every sentence is put into long-term memory; instead, at points like a Context about to be compacted or a Session about to end, it extracts and stores the decisions, experiences, traps, and project knowledge that are really worth keeping.
>
> There was a time when I myself kept researching Agent long-term memory, and even optimized and modified the Hermes memory system.
>
> The most important thing is not learning what to use, but the many inspirations I gained during the learning process; researching these Pi memory plugins is the same.
>
> Maybe your Pi Agent does not need long-term memory, because simple and efficient is Pi's ultimate move.

</article>

<article class="tweet-entry" id="post-2093127901059457117">

## I turned Pi's context compaction into a game 🔥

<span class="tweet-meta">2026-08-28 08:05:54 · Original text</span>

> I turned Pi's context compaction into a game 🔥
>
> When learning Pi, do not just read dry theory; you can learn while playing a game.
>
> I turned the content around Pi's context handling into a game, and put every feature of context handling into it.
>
> 1. Now and then an energy bar for context compaction will appear; click it to delete the Tokens around it
>
> 2. When you touch the matching Token, the context increases
>
> 3. By default the context grows over time; only by picking up items can the context stay unchanged by default
>
> The core of all this is actually the way Pi handles and understands context, and that is the reason I wanted to turn this knowledge into a concrete form.
>
> Learning inside a game, learning while playing, playing while learning 🔥

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093359637932445901">

## Pi's Context is actually not a single chat log, but a path built temporarily from the Session Tree.

<span class="tweet-meta">2026-08-28 23:26:45 · Original text</span>

> Pi's Context is actually not a single chat log, but a path built temporarily from the Session Tree.
>
> Recently I have been researching Pi's source code, and found that the context Pi stores lives in the Session, and that is only one perspective of the model.
>
> Only now do I realize that my earlier understanding of Agent Context was still too simple.
>
> 1. The Session Pi stores is itself a tree
>
> Every Pi Session Entry records its own id and parentId, so a task does not always have to be continued only backward.
>
> For example, you already tried one approach, and halfway through it turned out to be the wrong direction, so you can go straight back to one of the previous nodes and start over. The earlier path is not deleted, but kept inside the Session, while the new plan forms another branch.
>
> The most interesting thing here is that Pi does not store the final answer, but the entire work process of the Agent.
>
> 2. But the model does not see the whole tree every time
>
> This is what I find a fairly clever design.
>
> Pi traces backward to find parent nodes based on the node it is currently at, then gets the history that actually applies to that branch, and uses that content to build the Context for this round.
>
> So Session and Context are actually not the same thing.
>
> A Session is more like a complete historical asset, while Context is the working memory selected temporarily from that history for the model to use.
>
> 3. Compaction also does not really change those experiences
>
> When the Context grows longer, Pi summarizes the earlier part into a Compaction Summary, then keeps the most recent original messages.
>
> But old Tool Calls, conversations, and file explorations do not disappear from the Session because of this; what is compacted is actually not "memory", but only the way the model sees that memory right now.
>
> This is the reason I increasingly like to understand Session and Context separately.
>
> 4. Even a failed branch is not necessarily worthless
>
> When switching branches in the Session Tree, Pi can also create a Branch Summary for the path being left.
>
> That means that even if the direction was wrong earlier, the Bugs found, the methods tried, the files changed, and the plans proven unworkable, all those experiences can still be carried to the new path.
>
> At this point I slowly realized that the real value of the Session Tree design may not be its ability to bring you back at any time with /tree.
>
> After researching, I realized my research was still too shallow; there are some parts that have to go into the source code, or be helped by AI analysis, for the content to be understood.
>
> If you only know the concept superficially without understanding the implementation, it will be hard to gain deep understanding. I suggest that if you want to learn deeply, you have to dig into the source code.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2097224177887670482">

## Pi has something very counterintuitive: a smaller context is not necessarily more economical

<span class="tweet-meta">2026-09-08 15:23:03 · Original text</span>

> Pi has something very counterintuitive: a smaller context is not necessarily more economical
>
> Recently I reread Earendil's piece titled "Prompt Caching In Agents", and only then did I understand that Agent cache is not that simple.
>
> Back when I used Agents, I also naturally felt that the shorter the context the better. Unused tools and results were deleted as much as possible, and the less context that was tidied up, the more Tokens saved.
>
> But Prompt Cache makes this problem completely different.
>
> Every round that Pi Agent asks the model, it does not only send the new content you just typed, but also carries the System Prompt, Tools, conversation history, Tool Calls, and so on, then adds the most recent message at the tail.
>
> But there is one most important point: the Prefix must stay stable for the cache to be used efficiently.
>
> Suppose a conversation has already accumulated more than a hundred thousand Tokens, and most of that conversation context is already covered by cache.
>
> But your Harness, in order to save Tokens, deletes some useless content in the middle, or changes the Tool Definition and System Prompt at the front dynamically, so at first glance it really does save some Token consumption.
>
> However, because the Prefix changes, the cache of hundreds of thousands of Tokens behind it can immediately become invalid, so the context after it has to be cached again, and the Token cost consumed is actually higher.
>
> The result you get in the end is very likely the opposite of the goal.
>
> To save a few thousand Tokens, you recount tens of thousands or even more than a hundred thousand Tokens after it.

</article>

## Next Steps

After finishing this stage, continue reading [Stage 4　Building your own Skills and Extensions](/en/tweets/04-skills-extensions).

