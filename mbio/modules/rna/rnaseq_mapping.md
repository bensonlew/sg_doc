rnaseq_mapping
==========================

模块Path
-----------

**modules.rna.rnaseq_mapping**

功能描述
-----------------------------------

将reads mapping到参考基因组上

主要命令及功能模块
-----------------------------------

```
self.add_tool("align.hisat")
self.add_tool('align.tophat')
self.add_tool("align.star")
```

参数设计
-----------------------------------

```
            {"name": "ref_genome", "type": "string"},  # 参考基因组，在页面上呈现为下拉菜单中的选项
            {"name": "ref_genome_custom", "type": "infile", "format": "sequence.fasta"},
            # 自定义参考基因组，用户选择customer_mode时，需要传入参考基因组
            {"name": "mapping_method", "type": "string"},  # 测序手段，分为tophat测序和hisat测序    
            {"name": "seq_method", "type": "string"},  # 双端测序还是单端测序
            {"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
            {"name": "single_end_reads", "type": "infile", "format": "sequence.fastq"},  # 单端序列
            {"name": "left_reads", "type": "infile", "format": "sequence.fastq"},  # 双端测序时，左端序列
            {"name": "right_reads", "type": "infile", "format": "sequence.fastq"},  # 双端测序时，右端序列
            {"name": "bam_output", "type": "outfile", "format": "align.bwa.bam_dir"},  # 输出的bam
            {"name": "assemble_method", "type": "string", "default": "None"},  # 拼接手段，None
            {"name": "mate_std", "type": "int", "default": 50},  # 末端配对插入片段长度标准差
            {"name": "mid_dis", "type": "int", "default": 50},  # 两个成对引物间的距离中间值
            {"name": "result_reserved", "type": "int", "default": 1},  # 最多保留的比对结果数目
            {"name": "ref_gtf", "type": "infile", "format": "gene_structure.gtf"},  # 结构注释文件
```

运行逻辑
-----------------------------------

根据选择的比对软件，将reads mapping到参考基因组上
