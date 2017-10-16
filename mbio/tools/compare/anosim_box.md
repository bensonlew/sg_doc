anosim_box
==========================

模块Path
-----------

**tools.meta.beta_diversity.anosim_box**

功能描述
-----------------------------------

进行主成分分析

调用程序
-----------------------------------

anosim_box.r

安装路径
-----------------------------------


`/mnt/ilustre/users/sanger-dev/app/program/R-3.3.1/bin/R  # R安装路径`


主要命令及功能模块
-----------------------------------

```
Rscript anosim_box.r matrix group 999 output 
```

参数设计
-----------------------------------

```
            {"name": "dis_matrix", "type": "infile",
                "format": "meta.beta_diversity.distance_matrix"},
            {"name": "group", "type": "infile", "format": "meta.otu.group_table"},
            {"name": "grouplab", "type": "string", "default": ""},
            {"name": "permutations", "type": "int", "default": 999},
```

运行逻辑
-----------------------------------

anosim结果画箱式图

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
       "id": "anosim_box",
       "type": "tool",
       "name": "meta.beta_diversity.anosim_box",
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
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_anosim_box/BetaDiversity/AnosimBox

测试结果
-----------------------------------