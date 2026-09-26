---
title: Turning Pi into a long-term workflow
description: Pi learning notes, stage 6, containing 10 original tweet texts.
outline: false
prev:
  text: Getting sub-Agents to share the roles
  link: /en/tweets/05-subagents-research
next:
  text: Written Outside Buku Pi
  link: /en/journey/
---

<span class="library-status">Personal learning notes · STAGE 06</span>

# Turning Pi into a long-term workflow

**The problem to solve at this stage**　Handle VPS, remote devices, Runtime, interfaces, and the ecosystem, so that Pi moves from a one-off task toward long-term use.

This final stage covers long-running projects, remote access, desktop, and ecosystem projects. None of them are mandatory installs; their purpose is to help readers judge where their Pi will eventually run and what work it will serve.

This page contains 10 original texts. The text content comes from a personal archive on Google Drive; x.com addresses and t.co media short links have been removed. The product versions and statuses mentioned in the original texts refer to their publication dates.

<article class="tweet-entry" id="post-2087410816136179911">

## Many people ask, what exactly is Pi Agent? I compare it to a game character:

<span class="tweet-meta">2026-08-12 13:28:15 · Original text</span>

> Many people ask, what exactly is Pi Agent? I compare it to a game character:
>
> Claude Code: a max-level programmer character, gear and skills already prepared, straight into the dungeon to work.
>
> Codex: an engineering-type character, more reliable at taking on tasks, changing code, running tests, and completing the software engineering workflow from end to end.
>
> Hermes: a companion NPC who follows you long term, remembers you, helps run scheduled tasks, and calls various tools.
>
> Pi Agent, on the other hand, is more like—a character editor.
>
> Model, tools, Skill, Prompt, and workflow can all be combined by you.
>
> You are not choosing "whether this Agent is pleasant to use," but determining:
>
> What kind of Agent do I want to shape.
>
> So in my view, the most interesting part of Pi is not how strong it is from the first use, but that it hands the matter of "making an Agent" over to you.

</article>

<article class="tweet-entry" id="post-2092047934288474583">

## Who would have thought, the Pi Agent console, besides writing code, can apparently also be used to play games.

<span class="tweet-meta">2026-08-25 08:34:30 · Original text</span>

> Who would have thought, the Pi Agent console, besides writing code, can apparently also be used to play games.
>
> I recommend a fun project inside pi-extensions: pi-arcade
>
> No need to open another game window anymore; small games can be displayed right in the Pi terminal interface.
>
> While the Agent runs tests, compiles the project, or runs long tasks, you can play a small game for a bit to fill the idle time.
>
> Right now it already includes 5 built-in games:
>
> 1. sPIce-invaders: Pi's version of Space Invaders, controlling a ship to shoot enemies, complete with levels and a Boss.
>
> 2. picman: Pi's version of Pac-Man, eating Tokens inside a maze while avoiding various Bugs.
>
> 3. ping: a ping-pong game similar to classic Pong, you compete against Pi, and the first to reach 5 points wins.
>
> 4. tetris: terminal Tetris, supporting rotation, hold, preview, score, and level.
>
> 5. mario-not: an experimental Mario-style platformer game, able to move, jump, collect coins, and challenge different levels.
>
> After trying too many serious Pi plugins, I actually want to try interesting projects like these; that is where Pi's charm lies.
>
> As long as you are willing, you can do it, because Pi is free and open—you can even use it to play games. Doesn't it already feel like "Minecraft"? 😂

</article>

<article class="tweet-entry" id="post-2092531437002268711">

## Recently I did something a bit crazy: I turned Pi into a game 😂

<span class="tweet-meta">2026-08-26 16:35:46 · Original text</span>

> Recently I did something a bit crazy: I turned Pi into a game 😂
>
> The way to play is actually simple.
> Pi is thrown into a context window that keeps swelling, surrounded by Tokens from every direction; each time it collides, the context grows a little.
>
> When Context is almost at 100%, you can only press the button in a panic: /compact
> to compact the Tokens around it, then hold on a bit longer.
>
> There is even a Cache Hit; after picking it up, the rate of Context growth can be temporarily reduced. To be honest, this game's setup basically depicts my mental state while researching Pi lately—really realistic.
>
> But the most interesting part is: for this game I did not touch a single line of code, did not write anything at all.
>
> I just threw the idea above to Gear Zero, saying I wanted a survival game about the Pi Agent avoiding Tokens inside a Context Window, then it planned on its own, wrote code, made the visuals, arranged the gameplay, and finally ran it right in the browser.
>
> If I had faced something like this in the past, my first reaction would definitely be:
> have AI write the code first, then open the project, then set up a bunch of things, and finally spend half a day fixing Bugs.
>
> Now it is reversed: I am only responsible for describing how this game should be played.
> The rest is left to the Agent.
>
> Of course, now "making a game by chatting with AI" itself is no longer very new. What this time really made me find Gear Zero somewhat interesting is the part after that: if the first version is not satisfying, you can keep chatting with it. Too few Tokens, tell it to add more; /compact not satisfying, keep changing it.
>
> Game too simple, keep adding mechanisms.
>
> It does not stop after producing one Demo version; Deep Mode can keep working up to 10 hours on the same game, working round after round, and can even pull other people in, a group of people chatting and changing the same game together.
>
> In my view this approach is quite interesting.
>
> Because in the past AI making a game was more like:
> "Make me a small game."
> Now it is slowly changing into:
> "I am the one who thinks, AI accompanies me in working on this game continuously."
> These two feelings are actually not the same.
>
> Besides that, the game can finally be played right in the browser, on both computer and phone, without installing anything; even other people who try it do not need an account.
>
> This time I first "dissected" the Pi Agent; going forward it seems I can continue making even crazier ones:
>
> Dungeon Claude Code, Codex Debug simulator, even an AI Agent battle royale……
> If you also have a strange game idea in your head, you can throw it to Gear Zero and try it.
>
> There is a free creation quota every day, and publishing a game can earn extra quota 👍🏻
>
> Official account: @gearzero_alaya
> Address to try:

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2092791993575629269">

## Why has Pi never made a desktop version?

<span class="tweet-meta">2026-08-27 09:51:08 · Original text</span>

> Why has Pi never made a desktop version?
>
> From my research lately, maybe it is not that one was not made, but that Pi simply does not intend to make it itself, and instead opens the capability to third parties.
>
> At first I looked for the answer out of curiosity: Pi has been developing for quite a while, its terminal experience is already very complete, yet the official side has never presented a Desktop App, nor is there any adaptation for mobile.
>
> After observing carefully, I slowly understood the thinking behind it.
>
> 1. What the Pi official side actually makes is not a "client"
>
> The more core thing in Pi has always been foundational capabilities such as Agent Runtime, Session, Tool, and Extension. The terminal we usually see is just one way to interact, not the only form of the Pi product.
>
> 2. The official side actually prepared its interface long ago
>
> Besides terminal mode, Pi also has SDK, JSON, and RPC, which allow third parties to control the Session directly, send Prompts, and receive Tool Calls and Streaming events.
>
> So in theory you really can turn it into a desktop application, Web, mobile application, or even integrate it directly into an IDE; what runs behind it is still the same Pi.
>
> 3. That way, there is no need to build a whole set of Agent again
>
> Third parties only need to handle UI and interaction, and do not need to reimplement model calls, Session, Tool, Extension, and things like that.
>
> This is why the community is now slowly bringing up various different implementations: desktop, Web console, mobile remote, and so on.
>
> 4. Maybe Pi really does not want to decide what an Agent should be like
>
> Only at this point did I understand: Pi not making an official desktop may not mean it lacks a feature, but that from the start it has separated the Agent from the client.
>
> Pi's core idea: it is only responsible for preparing the foundation well; how to use it or what kind of features are wanted is all left to the community to create for itself.

</article>

<article class="tweet-entry" id="post-2092819605656060219">

## Today I saw JetBrains making a GUI client for Pi 🔥

<span class="tweet-meta">2026-08-27 11:40:51 · Original text</span>

> Today I saw JetBrains making a GUI client for Pi 🔥
>
> From my point of view, the command line is still the most comfortable, but GUI and TUI are forms more acceptable to a broad audience.
>
> If you want to share Pi with more people, sooner or later someone has to take this GUI path.
>
> The GUI client JetBrains made for Pi is called ThinkRail; the engine behind it is still Pi—for example, models, skills, and compaction are still managed by Pi itself—but on the outside there is a workspace layer that can be seen.
>
> There are three things I find quite interesting about this GUI:
>
> 1. Chat, editor, and terminal laid out in one interface
> No need to switch back and forth between windows; what has changed can be seen directly, and you can follow what the Agent is doing at a glance.
>
> 2. One repository can open multiple workspaces
> Each Agent gets its own git worktree, running side by side in the interface, and the main branch is not messed with. This is a GUI that understands multi-Agent, not just opening several dialog boxes.
>
> 3. Specifications and changes are both visible
> Spec graph + diff are in the interface, so intermediate states do not leave only the final result. If you want to trace back, you do not need to dig through a pile of logs.
>
> Although the command line form matches Pi's minimalist path, in complex work, if something helps configure and install the right features, I think everyone would be happy too; most importantly, there is finally a GUI path that can keep people using it.
>
> What to use is your right, but the community provides different options; this is in line with Pi's philosophy.

</article>

<article class="tweet-entry" id="post-2092887927672205740">

## While researching Pi lately, I found the community has actually made quite a few desktop and mobile projects 🔥

<span class="tweet-meta">2026-08-27 16:12:20 · Original text</span>

> While researching Pi lately, I found the community has actually made quite a few desktop and mobile projects 🔥
>
> The Pi official side has never made a Desktop App itself, but foundational capabilities such as SDK, RPC, and Session are already open, so many third-party projects are actually just giving Pi a more convenient entrance.
>
> I picked a few that are quite worth trying:
>
> Pi Desktop: a currently fairly complete desktop Pi, directly reusing the same Session, model login, and Extension; Pi in the terminal can basically be moved to the GUI without friction.
>
> Pi Web: a browser version of the Pi workstation, Session, files, model, and Skill can all be managed directly; on GitHub it already has 3K+ Stars, very popular in the community.
>
> Remote Pi: a mobile solution I quite recommend, with native Apps for iOS and Android; through Extension + QR code, you can control your Pi remotely from your phone.
>
> pi-mobile: a lighter mobile Web solution, no App installation; the browser can directly take over the Session, and supports Tailscale, Cloudflare Tunnel, and Face ID / Touch ID.
>
> PI WEB: leans more toward multi-device collaboration; Pi can keep running on a server or workstation, and the Agent does not stop even if the browser is closed; later when you switch to a phone, computer, or tablet you can still continue.
>
> After trying many, the one I like most is still: PI WEB
>
> Especially the UI and its default setting style really make me like it; transitions and compatibility between devices can be achieved easily, because fundamentally this is just a WEB application, without complicated configuration.
>
> The community has prepared everything; whether you want terminal, desktop, or web, you can fully decide for yourself.

</article>

<article class="tweet-entry" id="post-2093242314764537867">

## From researching Pi, I found that stable long-term use matters more than anything 🔥

<span class="tweet-meta">2026-08-28 15:40:33 · Original text</span>

> From researching Pi, I found that stable long-term use matters more than anything 🔥
>
> So in my view it is better placed on a VPS, not on a home computer.
>
> I used to install it on a home computer and run it 24 hours, but if there is a power outage or the system sleeps on its own, the experience is very bad, the work is cut off immediately, and it makes me annoyed. Now with a VPS, all those problems are solved.
>
> From my own experience, there are several quite striking points.
>
> 1. The server does not sleep on its own
> A home computer can always have outages, updates, or sleep. A VPS is always online, tasks can be left running, and when we come back we can continue without having to explain the context again.
>
> 2. On standby 24 hours, at any time
> In the past we had to sit in front of that machine. Now with a phone, connecting remotely, we can see what it is working on and continue giving commands. Control is no longer tied to a desk at home.
>
> 3. The home computer can finally rest
> When the Agent occupies the local computer, shutting it down, putting it to sleep, or using it for other things will clash. If it is placed on a server, the two do not interfere and both are lighter.
>
> 4. Environment isolation, free to experiment
> The local computer installs this today, changes the system tomorrow, and the Agent configuration easily shifts along with it. On a server it is relatively clean, the manifest and habits can be kept stable, and only after long use does it feel like your own.
>
> 5. Very suitable for long tasks
> Searching for material, monitoring logs, and letting small tasks run in the background—things like these most fear being cut off midway. After being online 24 hours, Pi becomes more like a trustworthy assistant, not just a tool that exists only when the computer is turned on.
>
> Some may ask about the difficulty of data synchronization; it is actually simple, just use Github. I put my own content and data in a private Github repository. But if there is personal data, it is best not to.
>
> But my solution is not suitable for everyone, only for users who need to use an Agent for a long time. Hope it is useful to you.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093563366220652868">

## I apparently did not know Pi also contributes in the gaming field 🔥

<span class="tweet-meta">2026-08-29 12:56:17 · Original text</span>

> I apparently did not know Pi also contributes in the gaming field 🔥
>
> Unity, the game engine I thought everyone already knew, the community is slowly starting to work on game development in this direction.
>
> Recently I saw a fairly interesting project, pi-unity; what it solves is no longer just the matter of making a game, but it is starting to really bring Pi into work related to game development.
>
> In the past when using a Coding Agent for Unity, the flow was basically AI changing code, me going back to Unity waiting for compilation, finding errors, then throwing those errors back. Often people are actually just moving information back and forth between two pieces of software.
>
> pi-unity is starting to try to connect this process chain.
>
> 1. Pi starts to know what is happening in Unity right now
>
> It can check which project is currently open, whether the Unity process exists, whether the Pipeline is already connected, and whether the current project can run tasks normally.
>
> This change looks small, but its meaning is different.
>
> In the past the Agent only faced a pile of .cs files, and could only "guess" the current game state through code; now it is starting to be able to get the Editor's own status, and know what environment it is actually operating in.
>
> 2. After finishing writing code, it starts to be able to verify its own results
>
> For example, asking Pi to change a character system; in the past after the change, it was basically done.
>
> Now it can continue by triggering Unity compilation, finding Compiler Errors and fixing them again, then running EditMode / PlayMode Tests, and if the tests fail keep reading the results and handling them.
>
> That means the flow is slowly changing into:
>
> I tell it what I want to do, and the rest—compilation, testing, errors, then more fixes—can be left to the Agent to run back and forth on its own.
>
> 3. The most interesting part is when it starts entering the running Unity Editor
>
> pi-unity can, through the Pipeline's Roslyn REPL, run controlled C# on the Unity Editor's main thread.
>
> For example reading a setting in the current project, checking running status, even doing temporary testing and adjustment for something being debugged.
>
> Inside it even made a special Skill called unity-interactive-playmode-authoring, whose purpose is to make the Agent inspect and debug first inside Play Mode, then decide which things really need to be persisted.
>
> 4. So what really made me interested in pi-unity is not "Pi can also write Unity now"
>
> but that the Agent is developing from operating code toward operating professional software, slowly.
>
> Today Unity, later it could also be Blender, Unreal, CAD, video editing software.
>
> When status, buttons, and the running environment inside this software slowly become Tools that the Agent can understand and call, Vibe Coding may also no longer stop at "make me a web page," but can really produce—inside game production—the game I myself want.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2097002884147872080">

## Apparently MiniMax Code 2.0 was also rebuilt on top of Pi.

<span class="tweet-meta">2026-09-08 00:43:42 · Original text</span>

> Apparently MiniMax Code 2.0 was also rebuilt on top of Pi.
>
> To be honest, I am very excited when I learned this news: more and more developers like to use the Pi Agent as the foundation for their Agent products.
>
> The MiniMax official side itself also said:
>
> Rebuilt on the open-source Pi Agent framework.
>
> I briefly analyzed the similarities between the two
>
> Similarities:
>
> 1. At the foundational layer both use the same Coding Agent logic
>
> Reading files, changing code, running commands, calling tools, then continuing to work around the Session.
>
> 2. Both are starting to place great importance on Session and long tasks
>
> After being rebuilt, MiniMax Code 2.0 also clearly strengthens task continuity, status persistence, and long-task stability.
>
> 3. Both provide room for extension capabilities
>
> Skill, tool, and external capabilities can all keep stacking on top of it.
> But the differences are actually more striking.
>
> MiniMax Code 2.0: trying its utmost to make the product good for you
>
> On top of this Pi foundation, it keeps adding desktop UI, Browser Control, Remote Control, Goal, Memory, Plugin Marketplace, Office capabilities, and so on.
>
> Although MiniMax Code 2.0 has been changed so much that it no longer feels like Pi, from its point of view as a product there is no problem at all; what I pay more attention to is whether it makes its own innovation on top of Pi.
>
> If there is special innovation on top of it, that means success.
>
> The meaning of Pi is more like providing one set of Agent foundations; anyone can build their own Agent, giving the public a chance to adapt it. This is what I consider the greatest meaning of the Pi project's existence.

</article>

<article class="tweet-entry" id="post-2097146541417083288">

## Pi V2 has arrived, may enter a new era of Agent Runtime 🔥

<span class="tweet-meta">2026-09-08 10:14:33 · Original text</span>

> Pi V2 has arrived, may enter a new era of Agent Runtime 🔥
>
> Lately I have been keeping an eye on the design of Pi's new Harness V2; I feel that what really deserves attention in the new version is no longer just feature additions, but an overall change of direction.
>
> The shift from a simple Coding Agent toward Agent Runtime—this is what I think is most worth noting about this change.
>
> Coding Agent is easy to understand, like Pi Agent, Claude Code, Codex: you give it a task, it calls a model, uses tools, writes code, then finishes that work.
>
> A bit like a programmer always ready for you to call on.
>
> Agent Runtime is more like preparing a permanent office for this programmer. People can go home from work, the computer can be restarted, even tomorrow someone else can take over and continue, but the tasks, materials, and progress remain there.
>
> The two actually have many similarities:
>
> 1. Both require a model
> 2. Both require Tools
> 3. Both require Context
> 4. Both have an Agent Loop
>
> Actually, the summary in one sentence is:
>
> Coding Agent: the focus is finishing this task.
>
> Agent Runtime: the focus is making tasks and status last a long time.
>
> From Pi V2, what I most want to see now is no longer how much its Coding ability has improved, or how many features have been added.
>
> Those things are increasingly far from my daily life; I look forward more to how Pi, on the basis of its preserved simplicity, slowly changes into a Runtime that lets an Agent live long.

</article>

## Next Steps

After completing six stages, you can return to [my Pi learning notes](/en/journey/), then choose a chapter you need to practice from the main tutorial.

