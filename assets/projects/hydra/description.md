Vision transformers are powerful, but require an expensive self-attention operation to compute. This can limit its usefulness on situations with a large number of input tokens. In this paper, we introduce a much more efficient attention mechanism by exploiting a neat trick: by using as many attention heads as there are features, our Hydra Attention is computationally linear in both tokens and features with no hidden constants. This makes it significantly faster than standard self-attention in an off-the-shelf ViT-B/16 by a factor of the token count. Moreover, Hydra Attention retains high accuracy on ImageNet and, in some cases, actually improves it.

If you use Hydra Attention your project, please cite

```
@inproceedings{bolya2022hydraattn,
  author    = {Bolya, Daniel and Fu, Cheng-Yang and Dai, Xiaoliang and Zhang, Peizhao and Hoffman, Judy},
  title     = {Hydra attention: Efficient attention with many heads},
  booktitle = {ECCV Workshops},
  year      = {2022},
}
```
