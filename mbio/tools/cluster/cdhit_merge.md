cdhit_merge
==========================

模块Path
-----------

**tools.cluster.cdhit_merge**

功能描述
-----------------------------------

合并结果，生成非冗余基因集,并对fasta进行统计

调用程序
-----------------------------------

clstr_merge.pl
sort_clstr.pl
transeq

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/gene-structure/TransDecoder-3.0.0/util/bin/  # cd-hit软件安装路径`
`/mnt/ilustre/users/sanger-dev/app/bioinfo/seq/EMBOSS-6.6.0/emboss/transeq  # transeq安装路径`


主要命令及功能模块
-----------------------------------

```
perl clstr_merge.pl 0/o.clstr 1/vs0.clstr 2/vs0.cluster n/vs0.clstr >>gene.uniGeneset.fa.clstr
cat 0/o 1/o 2/o3/o > gene.uniGeneset.fa
perl ort_clstr.pl gene.uniGeneset.bak.clstr gene.uniGeneset.clstr
transeq -sequence gene.uniGeneset.fa -table 11 -trim -outseq gene.uniGeneset.faa
```

参数设计
-----------------------------------

```
            {"name": "compare_dir", "type": "infile", "format": "sequence.cdhit_cluster_dir"},  # 输入cd-hit比对后的文件夹
            {"name": "faa", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集蛋白序列
            {"name": "fa", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集核算序列
            {"name": "table", "type": "int", "default": 11},  # 给出transeq参数table，11为bacteria。
```

运行逻辑
-----------------------------------

将fasta以及clstr文件分别合并，得到非冗余基因集,
将fasta翻译成fastaa,
统计fasta文件中序列数量，平均长度

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
       "id": "merge2",
       "type": "tool",
       "name": "cluster.cdhit_merge",
       "options": {
           "compare_dir": "/mnt/ilustre/users/sanger-dev/workspace/20170904/Single_unigene1/UniGene/CdhitUnigene/gene.uniGeneset.fa.cd-hit-para-tmp",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_merge2

测试结果
-----------------------------------