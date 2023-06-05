![ToMe Concept Figure](https://github.com/facebookresearch/ToMe/raw/main/examples/images/concept_figure.png)

Token Merging (ToMe) allows you to take an existing Vision Transformer architecture and efficiently merge tokens inside of the network for **2-3x** faster evaluation. ToMe is tuned to seamlessly fit inside existing vision transformers, so you can use it without having to do additional training. And if you *do* use ToMe during training, you can reduce the accuracy drop even further while also speeding up training considerably.

## What ToMe does

![ToMe Visualization](https://github.com/facebookresearch/ToMe/raw/main/examples/images/image_vis.png)

ToMe merges tokens based on their similarity, implicitly grouping parts of objects together. This is in contrast to token pruning, which only removes background tokens. ToMe can get away with reducing more tokens because we can merge redundant foreground tokens in addition to background ones. Visualization of merged tokens on ImageNet-1k val using a trained ViT-H/14 MAE model with ToMe. For more, see the paper appendix.



Here are some expected results when using the timm implementation *off-the-shelf* on ImageNet-1k val using a V100:

| Model          | original acc | original im/s |  r | ToMe acc | ToMe im/s |
|----------------|-------------:|--------------:|:--:|---------:|----------:|
| ViT-S/16       |        81.41 |           953 | 13 |    79.30 |      1564 |
| ViT-B/16       |        84.57 |           309 | 13 |    82.60 |       511 |
| ViT-L/16       |        85.82 |            95 |  7 |    84.26 |       167 |
| ViT-L/16 @ 384 |        86.92 |            28 | 23 |    86.14 |        56 |

Here are some results using these SWAG models *off-the-shelf* on ImageNet-1k val using a V100:

| Model          | original acc | original im/s |  r | ToMe acc | ToMe im/s |
|----------------|-------------:|--------------:|:--:|---------:|----------:|
| ViT-B/16 @ 384 |        85.30 |          85.7 | 45 |    84.59 |     167.7 |
| ViT-L/16 @ 512 |        88.06 |          12.8 | 40 |    87.80 |      26.3 |
| ViT-H/14 @ 518 |        88.55 |           4.7 | 40 |    88.25 |       9.8 |

Here are some results *after training* on ImageNet-1k val using a V100 for evaluation:

| Model    | original acc | original im/s | r  | ToMe acc | ToMe im/s | Checkpoint                                                                      |
|----------|--------------|---------------|----|----------|-----------|---------------------------------------------------------------------------------|
| ViT-B/16 | 83.62        | 309           | 16 | 81.91    | 603       | [vit_B_16_r16](https://dl.fbaipublicfiles.com/tome/f367082919_vit_B_16_r16.pth) |
| ViT-L/16 | 85.66        | 93            | 8  | 85.09    | 183       | [vit_L_16_r8](https://dl.fbaipublicfiles.com/tome/f366894475_vit_L_16_r8.pth)   |
| ViT-H/14 | 86.88        | 35            | 7  | 86.46    | 63        | [vit_H_14_r7](https://dl.fbaipublicfiles.com/tome/f366895717_vit_H_14_r7.pth)   |


## Citation
If you use ToMe or its repository in your work, please cite:
```
@inproceedings{bolya2022tome,
  title={Token Merging: Your {ViT} but Faster},
  author={Bolya, Daniel and Fu, Cheng-Yang and Dai, Xiaoliang and Zhang, Peizhao and Feichtenhofer, Christoph and Hoffman, Judy},
  booktitle={ICML},
  year={2023}
}
```
