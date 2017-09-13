cdhit_para
==========================

模块Path
-----------

**modules.cluster.cdhit_para**

功能描述
-----------------------------------

序列进行相互比较去冗余及内部去冗余

主要命令及功能模块
-----------------------------------

```
self.add_tool('cluster.cdhit_between_single.py")
self.add_tool('cluster.cdhit_compare_single.py")


```

参数设计
-----------------------------------

```
            {"name": "first", "type": "int"},  # 第一个文件编号
            {"name": "last", "type": "int"},  # 最后一个文件编号
            {"name": "in_dir", "type": "infile", "format": "sequence.cdhit_cluster_dir"},  # 输入文件夹
            {"name": "identity", "type": "float", "default": 0.95},  # 给出cdhit的参数identity
            {"name": "coverage", "type": "float", "default": 0.9},  # 给出cdhit的参数coverage
            
```

运行逻辑
-----------------------------------

1、多个文件与第一个文件进行自比
2、第二个文件自比后进行互比



测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "compare_para",
       "type": "module",
       "name": "cluster.cdhit_para",
       "options": {
           "first": 1,
           "last": 8,
           "in_dir": "/mnt/ilustre/users/sanger-dev/workspace/20170908/Single_unigene1/UniGene/CdhitUnigene/gene.uniGeneset.fa.cd-hit-para-tmp"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_compare_para

测试结果
-----------------------------------