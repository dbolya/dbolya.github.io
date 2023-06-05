![A diffusion block with ToMe applied and the resulting images at different merge ratios.](https://raw.githubusercontent.com/dbolya/tomesd/main/examples/assets/method.jpg)

Token Merging (**ToMe**) speeds up transformers by _merging redundant tokens_, which means the transformer has to do _less work_. We apply this to the underlying transformer blocks in Stable Diffusion in a clever way that minimizes quality loss while keeping most of the speed-up and memory benefits. ToMe for SD _doesn't_ require training and should work out of the box for any Stable Diffusion model.

**Note:** this is a lossy process, so the image _will_ change, ideally not by much. Here are results with [FID](https://github.com/mseitzer/pytorch-fid) scores vs. time and memory usage (lower is better) when using Stable Diffusion v1.5 to generate 512x512 images of ImageNet-1k classes on a 4090 GPU with 50 PLMS steps using fp16:

| Method                      | r% | FID ↓  | Time (s/im) ↓            | Memory (GB/im) ↓        |
|-----------------------------|----|:------|:--------------------------|:------------------------|
| Baseline _(Original Model)_ | 0  | 33.12 | 3.09                      | 3.41                    |
| w/ **ToMe for SD**        | 10 | 32.86 | 2.56 (**1.21x** _faster_) | 2.99 (**1.14x** _less_) |
|                             | 20 | 32.86 | 2.29 (**1.35x** _faster_) | 2.17 (**1.57x** _less_) |
|                             | 30 | 32.80 | 2.06 (**1.50x** _faster_) | 1.71 (**1.99x** _less_) |
|                             | 40 | 32.87 | 1.85 (**1.67x** _faster_) | 1.26 (**2.71x** _less_) |
|                             | 50 | 33.02 | 1.65 (**1.87x** _faster_) | 0.89 (**3.83x** _less_) |
|                             | 60 | 33.37 | 1.52 (**2.03x** _faster_) | 0.60 (**5.68x** _less_) |

Even with more than half of the tokens merged (60%!), ToMe for SD still produces images close to the originals, while being _**2x** faster_ and using _**~5.7x** less memory_. Moreover, ToMe is not another efficient reimplementation of transformer modules. Instead, it actually _reduces_ the total work necessary to generate an image, so it can function _in conjunction_ with efficient implementations.

## Citation

If you use ToMe for SD or this codebase in your work, please cite:
```
@article{bolya2023tomesd,
  title={Token Merging for Fast Stable Diffusion},
  author={Bolya, Daniel and Hoffman, Judy},
  journal={CVPR Workshops},
  year={2023}
}
