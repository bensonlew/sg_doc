质控
===========

Moudle 说明
-----------------------------------

PATH
---------

**meta_genomic.qc_and_stat**

程序及安装路径
------------

/app/bioinfo/seq/SeqPrep

/app/bioinfo/seq/sickle-1.33/sickle

功能描述
--------
Seqprep对序列3’端和5’端进行质量剪切；
Sickle去除剪切后长度小于50bp、平均质量值低于20以及含N碱基的reads，保留高质量的pair-end reads和 single-end reads；
统计序列相关信息

主要命令及功能模块
------------------
```
SeqPrep  -f raw.1.fq  -r raw.2.fq  -1 clip.1.fq.gz  -2 clip.2.fq.gz  -q 20  -L 50  -A adapter1  -B adapter2
sickle pe  -f clip.1.fq.gz  -r clip.2.fq.gz -t sanger -q 20 -l 50 -n -o clip.sickle.1.fq -p clip.sickle.2.fq -s clip.sickle.s.fq
```

参数设置
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入的fastq文件夹其中包含list文件
{"name": "insert_size", "type": "infile", "format": "sequence.profile_table"},  # 关于各个样本的insert_size的文件
{"name": "stat_dir", "type": "infile", "format": "sequence.baif_dir"},  # 输入的碱基质量统计结果文件夹
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 设置结果文件后面要用
{"name": "before_qc_stat", "type": "outfile", "format": "sequence.profile_table"},  # 原始序列统计信息文件
{"name": "after_qc_stat", "type": "outfile", "format": "sequence.profile_table"}  # 质控后的高质量序列信息
```

运行逻辑
-------
当"fastq_dir"、"insert_size"、"stat_dir"三个参数都满足时，调用sequence.hiseq_qc模块去控制SeqPrep、sickle,获取
sequence.meta_genomic模块生成的fastq和原始数据的list文件等结果:
```
1.其中fastq（原始数据list）作为SeqPrep的输入文件，生成的fastq和相应的list[sequence.seq_prep]；
2.SeqPrep生成的fastq（SeqPrep 的list）作为sickle的输入文件，同样生成fastq和相应的list[sequence.sickle]；
3.根据sickle list去除长度<50bp的reads后作为质控后的结果[sequence.remove_short_reads];
4.进行质控前后序列信息统计[sequence.sickle_stat]。
```