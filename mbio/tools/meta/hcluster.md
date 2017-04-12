hcluster
==========================

模块Path
-----------

**tools.meta.beta_diversity.hcluster**

功能描述
-----------------------------------

基于距离矩阵获得样本树文件newick tree。

调用程序
-----------------------------------

plot-hcluster_tree.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/`



主要命令及功能模块
-----------------------------------

```
plot-hcluster_tree.pl  -i distancefile -m [average/single/complete] -o outputdir
```

参数设计
-----------------------------------

```
{"name": "dis_matrix", "type": "infile","format": "meta.beta_diversity.distance_matrix"},
{"name": "newicktree", "type": "outfile","format": "meta.beta_diversity.newick_tree"},
{"name": "linkage", "type": "string", "default": "average"}
```

运行逻辑
-----------------------------------

调用脚本根据距离矩阵分析获得newicktree文件。

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '3G'
```