---
title: "Lac operon"
date: 2020-02-07T16:47:28-07:00
draft: false
summary: "I have heard a lot about the lac operon, and had never looked into it. I've taken this opportunity to explain the basics of how it can be used to select for engineered organisms"
---

# Overview

The first word in "lac operon" refers to lactose, and the second word refers to the structure of the genes. Usually, when people discuss the lac operon, they do so in the context of e. coli. Though e. coli is not the only bacteria that can have the lac operon, it's usually what people are referring to. I will continue that tradition.

Lactose is a type of sugar often found in milk. You may have heard of people being "lactose" intolerant. Well, the stuff that they are intolerant to is a type of sugar that can be broken down for energy by e. coli. However, e. coli doesn't particularly like it either. It takes less energy for e. coli to break down glucose - a different type of sugar. Lactose is the sub-optimal choice for food for e. coli, and the e. coli happens to have a useful mechanism for determining when to digest it.

An "operon" is a sequence of genes that all interact with each other, are all next to each other, and are all transcribed together. In the case of the lac operon, the components of the operon are:

* CAP site
* promoter
* Operator
* Digestion genes
  * _lacZ_
  * _lacY_
  * _lacA_

# Function of the operon

The operon's works on the following rules:

1. Do not digest lactose - even if it's available - if glucose is available
1. Digest lactose when it is available if glucose is not available

Normally, when DNA is read, DNA polymerase starts reading at a sequence that it binds well to; a promoter. Then it continues reading the DNA until it hits another sequence that it does not bind well to, and it stops; the terminator sequence. In the case of the lac operon, there is a sequence of DNA which directly follows the promoter which normally has a repressor protein bound to it. The sequence that the repressor is bound to is called the "operator". This repressor has the special property that it binds well to lactose (actually, it binds to a rearranged version of lactose, but that's not super important for this discussion), and when it binds to lactose it ceases to bind well to the DNA. This allows the polymerase to do its job and continue reading the DNA.

This explains the promoter and operator genes. The promoter helps DNA polymerase bind to the DNA, and the operator "turns on" in the presence of lactose. The last genes are the digestion genes, and their job is to actually cut up the lactose molecule into usable food for the bacteria.

Now we have a gene sequence composed of the promoter, operator, and digestion genes. This sequence allows the bacteria to process lactose for food. But it only does so in the presence of lactose. However, this breaks the first rule. It will turn on _even if glucose is available_, which is not what we want (or what has been measured experimentally).

In order to get this gene sequence to follow rule one as outlined above, we need to consider the CAP site. It didn't help me understand things, but in case you're wondering, CAP stands for catabolite activator protein. The idea of the CAP site is pretty simple. When glucose is missing, it is "turned on", and the promoter sequence can be bound to. It turns out that polymerase needs the CAP site to be "turned on" in order to bind to the promoter sequence. It helps me to think of the CAP site as an extension of the promoter sequence, and without it, the promoter sequence doesn't work.

There's a slight complication here, though. It's easy to understand how the operator works, because it responds to being bumped by lactose. How does the CAP site recognize the absence of something? Well, it turns out that there is a different mechanism in the cell that releases a molecule called cyclic AMP. In the presence of this, the CAP site activates. In order to keep things simple, I'm going to avoid going into the details of this mechanism.

# How it can be used

The coolest thing about genetic engineering is that we get to add and remove genes from organisms at will. So, let's assume that all e. coli in the world contains the lac operon. If they didn't all have it, then we could just find a strain that didn't have the gene, and we wouldn't have to go through this step. We could take the e. coli that had a lac operon, and use some gene cutting proteins to remove the lac operon from it, and build new e. coli without the gene.

Then we could create a plasmid that had the lac operon in it, and reinject it into the e. coli. If we grew the e. coli in lactose (and no glucose), we would know which bacteria did and did not have the lac operon in it. Now for the fun part. If we added another gene in the lac operon (say, a gene that made insulin), we would be able to select for the bacteria which had our modified lac operon in it. This allows us to direct the growth of e. coli towards the novel strains that we have just created. This is a fundamental part of genetic enginering.

