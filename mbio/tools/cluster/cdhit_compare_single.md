cdhit_compare_single
==========================

模块Path
-----------

**tools.cluster.cdhit_compare_single**

功能描述
-----------------------------------

fasta文件内部序列去冗余

调用程序
-----------------------------------

cd-hit-est

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/cd-hit-v4.6.1-2012-08-27/ # cd-hit软件安装路径`



主要命令及功能模块
-----------------------------------

```
cd-hit-est -i gene.geneset.tmp.fa.div-n -o gene.geneset.tmp.fa.div-n/o -c 0.95 -aS 0.9 -n 8 -G 0 -M 0 -d 0 -r 1 -g 1 -T 8
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入fasta文件
            {"name": "qunum", "type": "int", "default": 0},  # fasta编号
            {"name": "identity", "type": "float", "default": 0.95},  ##给出cdhit的参数identity
            {"name": "coverage", "type": "float", "default": 0.9},  # 给出cdhit的参数coverage
            {"name": "memory_limit", "type": "int", "default": 10000},  # 内存大小，0为无限制
            {"name": "method", "type": "int", "default": 0},  # 1为全局比对，0为局部比对
            {"name": "direction", "type": "int", "default": 1},  # 1为双向比对，0为单向比对
            {"name": "num_threads", "type": "int", "default": 8},  # cpu数
            {"name": "select", "type": "int", "default": 1},  # 1为聚类到最相似的类中，0为聚类到第一个符合阈值的类
            {"name": "compare", "type": "string", "default": ""},  # 比对结果输出路径

```

运行逻辑
-----------------------------------

根据设置的覆盖度、相似性进行序列文件内部去冗余，得到去冗余后的fasta文件及聚类信息

资源配置
-----------------------------------

```
self._cpu = 8
self._memory = '10G'


测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "compare_single_test",
       "type": "tool",
       "name": "cluster.cdhit_compare_single",
       "options": {
           "query": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/compare_single/gene.uniGeneset.fa.div-0",
           "qunum":0,
           "compare":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/fasta"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_compare_single_test

测试结果
-----------------------------------