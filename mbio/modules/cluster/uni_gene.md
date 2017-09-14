uni_gene
==========================

模块Path
-----------

**modules.clusterc.uni_gene**

功能描述
-----------------------------------

非冗余基因集构建及丰度表生成

主要命令及功能模块
-----------------------------------

```
self.add_module("cluster.cdhit_unigene")
self.add_module("align.mapGeneSet")

```

参数设计
-----------------------------------

```
            {"name": "gene_tmp_fa", "type": "infile", "format": "sequence.fasta"},  # 输出改名并合并的序列
            {"name": "number", "type": "int", "default": 0},  # 切分为几份，默认0表示按文件大小自动计算，指定某个整数时则按指定数量分割
            {"name": "uni_fasta", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集核酸序列
            {"name": "uni_fastaa", "type": "outfile", "format": "sequence.fasta"},  # 非冗余基因集蛋白序列
            {"name": "cdhit_identity", "type": "float", "default": 0.95},  # 给出cdhit的参数identity
            {"name": "cdhit_coverage", "type": "float", "default": 0.9},  # 给出cdhit的参数coverage
            {"name": "insertsize", "type": "infile", "format": "sample.insertsize_table"},  # 插入片段文件
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir"},  # qc后reads文件夹
            {"name": "reads_abundance", "type": "outfile", "format": "sequence.profile_table"},  # reads_abundance
            {"name": "rpkm_abundance", "type": "outfile", "format": "sequence.profile_table"},  # rpkm_abundance
            {"name": "seed", "type": "int", "default": 35},
            # align the initial n bps as a seed means whole lengths of read
            {"name": "mode", "type": "int", "default": 4},
            # match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors", "type": "int", "default": 6},
            {"name": "mismatch", "type": "int", "default": 20},  # maximum number of mismatches allowed on a read
            {"name": "repeat", "type": "int", "default": 1},  # how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "soap_identity", "type": "float", "default": 0.95}  # soap aligner identity

```

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
      "id": "unigene1",
       "type": "module",
       "name": "cluster.uni_gene",
       "options": {
          "gene_tmp_fa": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/test/test.fasta",
          "number": 9,
          "insertsize":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/inse1",
          "QC_dir":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/qc_dir"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170907/Single_unigene

测试结果
-----------------------------------