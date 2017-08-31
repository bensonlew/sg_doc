meta_genomic
==========================

模块Path
-----------

**modules.sequence.meta_genomic**

功能描述
-----------------------------------

宏基因样本解压及碱基质量统计

主要命令及功能模块
-----------------------------------

```
self.add_tool("meta.qc.base_info")
self.add_tool('sequence.fastq_ungz')
```

参数设计
-----------------------------------

```
    {"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},
    {"name": "un_fastq_dir", "type": "outfile", "format": "sequence.fastq_dir"},
    {"name": "base_dir", "type": "outfile", "format": "sequence.baif_dir"}
``` 

运行逻辑
-----------------------------------

把输入的fastq文件解压（利用tool：fastq_ungz）后进行碱基质量统计（利用tool：fastq_ungz）
