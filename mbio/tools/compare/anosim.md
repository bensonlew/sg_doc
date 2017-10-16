anosim
==========================

模块Path
-----------

**tools.meta.beta_diversity.anosim**

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
compare_categories.py --method anosim -m group -i matrix -o output -c grouplab -n 999

```

参数设计
-----------------------------------

```
            {"name": "dis_matrix", "type": "infile",
             "format": "meta.beta_diversity.distance_matrix"},
            {"name": "group", "type": "infile", "format": "meta.otu.group_table"},
            {"name": "grouplab", "type": "string", "default": ""},
            {"name": "permutations", "type": "int", "default": 999}
```

运行逻辑
-----------------------------------

计算anosim

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
       "id": "anosim",
       "type": "tool",
       "name": "meta.beta_diversity.anosim",
       "options": {
           ""dis_matrix"":"/mnt/ilustre/users/sanger-dev/workspace/20170928/Single_pca/BetaDiversity/DistanceCalc/output/binary_pearson_species.xls"
           "group_table":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/group"
           "grouplab":"T,Q"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_anosim/BetaDiversity/Anosim

测试结果
-----------------------------------