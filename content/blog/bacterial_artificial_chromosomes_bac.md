---
title: "Bacterial artificial chromosomes (BAC)"
date: 2019-12-12T22:02:15-07:00
draft: false
---

# What is a BAC?

Previously, I wrote about [plasmids]({{< ref "/blog/plasmids.md" >}}) as small, circular DNA sequences. The double edged sword of normal plasmids is that they are small. This can make them easier to reason about, but it can make them inconvenient for some uses. For example, if you wanted to study the herpes virus, it might be useful to have bacteria that carry the genome of the virus. BACs allow biologists to study organisms more holistically, but without having to actually raise the organism.

BACs are also very useful in sequencing genomes. The human genome was too long to sequence at one time, so it had to be broken up and sequenced in pieces. This could have been done with plasmids, but that would have taken orders of magnitude more time to complete because the chunks would have been so much smaller. I've seen a lot of numbers thrown around online, but the best estimate I can get is that BACs typically are between 100kb and 300kb long. Plasmids are usually only up to 10 kb long. To sequence the human genome, BACs were used to isolate chunks of the human genome which were then sequenced independently.

Because BACs are so large, they are more difficult to deal with in the lab. They are much more fragile than plasmids and come in smaller quantities. While a plasmid might be able to be replicated many, many times per cell, BACs will only be replicated once per cell. This makes yield lower and requires more materials.

I also want to make one clarifying point. Technically, BACs are a type of plasmid, they're just a bigger kind of plasmid. I will often refer to BACs and plasmids as separate things, and I am using these terms to signify the size of the plasmid.

# BAC libraries

One of the best use cases for BACs is a BAC library. In order to understand BAC libraries, it helped me to first understand the limitations of PCR. If you're trying to duplicate DNA using [PCR]({{< ref "/blog/polymerase_chain_reaction_pcr.md" >}}), you can only expect to reliably duplicate up to 3000 base pairs. However, if you want to sequence a genome, this is far too limiting. For example, the human genome has 6.47 billion base pairs. To make this a more approachable problem, it can be useful to clone 200,000 base pairs at a time. However, doing so requires using the machinery of cells to do the DNA duplication for you.

Creating a BAC and inserting it is basically the same process as doing so for a [plasmid]({{< ref "/blog/plasmids.md#creating-a-plasmid" >}}). Once the BAC has been trasfected into the bacteria, it is isolated the same way plasmids are - by being smeared on an antibiotic plate. Once the bacteria has been duplicated, it can be added to plates of similar bacteria with isolated genes in them. The combination of all of these bacteria is the BAC library. These bacteria can be referenced later in order to re-isolate the gene.

# Sources

https://bitesizebio.com/24613/baby-got-bac-working-with-bacterial-artificial-chromosomes/

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3273850/

https://www.yourgenome.org/facts/what-are-bac-libraries
