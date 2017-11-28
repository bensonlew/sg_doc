质控中sickle去低质
===========

Tool 说明
-----------------------------------

PATH
---------

**sequence.sickle**

程序及安装路径
------------
/bioinfo/seq/sickle-1.33/sickle

功能描述
--------
数据质控（QC）中去除低质量部分

主要命令及功能模块
------------------
```
sickle pe  -f clip.1.fq.gz  -r clip.2.fq.gz -t sanger -q 20 -l 50 -n -o clip.sickle.1.fq -p clip.sickle.2.fq -s clip.sickle.s.fq
```

参数设置
--------
```
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # 输入文件PE的右端序列
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # PE的左端序列
{"name": "fastq_s", "type": "infile", "format": "sequence.fastq"},  # SE序列
{"name": "sickle_r", "type": "outfile", "format": "sequence.fastq"},  # PE的右端输出结果
{"name": "sickle_l", "type": "outfile", "format": "sequence.fastq"},  # PE的左端输出结果
{"name": "sickle_un", "type": "outfile", "format": "sequence.fastq"},  # PE的未配对输出结果
{"name": "sickle_s", "type": "outfile", "format": "sequence.fastq"},  # SE输出结果
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "sickle_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "quality", "type": "int", "default": 30},
{"name": "length", "type": "int", "default": 30},
{"name": "qual_type", "type": "string", "default": 'sanger'},
{"name": "truncate-n", "type": "bool", "default": True},
{"name": "fq_type", "type": "string"},
{"name": "pipeline", "type": "string", "default": ''}
```

运行逻辑
-------
1.输入参数：fq的文件夹，内附所有样品的fq文件以及对应list（即seq_prep的输出结果）；

2.遍历所用样品，用sickle软件去低质序列；

3.输出质控后的序列，并生成对应的list文件供下环节使用。