质控hiseq_qc
===========

Moudle 说明
-----------------------------------

PATH
---------

**sequence.hiseq_qc**

程序及安装路径
------------

/app/bioinfo/seq/SeqPrep

/app/bioinfo/seq/sickle-1.33/sickle

功能描述
--------
hiseq数据指控模块，主要调用seqprep、sickle软件做质量剪切与去接头

主要命令及功能模块
------------------
```
add_tool('sequence.fastx_clipper')
add_tool('sequence.seq_prep')
add_tool('sequence.sickle')
```

参数设置
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "fq_type", "type": "string"},  # PE OR SE
{"name": "clip_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # SE去接头输出结果文件夹
{"name": "sickle_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 质量剪切输出结果文件夹(包括左右段)
{"name": "sickle_r_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 质量剪切右端输出结果文件夹
{"name": "sickle_l_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 质量剪切左端输出结果文件夹
{"name": "seqprep_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # PE的去接头输出结果文件
{"name": "fq_s", "type": "outfile", "format": "sequence.fastq"},  # SE所有样本cat集合
{"name": "fq_r", "type": "outfile", "format": "sequence.fastq"},  # PE所有右端序列样本cat集合
{"name": "fq_l", "type": "outfile", "format": "sequence.fastq"},  # PE所有左端序列样本cat集合
{"name": "quality_q", "type": "int", "default": 30},  # 质量剪切碱基质量 sickle
{"name": "length_q", "type": "int", "default": 50},  # 质量剪切碱基长度 sickle
{"name": "pipe_type", "type": "string", "default": ""},  # add by zhouxuan 20170527
{"name": "quality_s", "type": "int", "default": 30},  # 质量 seq_prep # add by zhouxuan 20170606
{"name": "length_s", "type": "int", "default": 30},  # 长度 seq_prep # add by zhouxuan 20170606
```

运行逻辑
-------
对原始数据主要调用seqprep、sickle软件进行质控