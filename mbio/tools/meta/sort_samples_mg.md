sort_samples_mg
==========================

模块Path
-----------

**tools.meta.otu.sort_samples_mg**

功能描述
-----------------------------------

传入一个group表，以及是否进行样本合并的参数生成一张OTU表并对并依照group表OTU表进行筛选合并,且提供归other和排序取丰度top的功能。

调用程序
-----------------------------------

import numpy as np


主要命令及功能模块
-----------------------------------

```

```

参数设计
-----------------------------------

```
    {"name": "in_otu_table", "type": "infile", "format": "meta.otu.otu_table"},  # 输入的OTU文件
    {"name": "group_table", "type": "infile", "format": "meta.otu.group_table"},  # 输入的group表
    {"name": "method", "type": "string", "default": ""},  # 样本的合并方式, ""为不进行合并
    {"name": "out_otu_table", "type": "outfile", "format": "meta.otu.otu_table"},  # 输出的结果OTU表
    {"name": "level_otu_table", "type": "outfile", "format": "meta.otu.otu_table"}  # 输出的结果OTU表(百分比）
    {"name": "others", "type": "float", "default": ""},  # 组成分析中用于将丰度小于0.01/其它的物种归为others
    {"name": "top", "type": "int", "default": ""} # 热图取top物种/功能
```

运行逻辑
-----------------------------------

根据传入的`group_table`对`in_otu_tabl`中的样本进行筛选，接着根据合并方式，对丰度表中的样本进行分组合并；
当"others"设置时，会计算other；
当"top""设置时，会取top物种/功能。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "10G"
```