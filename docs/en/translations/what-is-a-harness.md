---
title: What Is an Agent Harness?
description: The complete English edition of the official Earendil Product article, “What is a Harness?”.
prev:
  text: Prompt Caching in Agents
  link: /en/translations/prompt-caching
next:
  text: There Are Many Agent Harnesses, but This One Is Mine
  link: /en/translations/mine-agent-harness
---

<span class="library-status">Officially licensed Earendil translation · 04</span>

# What Is an Agent Harness?

> - **Original title** *What is a Harness?*
> - **Author** Earendil Product `<rfc@earendil.com>`
> - **Publication date** 2026-08-20
> - **Original address** [earendil.com/posts/what-is-a-harness](https://earendil.com/posts/what-is-a-harness/)
> - **License note** Adapted and translated with permission from Earendil (*Adapted and translated with permission from Earendil.*)
> - **Translation license** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

**Harness**—the Cambridge Dictionary definition:

*Noun.* A piece of equipment with straps and belts, used to control or hold in place a person, animal, or object.

*Verb.* To control something, usually in order to use its power.

—

When I hear the word harness, the first thing I remember is the set of straps and belts that I put on before climbing the walls of my school in middle school. Honestly, I was a mediocre climber at best.

![Royal Robbins climbing El Capitan, harness racked with climbing gear](/images/translations/royal-robbins-el-capitan-climbing.webp)

*Royal Robbins climbing El Capitan, with a harness full of climbing gear. Photo: [Tom Frost](https://www.frostworksclimbing.com/cool_aid.htm). Image used under the license of the original Earendil article.*

However, if you have been following the AI news lately, the harness most typical in your mind may already have become the Agent Harness. If so, this article is not for you.

This article is for those who are curious about the Agent Harness but do not yet know what it is, and have so far been too embarrassed to ask.

Let us go back to climbing first.

Why do we wear a harness when climbing? First, the harness supports and protects you. It connects to carabiners and ropes, prevents you from falling, controls your rhythm, and limits your path. You can also hang other gear there, such as a chalk bag, nut tools, and quickdraws.

When you climb different peaks and choose different routes, you can bring that harness along too. You can even adjust the harness and the contents of its gear loops to suit the terrain. A climbing harness is adaptive; acrobats and arborists use them too. Anyone who owns one can shape it into something that suits them.

Both in structure and function, a climbing harness and an Agent Harness share several similarities.

## Agent Harness

Someone once described it with a simple formula: Agent = Model + Harness. The Harness here refers to the Agent Harness. But what exactly is an Agent Harness? An Agent Harness uses an AI model to create an AI Agent, which at first was used mainly for programming. Today, every kind of AI Agent has a Harness at its core. Understanding how an Agent Harness works will also help you understand what an AI Agent really is.

An Agent Harness is a piece of software that provides a runtime environment for an AI model. Unlike most AI models, you as an end user can own your own Agent Harness.

Software engineers usually use a Harness such as [Pi](https://pi.dev/) directly in the computer terminal. However, a Harness such as [OpenClaw](https://openclaw.ai/) can also use a different interface, such as iMessage, a chat app, or email. Our Harness, [Lefos](https://www.lefos.com/about), interacts mainly through email.

Whatever interface is used, a Harness usually does four things:

1. It provides a set of instructions that guide the AI model in responding, usually called the “system prompt”.
2. It describes and provides a set of tools so that the AI model can call them to respond to user requests.
3. It builds a framework that constrains the model's behavior, one of its core jobs being to shape the “Agent loop”.
4. It provides an essential conversion layer so that the Harness can work with various different AI models.

### 1. System prompt

Most AI models have their own set of rules and guidelines that are formed and refined gradually during training. One well-known example is the “[soul document](https://gist.github.com/Richard-Weiss/efe157692991535403bd7e7fb20b6695)” of Claude Opus 4.5, which explains to the model what it is and how it should act.

The system prompt in an AI Harness is similar, but it is not embedded that deeply in the model. It is more like the work instructions a new employee receives on their first day: the employee has not internalized the requirements, but knows that they must follow them while doing the job. The system prompt is included in the conversation alongside every user prompt, and it is essential to the model's ability to act appropriately in that Harness context.

### 2. Tools

Tools are a set of capabilities written as code that the model can “call”. A Harness not only describes these tools to the model, but also provides their software implementation. These tools may include a web search tool, a tool for writing and running code, or a tool for writing email.

Crucially, a Harness usually does not rigidly dictate when and how the model should use a tool. It simply provides the tools, describes them clearly, and then lets the AI model decide for itself when and how to use them.

### 3. Agent loop

Now an AI model is inside an Agent Harness and has a set of instructions and tools. Suppose this Harness works through email, with three tools: web search, code writing, and email writing; then the user asks the Agent to compare the ratings and test scores of local elementary schools and give advice. How will it act?

First, the model tries to understand the request, namely the “prompt”. It uses the knowledge and weights obtained from pre-training to understand what “elementary school” is, what “local” means, and which ratings the user might care about. After that, it composes a web search query to obtain the latest data.

After getting the results, the model can review them in the context of the original request. It may find that the first search did not obtain the right information, or that the information is not yet enough, so it decides on its own to search again. The model calls the tool once more based on its own assessment; this is the first clear example of the “loop”.

Suppose the relevant data has been fully gathered; the model then decides to create a spreadsheet through the “write code” tool—after all, a spreadsheet can also be produced by code. It can use this tool to complete calculations and format the results so that the content is easier to understand. After that, it compares the spreadsheet with the original request. If the data is still unsatisfactory, it may re-enter the loop and go back to the search stage.

When the model judges the material to be sufficient, it calls the email writing tool, reviews and summarizes its findings, writes the email, and then attaches the spreadsheet and other attachments. The model checks the final result and judges the task complete, and the Agent loop closes. A few seconds later, the user receives an email containing a summary, advice, and a data table. You can see what an Agent loop looks like in practice in [this Pi session](https://pi.dev/session/#b23f2459599f8439327f65c90ee95d06).

### 4. The conversion layer

The conversion layer allows the same Harness to work with different AI models. Some Harnesses even use several models within a single Agent loop, because different models may excel at different tasks.

The conversion layer is also crucial because it hands control to the end user. Users can build their Harness using an Anthropic model, an OpenAI model, or explore open-weight models that usually have a good cost-benefit ratio—that is, cost per task.

This conversion capability moves some of the power and leverage from AI labs back into the hands of end users. If people can own and run a Harness locally on their own computer, they can preserve their autonomy: free to change its tools, and also to store locally the sessions that over time form a record of human-machine communication.

Instead of depending on a single app released by a particular AI lab, users can choose to use and slowly build a relationship with their own Harness. In the earlier example, the user can hand the same email separately to OpenAI, Anthropic, and an open-weight model, then compare the results and their costs, and keep all the answers in one place, instead of leaving three answers behind in three different apps.

## Making it yours

Unlike the AI model itself, you can own and modify the Harness. Just like a climbing harness, you can make it your own tool. This is one reason people like Pi.

Pi is a very minimalist Agent Harness. Its system prompt is short, and its built-in tools are few. When used straight out of the box, it deliberately does not stand between the user and the model. Yet as people use Pi, they can extend and shape it to their own needs: changing the system prompt, or designing [Extensions](https://pi.dev/packages) that suit their own workflow, then sharing those Extensions with others. When the original text was written, the Extensions shared among Pi users already numbered more than 5,000.

Pi is also free and open-source software that runs on your own laptop. This means people can now own a tool that sits on their own hardware and helps them make use of AI.

## A neutral open-source Harness is a tool of autonomy

A Harness is not always open-source and neutral. The first popular Agent Harness, Claude Code, was not created to provide a model-agnostic conversion layer, but so that users could program with the Claude model on their local computer. After that, the rise of free and open-source Agent Harnesses such as OpenClaw, OpenCode, Hermes, and Pi was truly encouraging.

Earendil is building Pi into a neutral Harness, giving Pi users a choice of capabilities and freedom. We are also exploring how the benefits and autonomy that a Harness brings can reach more people.

Today, many people worry that increasingly large AI companies hold too much power and influence, and some of them may choose to avoid AI entirely. Earendil believes that we can strengthen human autonomy by building open software and protocols, bridging division and misunderstanding, and cultivating lasting excitement and understanding.

We cannot achieve that goal by ignoring the technology that already exists today; instead we must face it with open eyes and hold tight to the reins to ride it: making sure that we are the ones swinging the hammer, not the hammer swinging us.

::: info Translator's note
This document is the complete English edition of the original Earendil Product text. The accompanying images from the original text are used under the article's license, and the photographer's credit is retained. The English edition and its adaptations are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) under license; where anything is ambiguous, the [original English text](https://earendil.com/posts/what-is-a-harness/) is the reference.
:::

## Read next

- [Original English text: What is a Harness?](https://earendil.com/posts/what-is-a-harness/)
- [Next: There Are Many Agent Harnesses, but This One Is Mine](/en/translations/mine-agent-harness)
