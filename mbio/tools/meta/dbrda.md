dbrda
==========================

模块Path
-----------

**tools.meta.beta_diversity.dbrda**

功能描述
-----------------------------------

进行db-RDA分析

调用程序
-----------------------------------

qiime/compare_categories.py: http://www.qiime.org/

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/qiime  # qiime软件安装路径`



主要命令及功能模块
-----------------------------------

```
compare_categories.py [options] {--method METHOD -i/--input_dm INPUT_DM -m/--mapping_file MAPPING_FILE -c/--categories CATEGORIES -o/--output_dir OUTPUT_DIR}  # 此处没有环境因子的导入，输出文件也没有表格
```

参数设计
-----------------------------------

```
{"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},
{"name": "method", "type": "string", "default": "bray_curtis"},
{"name": "level", "type": "string", "default": "otu"},
{"name": "dis_matrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}  # 用逗号分隔的环境因子名称
```

运行逻辑
-----------------------------------

先通过距离算法和otutable获得距离矩阵，如果提供了距离矩阵，覆盖着两者，根据距离矩阵和环境因子表进行计算db-RDA

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```