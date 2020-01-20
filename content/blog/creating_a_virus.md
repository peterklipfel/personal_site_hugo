---
title: "Creating a virus"
date: 2020-01-10T15:59:55-07:00
draft: false
summary: "Viruses can be very useful for synthetic biology. They allow us to add DNA to larger organisms with greater certainty. In this post, I want to add my own understanding to a procedure that I found on the internet."
---

# Overview

Previously, I've talked about transfection of e. coli using heat shock in my post on [plasmids]({{< ref "/blog/plasmids.md" >}}). Transfection into  single celled organisms can be relatively simple. Using heat and electricity, we can take an artificial plasmid and add it to e. coli or yeast. This synthetic addition to the DNA in a cell codes for a protein that we want, and the cell will now produce that protein like a small factory.

What if we want to add DNA to more complex organisms? I originally wanted to learn how to add new genes to a plant - it would be really cool to have fluorescent flowers. I found some evidence that it might be possible to soak a plant in a container full of plasmids in order to transfect it. After this process, in theory, some of the seeds will contain the plasmids, and if you grow a bunch of them, some of them will express that DNA.

However, the better way to add DNA to a more complex organism is with a virus. Viruses are pockets of DNA (they don't even have cell walls) that inject their DNA into cells. The DNA they inject is coded to create more viruses, and then the new viruses inside the cell are released when the cell is lysed (it explodes). If you just want to create viruses, this is fine, because you'll end up with a ton of viruses, and some broken cells. So for creating a stock of some viral solution, it's fine for the virus to kill the cells, though, maybe not optimal since you only get a certain number amount of the virus from each cell, and then the cells can't be used again. However, not all viruses work just like this. If they did, then all of the cells that were infected with the synthetic DNA would explode and die. Some viruses are "replication-defective" which means that they do not have the right DNA to continue the pathway that would cause the cell to die.

Today I want to focus on creating a virus.

# Creating a virus

The first thing I want to go through is how to actually create a virus. I will be copying someone else's procedure because the internet tends to rot, and because it's easier to translate with the original content. I'm using the [Addgene's lentivirus production protocol](https://www.addgene.org/protocols/lentivirus-production/). My goal is to go through the procedure and attempt to translate the acronyms and bio-words into english.

## Ingredients

* DMEM high glucose
  * Dulbecco's Modified Eagle Medium is a growth medium for supporting the growth of many different mammalian cells. It helps cells stay alive and grow
* L-alanyl-L-glutamine (or alternative stable glutamine)
  * alanylglutamine
* Heat-inactivated FBS
  * Heat-Inactivated Fetal Bovine Serum helps cells grow. It is nutrient rich, and contains few antibodies (which might negatively interact with the cells)
* Low serum medium such as Opti-MEM or Opti-Pro SFM
  * This is also a growth medium for cells
* Chloroquine diphosphate, 25 µM
* PEI, 1 mg/mL
  * Polyethylenimine is used to help with transient transfection. Transient transfection means that the transfection is not passed to daughter cells.
* 10 cm tissue culture dishes
  * a dish that the tissue can be grown in
* Hydrochloric acid
* Sodium hydroxide
* 0.22 μm polyethersulfone (PES) filter
* 0.45 μm PES filter

## Equipment

* Biosafety cabinet
  * We're dealing with viruses, so it's better to have a special place for doing potentially dangerous things
* Pipettes
  * A thing that can measure amounts of liquids
* Pipette tips
* Incubator
  * Where the cells will be grown. These are temperature controlled boxes, and some of them shake.
* pH meter
* Stir plate
  * Stir plates use magnets to spin a magentic stir bar in a container which sits on top of it
* Magenetic Stir Bar
  * This goes in the container that you need to stir. The stir plate spins it in order to mix the contents of the container
* Microcentrifuge tubes
  * Used in a centrifuge to separate the contents of the tube
* Syringes for filtering
  * Syringes can be outfitted with a filter inside which helps to move liquids around, and filter out components of the liquid as they're being moved

## Steps

1. Create final DMEM mixture (10% v/v FBS and 4 mM L-alanyl-L-glutamine)
  1. Create a 500 mL bottle of DMEM high glucose
  1. Add 55 mL of heat inactivated FBS
  1. Add 11 mL of 200 mM L-alanyl-L-glutamine
  1. Store at 4 ℃.
1. Create final 25 mM chloroquine diphosphate mixture
  1. Dissolve 0.129 g of chloroquine diphosphate salt in 10 mL of sterile water.
  1. Filter sterilize through a 0.22 μm filter.
  1. Aliquot 50-100 μL and store at -20 ℃.
  1. Aliquots can be thawed and stored at 4 ℃ prior to use. Thawed aliquots should be discarded after 1-2 months.
1. Create final 1 mg/mL PEI, linear MW 25,000 Da mixture
  1. Dissolve 100 mg of PEI powder in 100 mL of deionized water.
  1. While stirring, slowly add hydrochloric acid until the solution clears.
  1. Check the pH of the solution.
  1. Use hydrochloric acid or sodium hydroxide to adjust the pH to 7.0. Typically the solution will be basic and will need adjustment with hydrochloric acid first.
  1.  Allow the solution to mix for 10 min and then recheck the pH to ensure that it has not drifted.
  1. Filter the solution through a 0.22 μm membrane.
  1. Aliquot 500-1000 μL into sterile tubes.
  1. Store the tubes at -80 ℃.
    * After thawing, the solution can be stored at 4 ℃ for up to 2 months. After 2 months, discard the tube and thaw a new working stock.
  1. The optimal mass DNA:mass PEI ratio will need to be empirically determined for each new batch of 1 mg/mL PEI and for each cell line.
1. Seed 293T packaging cells at 3.8×106 cells per plate in DMEM complete in 10 cm tissue culture plates.
1. Incubate the cells at 37 ℃, 5% CO2 for ~20 hours.
  * mammalian cells do not live in the atmosphere (~0.04%). They live inside bodies. The amount of CO2 in bodies is greater than the amount of CO2 in the atmosphere. There is some more subtlety in the chemstry of the CO2 in mammals, but that's beyond the scope of this post.
1. Gently aspirate media, add 10 mL fresh DMEM complete containing 25 μM cloroquine diphosphate and incubate ~5 hours
  * For 10 mL of DMEM complete, add 10 μL of 25 mM chloroquine diphosphate.
  * "Aspirate" is a fancy way of saying "suck up". This step removes the old cell media and replaces it with fresh media
1. Prepare a mixture of the 3 transfection plasmids:
  * psPAX2 - 1.3 pmol
    * This is an empty plasmid backbone. It is used to add new DNA to plasmids. This could be changed to introduce new DNA to the viral vector
  * pMD2.G - 0.72 pmol
    * This is a DNA sequence that codes for the creation of a virus
  * Transfer Plasmid - 1.64 pmol
    * This is a separate plasmid that will help the virus to proliferate. This often happens via a mechanism called Long terminal repeat (LTR)
    * AddGene of course, recommends its own [pHAGE TRE dCas9-KRAB](https://www.addgene.org/50917/)
  * OptiPro SFM to total volume - 500 μL
1. Dilute the above 500 μL mixture into 500 μL PEI-OptiPro SFM with enough PEI such that the ratio of μg DNA:μg PEI is 1:3 (1000 μL total per 10 cm dish).
1. Gently add the diluted PEI to the diluted DNA. Add the diluted PEI dropwise while gently flicking the diluted DNA tube. Incubate the mixture 15-20 min at room temperature.
1. Carefully transfer the transfection mix to the Lenti-X 293T packaging cells. Add the transfection mix dropwise being careful not to dislodge the cells
1. Incubate the cells for 18 hours, or until the following morning.
  * Again at 5% CO2 and 37 ℃
1. The following morning, carefully aspirate the media. Replace the media with 15 mL of DMEM complete.
1. Incubate the cells again at 5% CO2 37 ℃
1. Virus can be harvested at 48, 72, and 96 hours post transfection in individual harvests or a combined harvest where all the individual harvests are pooled. If pooling harvests, transfer the harvested media to a polypropylene storage tube and store at 4 ℃ between harvest.
1. Centrifuge the viral supernatant at ~500 g for 5 minutes to pellet any packaging cells that were collected during harvesting.
  * Basically, the stuff left at the top is concentrated virus.
1. Filter supernatant through a 0.45 μm PES filter.
1. The viral supernatant can be stored at 4 ℃ for several hours but should be aliquotted and snap frozen in liquid nitrogen and stored at -80 ℃ as soon as possible to avoid loss of titer.
  * Freeze it fast so that the virus stays intact for long periods of time

## Pitfalls

### Bad media

Different kinds of cell media will affect the outcome of the experiment. Often, they can limit transfection effectiveness, thus reducing the total amount of virus obtained.

### pH out of tolerance

pH can cause all kinds or problems in biological systems. In this case, when creating the final PEI mixture, it is important to make sure that the pH stays at the right levels.

# Sources

* https://www.thermofisher.com/us/en/home/references/gibco-cell-culture-basics/transfection-basics/transfection-methods/transient-transfection.html
* https://blog.addgene.org/your-lentiviral-plasmid-faqs-answered
