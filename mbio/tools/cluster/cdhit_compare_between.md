cdhit_compare_between
==========================

模块Path
-----------

**tools.cluster.cdhit_compare_between**

功能描述
-----------------------------------

两个fasta文件序列比对去冗余

调用程序
-----------------------------------

cd-hit-est-2d

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/gene-structure/TransDecoder-3.0.0/util/bin/  # cd-hit软件安装路径`



主要命令及功能模块
-----------------------------------

```
cd-hit-est-2d -i gene.geneset.tmp.fa.div-1 -i2 gene.geneset.tmp.fa.div-2 -o gene.geneset.tmp.fa.div-n/vs.1 -c 0.95 -aS 0.9 -n 8 -G 0 -M 0 -d 0 -r 1 -g 1 -T 8
```

参数设计
-----------------------------------

```
            {"name": "database", "type": "infile", "format": "sequence.fasta"},  # 输入fasta1文件
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入fasta2文件
            {"name": "dbnum", "type": "int", "default": 0},  # fasta1编号
            {"name": "qunum", "type": "int", "default": 1},  # fasta2编号
            {"name": "identity", "type": "float", "default": 0.95},  # 给出cdhit的参数identity
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

根据设置的覆盖度、相似性两组序列进行比对，去除冗余


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
       "id": "compare_between_test",
       "type": "tool",
       "name": "cluster.cdhit_compare_between",
       "options": {
           "database": "/mnt/ilustre/users/sanger-dev/workspace/20170814/Single_compare_single_test/CdHitCompareSingle/output/gene.uniGeneset.fa.div-0/o",
           "query": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/gene.geneset.tmp.fa.div-1",
           "dbnum":0,
           "qunum":1,
           "compare":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/fasta"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_compare_between_test

测试结果
-----------------------------------