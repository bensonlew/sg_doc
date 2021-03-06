cdhit_unigene
==========================

模块Path
-----------

**modules.cluster.cdhit_unigene**

功能描述
-----------------------------------

生成非冗余基因集

主要命令及功能模块
-----------------------------------

```
self.add_tool("sequence.cdhit_split_fasta")
self.add_tool('cluster.cdhit_merge")
self.add_tool('cluster.cdhit_compare_single.py")
self.add_module('cluster.cdhit_para.py")

```

参数设计
-----------------------------------

```
            {"name": "gene_tmp_fa", "type": "infile", "format": "sequence.fasta"},  # 输出改名并合并的序列
            {"name": "number", "type": "int", "default": 0},  # 切分为几份，默认0表示按文件大小自动计算，指定某个整数时则按指定数量分割
            {"name": "uni_fasta", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集核酸序列
            {"name": "uni_fastaa", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集蛋白序列
            {"name": "identity", "type": "float", "default": 0.95},  # 给出cdhit的参数identity
            {"name": "coverage", "type": "float", "default": 0.9},  # 给出cdhit的参数coverage

```

运行逻辑
-----------------------------------

1、基因改名（在contig前加上样品名）并进行样品序列合并
2、按序列长度从高到低排列，切分fasta序列至n份
3、切分后的序列进行相互比较去冗余及内部去冗余
4、合并结果，生成非冗余基因集

运行逻辑
-----------------------------------

1、cd-hit对输入的fasta文件去冗余得到非冗余基因集，并翻译成蛋白序列
2、统计去冗余前后基因的数据
3、SOAPaligner mapping高质量reads到非冗余基因集上
4、生成非冗余基因表

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
      "id": "cdhit_unigene",
       "type": "module",
       "name": "cluster.cdhit_unigene",
       "options": {
           "gene_tmp_fa": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/test/gene.geneset.tmp.fa",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170912/Single_cdhit_unigene


测试结果
-----------------------------------