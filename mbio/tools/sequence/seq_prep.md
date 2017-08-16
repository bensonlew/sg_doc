质控中seq_prep去接头
===========

Tool 说明
-----------------------------------

PATH
---------

**sequence.seq_prep**

程序及安装路径
------------
/bioinfo/seq/SeqPrep

功能描述
--------
数据质控（QC）中先去除序列两端的接头

主要命令及功能模块
------------------
```
SeqPrep  -f raw.1.fq  -r raw.2.fq  -1 clip.1.fq.gz  -2 clip.2.fq.gz  -q 20  -L 50  -A adapter1  -B adapter2
```

参数设置
--------
```
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # 输入文件PE的右端序列
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # PE的左端序列
{"name": "seqprep_r", "type": "outfile", "format": "sequence.fastq"},  # PE的右端输出结果
{"name": "seqprep_l", "type": "outfile", "format": "sequence.fastq"},  # PE的左端输出结果
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "seqprep_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "quality", "type": "int", "default": 30},
{"name": "length", "type": "int", "default": 30},
{"name": "adapter_a", "type": "string", "default": "AGATCGGAAGAGCACACGTC"},
{"name": "adapter_b", "type": "string", "default": "AGATCGGAAGAGCGTCGTGT"},
```

运行逻辑
-------
1.输入参数：fq的文件夹，内附所有样品的fq文件以及对应list；

2.遍历所用样品，用SeqPrep软件去除序列接头；

3.输出去接头后的序列，并生成对应的list文件供下环节使用。
