---
title: "Gene_libraries"
date: 2022-05-22T22:22:22-07:00
draft: false
tags: ["biology"]
description: "Gene libraries are common ways to store genomes or expressed DNA in a cell. If you are studying a specific type of cell, it is likely that you will find use in a gene libraryth"
---

# What are gene libraries
At a high level, gene libraries are collections of DNA fragments from a genome. The library may contain the whole genome, or it may contain only a section of the genome.

There are 2 primary kinds of gene libraries
- Geonmic libraries
- cDNA libraries

## Genomic libraries
This is the complete collection. If you want all the DNA from an organism, you are going to be creating a genomic library. At first, I thought this was the obvious choice for building a useful library, but I had overlooked the fact that lots of DNA isn't particularly useful (as far as we know), and even less of it is likely to be useful for your particular area of study. 

## cDNA libraries
The "c" in cDNA stands for "complimentary", which describes the process by which these libraries are built (more on that below). These libraries only represent complementary DNA obtained from the mRNA moluecles in the cell.

If you only want to study genes that are expressed in a cell, you should use a cDNA library. These library will contain a subset of the whole genome, but if you're studying, say, human skin, you might not need the parts of the human genome that code for brain cells (I'm not a skin researcher, so don't take my word on this).

There are some subtleties to remember, though. cDNA libraries will not have introns. They are also unlikely to have promoters, inhibitors, or enhancers if those sequences are not transcribed from DNA, or if they are ephemeral. 

# Why are they useful?
Let's say you're studying a genetic disorder in humans. In order to do anything compelling in the lab, you're probably going to need that gene. Building a gene library saves you time by performing the up-front work that you would otherwise have to do every time. For example, if you're a laboratory that studies c. elegans, you might not know which genes you'll want to study next will be, but you would want a genomic library around so that you could isolate the genes of interest when you have more information. You might even be able to make a business out of this, and sell genomic libraries to people.

# How do I build one?

## Genomic libraries
Roughly speaking, a genomic library is created by randomly chopping up DNA, and splicing it into some vector that will duplicate and preserve the pieces of DNA that you have just created.

There are lots of different vectors that can be used to create gene libraries, and different approaches to use for different vectors. I recently wrote about [cosmids]({{< ref "/blog/polymerase_chain_reaction_pcr.md" >}}) and the protocol in that post is used to create a gene library.

## cDNA libraries
The process for creating cDNA libraries is pretty similar to that for creating genomic libraries. The difference is that it is often easier to get the mRNA from the cell, because you just have to [lyse the cell]({{< ref "/blog/cell_lysis.md" >}}), and add some precipitate to extract the mRNA.

cDNA libraries can also be stored using viral vectors like cosmids, or through mechanisms like [BACs]({{< ref "/blog/bacterial_artificial_chromosomes_bac.md" >}}). 

# How do I use one?

Once you have a gene library, you'll want to pull the DNA back out of the bacteria. This process is called "screening".

Now, you need to do a [DNA extraction]({{< ref "/blog/dna_extraction.md" >}}). That link has a simple protocol, but there are lots of ways to extract DNA because it is such a common thing to do in the lab.


# Optimizations
Because gene libraries are common in lab work, there are optimizations that people have found to these techniques.

## Separating genomic fragments
Rather than storing all the pieces of the genome together, you can take your precipitated DNA and run it through a gel (gel electorphoresis). This will separate your DNA fragments based on length. Then, you can cut the gel in certain areas, and transfect your bacteria with different sections of the gel.

Then, when you know which gene you want to target, you can use its length to select the appropriate bacteria.

# Sources
- https://www.youtube.com/watch?v=2ikPiR0-rnc
- https://www.biotecharticles.com/Genetics-Article/Gene-Library-Types-and-Applications-4355.html
- https://en.wikipedia.org/wiki/Genomic_library (as usual)