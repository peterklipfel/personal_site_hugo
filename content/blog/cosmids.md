---
title: "Cosmids"
date: 2022-03-19T08:00:31-07:00
draft: false
tags: ["biology"]
description: "Cosmids are a special kind of plasmid that we can use as a vector for bioengineering. "
---

# What are cosmids?
## Special plasmids
Cosmids are just a specific kind of [plasmid]({{< ref "/blog/plasmids.md" >}}), which are indpendent units of DNA that can move between bacteria. That is, they are similar to viruses in that they're in the gray area of what we might consider "life", but they are different from viruses in that they do not code for their own protective membrane like a virus or a cell would.

One misconception that I had during my learning about cosmids was how they can have longer sequences than regular plasmids. I had believed that there was some physical limitation in the length of a plasmid, and was confused how a cosmid could support larger DNA fragments if they were also plasmids. The problem with longer plasmids isn't necessarily that there is a physical limitation but that longer DNA fragments have higher liklihoods of being transcribed incorrectly (because cells are probabilistic chemical soups), so as you make the fragments longer, you get lower yield of your desired DNA.

Cosmids help with the problem of plasmid length because they encase the desired DNA in a phage, which does a better job of ensuring the desired DNA ends up in cells.

## The "Cos" part
Cosmids are named for the "cos" binding site which stands for "cohesive end site". Their job is to recircularize the DNA once it's in the phage. So, in a sense, it's the part of the plasmid that encodes the ends for the resultant plasmid that you're trying to put into your phage vector.

# How do I use it?

First off, cosmids add quite a bit of complexity to your work, so it might be worth considering alternatives.

Here, I'm adding a cool protocol that I found from iGEM for [building a library using cosmids](http://cshprotocols.cshlp.org/content/2006/1/pdb.prot4002). It took some digging to find it, so hopefully linking it here is useful to you.

This is a more involved protocol. Prepare yourself.


## Ingredients
- Stbl 3 competent E. coli  
- Cosmid Vector pJC8
- E. coli HB101 strain  
- Plasmid Mini-Prep Kit  
- Gel Extraction Kit  
- Agarose  
- PFGE certified agarose  
- PmII  
- NEB CutSmart Buffer  
- CIP or SAP  
- TAE  
- NEB T4 Ligase and Ligase Buffer  
- NEB T4 polynucleotide kinase  
- Tetracycline  
- Streptomycin  
- Proteinase K  
- 5M NaCl  
- 20% SDS  
- Chloroform  
- Isoamyl alcohol  
- Isopropanol Alcohol  
- Ethanol  
- 3M Sodium Acetate pH 5.3  
- NEB Quick Blunting Kit  
- Phenol: chloroform: isoamyl alcohol (25:24:1)  
- LB with 10mM MgSO4, 0.2% Maltose  

### Solutions  
#### Extraction Buffer  
- 100mM Tris-HCl pH 8.0  
- 100mM Sodium EDTA pH 8.0  
- 100mM Sodium Phosphate pH 8.0  
- 1.5M NaCl  
- 1% CTAB  
- 100uL proteinase K (10mg/ml)  
#### Phage Dilution Solution (1L)  
- 5.8g NaCl  
- 2.0g MgSO4·7H2O  
- 50 mL 1M Tris-HCl pH 7.5  
- 5.0 mL 2% (w/v) gelatin  
- Up to 1L H2O  

## Equipment
- Autoclave
- Bio-Rad CHEF Ladder (8-48kb)  
- PFGE Gel rig  
- 12 000 MWCO Dialysis Tubing  
- Dialysis clamps (no metal!)  
- 30 000 MWCO Amicob Ultra-Centrifugal Concentration Filter  
- Electrophoresis Chamber  

## Procedure

- E. coli STBL3 carrying pJC8 was streaked on LB-Tc plate and incubated overnight at   37° C.  
- Three colonies were inoculated in 50 ml of Terrific broth (TB) medium with tetracycline (15 μg/ml), and grown overnight at 37° C with shaking.  
- Cosmid was isolated using Plasmid Miniprep kit
- DNA was quantified using NanoDrop spectrophotometer and run 50 ng DNA on 0.8% agarose gel to check the presence of RNA, as RNA will reduce the dephosphorylation   efficiency of linearized pJC8 later.  
- In order to digest and dephosphorylate vector simultaneously, 10 μg of pJC8 was incubated at 37° C for 1 hr with 10 units Eco72I ( PmII), 10 units of CIP and 1 x CutSmart buffer in a final volume of 50 μl. Five microliters of reaction solution was loaded on 0.8% TAE agarose gel to ensure the complete restriction of pJC8. If the digestion is incomplete, add 2 μl Eco72I to the sample and incubate for 30 min.  
- Eco72I- and CIP-treated pJC8 DNA was Loaded onto 0.8% TAE agarose gel and run at 5 V/cm for 1 h. Out sides of the gel containing DNA marker and small portion of pJC8 was cut off, and stained with gel red at room temperature for 1 hr. DNA was visualized under UV light and the position of pJC8 backbone (11 kb) was marked. The gel was reassembled and the region of gel containing 11 kb pJC8 was excised. DNA was isolated using Gel Extraction kit and quantified using NanoDrop spectrophotometer.  
- DNA (30 ng) was run on 0.8% gel to confirm the amount and size of isolated DNA compared with 1 kb DNA ladder.  
- To test the efficiency of dephosphorylation and ligation of the prepared pJC8, three reactions were carried out.  
- Reaction 1 contained 50 ng DNA in 1  ligation buffer (20 μl).  
- Reaction 2 consisted of 50 ng DNA and 5 Weiss units of T4 DNA ligase in 1  ligation buffer (20 μl).  
- Reaction 3 was composed of 50 ng DNA , 5 Weiss units of T4 DNA ligase and 10 unit of T4 polynucleotide kinase in 20 μl of 1  ligation buffer.  
- The reactions were incubated at room temperature for 2 hr or ovenight ar 16° C. Five mircorliters of ligation reaction was transformed into 100 μl of DH5α competent cells by heat-shock. Following adding 1m l of LB and incubating at 37° C for 1 hr, transformants were selected on LB-Tc plate overnight at 37° C. The number of colonies on the plates were counted and the efficiency of Eco72I restriction and SAP dephosphorylation was calculated.

### Insert preparation
- Weigh 5 g soil sample  
- Mix with 13.5 ml of extraction buffer in 50 ml a Falcon tube by shaking at 37° C and at 225 rpm for 30 min  
- Add 1.5 ml of 20% SDS, and incubate in a 65° C water bath for 2 h with gentle end-over-end inversions every 15 min  
• Collect supernatants after centrifugation at 6,000 × g for 10 min at room temperature and transfer to 50 ml centrifuge tubes  
• Extract the soil pellets two more times by adding 4.5 ml of the extraction buffer and 0.5 ml of 20% SDS, vortexing for 10 s, incubating at 65° C for 10 min, and centrifuging as before  
• Combine supernatants and extract DNA with chloroform isoamyl alcohol (24:1)  
	• Precipitate DNA with 0.6 volume of isopropanol at room temperature for 1 h; **or**
	• Obtain crude nucleic acids by centrifugation at 16,000 × g for 20 min at room temperature, washed with cold 70% ethanol. Resuspend DNA in water to give a final volume of 500 μ

### DNA quality control
It is essential that the majority of random DNA fragments are >30 kb in size for  
successful construction of a cosmid library.

#### Size fractionation
- Pour 100 ml of 1% pulse field certified agarose (BIO-RAD, cat#162-0137) gel in 1 × TAE buffer  
- Load Bio-Rad CHEF PFGE Ladder as recommended by company  
- Load ~500 ng of metagenomic/genomic DNA  
- Run the gel with parameters dictated by the PFGE rig utilized

#### Visualize DNA
• Stain in ethidium bromide
• Place the gel on the top of UV transilluminator
• Take a photo of gel
• A high-quality cosmid library will be generated if the majority of DNA migrates in the >25 kb range

#### Size Fractionation
- Turn on pulse field gel apparatus and add 1 × TAE Buffer (~2.6 L)  
- Pour 150 ml of 1% agarose in 1 × TAE to the top of the gel casting tray, and choose a comb giving you sufficient volume to load your DNA  
- When the TAE buffer reaches 14° C, place the gel in the electrophoresis chamber (wipe off any gel pieces around and underneath the black plate)
- Add loading dye solution to the DNA  
- Mix and spin down the sample briefly  
- Using a wide mouth pipette tip load the entire sample(s) onto a large well (the different DNA samples must be run at least one lane away from each other to prevent cross-contamination)  
- Load Bio-Rad CHEF PFGE ladder (leave a small well between each sample and markers).
- Run the gel with the parameters dictated by the PFGE apparatus manual  
- Pause gel running after 1.5 h, cut off the lower portion of gel containing humic acids (below the blue dye); put the upper portion back to gel cassette, fill with 1% TAE agarose, and then resume running the gel.

#### Visualize gel and cut out DNA
- Cut off the outer sides of gel containing marker and a small portion of DNA sample  
- Stain the gel stripe with ethidium bromide, visualize DNA using blue light transilluminator and mark the position of 25-75 kb DNA  
- Reassemble the gel and excise the gel slice positioned at 25-75 kb with a clean blade and place in a clean petri dish  
- Take a photo of the remaining gel after excision of gel slice and save photo

#### Electroelution

- Prepare dialysis tubing for sensitive application based on the distributors manual

- Rinse the prepared dialysis tubing three times with 1 × TAE  
- Clamp one end of tubing  
- Fill the tube with 1 × TAE, place one gel slice in the tubing, and add more 1 × TAE until the gel slice is completely submerged  
- Remove all air bubbles, clamp the open end, and cut off excess tubing on ends  
- Fill electrophoresis chamber with fresh 1 × TAE  
- Place the tubing in electrophoresis chamber perpendicular to current. Make sure it submerged and completely covered with buffer  
- Electrophorese for 2 hours at 120 volts  
- Reverse polarity of field and electrophorese for 1 minute at 120 volts

- Wipe off ends of tubing to remove any access buffer
- Carefully remove a clamp from one of the ends
- Transfer the TAE containing DNA in the tubing with a wide mouth P1000 pipet tip and add to a 50 ml Falcon tube; rinse the tubing twice with 0.5 ml 1 × TAE

#### DNA Concentration

- Add 15 ml DNA sample to an Amicon ultra centrifugal filter  
- Spin at 4050 × g for 20 min at 20° C  
- Repeat the centrifugation when needed to concentrate the sample to ~0.2 ml  
- Transfer the concentrated DNA to a microtube
- Rinse the membrane twice with 0.2 ml TE

#### DNA precipitation

- Measure the sample volume  
- Add 1/10 volume of 3 M sodium acetate (pH 5.3), and 1 volume of isopropanol  
- Mix gently by inverting tube several times  
- Place at –75º C for >30 min  
- Pre-chill microcentrifuge to 4º C (this takes at least 15 min)  
- Spin tubes at 4º C for 30 minutes at 13,500 rpm  
- Withdraw the supernatant with a 1 ml pipet tip and discard (do not disrupt/losen any pellet)  
- Add 800 μl cold 80% ethanol (-20º C) to the tube, and invert gently three times  
- Spin tube at 4º C for 10 minutes at 13,500 rpm  
- Withdraw all ethanol with a piper tip (do not disrupt/lose any pellet)  
- Dry the pellet at room temperature until no liquid is visible (do not heat)  
- Resuspend the pellet in ~20 μl of water  
- Place at 50º C for 5 minutes and then 4º C overnight, to fully resuspend the DNA

#### Blunt end repair
- The sheared DNA inserts is end-repaired following the protocol of NEB Quick Blunting Kit  
- Heat-inactivate the quick blunting enzyme mixture on a 70º C heat block for 10 minutes (residual activity of T4 polynucleotide kinase may remains, leading to phosphorylation and self ligation of the cloning ready pJC8 in ligation reaction
- Cool down slowly to room temperature and place the sample on ice

#### DNA clean-up
Please note: extraction should be carried out in a fume hood. Waste should be disposed in a designated container.  

- Add 400 μl TE and 500 μl phenol:chloroform:isoamyl alcohol (25:24:1) to the tube
- Invert the sample gently, and spin the tube for 5 min at 13,400 rpm  
- Transfer the upper phase into a new tube  
- Add 500 μl chloroform:isoamyl alcohol (24:1), mix the sample gently and then spin for 3 min at 13,400 rpm  
- Repeat steps c-d once  
- Add 0.1 vol of 3 M Na-acetate (pH 5.3), and 1 vol of isopropanol  
- Place at -80º C for 25 min, spin the mixture at 4º C at 13,400 rpm for 30 min  
- Remove supernatant using a 1 ml pipet tip and discard  
- Add 1 ml cold (-20º C) 80% ethanol, and revert the tube 4 times
- Spin the tubes at 4º C and 13,500 rpm for 10 minutes  
- Remove all liquid carefully (avoid touching any precipitate)  
- Air-dry the pellet (do not heat or SpeedVac)  
- Dissolve the DNA in 20 μl water, and combine resuspensions if necessary  
- Estimate DNA concentration using λ DNA as a standard on 0.8% agarose gel  
- Store at -20º C until needed

### Ligation reaction

The pJC8 and inserts are mixed in a molar ratio of 10:1 to minimize the formation of chimeric clones. The reaction was performed following the protocol for the NEB Ligation Kit

- Set up a 20 ul reaction according to kit instructions, mix and spin down the mixture briefly  
- Incubate the tube at room temperature for 4 hours, or overnight at 16 oC  
- Heat-inactivate the sample on the 70 oC heat block for 10 minutes  
- Cool down the tube slowly to room temperature
- Store the ligation mixture at -20 0C until needed

### Packaging ligation reaction

#### E. coli host preparation  
- Streak E. coli HB101 from stock at -75 C on LB-Sm100 agar plate  
- Incubate overnight at 37 C  
- Inoculate one colony of E. coli HB101 in 3 ml of LB (No Sm!)  
- Place the culture on shaker at 37 C overnight at 220 rpm  
- If needed, store the culture at 4 C for up to 5 days  
- Add 50 μl of the overnight culture to 10 ml of LB containing 10 mM MgSO4 and 0.2% maltose (No Sm)  
- Incubate the culture at 37 C, 220 rpm until an OD600 of 0.6-1.0 is reached  
- Use or store at 4 C for up to 72 hr  

#### Packaging  
- Take 1 tube of Stratagene packaging extract (Gigapack III XL) from -80 C freezer  
- Add 1-4 μl of ligation mixture to the tube when the packaging extract begins to thaw  
- Mix the sample gently with a pipet tip and spin down briefly (no bubbles)  
- Incubate at room temperature for 2 hr  
- Add 500 μl of phage dilution solution (see recipe) to the tube
- Add 25 μl of chloroform to the tube  
- Invert to mix, spin at 1000 rmp for 2min and infect HB101 (or store at 4C until ready to plate.  

#### Titering packaging reaction  
- Mix 10 μl of packaged DNA with 100 μl of E. coli HB101 (section 4.1)  
- Incubate the mixture at room temperature for 30 min  
- Add 400 μl of LB, and incubate at 37 C for 60 min (invert tubes every 15 min)  
- Pellet cells for 3 min at 13,400 rpm  
- Resuspend and spread cells on a 150 mm × 15 mm LB-Tc20 plate  
- Incubate overnight at 37 C  
- Count the number of clones on the selection plate  

#### Large-scale packaging and plating  
Based on the number of colonies obtained in the small-scale titering test, scale up ligation and packaging reactions.  

- Titer the pooled packaging reactions in the same manner as the small test reaction  
- Mix the packaging reaction with freshly cultured E. coli HB101 in a 1:10 ratio (v/v)  
- Incubate at room temperature for 30 minutes
- Add appropriate volume of LB and incubate at 37 C for 60 min (shake tubes every 15 min)  
- Concentrate and plate approximate vol of infected cells on 150 mm x 15 mm LB-Tc20 agar plate, to obtain ~2000 clones per plate  
- Collect all clones in LB-Tc15, and concentrate to a small vol (e.g. 80,000 clones in 50 ml)  
- Add DMSO to a final concentration of 7%, aliquot 1 ml in labeled vials, and then save at - 75 oC  
• Congratulate yourself for successfully constructing a fantastic cosmid library


# Sources

https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/cosmid
https://static.igem.org/mediawiki/2017/a/af/Dalcosmid.pdf
https://biology.stackexchange.com/questions/34535/where-does-the-term-cos-site-come-from
