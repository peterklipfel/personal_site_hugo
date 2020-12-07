---
title: "Building proteins"
date: 2020-03-07T13:41:12-05:00
draft: false
tags: ["biology"]
description: "One of the foundations of biology is proteins. "
---

# Overview

I've been wondering about the differences between proteins and enzymes, and thought it would be good to start from first principles. In this post, I wanted to talk broadly about how proteins are made from DNA.

# Amino acids

DNA is made of strings like GCCCGTAATAGTACATTACGA; This is translated in triplets into amino acids, and groups of amino acids produce proteins. So, if we grouped this into triplets, it would look like: (GCC)(CGT)(AAT)(AGT)(ACA)(TTA)(CGA). There are 22 known amino acids. Conveniently, this is less than the number of letters in the alphabet, so we assign each amino acid a letter of the alphabet. Unfortunately, this was not a well planned system, so the names of the amino acids do not follow all the letters of the alphabet. The missing letters are B, J, X, Z. These letters have been repurposed to communicate ambiguity.

I don't think it's paricularly important to know these, but because there are only 4 of them, here is what they mean.

* X means "this could be any amino acid"
* B means that it's either D or N
* J means that it's either I or L
* Z means that it's either E or Q

If we return now to the original DNA sequence that I ~~mentioned~~ made up, we can use the new letters to shorten the sequence into the amino acid representation of it after it has been transcribed. That sequence would be translated into ARNSTLR. Note that CGA and CGT both code for R - some amino acids have multiple representations. Sometimes, nucleotide sequences will be accompanied by their amino acid translations. They will often look like:

```bash
gcccgtaatagtacattacga
 A  R  N  S  T  L  R 
```

This can be useful for seeing the structure of proteins at a glance if you're looking at a sequence in a genome browser. For example, some amino acid sequences are recognition sites for other proteins.

A subtle, but important point: DNA is _not_ a protein. The groupings of nucleotides (A, C, G, T) are useful for understanding what the DNA codes for; but the groupings of nucleotides are not themselves amino acids. They need to be transcribed in order to become amino acids.

# Proteins

Now that we have an understanding of amino acids, it makes more sense to say that a protein is a grouping of amino acids. A protein may require thousands of amino acids to be created.

Unfortunately, it's not quite this simple. proteins aren't quite as simple as mooshing a bunch of amino acids together. Proteins are actually chains of amino acid residues, not amino acids.

## Amino acid residues

The difference between amino acids and their residues is that the residues don't actually have the amino acid part in them. In the figure below, the amino acid part is the top part shared by all the structures. It ends at the NH2. The remainder, where the differences are is the residue. Combinbing these creates proteins.

{{< figure src="/amino_acids.svg" alt="amino acids" title="amino acids" width="100%">}}

# Enzymes

When a protein acts as a catalyzing agent in a biological process, it is referred to as an enzyme. To be clear, an enzyme is a special type of protein.  This can lead to some confusion sometimes because a protein may act as a catalyzing agent in one circumstance, but not in another. 

I was initially confused by the difference between proteins and enzymes. Some places seemed to use them interchangeably, and others spoke of them as if there was a distinction.  Enzymes are a class of proteins. They are generally used as part of metabolism in sales.

I wills save the details of various kinds of enzymes for a follow-on post.

