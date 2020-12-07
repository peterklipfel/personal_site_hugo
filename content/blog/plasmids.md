---
title: "Plasmids"
date: 2019-12-07T21:44:22-07:00
draft: false
tags: ["biology"]
description: "Plasmids show up everywhere, and are very useful to synthetic biologists. They are short, circular pieces of DNA that are separate from the chromosome of the cell that they inhabit."
---

# What is a plasmid?

Whenever I start looking into genes and genomes, I eventually end up at a circular diagram with highlighted sections with gene name labels. I understood that these represented genetic information, but I didn't really understand why I should care about them.

Being new at this whole biology thing forces me to remind myself of the fundamentals pretty often. In this case, I have to go back to the fundamentals of what DNA actually is. DNA is just a big string of amino acids which proteins interact with to produce more proteins. The DNA doesn't even need to be in a cell. It just needs to exist in the right ratio with other proteins and amino acids to produce the protiens that are coded for.

There is no natual law that requires there to only be one strand of DNA per cell. There could be many. And this is basically what plasmids are. They're extra bits of functional DNA pieces. Cells are like little bubbles of the right chemicals to produce more of themselves (and thus the protiens that they carry). Plasmids are short, circular strings of DNA which function independently of other plasmids and DNA sequences in a cell.

There are, however, some special components of plasmids that are used in synthetic biology.

* Plasmids must have an origin. Often referred to as ORI. This DNA sequence is necessary for the plasmid to reproduce in bacteria.
* To be useful to synthetic biologists, a plasmid must have a gene that allows it to be selected for. This is commonly a gene that counteracts an antibiotic. This way, biologists can use an antibiotic to kill cells that do not have the plasmid in it.

# What you can do with them?

Because plasmids operate independently of other functions of the cell, they can be added to cells to produce new protein paths in the those cells. For example, a common use (and example) of plasmids is adding a plasmid that codes for protection against a specific antibiotic. Then, if you add that antibiotic to a group of cells, you can know that the ones which survive are the ones that carry the plasmid that you inserted.

Now, this is where the fun starts. Because plasmids can produce new proteins, you can add multiple plasmids to cells in order to create novel pathways or provide greater use of existing pathways. In this way, the plasmids do not _really_ act independently of other functions of the cell as I claimed above. If you create a new plasmid which codes for a toxic protien, you can only produce a certain amount of it before the cell dies. To mitigate this, maybe you could find a protien that protected the cell from the toxic protein.

# How do you use them?

Because plasmids are different from the chromosome of a cell (the cells "main" strand of DNA), they can perform peripheral functions, and this makes it easier to transfer them between different organisms. In fact, plasmids can be transferred between different species. This is called horizontal gene transfer. Because plasmids are reproduced in cells, and passed on to other cells, they are very convenient for synthetic biologists to use to introduce novel protein paths into cells.

## Creating a plasmid

In the lab, if you want to create your very own plasmid, you will need to follow the following basic steps:

1. Get a base plasmid (this can be bought, but let's extract it ourselves)
1. Insert the foreign gene
1. Reintegrate the plasmid into cells
1. Grow cells and remove the ones that did not accept the plasmid

### Ingredients

* Plasmid recombination ingredients
  * Vector DNA
    * The original plasmid - plasmids can be bought or obtained via isolation
  * Insert DNA
    * The gene that you want to add to the plasmid. Can be amplified via [PCR]({{< ref "/blog/polymerase_chain_reaction_pcr.md" >}})
  * Ligase Buffer
    * The buffer is used to control the ions in the solution. In an overabundance of ions, the process will fail. 
  * DNA Ligase
    * Basically, this stuff is necessary for the DNA to bind back together
  * Water
    * As pure as possible
* Translation ingredients
  * E. coli
  * Plasmid
  * Ligase buffer
  * Lysogeny broth
    * Commonly referred to as LB
  * Agar with antibiotic in it
  

### Equipment

* Thermocycler
* Eppendorf tubes
* Pipette
* Heat Block
* bacteria plates

### Steps

1. Perform plasmid vector ligation
  1. Add all ingredients to an Eppendorf tube
  1. Incubate at room temperature for 2 hours
1. Perform plasmid translation. Here, I'm using heat shock, but electroporation could be used as well
    1. Add agar to plates as evenly as possible - set aside to dry
    1. Thaw the cells
    1. Add e. coli and plasmid mixture to eppendorf tube on ice
    1. Let sit for 5-10 minutes
    1. Put tube on heat block for 30 seconds
    1. Put tube on ice for 2 minutes to help cells recover
    1. Add Lysogeny broth to tube
    1. Mix Lysogeny broth in tube by flicking the tube a few times
    1. Shake the cells for 1 hour at 37° C to allow them to grow
    1. Spread the cells from the Eppendorf tube as evenly as possible on the bacteria plate (with agar on it)
    1. Incubate overnight at 37° C to allow the cells to grow
    1. You now have cell cultures with your genetically modified plasmids in them

## Transfer

Getting plasmids into cells can be tricky. However, synthetic biologists can use horizontal gene transfer to get plasmids from outside of cells to inside of cells. The most common technique for inserting a plasmid into a bacteria is done using e. coli. By rapidly changing the temperature of the cells, and/or simultaneously running an electric current through them, the cells briefly open pores that allow external DNA to enter them. 

## Replication

Once a new plasmid has been added to a cell, it will continue to replicate into daughter cells. And in this way, biologists can grow small factories which produce any protien that the plasmid coded for. This process is often imperfect, and so it can be useful to encode an antibiotic-resistance gene into the plasmid so that the antibiotic can be added to the cell mixture to kill off cells which do not have the inserted plasmid.

## Promoters

Promoters are a special sequence of DNA that is "recognized" by RNA polymerase. I don't really like the term "recognized", though this is often how it is documented. I prefer to think of it as a protein that has an affinity (has a higher probability) of binding to a particular part of the DNA. When designing genes, it is important to make sure that your gene begins with a promoter sequence. Because different species have different RNA polymerases, different promoters have different effectiveness in different species. I found a decent [list of promoters from addgene](https://blog.addgene.org/plasmids-101-the-promoter-region).

# Sources

https://www.sciencelearn.org.nz/resources/527-how-to-add-foreign-dna-to-bacteria

https://youtu.be/2ligY8VOzz4

