soap_aligner
==========================

模块Path
-----------

**tools.align.soap_aligner**

功能描述
-----------------------------------
每个样品的clean reads mappong到非冗余基因集上


调用程序
-----------------------------------

soap2

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2软件安装路径`



主要命令及功能模块
-----------------------------------

```
soap2 -a 1.fq -b 2.fq -D index -o soap.pair.pe -2 soap.pair.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 315 -x 515 2
soap2 -a s.fq -D index -o single.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 295 -x 495 2
```

参数设计
-----------------------------------

```
            {"name": "sample", "type": "string"},  # sample的名称
            {"name": "insertSize", "type": "int"},  # 插入片段长度
            {"name": "index", "type": "infile", "format": "align.bwt_index_dir"},  # build_gene生成的索引文件
            {"name": "fq_r", "type": "infile", "format": "sequence.fastq"},  # 右端fastq文件
            {"name": "fq_l", "type": "infile", "format": "sequence.fastq"},  # 左端fastq文件
            {"name": "fq_s", "type": "infile", "format": "sequence.fastq"},  # 单端fastq文件
            {"name": "map_dir", "type": "outfile", "format": "align.map_dir"},  # map结果
            {"name": "repeat", "type": "int", "default": 1},  # how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "seed", "type": "int", "default": 35},
            # align the initial n bps as a seed means whole lengths of read
            {"name": "mode", "type": "int", "default": 4},
            # match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors", "type": "int", "default": 6},
            {"name": "mismatch", "type": "int", "default": 20},  # maximum number of mismatches allowed on a read
            {"name": "identity", "type": "float", "default": 0.95}  # identity

```

运行逻辑
-----------------------------------

通过SOAPaligner将clean reads mapping到非冗余基因集，输入的序列可以是两条双端序列或一条单端序列或三条序列都输入


资源配置
-----------------------------------

```
self._cpu = 15
self._memory = '20G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "align1",
       "type": "tool",
       "name": "align.soap_aligner",
       "options": {
           "sample": "7_13",
           "insertSize":430,
           "index":"/mnt/ilustre/users/sanger-dev/workspace/20170828/Single_map/MapGeneset/BwtBuilder/2bwt_index",
           "fq_r":"/mnt/ilustre/users/sanger-dev/workspace/20170830/Single_hiseq_qc/HiseqQc/Sickle8/output/7_13_sickle_r.fastq",
           "fq_l":"/mnt/ilustre/users/sanger-dev/workspace/20170830/Single_hiseq_qc/HiseqQc/Sickle8/output/7_13_sickle_l.fastq",
           "fq_s":"/mnt/ilustre/users/sanger-dev/workspace/20170830/Single_hiseq_qc/HiseqQc/Sickle8/sickle_un.fq",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_align1

测试结果
-----------------------------------