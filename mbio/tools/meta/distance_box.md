distance_box
==========================

模块Path
-----------

**tools.meta.beta_diversity.distance_box**

功能描述
-----------------------------------

进行绘制distanbox

调用程序
-----------------------------------

qiime/make_distance_boxplots.py: http://www.qiime.org/

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/qiime  # qiime软件安装路径`



主要命令及功能模块
-----------------------------------

```
make_distance_boxplots.py [options] {-m/--mapping_fp MAPPING_FP -o/--output_dir OUTPUT_DIR -d/--distance_matrix_fp DISTANCE_MATRIX_FP -f/--fields FIELDS --save_raw_data}
```

参数设计
-----------------------------------

```
{"name": "dis_matrix", "type": "infile","format": "meta.beta_diversity.distance_matrix"},
{"name": "group", "type": "infile", "format": "meta.otu.group_table"},
{"name": "grouplab", "type": "string", "default": ""},
{"name": "permutations", "type": "int", "default": 999},
```

运行逻辑
-----------------------------------

先通过距离算法和otutable获得距离矩阵，如果提供了距离矩阵，覆盖着两者，根据分组信息进行分析，输出得到原始的绘图数据文件boxplot。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```

环境变量
-----------------------------------

```
self.set_environ(LD_LIBRARY_PATH=self.config.SOFTWARE_DIR + '/gcc/5.1.0/lib64')
```
