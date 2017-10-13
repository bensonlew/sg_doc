regression_cal
==========================

模块Path
-----------

**tools.meta.association_model.regression**

调用脚本
-----------------------------------

regression_calculation.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/meta/scripts/`

主要命令及功能模块
-----------------------------------

```

 tools.meta.beta_diversity.environmental_regression.py

```

参数设计
-----------------------------------

```
       {"name": "group_table", "type": "infile", "format": "toolapps.group_table"},
       {"name": "dis_matrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
       {"name": "estimators", "type": "infile", "format": "meta.alpha_diversity.estimators"}
```

运行逻辑
-----------------------------------

基于modules.meta.alpha_diversity.py得到的α多样性指数或modules.meta.beta_diversity.py得到的β多样性指数，进行回归分析。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"

```

可能存在问题
-----------------------------------
```
对样本个数及注释到的功能个数有要求
```

测试命令
-----------------------------------
```
测试结果路径：
```


测试结果
-----------------------------------