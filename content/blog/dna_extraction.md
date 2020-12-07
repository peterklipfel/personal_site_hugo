---
title: "DNA Extraction"
date: 2020-01-03T18:50:34-07:00
draft: false
tags: ["biology"]
description: "In order to learn about the genes of organisms, we must first get a purified DNA sample. This post goes over what that process looks like."
---

# Overview

One project that I've had in the back of my mind is inventing new dyes based on colors in insects. Dyes created by biological mechanisms can be much more environmentally friendly than those created with chemicals. Unfortuantely, I have not found anywhere to buy the DNA that I want - in many cases, the genomes haven't even been sequenced yet. Both of these problems will require me to isolate the DNA myself. There are different techniques for extracting DNA from different organisms, and here I'll do my best to stick to broadly applicable techniques.

# How to do it

In general, this is a relatively simple process. You can even perform DNA extraction at home. Broadly, the steps are:

1. Crush up the thing with cells/DNA that you want
1. Add a mixture to break the cells (dish soap is a commonly found mixture that will do the job)
1. Filter out the extra material that was part of the crushed mixture
1. Add a mixture to precipiate out the DNA
1. Collect the DNA precipitate

[ScienceBuddies has a great explanation of how to do this with strawberries.](https://www.sciencebuddies.org/science-fair-projects/project-ideas/BioChem_p015/biotechnology-techniques/strawberry-dna#procedure)


Because there are a ton of tutorials on how to do this online, I'm going to be focusing on one particularly good one that I found. I'm going to be adding my own information about some of the steps and materials for clarity, but the bulk of the material comes from [Kate Dollard's notes at "access excellence"](http://www.accessexcellence.org/AE/AEC/AEF/1994/dollard_onionDNA.html). I could simply leave a link to the site, but I've found that great content on the internet often disappears or becomes unfindable over time, so I'm going to be copying much of it. If the author or any representatives of the author want me to remove this, please let me know.

## Ingredients

* 2 onions (contain the target cells)
* Distilled Water
* 1M TRIS pH7.5-8.0
  * tris(hydroxymethyl)aminomethane is a buffer solution. That's why the pH is specified here. The buffer solution ensures that the DNA isn't destroyed by the pH going too high or too low.
* 0.5M EDTA
  * Ethylenediaminetetraacetic acid is used here as the "ligand". Basically, the purpose of this stuff is to act as a protective mixture for the DNA. It captures free ions so that they don't bind to the DNA and break it up. It's fine for the purposes of DNA extraction, but be careful about using this for something like PCR because [it can inhibit polymerase activity](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6843921/).
* 5M NaCl
  * Salt! This is used as a binding agent for the DNA. The sodium (Na) in salt has a slightly positive charge, and slightly negative parts of the DNA bind to this positive part. This allows us to precipitate the DNA out of solution as clumps of DNA and salt.
* 10% SDS
  * Sodium dodecyl sulfate is a detergent. This is the stuff that's going to break open the cells. If you were doing this at home, this ingredient would likely be dish soap - but obviously, lab grade materials are cooler.
* 20 mL ice cold ethanol per group
  *  DNA is not soluble in ice cold ethanol. When ethanol is added to the mixture, all the components of the mixture except for DNA stay in solution, while the DNA pecipitates out.
* meat tenderizer
  * This is a protease. Protease helps break down extra proteins from the cells that we're breaking open. There will be some amount of extra protein that precipitates out with the DNA, protease helps minimze this contamination.


## Equipment

* 1 pasteur pipet with the tip bent into a hook for each group
* 1 large test tube per group
* 1 test tube rack per group
* marking pens
* 1 large funnel
* cheesecloth 
* 3 250 mL beakers
* pipet bulbs
* 1 1 mL pipet per group
* 1 5 mL pipet per group
* 1 10 mL pipet per group

## Steps

1. Make a protease solution
  * Mix 3g of meat tenderizer with 50mL of distilled water
1. Make the lysing buffer
  1. Mix the following ingredients together
    * 5mL 1M Tris pH7.5
    * 5ml .5M EDTA
    * 6ml 5M NaCl
    * 84ml Distilled water
  1. Moosh the onion up - the source lab says to mince the onion. The point is to break the onion into the smallest possible pieces
  1. Mix the onion and the lysing ingredients from step 1 in a blender
  1. Funnel the mixture through cheesecloth into a 250 ml beaker
    * The stuff in the beaker will be called "onion filtrate"
1. Pipet 10mL of onion filtrate into the 50ml test tube 
1. Add 1mL of the 10% SDS 
1. Add 4mL of protease solution
1. Place on ice
1. add 15-20mL of ice cold ethanol in the test tube
  * make sure to do this slowly, as we want to keep an undisturbed layer of ethanol in the test tube
1. Let the tube sit for 5 minutes (still on ice)
1. Retrieve the DNA - it will look like stringy white stuff in the ethanol
  1. Heat up a pasteur pipette and bend a hook into the tip of it
  1. Use the hook to snag the DNA, and pull it out
1. Add DNA to test tube and set aside

You now have purified DNA! This can now be used for all kinds of fun experiments.

### Check the DNA for purity

1. Dissolve some DNA in 5mL of distilled water
1. Turn on the spectrometer and let it warm up
1. Fill one cuvette with distilled water
1. Fill one cuvette with the DNA solution
1. Place the two cuvettes in the spectrometer
1. Set the absorbance wavelength to 260 nm
1. Make sure to set the reference absorption to the cuvette with only water in it. The machine will use this as a baseline
1. Record the 260 nm reading
1. Repeat this process for 280 nm light

Nucleic acids, DNA and RNA, absorb at 260nm and proteins absorb at 280nm. A ratio 260nm/280nm of 1.8-1.9 indicates pure DNA. A ratio of 1.9-2.0 indicates pure RNA. Your sample is a mix of DNA and RNA and protein. The ratio will be low if there is a lot of protein absorbing at 280nm. 

# Challenges

## DNA is bad quality

In this case, we used a fresh onion, which means that we can be pretty confident that the DNA will be of high quality. But if you buy specimens that are old or damaged in some way, the extracted DNA can be of low quality, and any further use for the DNA will behave suboptimally.

## Buffer pH is too high

If your pH is too high, the DNA will be damaged, and may either be not useful for future uses, or might not precipitate out at all.

## Ethanol is not cold enough

The DNA will remain dissolved in the mixture if the ethanol is not cold enough.
