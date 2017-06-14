qc_and_stat
==========================

模块Path
-----------

**modules.meta_genomic.qc_and_stat**

功能描述
-----------------------------------

宏基因质控及质控前后序列信息统计模块

主要命令及功能模块
-----------------------------------

```
     self.qc = self.add_module("sequence.hiseq_qc")  # 使用统一的质控模块，用参数控制使用该模块
     self.qc_stat = self.add_tool("sequence.sickle_stat")  # 质控前后序列信息统计
```

参数设计
-----------------------------------

```
			{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入的fastq文件夹其中包含list文件
            {"name": "insert_size", "type": "infile", "format": "paternity_test.tab"},  # 关于各个样本的insert_size的文件
            {"name": "stat_dir", "type": "infile", "format": "sequence.baif_dir"},  # 输入的碱基质量统计结果文件夹
            {"name": "sickle_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 设置结果文件后面要用
            {"name": "before_qc_stat", "type": "outfile", "format": "paternity_test.tab"},  # 原始序列统计信息文件
            {"name": "after_qc_stat", "type": "outfile", "format": "paternity_test.tab"}  # 质控后的高质量序列信息
``` 

运行逻辑
-----------------------------------

调用hiseq_qc模块对输入的fastq文件进行质控，结束后，根据质控前传入的碱基质量统计文件以及质控生成的高质量序列文件夹利用tool：sickle_stat进行信息统计
