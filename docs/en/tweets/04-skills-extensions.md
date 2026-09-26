---
title: Building your own Skills and Extensions
description: Pi learning notes, stage 4, containing 22 original texts.
outline: false
prev:
  text: Understanding Sessions and context
  link: /en/tweets/03-sessions-context
next:
  text: Getting sub-Agents to share the roles
  link: /en/tweets/05-subagents-research
---

<span class="library-status">Personal learning notes · STAGE 04</span>

# Building your own Skills and Extensions

**The problem to solve at this stage**　Moving from using ready-made plugins toward tidying up your methods and controlling the quantity, then solving your own real needs.

At first I cared more about which plugins to install, then I started telling Skill, Extension, and Package apart, and began clearing up conflicts and writing my own reminder feature. Those changes are what I am preserving on this page.

This page contains 22 original texts. The text content comes from a personal archive on Google Drive; x.com addresses and t.co media short links have been removed. The product versions and statuses mentioned in the original texts refer to their publication dates.

<article class="tweet-entry" id="post-2087104117533814998">

## Pi Agent has been popular lately, so I am recommending a few plugins and projects I use regularly:

<span class="tweet-meta">2026-08-11 17:09:32 · Original text</span>

> Pi Agent has been popular lately, so I am recommending a few plugins and projects I use regularly:
>
> Pi Package Catalog: official plugin marketplace
> pi-web-access: web pages / GitHub / PDF / YouTube
> pi-subagents: many Agents, parallel tasks
> PI WEB: control the Web remotely
> pi-telegram: control Pi through Telegram
> Plannotator: visualize Plan / Diff / Review
> pi-hermes-memory: Hermes-style long-term memory
>
> If I can only recommend three, I hope you install these 3: pi-web-access + pi-subagents + PI WEB

</article>

<article class="tweet-entry" id="post-2091445724420747389">

## After getting used to Pi Agent, I almost left MCP behind; now I prefer installing Skills into Pi, then handing the rest of the work to the CLI.

<span class="tweet-meta">2026-08-23 16:41:32 · Original text</span>

> After getting used to Pi Agent, I almost left MCP behind; now I prefer installing Skills into Pi, then handing the rest of the work to the CLI.
>
> MCP is basically too heavy. Tool descriptions eat up context first, then the model guesses the parameters, Tokens get consumed, and it still sometimes calls the wrong thing. Pi already has read / bash / edit / write, so a lot of things can just be left to read the command help and then run directly, which is even more stable.
>
> Skills fit better too: at the start only the name and description go in, and the full text is loaded only when it is actually used.
>
> These are the ones I use regularly:
>
> Skill directories: ~/.pi/agent/skills/ and .pi/skills/ inside the gh project /
> git CLI: open a PR, view a diff, cleaner than wrapping it again in a layer of GitHub MCP
>
> ponytail: reuse the code that already exists first, avoid creating a lot of new file commit-
>
> helper / pr-helper: commit and PR through Skill + gh pi-context-view: every time you add something, first look at how much context it consumes pi-agent-
>
> skill-evolution: complex tasks that are already finished can settle into a Skill pi-web-access: only switched on when searching the web, GitHub, PDF
>
> If only three remain: project Skill directory + gh CLI + pi-context-view
>
> If a new web need comes up, add pi-web-access; I increasingly like this compact feel — even though the software is small and the plugins are few, it gets the work done without cutting corners at all.

</article>

<article class="tweet-entry" id="post-2091729625483452813">

## Recommending a few security plugins that beginners must install when using Pi Agent!

<span class="tweet-meta">2026-08-24 11:29:39 · Original text</span>

> Recommending a few security plugins that beginners must install when using Pi Agent!
>
> Because Pi Agent has almost no sandbox by default, and it also does not have a complete permission assessment.
>
> But do not treat this as a bug; that is actually how it was designed. By default Pi has only four tools — read, write, edit, bash — and their permissions are the same as your current user. As soon as the model wants to delete files, change `.env`, or run `sudo`, it really can do it. For experienced people this is called clean; for beginners it is called dangerous.
>
> So I usually ask people who are just starting to install a few guardrails first, and not go bare right away.
>
> 1. safe-coder
> An all-in-one starter pack. Dangerous commands will ask you first, and `.env`, `.git`, `node_modules` can be held back first. Beginners should install this first, the most practical.
>
> 2. pi-permission-gate
> The same approach as the official example. `rm -rf`, `sudo`, arbitrary changes in protected paths — show a confirmation first before executing. If there is no interface, it is blocked by default.
>
> 3. pi-protected-paths
> Specifically protects secret keys and sensitive files. `.env`, credentials, general configuration — reads and writes are all blocked, so the model does not accidentally leak a key or damage it.
>
> 4. pi-sandbox
> Closer to a real sandbox. Files and network can be controlled through a whitelist, and it can be switched on and off inside a session too. More thorough than just a pop-up confirmation, but the configuration is also greater.
>
> 5. pi-permission-modes
> Like a permission-level lever. Default confirmation, accepting edit results, more automatic — all can be switched; extremely dangerous commands are locked down outright. Suitable for people who want to adjust the tightness as they use it.
>
> I strongly suggest this installation order for beginners: safe-coder first, then add pi-protected-paths. If you really want to isolate the environment, then install pi-sandbox.
>
> Pi itself is actually clean enough, but clean does not mean safe.
>
> Install the protective fence first, then play with Skills and plugins — security comes first.

</article>

<article class="tweet-entry" id="post-2091796705859797430">

## Sharing a Pi solution for remote devices: the official plugin + UU Remote is basically enough

<span class="tweet-meta">2026-08-24 15:56:13 · Original text</span>

> Sharing a Pi solution for remote devices: the official plugin + UU Remote is basically enough
>
> I recommend these five plugins:
>
> 1. Official SSH Extension
> Run Pi locally, and operate files, Shell, Docker on a VPS remotely. The closest thing to "I am still on my own computer, but my hands reach the server".
>
> 2. pi-mobile
> Your phone or browser takes over the Pi Session directly; you can see Tool Calls, switch models, continue the conversation. Good when you are not in front of the computer but want to keep shepherding the task.
>
> 3. PI WEB
> Pi stays on the server, and many devices enter the same control plane through the browser. Closer to a complete remote workbench, not just a brief connection.
>
> 4. remote-pi
> A community plugin, focused on remote control from the phone, and in the future still heading toward many Pi and Agent Mesh. A bit experimental, but the direction is worth following.
>
> 5. tmux + Tailscale + Pi
> The simplest setup. Pi runs on the server, and your Mac or phone can SSH back in at any time, then continue the same Session. It does not depend on all kinds of tricks, and is stable.
>
> I basically use the official SSH Extension + pi-mobile; before that I used Tailscale to break into the internal network, but it was still a hassle and the official node was not necessarily stable either; now it is enough to use the official plugin and a VPS server.
>
> If there is a problem that really cannot be solved, UU Remote can be used to handle it; basically with this combination, the remote needs of 99 percent of people are already met!

</article>

<article class="tweet-entry" id="post-2092408367432319052">

## When using Pi Agent, do not only remember to install plugins; sometimes Skills are actually more useful🔥

<span class="tweet-meta">2026-08-26 08:26:44 · Original text</span>

> When using Pi Agent, do not only remember to install plugins; sometimes Skills are actually more useful🔥
>
> I recommend a few of these fairly practical Pi Skills:
>
> browser-tools: control the Chrome browser, open web pages, extract content, take screenshots, perform operations on the page
>
> brave-search: web search + content extraction, giving Pi the most basic online search capability
>
> youtube-transcript: read YouTube video subtitles directly, very useful for summarizing videos and researching material
>
> gmcli: connect to Gmail, so Pi can search email, view email, manage drafts and labels
>
> gdcli: connect to Google Drive, so Pi can search, manage, and share files in the cloud
>
> transcribe: turn audio into text, suitable for meeting recordings, video material, tidying up voice content
>
> This is also only based on my daily work and choices; everyone's working environment is different, so install according to your needs — keeping Pi Agent as compact as it should be is the most important thing.
>
> I also know that most of this has actually been solved by plugins, but sometimes the Skill+CLI combination is really delightful😂

</article>

<article class="tweet-entry" id="post-2092436179228713122">

## Pi has been popular lately, but many people go straight to installing only Extensions. Yet Skills are actually the part more worth digging into.

<span class="tweet-meta">2026-08-26 10:17:15 · Original text</span>

> Pi has been popular lately, but many people go straight to installing only Extensions. Yet Skills are actually the part more worth digging into.
>
> Pi follows the Agent Skills standard, so many Skills from Claude Code and Codex can be used directly; you do not need to be tied to the Pi ecosystem alone.
>
> Sources I see fairly often:
>
> Pi Skills
> A collection maintained by Mario himself. There is web search, browser, YouTube transcription, voice to text, Google services — the safest place to start is from the official taste.
>
> Anthropic Skills
> The big official repository that is most worth collecting right now. Office and front-end capabilities like PDF, DOCX, PPTX, XLSX, Web development are fairly complete, and Pi's official documentation also recommends it directly.
>
> The Skill search and leaderboard that is the nicest to use right now. Search by popularity, and it already supports native installation into Pi, more practical than digging around GitHub.
>
> mattpocock/skills
> Leans more toward real engineering scenarios. It does not chase being big and complete; the development flow is split into many small Skills — for example challenge the requirements first, then TDD — and using it feels relieving.
>
> Awesome Agent Skills
> Good for continuing to dig into community output. Code review, testing, Debug, security, refactoring, writing — the categories are fairly complete, just use it as a catalog.
>
> If you only collect three: Pi Skills + Anthropic Skills +
>
> Skills in Pi are loaded as needed; usually only the name and description enter the Context, and the full SKILL.md is read only when actually used. Much cleaner than putting dozens of tools straight into the Agent, and more Token-efficient.
>
> Installing no matter how many Extensions is not as good as first understanding a few Skills that you will really use repeatedly.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2092630793277632999">

## Where exactly is the line between Pi plugins and core features?

<span class="tweet-meta">2026-08-26 23:10:34 · Original text</span>

> Where exactly is the line between Pi plugins and core features?
>
> Lately I keep thinking about one question: what capabilities should go into the Core, and what capabilities should forever be handed to Extensions?
>
> I think this is the most interesting part of my research into Pi.
>
> Pi always insists that the core stays light enough, and whatever capability you need you add yourself; but as the ecosystem grows bigger, Sub-agent, Sandbox, Memory, Plan Mode, Remote Session are becoming more and more common.
>
> Often people discuss "should we add a feature", but to me it is these three big boundaries that need to be clarified more:
>
> 1. Capabilities that must exist for the Agent to run must go into the Core
>
> For example Session, Context, Tool Call, Compaction — all of these really are the foundation for the Agent to work normally.
>
> 2. Capabilities that determine the ecosystem's safety and rules: at the very least the Core must provide the standard
>
> For example permissions, remote Sessions, Sub-agent communication — if every Extension designs its own, in the end it just gets messier.
>
> 3. How to play specifically, leave that to Extensions
>
> Which Memory to use, how Plan Mode is designed, how Sub-agents divide tasks, which search tool to use — all of this I actually hope Pi never decides for users.
>
> I read a lot of official material and open source project explanations; they all carry minimalism through to the end, and in many places the official side states that they will not add unnecessary features to the core.
>
> There is one sentence I remember very well: anything that can be solved with a plugin will never touch the core. I think this is the thing Pi has the hardest time maintaining, and the thing we developers most deserve to hope for.

</article>

<article class="tweet-entry" id="post-2093212359552893008">

## Pi Package is maybe the most often overlooked feature🔥

<span class="tweet-meta">2026-08-28 13:41:31 · Original text</span>

> Pi Package is maybe the most often overlooked feature🔥
>
> Many people may only know about Skills, but have not carefully studied this Pi Package feature; what it breaks down is not the problem of sharing a single skill, but of packaging your habits, configuration, and way of using things all at once.
>
> It lets you share your Pi Agent as a whole with whomever you want!
>
> 1. In the past, adding capabilities was fragmented
>
> Put one explanation here, change one setting there, and before long you yourself cannot explain what has piled up in this environment. Package gathers them into one; after installing, the list is immediately visible, and suddenly everything becomes clear.
>
> 2. It is more like a toolbox prepared for a certain scenario
>
> Not a collection of "must-install" things in a marketplace. For research, prepare search and memory; for managing machines, prepare remote access and logs. One package represents one way of working; to change scenario you just change the list, and the main environment does not get heavier.
>
> 3. It can be added, and it can also be removed
>
> This is actually crucial. Today you try a piece, tomorrow you take it off if it does not fit, and it will not put all of Pi into a state where you are afraid to tinker. Being able to recover is what makes you dare to really pile things up.
>
> 4. So it feels like it comes out of the list
>
> Everyone's model can connect to it. What really starts to be useful is what things you make packages for and what habits you leave behind. Once the list is short, then it feels like your own way of working, not just the stock Coding Agent.
>
> Pi's features really are endless to research; you can always find interesting implementations in the community and on the official side. Actually, back then I also thought about how to share my Agent, and did not expect the official side had already provided it by default.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2093945888637174062">

## Over time, I started letting Pi modify itself🔥

<span class="tweet-meta">2026-08-30 14:16:18 · Original text</span>

> Over time, I started letting Pi modify itself🔥
>
> Lately I have started using my Pi in a different way.
>
> In the past, when the Agent lacked a feature, my first reaction was usually to look for a plugin and dig through GitHub to see whether someone else had already made it.
>
> But now it is different; often what I find is not necessarily what I want, so slowly I started letting it write its own plugin.
>
> Pi itself is already light, so in one short sentence: whatever you lack, you fill in yourself.
>
> I started testing it with a very simple security need.
>
> When the Agent normally operates the terminal by itself, I still wanted certain high-risk operations to have to go through my confirmation, so I told Pi the need directly and let it research on its own how to realize it.
>
> It turned out the whole process was far simpler than I imagined:
>
> 1. My only job was to state the need: which operations are risky enough to need my confirmation first.
>
> 2. Pi found its own way to realize it: it would understand its extension mechanism and judge which layer this capability should sit in.
>
> 3. When done it tested it itself: if it did not fit, keep fixing it, until it became a feature I really wanted to keep long term.
>
> I think this approach is far more interesting than "recommending a few Pi plugins".
>
> Because the features people really need are actually different.
>
> Plugins someone else already made solve someone else's problem; letting Pi write according to your usage habits leaves something that is more like your own tool.
>
> I suspect someone will say this is reinventing the wheel, but what I want to say more is: is this not the meaning of the freedom Pi gives you
>
> No two snowflakes in the world are truly alike; just try it yourself, I think you will find it fun too

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2094324181785796635">

## When playing with Pi, I see many people installing a lot of plugins, but writing code is still a mess🔥

<span class="tweet-meta">2026-08-31 15:19:30 · Original text</span>

> When playing with Pi, I see many people installing a lot of plugins, but writing code is still a mess🔥
>
> Earlier I shared the plugin combinations I usually use for Pi, recommending ones related to networking, remote control, and security protection, and the response was very good; today I am sharing a few special plugins.
>
> This time I am not recommending plugins that can connect to the network; I am only recommending plugins I have used repeatedly for writing code.
>
> 1. ponytail
> Reuse the code that already exists first, avoid creating a lot of new files.
> Pi

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095028261482827875">

## The thing you must learn when using Pi: learn to write AGENT.md well🔥

<span class="tweet-meta">2026-09-02 13:57:15 · Original text</span>

> The thing you must learn when using Pi: learn to write AGENT.md well🔥
>
> Many people do not care about it at all when creating a project, or simply do not have an AGENTS.md file, because they think of it as just a prompt document.
>
> This may be why your Pi does not work according to your instructions: a rule you edit is immediately forgotten as soon as you turn around, and you have to be reminded again every time. AGENTS.md is not just a simple document; it is the highest guideline for the whole project.
>
> Two camps have already appeared in the community: some do not write it at all, and some write too much, putting every rule in, so that before you even start using it, Pi's context is full.
>
> I summarize it into the following three points:
>
> 1. Globally, keep only habits
>
> AGENT.md in the root directory applies to all projects. This is a good place to put your personal habits. For example, how to write commit messages, no need to be long-winded, and uncertain information and operations should be asked about first.
>
> Do not write a particular framework's directory structure or particular test commands into it. Because not every project needs to know that project's specific rules.
>
> 2. Inside a project, keep traps that happen over and over
>
> After the root directory, we come to the AGENT.md file in the project directory, whose scope narrows to just one project.
>
> What is worth keeping usually falls into three kinds. Check commands you use often. Directories that must not be touched at all. Painful experiences you have had, but that still keep being violated.
>
> What is not worth keeping is more numerous. Orientation documentation, long architecture pieces, plugin lists, content copied from elsewhere.
>
> Actually there is a simple way. If you have already told Pi the same rule or constraint three times in a row, you can add it to the project explanation file, then slowly let it settle and optimize it.
>
> 3. Make AGENT.md as small as possible
>
> When writing an AGENT.md file, hold to one principle: keep AGENT.md as clean and tidy as possible, preferably no more than 300 lines, though it is not mandatory.
>
> But too much content in one AGENT.md file also easily splits the AI's attention.
>
> As long as you pay attention to the three things above, your AGENT.md is basically up to standard; after that you just refine and optimize it according to the project's details.
>
> Do not treat this as too basic a thing, but it really is important👍🏻

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095051345606943162">

## Playing with Pi is not about lacking plugins, but about clearing out what is unused in the repository🔥

<span class="tweet-meta">2026-09-02 15:28:59 · Original text</span>

> Playing with Pi is not about lacking plugins, but about clearing out what is unused in the repository🔥
>
> Now I realize one thing: the more you dig through the plugin marketplace, the more complete it gets, but when you actually work, it gets messier. That is when I realized it is not the model that suddenly became stupid, but my Pi that became bloated.
>
> When I used Claude Code, I once fell into the trap of that Superpowers Skill chain. At the time it felt very professional: planning, TDD, review, debugging — the whole flow was there and very complete, as if my AI finally had engineering awareness.
>
> But the longer I used it, the more it felt too heavy; before the task even started the context was already filled with those Skills, especially when using a Flash model with a smaller context, it felt even more obvious.
>
> Only now do I realize that clearing up is also something that must be done:
>
> 1. Skills that are like an engineering constitution
>
> Soldering a complete methodology into the default environment is the same as holding training every round. Planning may exist, testing may exist, but those are manuals for certain types of tasks, not the personality of this Agent.
>
> Now I only switch it on when I really want to follow that flow. Day to day, changing a function, completing tests, checking errors, there is no need to swear an engineering oath first.
>
> 2. Subagents installed right from the start
>
> Pi Core deliberately does not put this layer in. Once the marketplace package supplies it, many people are already parallel on day one. One to find material, one to review source code, another to run tests; the main session turns into a scheduling center.
>
> The work is not complicated enough to split roles, yet the Context has already changed hands among several roles. I then changed it to one Session through to the end, splitting only when it is clearly parallelizable and the results are easy to merge. Most of the time, branching with a conversation tree is enough.
>
> 3. GitHub MCP
>
> Viewing a diff, opening a PR, aligning commit messages — git and gh in the terminal are usually more stable. MCP puts a long series of tool descriptions into the prefix first, and the parameters still have to be guessed by the model. The bill and the attention are spent explaining tools, and the work has not started.
>
> For repeated repository actions, I prefer to summarize them into a short Skill, read when needed, rather than letting the GitHub tool layer stay resident.
>
> 4. Writing tutorials into AGENTS.md
>
> At the start this file goes into the system prompt. One global, one project, and along the way more can be attached. Writing orientation documentation, long architecture pieces, plugin lists into it is the same as taking a class first every round.
>
> Now I keep only the constraints that will be said repeatedly. After saying the same sentence to Pi three times in a row, it is only then moved in. Check commands, directories that must not be touched, traps I have experienced but that still recur, may stay. Wishlists do not stay.
>
> After tearing it down, I did not switch to another, bigger package. Day to day an empty shell plus a very short project explanation is enough; only flows that really repeat are allowed to be written into a Skill. Networking, page review, remote access to take a quick look, are installed when used, and considered gone after finishing.
>
> If you only remember one sentence.
>
> First ask whether this thing needs to be visible every round. If the answer is no, do not let it lie in the default environment.
>
> Features may be many, but what stays must be few. The longer you play with Pi, the less valuable the recommendation list is than the uninstall list.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095175082696122460">

## The ultimate Pi advice: 1 website, 2 ways to use it, 3 plugins🔥

<span class="tweet-meta">2026-09-02 23:40:40 · Original text</span>

> The ultimate Pi advice: 1 website, 2 ways to use it, 3 plugins🔥
>
> 1. One site to learn from
>
> Visit it first
>
> Install according to the official site, just read the Quickstart. After installing, throw one real job into it; if it can run, can be stopped, and can be continued, only then is this step considered passed. Do not collect tutorials first, and do not dig through the plugin marketplace first either.
>
> 2. Two usage suggestions
>
> 1. One matter, one Session

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095793347181109415">

## Recommending Pi's layout plugin, pi-cc-extensions

<span class="tweet-meta">2026-09-04 16:37:26 · Original text</span>

> Recommending Pi's layout plugin, pi-cc-extensions
>
> After using it myself it feels very comfortable; the content output and layout improved quite a bit. If you do not like Pi's default output format, I highly recommend trying it.
>
> It is not just beautifying, it directly changes Pi toward a reading experience like Claude Code.
>
> Its main features:
>
> 1. Tool Calls are automatically collapsed, folded, and expanded
> 2. Rich Diff for Edit / Write
> 3. Markdown enhancements, supporting Mermaid, callout blocks, and linking
> 4. In Fullscreen, tool cards can be clicked to open and close
> 5. Long output has scroll-back handling, Hover, highlighting
> 5. You can also see how much of the Context is taken up by System Prompt, Skill, Tool
>
> Most importantly, it was still being updated at the end of August; basically all the features I need have been added, and if one plugin can solve it, I will not install another one.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2095842480969449940">

## Pi can produce UI you can ship yourself, with just one plugin🔥

<span class="tweet-meta">2026-09-04 19:52:40 · Original text</span>

> Pi can produce UI you can ship yourself, with just one plugin🔥
>
> The plugin I recommended earlier can solve the layout problem, but there was still something I was not satisfied with, so I brought out my ace card.
>
> pi-generative-ui is a plugin that can generate interactive UI interfaces, building your own workbench in a matter of minutes; from overall testing, though there are some small issues, they do not overshadow its strengths.
>
> Its main features:
>
> 1. Turns Pi's output directly into interactive UI, supporting HTML, SVG, JavaScript, no longer just Markdown and code blocks
>
> 2. Supports diagrams and data visualization, can call Chart.js, D3, directly producing Dashboards, trend charts, data panels
>
> 3. Supports architecture diagrams and flow diagrams; content like project structure, module relationships, technical flows can be visualized directly
>
> 4. Supports UI Mockups and interactive components; buttons, sliders, cards, Hover, animation can all be produced on the spot
>
> 5. Rendered as it is generated; while Pi is still outputting code, the UI in the window is already changing in real time, no need to wait for the whole page to be finished
>
> 6. Pi will judge for itself when UI is needed; ordinary tasks still go through the Terminal, and it only calls it when it encounters diagrams, architecture, visualization content
>
> Overall the effect is, I think, very good; below there is a demonstration video you can watch.

<p class="tweet-media-note">The original post contains an image or video; the media assets will be laid out later.</p>

</article>

<article class="tweet-entry" id="post-2096573015811113279">

## Building a Pi workbench cannot be finished in a day; you need to optimize and iterate on it slowly according to your needs.

<span class="tweet-meta">2026-09-06 20:15:34 · Original text</span>

> Building a Pi workbench cannot be finished in a day; you need to optimize and iterate on it slowly according to your needs.
>
> Lately I have started writing Extensions myself; I will share a few problems I ran into and a bit of experience.
>
> Now there are a few impressions that are fairly clear to me:
>
> 1. Do not start by writing a big, all-in-one Extension
>
> The threshold for writing an Extension in Pi is actually low; a single .ts file is enough to start.
>
> I suggest starting from writing about a small problem first, for example adding one command, or intercepting one dangerous operation, or even changing your status bar at the bottom.
>
> Do not immediately write something big and complete, because you yourself may not yet know your real needs.
>
> 2. Global and Project must really be separated
>
> UI, notifications, general Context can go global.
>
> But deployment, database operations, rules specific to the project itself — now I prefer to put them in the project directory.
>
> Otherwise, after using it for a long time, the most troublesome thing is not a lack of features, but that every time you open Pi, it carries a lot of things that are not used at all.
>
> 3. Tools too are not better the more there are
>
> This is something I pay fairly close attention to.
>
> The more Extensions are written, the easier it is for them to become all-purpose, but what you really need to use or load is very little; if too many are written, they easily affect the context and pi's call judgment.
>
> So a good design should be as concise as possible, add when needed, and can even add progressive disclosure; the design here is actually quite similar to Pi's own minimalist design.
>
> 4. State and reload are more deceptive than you would imagine
>
> During development /reload is very pleasant; once changed it can be tried immediately.
>
> But once an Extension starts storing state, you cannot simply trust variables in memory. Especially if later you want to run Web, RPC, SSH scenarios, many ways of writing have to be considered early.
>
> This too I only slowly realized after starting to write my own.
>
> Looking back now, I think the most interesting part of Pi may indeed not be how many Extensions it has.
>
> But the entrance the official side opens for you: wherever you feel uncomfortable, or feel it is not nice to use, you can change it right away.
>
> At first I also looked everywhere for plugins, then started deleting the duplicates, and now I fill in a few features that are really missing myself.
>
> This process is fairly slow, but each time it only solves one real problem, and what is left in the end is more and more like your own.

</article>

<article class="tweet-entry" id="post-2096641158361579563">

## Actually, if Pi wants to operate a browser, you do not need to install many plugins; just understand these few first🔥

<span class="tweet-meta">2026-09-07 00:46:20 · Original text</span>

> Actually, if Pi wants to operate a browser, you do not need to install many plugins; just understand these few first🔥
>
> pi-browser-harness
>
> Connects directly to the Chrome you are using right now.
> Its biggest advantage is that it can reuse your existing Profile, Cookies, and login state; clicking on web pages, filling in forms, screenshots, uploads and downloads, viewing the Console, capturing network requests — all can be done.
>
> Suitable for really using Pi to do everyday web tasks.
>
> pi-agent-browser-native
>
> Leans more toward the native Pi experience.
>
> Its underlying layer connects to agent-browser, but it is made into Pi's own Tool; page Snapshots, clicks, input, screenshots are fairly complete, and it specifically controls output length, quite friendly to Context.
> If you care enough about minimalism and Tokens in Pi, I would prioritize this one.
>
> pi-chrome
>
> Lighter than browser-harness.
>
> Its point is to safely bridge the Chrome you are already logged into to Pi; it does not chase putting dozens of browser tools in.
>
> If your need is only to have Pi use the existing login state to view web pages and do a few small operations, this is actually enough.
>
> Steel Browser
>
> This path is completely different from the ones above.
>
> It does not operate Chrome on your computer, but instead gives Pi a cloud browser directly.
>
> Very suitable for background tasks, web page monitoring, mass fetching; even if the computer is off it does not matter. If you want to build a Browser Agent that truly runs long term, you can highlight this one.
>
> pi-browser-cdp-extension
>
> Fairly suitable for developers.
> It directly gives Pi the ability to execute a browser through Chrome CDP; the structure is simple, and the source code is also fairly easy to understand.
>
> If lately you have indeed been writing your own Extensions, this is very suitable for studying how Pi wraps browser capabilities into a Tool.
>
> I myself would choose like this:
>
> For the daily workhorse, try pi-browser-harness first; to keep Pi minimalist, use pi-agent-browser-native; for long-term background automation, only then consider Steel.
>
> Browser plugins too are not better the more there are.
>
> First think clearly whether you want to operate your current Chrome, or give Pi a browser of its own, and only then choose the matching solution; far fewer detours.

</article>

<article class="tweet-entry" id="post-2096787108564513046">

## Pi can now directly write Extensions for itself; lately I have started letting it complete its own workbench.

<span class="tweet-meta">2026-09-07 10:26:17 · Original text</span>

> Pi can now directly write Extensions for itself; lately I have started letting it complete its own workbench.
>
> Because many small needs are too personal; rather than searching everywhere for plugins, now I prefer to let Pi make it itself first.
>
> 1. First state the problem directly to Pi
>
> For example I want to add one command, or remind me first every time a certain type of dangerous operation is about to run.
>
> No need to first write a complete requirements document; just explain where the current discomfort is.
>
> 2. Let it make the most minimal version first
>
> One .ts file is enough.
>
> Solve the problem right in front of you first; do not immediately add a settings page, configuration file, or many Tools.
>
> 3. When done, immediately let Pi load and test it itself
>
> During the development stage I load it temporarily first, and after changing, /reload to continue.
>
> If there is an error, keep throwing the terminal output at it and let it fix it itself.
>
> 4. Finally test it once with a real operation
>
> For example if what was made is an interception for a dangerous command, I really trigger it once.
>
> If Pi can show a confirmation before the command executes, this Extension is considered successful.
>
> Now I complete the small problems I run into every day one by one like this, and only after it is stable do I decide which ones deserve to stay in the workbench.

</article>

<article class="tweet-entry" id="post-2096836233679053242">

## After installing many Pi plugins, lately I have really started running into compatibility problems.

<span class="tweet-meta">2026-09-07 13:41:30 · Original text</span>

> After installing many Pi plugins, lately I have really started running into compatibility problems.
>
> Lately, because I have been testing and sharing plugins, my Pi has been quite overwhelmed, so plugin conflict problems appeared.
>
> Then I found: this pi-extension-doctor plugin is indeed specifically for solving this problem
>
> It does not matter if you do not understand either, just follow the steps:
>
> 1. Install it first
>
> pi install npm:pi-extension-doctor
>
> After installing, remember to /reload again, to load the plugin.
>
> 2. Run it inside Pi
>
> /extension-doctor
>
> It will scan all loaded Extensions, and assess the problems.
>
> The output is not complicated either; pay attention mainly to three places:
>
> confirmed means a conflict has definitely been confirmed
>
> inferred means a possible problem was found in the source code
>
> unknown means it cannot safely assess it
>
> I usually handle confirmed problems first, because this is a place that is clearly problematic; do not delete the plugin as soon as you see a problem, first confirm the problem and then solve it — that is the approach.
>
> The case of two Extensions with the same name causing loading problems is fairly common; just turn off one plugin you do not need, then run Doctor once more.
>
> Some simple problems just need to be turned off or deleted; if it is a version dependency conflict you can choose to upgrade directly, but if it is an error at the code level, and you cannot let go of it, my choice is to directly download the source code, then change the version myself😂
>
> I left the open source address in the comment section, do not forget to click your little star

</article>

<article class="tweet-entry" id="post-2096979610588283228">

## Recently I wrote an Extension myself for Pi for the first time.

<span class="tweet-meta">2026-09-07 23:11:13 · Original text</span>

> Recently I wrote an Extension myself for Pi for the first time.
>
> The reason is simple: I often hand a task to Pi and then switch to doing other things, with the result that I have no idea at all when the task finishes.
>
> I will share my whole thinking process:
>
> 1. Find the need first
>
> When Pi runs a task I often switch to doing other things, and do not know when it finishes.
>
> 2. Then start writing
>
> The first version solved only one problem: when the task finishes, show a reminder.
>
> 3. Do a minimal test first
>
> Make sure the notification can be triggered, does not repeat, and really takes effect after being changed.
>
> 4. Only after it is usable, iterate
>
> If the text does not fit, change it; if the reminder is too frequent, add a duration threshold; when needed, add the switch.
>
> 5. And finally, the biggest lesson
>
> In the past I always looked for Extensions that others had already written; now I have started paying attention to my own workflow instead.
>
> The first plugin does not need to be impressive.
>
> First solve one small problem you really run into every day; that is enough.

</article>

<article class="tweet-entry" id="post-2096979758349496647">

## Recently I wrote an Extension myself for Pi for the first time.

<span class="tweet-meta">2026-09-07 23:11:49 · Original text</span>

> Recently I wrote an Extension myself for Pi for the first time.
>
> The reason is simple: I often hand a task to Pi and then switch to doing other things, with the result that I have no idea at all when the task finishes.
>
> I will share my whole thinking process:
>
> 1. Find the need first
>
> When Pi runs a task I often switch to doing other things, and do not know when it finishes.
>
> 2. Then start writing
>
> The first version solved only one problem: when the task finishes, show a reminder.
>
> 3. Do a minimal test first
>
> Make sure the notification can be triggered, does not repeat, and really takes effect after being changed.
>
> 4. Only after it is usable, iterate
>
> If the text does not fit, change it; if the reminder is too frequent, add a duration threshold; when needed, add the switch.
>
> 5. And finally, the biggest lesson
>
> In the past I always looked for Extensions that others had already written; now I have started paying attention to my own workflow instead.
>
> The first plugin does not need to be impressive.
>
> First solve one small problem you really run into every day; that is enough.

</article>

<article class="tweet-entry" id="post-2097181979540111592">

## The process of making a plugin in Pi is simple, but the detailed problems inside it are truly many😂

<span class="tweet-meta">2026-09-08 12:35:22 · Original text</span>

> The process of making a plugin in Pi is simple, but the detailed problems inside it are truly many😂
>
> Earlier I wrote an article about how beginners make their first plugin; I recorded a video to demonstrate it, and it turned out to be full of problems.
>
> 1. First ask the AI to confirm your needs; only after the needs are certain start designing your plugin. Here I asked the AI and it gave 10 points, including an early version and an iterated improvement version.
>
> 2. Start writing a minimal MVP; first test the simplest notification bubble. When Pi finishes a task, iTerm2 will notify me that the work is done, so I can follow the progress in real time.
>
> Here I hit the first trap: I forgot to enable iTerm2's notification permission, and the test failed.
>
> 3. Iterate and improve the content; at first what was used was not the native notification mechanism, so the notification content showed garbled characters, and then a round of optimization and iteration was done.
>
> Here I ran into a very awkward problem: in the screen recording, the related notification bubble never appeared; the cause turned out to be not enabling mirror notification in Mac notifications, so the pop-up notification was muted.
>
> 4. Version optimization; carried out several version-related optimizations, compatibility with various Mac versions, and also to better test the native capabilities and compatibility issues of the Pi plugin; this step had no problems.
>
> In the past when writing plugins I had never run into so many problems; everything was a simple /reload, then it started being used. But now I realize the ability to solve and find problems is just as important.
>
> Otherwise, the AI will not tell you that so many traps are hidden inside the system settings.

</article>

## Next Steps

After finishing this stage, continue reading [Stage 5　Getting sub-Agents to share the roles](/en/tweets/05-subagents-research).

