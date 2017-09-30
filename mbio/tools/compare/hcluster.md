hcluster
==========================

模块Path
-----------

**tools.meta.beta_diversity.hcluster**

功能描述
-----------------------------------

进行主成分分析

调用程序
-----------------------------------

plot-hcluster_tree.pl

安装路径
-----------------------------------


`/mnt/ilustre/users/sanger-dev/app/program/R-3.3.1/bin/R  # R安装路径`


主要命令及功能模块
-----------------------------------

```
perl plot-hcluster_tree.pl -i matrix -o output -m average

```

参数设计
-----------------------------------

```
            {"name": "dis_matrix", "type": "infile",
                "format": "meta.beta_diversity.distance_matrix"},
            {"name": "newicktree", "type": "outfile",
                "format": "meta.beta_diversity.newick_tree"},
            {"name": "linkage", "type": "string", "default": "average"}
```

运行逻辑
-----------------------------------

根据距离文件计算样品的聚类树

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '3G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "hcluster",
       "type": "tool",
       "name": "meta.beta_diversity.hcluster",
       "options": {
           ""dis_matrix"":"/mnt/ilustre/users/sanger-dev/workspace/20170928/Single_pca/BetaDiversity/DistanceCalc/output/binary_pearson_species.xls"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_hcluster/BetaDiversity/Hcluster

测试结果
-----------------------------------