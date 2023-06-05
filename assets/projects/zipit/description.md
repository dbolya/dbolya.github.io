![ZipIt! Concept Figure](https://github.com/gstoica27/ZipIt/raw/master/figures/concept.png)

Typical deep visual recognition models are capable of performing the one task they were trained on. In this paper, we tackle the extremely difficult problem of combining completely distinct models with different initializations, each solving a separate task, into one multi-task model without any additional training. Prior work in model merging permutes one model to the space of the other then adds them together. While this works for models trained on the same task, we find that this fails to account for the differences in models trained on disjoint tasks. Thus, we introduce "ZipIt!", a general method for merging two arbitrary models of the same architecture that incorporates two simple strategies. First, in order to account for features that aren't shared between models, we expand the model merging problem to additionally allow for merging features within each model by defining a general "zip" operation. Second, we add support for partially zipping the models up until a specified layer, naturally creating a multi-head model. We find that these two changes combined account for a staggering 20-60% improvement over prior work, making the merging of models trained on disjoint tasks feasible.

## Citation

If you use ZipIt! or this codebase in your work, please cite:
```
@article{stoica2023zipit,
  title={ZipIt! Merging Models from Different Tasks without Training},
  author={Stoica, George and Bolya, Daniel and Bjorner, Jakob and Hearn, Taylor and Hoffman, Judy},
  journal={arXiv},
  year={2023}
}
```
