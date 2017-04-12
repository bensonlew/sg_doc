distance_calc
==========================

模块Path
-----------

**tools.meta.beta_diversity.distance_calc**

功能描述
-----------------------------------

用于计算otu表中样本的距离矩阵

调用程序
-----------------------------------

qiime/beta_diversity.py: http://www.qiime.org/

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/qiime  # qiime软件安装路径`



主要命令及功能模块
-----------------------------------

```
beta_diversity.py -i otu_table -m binary_euclidean -o beta_div
```

参数设计
-----------------------------------

```
{"name": "method", "type": "string", "default": "bray_curtis"},
{"name": "otutable", "type": "infile","format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},
{"name": "level", "type": "string", "default": "otu"},
{"name": "dis_matrix", "type": "outfile","format": "meta.beta_diversity.distance_matrix"},
{"name": "newicktree", "type": "infile","format": "meta.beta_diversity.newick_tree"}
```

运行逻辑
-----------------------------------

提供一个otutable格式的文件，程序转换为biom格式的otu表，并指定距离计算方法（有默认距离算法），如果选用UniFrac算法时需要另外提供一个newicktree文件，计算得出'\t'符间隔的矩阵文本文件。

资源配置
-----------------------------------

```
self._cpu = 5
self._memory = '5G'
```

环境变量
-----------------------------------

```
self.set_environ(LD_LIBRARY_PATH=self.config.SOFTWARE_DIR + '/gcc/5.1.0/lib64')
```
