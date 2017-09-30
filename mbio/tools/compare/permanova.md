permanova
==========================

模块Path
-----------

**tools.meta.beta_diversity.permanova**

功能描述
-----------------------------------

进行主成分分析

调用程序
-----------------------------------

compare_categories.py

安装路径
-----------------------------------


`/mnt/ilustre/users/sanger-dev/app/program/R-3.3.1/bin/R  # R安装路径`


主要命令及功能模块
-----------------------------------

```
permanova.pl -i otu_table -env env.txt -o output -pe 999

```

参数设计
-----------------------------------

```
            {"name": "otutable", "type": "infile",
             "format": "meta.otu.otu_table, meta.otu.tax_summary_dir, toolapps.table"},
            {"name": "level", "type": "string", "default": "otu"},
            {"name": "dis_matrix", "type": "infile",
             "format": "meta.beta_diversity.distance_matrix"},
            {"name": "env", "type": "infile", "format": "meta.otu.group_table"},
            {"name": "permutations", "type": "int", "default": 999}
            {"name":d_method","type":"string","default":"bray"}
            {"name":"binary","type":"string","default":"false"}
```

运行逻辑
-----------------------------------

计算permanova

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "permanova",
       "type": "tool",
       "name": "meta.beta_diversity.permanova",
       "options": {
           "otutable": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/tax.xls,
           "envtable":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/env.xls",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_permanova/BetaDiversity/permanova

测试结果
-----------------------------------