---
title: "Bioinformatics"
date: 2019-12-14T21:58:09-07:00
draft: false
summary: "How computers can be effectively applied to biology"
---

# Why do I care about this?

In this post, I wanted to go over what bioinformatics does for synthetic biologists. I'm a software engineer by training, and I've even taken some of a bioinformatics course. But I still didn't understand what the purpose of bioinformatics was. More importantly, I didn't understand how what I do for a living now - AI - could help with it.

Bioinformatics is an entire field, so I'm not going to be able to do it justice in a single blog post. The goal here is to do an overview of what bioinformatics is. There are books written about most of the subjects here, and I may go into many of them in future blog posts.

# What is bioinformatics?

At the time of this writing, wikipedia says the following about bioinformatics:

> Important sub-disciplines within bioinformatics and computational biology include:
> 
> * Development and implementation of computer programs that enable efficient access to, management and use of, various types of information
> * Development of new algorithms (mathematical formulas) and statistical measures that assess relationships among members of large data sets. For example, there are methods to locate a gene within a sequence, to predict protein structure and/or function, and to cluster protein sequences into families of related sequences.

If you're not a software engineer, the translation of the first bullet point to English is "Any computer program". So, wikipedia has defined "any computer program" as a sub-field of bioinformatics; this seems ridiculously broad to me. I have found that definitions vary widely, so I'll be coming up with my own.

The second bullet point is also far too broad, but the example it provides is pointing in the right direction.

I'm going to break down bioinformatics into 2 primary parts with additional sub-parts:

* DNA computation
  * DNA sequencing
  * Sequence Assembly
  * Genome annotation
  * DNA comparison for reasoning about evolution
  * Cancer research
* protein computation
  * Structure (how will proteins fold?)
  * structural protein interactions
  * regulation - how do complex protein interactions affect each other?


## Sequence Assembly

There is an approach to genome sequencing called "shotgun sequencing" where biologists break up the DNA of the desired genome into lots of small bits, and then determine how the bits overlap. This can be very expensive computationally because the problem statement is: "find a sequence of all the pieces which makes the shortest string". So the computer needs to go over every possible (maybe not every one, because there are optimizations that can be made) combination to determine which combination is the shortest.

## Genome annotation

The more I dive into bioinformatics, the more I start to realize the subtle complexity in all of it. In this case, we're more or less talking about a database lookup. Imagine you have a string of DNA, and you need to highlight sections of the string to represent different genomes. Simply put, this is just a fancy database lookup. The catch is, you don't know exactly what you're searching for beforehand. So you have to create a search algorithm that's able to match arbitrary substrings against a massive list of strings.

## DNA comparison

There are various reasons to compare DNA. For example, maybe you want to know how closely related two species are, so you compare their genomes to come up with a measurable estimate. Or, you might want to see if two strands of DNA actually produce the same protein despite being slightly different. Both of these involve taking long strings of DNA, and finding the "best" match in the comparison DNA. Doing this efficiently turns out to be tricky.

## Cancer research

The number of possible mutations for any given protein is often enormous. There are 22^400 different proteins that could be coded for by any protein that requires 400 amino-acids. This means that modifications to DNA could create any of an outrageously large number of possible proteins. Cancer is characterized by the result of overexpression or underexpression of certain proteins, so studying it means churning through the 22^400 different possible proteins that can be caused by different mutations in genes. This problem is made more approachable by the fact that biologists are often looking for specific patterns, and there are often a large number of different amino-acid sequences which produce the same proteins. However, we've been talking about proteins that are made from 400 amino acids, there are also proteins that might be made of 401, 402, 500, 1000 or any number of other amino-acid sequences.

Additionally, there are often complex ways that proteins interact with each other, so cancer research may also use protein structure analysis, protein structure interaction analysis, and protein regulation analysis to identify what causes cells to misbehave.

## Protein structure analysis

If simulated, protein structure analysis tries to predict how prteins will fold. Protein structures can be very complex, and understanding the shapes proteins fold into can help in understanding how to synthesize them and how they interact with other proteins (covered below). Simple organic compounds fold in known ways, but when these simple compounds are combined they can create tensions between them. Understanding how these tensions optimally resolve will inform the shape or the final protein.

Lab techniques also produce large amounts of data which needs to be analyzed. For example, spectrometers can be used to verify whether the light that bounces off the protein matches what was predicted based on a simulation. This comparison can sometimes also be more difficult than it sounds if, for example, the measured light is not as specific as the hypothesis initially requires.

## Protein structure interaction analysis

Based on the structures of proteins, they will interact in different ways. For example, if two proteins both have a mostly positive charge, they would tend to not interact well with each other. This is an overly-simplistic example, but the shapes or proteins and the affinity of parts of proteins with parts of other proteins dictate how they interact. But proteins do more than just lock together. When proteins interact, they can change. They exchange parts to produce new proteins, and this interaction can be modeled as well.

Understanding the ways that proteins bind with each other and change together is important in designing new pathways in cells.

## Protein Regulation

Not only do proteins interact with other proteins, but they interact with all sorts of other things in a cell. Cells are chemical soups, and proteins can interact with lots of things in the cells. For example, proteins can interact with phosphate groups to activate them - this process is called phosphorylation. Proteins can also fall apart in cells as they run into organic compounds that destabilize them. This is called degredation, and can happen due to the instability of a protein, or it can be part of some pathway in the cell that marks certain kinds or proteins for recycling.

# Applying AI to BioInformatics

I will be using the terms "AI" and "machine learning" interchangeably.

AI is really good at finding patterns in complex data. AI can explore massive, multidimensional spaces with limited data to find patterns that humans are not good at seeing. I like to think of AI in terms of heuristics. For example, if you wanted to predict whether a protein will have a certain shape, you might be able to say that 2% (I am making these numbers up as an example) of proteins that start with a certain amino acid have some shape, now you have a heuristic for guessing the general shape of a protein. Maybe this is useful, maybe not. But now, if you looked at both the first and the last protein and you could predict shape with greater accuracy, now you have a better heuristic. Machine learning is the process of optimizing computers to find better heuristics even faster. This is often better than starting from first principles when the number of possibilities is extremely large, as it is in biology.

I could see AI being used to help find protein structure, protein structure interaction, and protein regulation because these problems are hugely complex with some variables being potentially continuous. I could also see AI being useful in DNA comparison because the similarities may not be straightforward, and deterimining what makes a useful comparison may be very difficult from first principles.

