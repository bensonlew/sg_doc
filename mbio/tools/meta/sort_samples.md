sort_samples
==========================

模块Path
-----------

**tools.meta.otu.sort_samples**

功能描述
-----------------------------------

传入一个group表，以及是否进行样本合并的参数生成一张OTU表并对并依照group表OTU表进行筛选合并。

调用程序
-----------------------------------

import numpy as np

from collections import defaultdict

主要命令及功能模块
-----------------------------------

```
self.option("in_otu_table").sub_otu_sample(self.samples, no_zero_otu)
self.cat_samples(final_otu, self.option("method"))
```

参数设计
-----------------------------------

```
    {"name": "in_otu_table", "type": "infile", "format": "meta.otu.otu_table"},  # 输入的OTU文件
    {"name": "group_table", "type": "infile", "format": "meta.otu.group_table"},  # 输入的group表
    {"name": "method", "type": "string", "default": ""},  # 样本的合并方式, ""为不进行合并
    {"name": "out_otu_table", "type": "outfile", "format": "meta.otu.otu_table"},  # 输出的结果OTU表
    {"name": "level_otu_table", "type": "outfile", "format": "meta.otu.otu_table"}  # 输出的结果OTU表(百分比）
```

运行逻辑
-----------------------------------

根据传入的`group_table`对`otu_table`中的样本进行筛选，接着根据合并方式，对otu表中的样本进行分组合并

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "3G"
```