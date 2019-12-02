---
title: "Polimerase Chain Reaction (PCR)"
date: 2019-11-27T21:41:38-07:00
draft: false
---

# Why do synthetic biologists use PCR?

One of the foundations of synthetic biology is being able to put new genes into organisms that did not previously have them. Unfortunately, genes don't naturally come in buckets of purified DNA segments; we have to make those ourselves. And this is where PCR comes in. If you happened to find a really cool jelly fish that glowed under UV light, you sequenced that jellyfish's genome, and identified the gene that makes it glow, you might be able to take that gene from the jellyfish and add it to other organisms in order to make them glow as well. Let's assume for this explanation that we have already identified the gene that causes the jellyfish to glow, and that we have a tank full of these jellyfish. 

Now you have all the genes you need, if you could only extract them from the jellyfish somehow. This is a separate process called DNA extraction, and I'm going to save that for a different post, but there do exist ways to extract DNA from the cells of an organism. Once you have the DNA extracted, you still need to get a bunch of copies of the specific gene that you want to inject. If you just injected your purified DNA... well, I don't know what would happen, and this might be a fun experiment, but my guess is that you probably wouldn't get anything useful.

Back to the original plan of extracting the gene from the jellyfish. If we have a tube full of purified jellyfish DNA, PCR is the process that will turn the tube full of purified DNA into a tube full of a specific gene, which we can then use in combination with the DNA of the target organism to produce a new genome for the target organism with our modified gene in it.

# How does it work?

I like to approach synthetic biology from a recipe perspective. That is, listing out the ingredients, and then how to put them together.

## Recipe

#### Ingredients

* Primer 1
* Primer 2
* Source DNA
* Buffer
  * Used primarily to maintain the correct pH levels in the reaction so that the other ingredients don't break apart into their constituent atoms or hydrocarbons
* dNTPs (dATP, dGTP, dCTP, and dTTP)
  * These are the chemical acronym versions of the A, T, C, and G that make up the DNA
* Polymerase
  * Taq polymerase is the one that people like to talk about, but there are lots of different kinds of polymerases which have tradeoffs like how much DNA it will copy at lower temperatures (when you don't want it to), price, and error rates.

#### Equipment

* Thermocycler
* PCR tubes
* Pipette

#### Steps

1. Use the pipette to add together all the ingredients in a PCR tube
1. Put the PCR tube with the mixed ingredients into the thermocycler
1. Run the thermocycler (The cycle that follows uses example temperatures for Taq polymerase. Different polymerases and primers will perform optimally at different temperatures)
  1. Heat to high temperature 96° C
  1. Cool to 59° C
  1. Heat to 72° C
  1. Repeat starting from step 1 30 times
1. Remove the PCR tubes from the thermocycler

#### Testing your DNA

The first way that you will want to test your DNA is with gel electrophoresis. I'm not going to go into the details here, but it enables you to see the length(s) of DNA that you created in your PCR steps. If the length is what you expect, that's pretty good indicator that you got what you wanted.

## Questions that are still unanswered

### What's going on when the thermocycler changes temperatures?

The thermocycler is going through 3 phases:

1. Denaturation
1. Annealing
1. Extension

#### Denaturation

DNA is made of two strands, and these strands can be broken apart at high temperature. The first step of PCR is to heat up the DNA such that the two strands are separated. This is why special polymerases are chosen; they must be able to withstand very high temperatures. Taq, the first such polymerase was found in an organism that lives on deep sea vents where water temperature is very close to boiling.

#### Annealing

Now that the two strands of DNA are separated, the primers have sites to bind to. When the DNA was stuck together, there was no room for each of the primers. The temperature of the annealing step should be lower than the extension temperature so that the polymerase doesn't start extending the DNA before the primers are done binding. The binding of primers will force the strands to start and stop at the right places. 

### How do I create primers?

There are two primers that are used in PCR. The forward primer and the reverse primer. I think of these as the "start primer" and the "end primer". There are a lot of things to keep in mind when designing these two primers like primer length, G/C content, annealing temperature, structural gotchas (hairpin and dimer sequences). Rather than explaining them all here, I think Premier Biosoft has a great [PCR primer design summary](http://www.premierbiosoft.com/tech_notes/PCR_Primer_Design.html)

In general, the forward primer should start with methionine which is represented by the codon ATG. And the reverse primer should end with TAG, TAA, TGA

There are a couple of pieces of software that help with primer design:

* [Genome Compiler](http://www.genomecompiler.com/) is quite popular
* I like [Benchling](https://benchling.com)
* I hear that [Snapgene](https://www.snapgene.com/) is used widely in industry

### How do I extract DNA?

DNA extraction depends on the type of organism you want to extract the DNA from, and I'm going to leave this subject for another post (or series of posts)

## Pitfalls

I thought BioRad had a pretty good [overview of PCR troubleshooting](https://www.bio-rad.com/en-us/applications-technologies/pcr-troubleshooting). I've summarized some of the parts of that article, and synthesized them with other findings, and my own thoughts.

### Too few cycles

Each cycle runs the full amplification process through once, so if too few of these cycles are run, there will be too little generated DNA sequences. The resulting solution will have too much of the original ingredients, and too little of the final product (the gene that's being amplified).

### Denaturation is too long

If denaturation runs too long, the DNA will start to fall apart. It is difficult to copy DNA that has fallen apart.

### Denaturation is too short

If denaturation does not have a chance to fully break apart the DNA, the primers will have no place to bind, and the annealing step will be ineffective. This can cause poor amplification.

### Annealing temperature is too high

Primers will fail to bind to the DNA. This will cause poor amplification, and could cause other problems as well.

### Annealing is too short

The primers will not have enough time to bind to the DNA. This can cause a couple problems because extension will just produce copies of random pieces of the DNA.

### Extension is not at optimal temperature

Different polymerases will perform optimally at different temperatures. If the temperature is not optimal, the extension reaction may take too long, and this could lead to the problem of the extension time being too short.

### Extension is too short

The process will produce fragmented DNA because the polymerase will not have enough time to extend the segments of DNA before it is denatured again.

### dNTP concentration was wrong

If there is too many dNTP in the solution, the buffer will run out of ions to maintain the pH level with, and the pH of the solution will become unstable.

If there is too little dNTP in the solution, there may be inadequate amplification because there won't be enough DNA building blocks to amplify the gene with.

### Too many Gs and/or Cs in the target gene

Gs and Cs are "sticky", and if there are a lot of them, it becomes difficult to amplify them without ruining the source DNA.

### Contaminants in the ingredients

If there are contaminants in any of the ingredients the reaction will not work right. The first thing to try is to be extra careful with pipetting to make sure that there was no user error. If you are pretty positive that no user errror has occured, then it might be time to order new ingredients. Debugging contaminated ingredients can be pretty tricky. If you have ingredients from other reactions, it might be worthwhile to try some control reactions with other known-good ingredients.

### Incorrect amounts of primer

If there is too much primer, the primers have a higher likelihood of binding to things that they aren't supposed to be binding to. This can cause the final solution to have extra DNA fragments that shouldn't be there.

If there is not enough primer, then PCR will be inefficient because the start and end points of the desired duplication will not be marked. This can lead to non-specific amplification by the polymerase, or it can simply lead to an inefficient process.

The amount of primer must be balanced because at the beginning of the reaction, there will be a higher primer to DNA ratio, than at the end. As the DNA is duplicated further, the dNTPs are used up to create more DNA that the primers need to bind to.

### Too little polymerase

Similarly to the primer, if there is not enough polymerase, the reaction will be inefficient. And this must be balanced across the length of the reaction.

### Primers were designed incorrectly

If the primers are wrong, there may be mutations in the genome that were not intended. The primers may bind to unintended parts of the source DNA. This conclusion should probably come toward the end of the debugging process, but may be indicated by DNA lengths being consistently wrong.

### Buffer concentration was too low

Not enough buffer can cause the pH of the solution to be unstable and cause ineffective PCR.

### Target was too long

The simplest way to get around this is to try to run the reaction longer. Otherwise, maybe try to find other ingredients that are better suited to your target, or try to optimize the target to be shorter.

### Source DNA is bad

If the source DNA is of poor quality, then the reaction will not run correctly. Fresher DNA has higher quality.

# Other sources

* Khan academy has some amazing articles. I found the [PCR post](https://www.khanacademy.org/science/biology/biotech-dna-technology/dna-sequencing-pcr-electrophoresis/a/polymerase-chain-reaction-pcr) to be well written
* The Thought Emporium has an excellent video about PCR titled [The complete guide to PCR](https://youtu.be/7kJ2o7P8D00)

