sam中提取fastq
===========

Tool 说明
-----------------------------------

PATH
---------

**sequence.extract_fastq**

功能描述
--------
sam格式的文件中提取序列信息得到新的fastq

主要命令及功能模块
------------------
```

```

参数设置
--------
```
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq类型，PE、SE、PSE（即PE+SE，单端加双端）
#{"name": "seq_id_list", "type": "infile"， "format": "sequence.fastx_id"},     # 需要提取/剔除的sequence ID list文件，设置后，必须同时传入"fastq_dir"和"extract_type"参数
#{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"}, # 输入质控后的fastq文件夹其中包含list文件
{"name": "sam", "type": "infile", "format": "align.bwa.sam_dir"},     # sam格式文件,内含对应list文件
#{"name": "extract_type", "type": "string", "default": "Del"},  # 保留fq类型，Del(删除对应seq_id的序列) Fliter（提取对应seq_id的序列）
```

运行逻辑
-------
1.首先确定"fq_type"类型：

2. 当传入"sam"参数时，直接从sam文件中提出mapping和unmapping 的序列存成对应的fq文件。

3.最终生成生成相关fq文件。
