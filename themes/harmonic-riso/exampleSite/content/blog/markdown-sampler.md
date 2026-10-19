---
title: "Markdown sampler"
date: 2026-09-03T18:22:00-06:00
description: "Every kind of element a post might use, to check the typography."
tags: ["meta"]
---

A paragraph with **bold**, *italic*, `inline code` and [a link](https://gohugo.io/). Long-form text is set at a comfortable measure so lines stay readable.

## A second-level heading

> A blockquote, for when someone else said it better.

- An unordered list
- With a few items
  - And a nested one

1. An ordered list
2. Also works

### Code

```python
def harmonics(points, k):
    """Keep the k lowest-frequency terms of a closed curve."""
    coeffs = np.fft.fft(points) / len(points)
    keep = np.zeros_like(coeffs)
    keep[:k + 1] = coeffs[:k + 1]
    keep[-k:] = coeffs[-k:]
    return np.fft.ifft(keep) * len(points)
```

### Table

| Ink         | Plate  | Harmonics |
|-------------|--------|-----------|
| Aqua        | bottom | 59        |
| Bright red  | middle | 30        |
| Teal        | top    | 13        |

---

A footnote reference.[^1]

[^1]: And the footnote itself.
