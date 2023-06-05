**Hiera** is a _hierarchical_ vision transformer that is fast, powerful, and, above all, _simple_. It outperforms the state-of-the-art across a wide array of image and video tasks _while being much faster_. 

<p align="center">
  <img src="https://github.com/facebookresearch/hiera/raw/main/examples/img/inference_speed.png" width="75%">
</p>

## How does it work?
![A diagram of Hiera's architecture.](https://github.com/facebookresearch/hiera/raw/main/examples/img/hiera_arch.png)

Vision transformers like [ViT](https://arxiv.org/abs/2010.11929) use the same spatial resolution and number of features throughout the whole network. But this is inefficient: the early layers don't need that many features, and the later layers don't need that much spatial resolution. Prior hierarchical models like [ResNet](https://arxiv.org/abs/1512.03385) accounted for this by using fewer features at the start and less spatial resolution at the end.

Several domain specific vision transformers have been introduced that employ this hierarchical design, such as [Swin](https://arxiv.org/abs/2103.14030) or [MViT](https://arxiv.org/abs/2104.11227). But in the pursuit of state-of-the-art results using fully supervised training on ImageNet-1K, these models have become more and more complicated as they add specialized modules to make up for spatial biases that ViTs lack. While these changes produce effective models with attractive FLOP counts, under the hood the added complexity makes these models _slower_ overall.

We show that a lot of this bulk is actually _unnecessary_. Instead of manually adding spatial bases through architectural changes, we opt to _teach_ the model these biases instead. By training with [MAE](https://arxiv.org/abs/2111.06377), we can simplify or remove _all_ of these bulky modules in existing transformers and _increase accuracy_ in the process. The result is Hiera, an extremely efficient and simple architecture that outperforms the state-of-the-art in several image and video recognition tasks.

## Citation
If you use Hiera or its code in your work, please cite:
```
@article{ryali2023hiera,
  title={Hiera: A Hierarchical Vision Transformer without the Bells-and-Whistles},
  author={Ryali, Chaitanya and Hu, Yuan-Ting and Bolya, Daniel and Wei, Chen and Fan, Haoqi and Huang, Po-Yao and Aggarwal, Vaibhav and Chowdhury, Arkabandhu and Poursaeed, Omid and Hoffman, Judy and Malik, Jitendra and Li, Yanghao and Feichtenhofer, Christoph},
  journal={ICML},
  year={2023}
}
```
