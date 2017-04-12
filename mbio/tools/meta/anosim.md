anosim
==========================

模块Path
-----------

**tools.meta.beta_diversity.anosim**

功能描述
-----------------------------------

进行AdonisAnosim分析

调用程序
-----------------------------------

qiime/compare_categories.py: http://www.qiime.org/

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/qiime  # qiime软件安装路径`



主要命令及功能模块
-----------------------------------

```
compare_categories.py [options] {--method METHOD -i/--input_dm INPUT_DM -m/--mapping_file MAPPING_FILE -c/--categories CATEGORIES -o/--output_dir OUTPUT_DIR} 
```

参数设计
-----------------------------------

```
{"name": "dis_matrix", "type": "infile","format": "meta.beta_diversity.distance_matrix"},
{"name": "group", "type": "infile", "format": "meta.otu.group_table"},
{"name": "grouplab", "type": "string", "default": ""},
{"name": "permutations", "type": "int", "default": 999}
```

运行逻辑
-----------------------------------

先通过距离算法和otutable获得距离矩阵，如果提供了距离矩阵，覆盖着两者，根据分组信息进行分析，输出到结果表。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```
