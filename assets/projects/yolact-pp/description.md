<figure class="image"><img src="assets/projects/yolact-pp/img.png" alt="YOLACT++ Example Image" /></figure>

An improved version of YOLACT that's nearly just as fast, while being significantly better.
YOLACT++ uses deformable convolutions, mask rescoring, and more anchors, and achieves a sizable 5 mAP boost.
The original YOLACT did quite poorly when two objects were right next to each other, like in this zebra example.
YOLACT++, on the other hand, fares quite well here.

Here are our YOLACT++ models (released on December 16th, 2019):

| Image Size |   Backbone    | FPS  | mAP  | Weights                                                                                                                  |                                                                                                                                     |
| :--------: | :-----------: | :--: | :--: | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
|    550     | Resnet50-FPN  | 33.5 | 34.1 | [yolact_plus_resnet50_54_800000.pth](https://drive.google.com/file/d/1ZPu1YR2UzGHQD0o1rEqy-j5bmEm3lbyP/view?usp=sharing) | [Mirror](https://ucdavis365-my.sharepoint.com/:u:/g/personal/yongjaelee_ucdavis_edu/EcJAtMiEFlhAnVsDf00yWRIBUC4m8iE9NEEiV05XwtEoGw) |
|    550     | Resnet101-FPN | 27.3 | 34.6 | [yolact_plus_base_54_800000.pth](https://drive.google.com/file/d/15id0Qq5eqRbkD-N3ZjDZXdCvRyIaHpFB/view?usp=sharing)     | [Mirror](https://ucdavis365-my.sharepoint.com/:u:/g/personal/yongjaelee_ucdavis_edu/EVQ62sF0SrJPrl_68onyHF8BpG7c05A8PavV4a849sZgEA) |

If you use or refer to YOLACT++ in your work, please cite

```
@article{yolact-plus-tpami2020,
  author  = {Daniel Bolya and Chong Zhou and Fanyi Xiao and Yong Jae Lee},
  journal = {IEEE Transactions on Pattern Analysis and Machine Intelligence},
  title   = {YOLACT++: Better Real-time Instance Segmentation},
  year    = {2020},
}
```
