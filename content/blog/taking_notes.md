---
title: "How I manage my notes"
date: 2020-07-18T20:01:11-07:00
draft: false
summary: "I have spent a long time trying to find the right practice for taking notes, and I think I finally found a method that I like"
---

# Tl;dr

I use obsidian for desktop, IA Writer for mobile, and keep everything in sync with Dropbox.

# Taking notes is hard

During college, while I was freelancing, I developed a habit of taking notes. This has served me well since then, and I have tried to manage my notes in more ways than I can remember.

The ones that I can remember trying are: Google Keep, Google Docs, Evernote, Jupyter notebooks, Aha!, Omni-notes, Notability, Apple notes, Nebo, vim + github, and a bunch of miscellaneous mobile apps.

# What I'm looking for

After finding the solution that works for me, I've discovered what my requirements are:
- **Portable format**: I want to be able to load my notes in any system. Potential candidates include docx files, markdown, and pdfs
- **Access everywhere**: I want to be able to see and read my notes after they've been synchronized
- **Vim mode**: When I'm at a computer, I'd like to be able to use vim mode to modify and update my notes
- **Metadata**: I need a good way of associating metadata with my notes like the time the note was taken and a way of linking notes

But I also want to be able to use notes for other things:
- I have lots of miscellaneous thoughts during the day and need a way to capture them
- I like to keep track of quotes
- I often track things like grocery lists
- I like to keep track of todo items

And it would be nice if the apps that I took my notes on had a dark mode.

# My solution

I think I may have finally found the solution that works for me, and I want to share my setup just in case it works for other people too. The keystone to my new note-taking strategy is Obsidian. I absolutely love this note-taking app, and whole-heartedly recommend it to anyone. I hope that it continues to be the simple, elegant, and powerful editor that it is today. Disclaimer: I'm not affiliated with them in any way, and don't have anything to gain by promoting them.

## Markdown

When I have used other formats, I always run into corner cases where the note system breaks down. For example, I have always wanted to have my blog posts in the same place as the rest of my notes, but they always seem to get out of sync - I'll write the original post in one place, and then have to copy it back and forth between systems. This led to my notes and my blog getting out of sync (the blog that you're reading is my third "real" attempt at getting my blog going).

But markdown has become universal. I can write things in a single format, and load them into any system for viewing. There are a bunch of apps that allow for markdown authoring. I like IA Writer for mobile, and I use Obsidian on all my computers to keep things in sync.

## Daily Notes

Obsidian gives me a convenient format to put all my day-to-day ramblings, todos, and notes called "Daily Notes". I have a folder called "Daily Notes", and each file in this folder is the date of the note (for example, 2020-08-10.md). I also use Obsidian's Daily Note Template to automatically generate a note with my default format.

Obsidian handles this all for my automatically, but the system is simple, so I can do it manually pretty quickly if I want to, say, plan for the next day while I'm laying in bed.

### Daily Note Format

My daily notes contain the following sections specified as markdown headings:
- **TODO**: I put all the tasks that I want to get done "today" in this section
	- **Stretch**: As things come up during the day, I often put them in this section, and move them to the next day if I don't get to them
- **Personal Goals**: I generally have personal objectives that I am actively  working on. This is where I track those objectives, and their output (metrics, notes, links, etc.)
- **Business Goals**: I like to track the ongoing goals at my job separately from my personal goals.
- **Accomplished**: It's nice to lay in bed at night and make a list the things that I got done that day
- **Daily thoughts**: This section is freeform, and is more like my "journaling" section. As I'm wandering through the day, for example, and I have the next billion dollar business idea, solutions to world hunger, or breakthroughs on artificial general intelligence, I'll add them to this section.

## Vim Mode

Despite how cumbersome it was to constantly have to boot jupyter notebooks, I loved being able to write my notes with a vim mode. I am so much more efficient when I can take note in vim mode. For example, if I'm on a call, I can simply press enter to separaet things in a list, and then make the list when there is a lull in noteworthy conversation by using `ctrl+v` + move up several lines + `shift+i` + "-".

## Synchronization

I use dropbox to synchronize files across all my devices. My only gripe with Dropbox is that it _really_ wants you to use a folder called "Dropbox", which is kind of annoying. But it's available in all places, and it does a good job of synchronization, so it's fine.

## Blog

The blog that you're reading right now is generated with markdown files, so I cloned the repository into my dropbox, and now I can modify and write blog posts in the same place that I take my notes! This was a huge win for me.

I'm still looking for a way to automatically deploy my site when I push to master in order to remove the need to run a deploy script (and have the necessary dependencies in place to do so). Netlify looks like it might be a good solution to this problem, but I haven't set it up yet.

## Zettelkasten

I didn't know there was a word for this style of taking notes until it became trendy a few months ago, but I find that prepending notes with dates is extremely useful for cases where I might have had multiple meetings on the same subject, or where I met with the same person multiple times, but do not have a regularly scheduled meeting with them (I put those in dedicated "1x1" notes).

# The future

I haven't figured out a good way to use tags yet. I've tried it in the past, and I end up with more tags than I do notes, making the tags less useful than full-text search. Side note: full text search comes for free with markdown because it's such a simple file format. Most applications can do it, or you can just do a `grep` if you have a terminal open.

Also, I still haven't figured out a great way to link notes to each other. Folders do a pretty good job of grouping similar notes, and I haven't found a compelling use case for linking notes. But it's nice to have solutions in the tool box in case problems arise.
