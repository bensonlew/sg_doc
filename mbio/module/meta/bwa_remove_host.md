去宿主
===========

Moudle 说明
-----------------------------------

PATH
---------

**meta.remove_host**

程序及安装路径
------------

/app/bioinfo/align/bwa-0.7.9a/bwa

功能描述
--------
将reads比对宿主DNA序列，并去除比对相似性高的污染reads。

主要命令及功能模块
------------------
```
tool:align.bwa
tool:sequece.fastq_extract
tool:sequence.fastq_stat
```

参数设置
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入质控后的fastq文件夹其中包含list文件
{"name": "ref_database", "type": "string", "default": ""},  # 宿主参考序列库中对应的物种名，eg：E.coli ,B.taurus
{"name": "ref_undefined", "type": "infile", "format": "sequence.fasta_dir"},  # 未定义的宿主序列所在文件夹，多个宿主cat到一个文件，并作为tool:align.bwa的输入文件
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq类型，PE、SE、PSE（即PE+SE，单端加双端）
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 去宿主结果文件夹，内涵各样平fq文件和对应list文件
```

运行逻辑
-------
1.当"fastq_dir"和"ref_database"/"ref_undefined"两个参数都满足时，调用[align.bwa] tool去做宿主mapping；

2.利用mapping结果，调用[sequece.fastq_extract] tool去除属于宿主的序列；

3.[sequence.fastq_stat] tool统计去宿主后的数据信息。
