---
title: "DNA sequencing methods"
date: 2019-12-27T19:07:01-07:00
draft: false
tags: ["biology"]
summary: "One of the driving factors behind the recent explosion in progress in synthetic biology has to do with the cost and speed of genome sequencing and synthesis. I wanted to understand more about how it actually works."
---

# Overview
One of the driving factors behind the recent explosion in progress in synthetic biology has to do with the cost and speed of genome sequencing and synthesis. Here, I'm going to focus on genome sequencing. There are lots of companies that will do this for you, and lots of lab devices that you can buy so that you don't have to do the sequencing yourself, but I thought it would be worthwhile for me to understand what it takes to sequence DNA.

## DNA sequencing

### Maxam Gilbert Sequencing

One of the original ways of sequencing DNA, it is very time intensive. There are some chemicals that are known to bind to different dNTPs (_d_eoxyNucleotideTriPhosphates - A, T, C, G). For example, formic acid can be used to depurinate (I like to think of this as a synonym for "dissolve") the A and G parts of DNA. There are other chemicals that can depurinate G, C, and C+T. If you can take a piece of DNA and break it off at A+G, G, C, and C+T, you can put it through gel electrophoresis, which shows the length of the pieces of DNA. Then, using the variable lengths of the slices of DNA with known breakpoints, the DNA sequence can be guessed by looking for the best-matching sequence of DNA that would match up with the measured DNA lengths.

When this method was invented, biologists were still trying to figure out how to look at DNA, so in order to get a reading from the gel electrophoresis, x-rays were used to interact with a radioactive isotope. This meant that, as part of this process, the radioactive isotope had to be added to the DNA. This also serves to orient the DNA. It's convenient to know that that all the readings are starting from the 5' end.

### Chain termination method (Sanger Sequencing)

As the name suggests, chain termination sequencing uses the termination of DNA sequences to identify whether the end is a G, T, C, or A. The ingredients are similar to [PCR]({{< ref "/blog/polymerase_chain_reaction_pcr.md" >}}). A primer is added to the DNA to start the replication at a known location, and then polymerase is used to replicate the DNA. Then, gel electrophoresis separates the DNA by length, and then a laser is used to determine which base is at the end of the sequence.

But there's a catch. If the laser can tell what's at the end of the chain, why can't we just use the laser to figure out what all the bases are and save a bunch of time? Well, the only reason that the laser can see what's at the end of the chain is because I neglected to mention one more special ingredient. The last ingredient is a special kind of NTP (a ddNTP - dideoxynucleotide triphsophate) with a fluorescent marker attached to it. This special NTP is engineered so that the PCR sequence ends after it has bound to the chain. It short circuits the polymerase so that the last NTP in the DNA sequence is a fluorescent NTP. There are 4 of these (G, A, T, C) each with different fluorescent colors. The laser can see these different colors and produces a distribution of colors for different lengths. Because we know how long the each sequence is (because of the gel eletrophoresis), and we know what the end of the sequence is, we just need enough sequences to fill each of the lengths in the gel. And then we can determine the entire sequence.

## NGS (Next-generation-sequencing)

There are a ton of NGS techniques, and based on my knowledge so far, this seems like a marketing label that was made up at some point for marketing purposes. As best I can tell, after the human genome was completed there were a bunch of companies trying to make more efficient forms of sequencing. As they came out with them, they rode the hype wave and ushered in a new era of sequencing "next generation sequencing". I don't mean for this to sound too cynical - one of the primary reasons that synthetic biology is growing so rapidly is due to these techniques. My point here is that there doesn't appear to be a single, unifying pattern behind any of these techniques that matters to synthetic biologists. In general, all these techniques make sequencing faster and cheaper.

With that said, some common patterns that appear in these types of sequencing include:

* fluorescent nucleotides which give off light when bound to their matching, counterpart dNTP
* engineered substrates for DNA to bind to in known ways
* parallelizable tasks

### Pyrosequencing

This includes Roche 454 sequencing, which shows up a lot if you search for NGS techniques.

DNA is broken up into smaller pieces. Then, special beads are added to a mixture of the DNA, and the beads are distributed among small wells. 1 bead per well is added, and as each of the dNTPs is bound to the next piece of DNA, a light signal is released. This requires a special kind of dNTP which has luciferase enzyme in it. This is the class of enzyme that makes fireflies glow. Each time the polymerase binds a complimentary dNTP to the single strand, a small amount of light is released. This is detected by a machine, which then knows the sequence of the DNA.

### Illumina sequencing

Similarly to other sequencing techniques, this requires the amplification of the target strand of DNA. Polymerase binds non-incorporated nucleotides to the single strand of DNA (acquired by denaturing the double stranded DNA at high temperature). Non-incorporated nucleotides are special kinds of nucleotides that have been manufactured by humans to have special properties. In this case, the nucleotides have fluorescent proteins in them, so when they bind, a small amount of light is released. This light is read by a machine and then used to infer the sequence. Each protein fluoresces a different color.

### Ion torrent - Proton/PGM sequencing

DNA is is fragmented into sequences of around 200 base pairs. In this case, again, polymerase is used to attach NTPs to the end of the DNA sequence. Each time the polymerase binds an NTP its matching base pair on the denatured DNA, an H+ ion is released - this is why a buffer solution is required in PCR. Sensitive equipment is able to measure this release. So, a mixture of a single dNTP (like, only T for example), is added to a mixture of the DNA. The pH change can be measured, once the T solution has been used, then a new solution can be used on the remaining DNA, and this can be repeated to rapidly measure the order of the sequence.

### Sequencing by ligation

This includes SOLiD sequencing, which shows up a lot if you search for NGS techniques.

When two strands of DNA bind together, DNA needs a special enzyme in order to bind efficiently - this ezyme is called a ligase. When we sequence a DNA strand by ligation, we need a bunch of DNA that is missing an end, and then a bunch of oligonucleotides. Oligonucleotides are basically just tiny DNA fragments that are 10-30 bases long. These oligonucleotides are synthesized by humans, and contain special, fluorescent proteins in them, so that whenever a G/A/T/C is paired with DNA of the target strand, a unique light signature is given off. These light signatures can be read by a special camera, and then used to infer the sequence of the target DNA strand.

Sequencing by ligation also has the added bonus of being able to cleave the DNA that was just sequenced. If the oligonucleotides are synthesized in a certain way, the sequenced piece can be chopped off by some other proteins. Then, the process can be run again. Because the oligonucleotides are long, there are some DNA pieces that will be skipped, so the sequence needs to run several times with oligonucleotides of different lengths. Conveniently, this is parallelizable.

# Sources

https://www.healthcheckup.com/general/different-types-of-dna-sequencing-methods/

Wikipedia

