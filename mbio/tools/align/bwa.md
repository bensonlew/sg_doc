bwa比对
===========

Tool 说明
-----------------------------------

PATH
---------

**align.bwa**

程序及安装路径
------------

/app/bioinfo/align/bwa-0.7.9a/bwa

功能描述
--------
将reads比对宿主DNA序列

主要命令及功能模块
------------------
```
bwa aln -f bwa_pair.1.sai -t 6 suzhu_genomic.fasta clip.sickle.1.fq ;
bwa aln -f bwa_pair.2.sai -t 6 suzhu_genomic.fasta clip.sickle.2.fq ;
bwa sampe -f bwa_pair.sam suzhu_genomic.fasta bwa_pair.1.sai bwa_pair.2.sai clip.sickle.1.fq clip.sickle.2.fq ;
bwa aln -f bwa_single.sai -t 6 suzhu_genomic.fasta clip.sickle.s.fq ;
bwa samse -f bwa_single.sam suzhu_genomic.fasta bwa_single.sai clip.sickle.s.fq
```

参数设置
--------
```
{"name": "ref_fasta", "type": "infile", "format": "sequence.fasta"},  # 参考序列
{"name": "fq_type", "type": "string", "default": ""},  # fq类型，必传
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # 右端序列文件
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # 左端序列文件
{"name": "fastq_s", "type": "infile", "format": "sequence.fastq"},  # SE序列文件
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
{"name": "head", "type": "string", "default": "'@RG\\tID:sample\\tLB:rna-seq\\tSM:sample\\tPL:ILLUMINA'"},  # 设置结果头文件
{"name": "sam", "type": "outfile", "format": "align.bwa.sam"},     # sam格式文件
{"name": "method", "type": "string", "default": "align"},     # sam格式文件
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read by zhujuan
```

运行逻辑
-------
1.对输入的参考序列做判断，新添加的参考序列需先构建index；

2.输入文件的导入方式有两种：
a.只有一个样品时，可以直接提供reads对应的fastq文件；
b.有一个或多个样品时，必须提供fastq文件夹，且该目录下必须有reads对应list文件：
 ```
    HB_H1_sickle_r.fq   HB_H1   r
    HB_H1_sickle_l.fq   HB_H1   l
    HB_H1_sickle_s.fq   HB_H1
 ```

2.当"fq_type"是PE模式，list中R1、R2、[S，该选项在"pipe_type"为" meta_g"所特有的]的fastq作为必要输入文件，若SE模式，list中S的fastq作为必要输入文件；

3.根据不同的模式最终生成样品对应的sam格式结果，注意当设置[" meta_g"]时，single reads的bam为samplename_sRead.bam,区分SE的结果，利于后续处理。
