star
==========================

模块Path
-----------

**tools.align.star**

功能描述
-----------------------------------

star比对

调用程序
-----------------------------------

cazy_align.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/rna/star-2.5/bin/Linux_x86_64/STAR`



主要命令及功能模块
-----------------------------------

```
PE:
STAR --runMode genomeGenerate --limitGenomeGenerateRAM 50000000000 --genomeDir ./ref_star_index1 --genomeFastaFiles <基因组文件> --runThreadN 20
STAR --runThreadN 20 --genomeDir ./ref_star_index1 --readFilesIn <双端序列1> <双端序列2>
STAR --runMode genomeGenerate --limitGenomeGenerateRAM 50000000000 --runThreadN 20 --genomeDir ./ref_star_index2 --genomeFastaFiles <基因组文件> --sjdbFileChrStartEnd ./SJ.out.tab --sjdbOverhang 100
STAR --runThreadN 20 --genomeDir ./ref_star_index2 --readFilesIn <双端序列1> <双端序列2>
SE:
STAR --runMode genomeGenerate --limitGenomeGenerateRAM 50000000000 --genomeDir ./ref_star_index1 --genomeFastaFiles <基因组文件> --runThreadN 20
STAR --runThreadN 20 --genomeDir ./ref_star_index1 --readFilesIn <单端序列> 
STAR --runMode genomeGenerate --limitGenomeGenerateRAM 50000000000 --runThreadN 20 --genomeDir ./ref_star_index2 --genomeFastaFiles <基因组文件> --sjdbFileChrStartEnd ./SJ.out.tab --sjdbOverhang 100
STAR --runThreadN 20 --genomeDir ./ref_star_index2 --readFilesIn <单端序列>
```

参数设计
-----------------------------------

```
    {"name": "ref_genome_custom", "type": "infile", "format": "sequence.fasta"},  # 用户上传参考基因组文件
    {"name": "ref_genome", "type": "string"},  # 参考基因组模式选项 用户自定义、选择已有生物物种
    {"name": "ref_gtf", "type": "infile", "format": "gene_structure.gtf"},  # 参考基因组的gtf文件 ，gtf文件和fasta文件要配套使用
    {"name": "readFilesIN1", "type": "infile", "format": "sequence.fastq, sequence.fasta"},  # 双端序列文件1端
    {"name": "readFilesIN2", "type": "infile", "format": "sequence.fastq, sequence.fasta"},  # 双端序列文件2端
    {"name": "readFilesIN", "type": "infile", "format": "sequence.fastq"},  # 单端序列文件
    {"name": "seq_method", "type": "string"},  # 双端还是单端
    {"name": "is_indexed", "type": "bool", "default": False},  # 是否建立了索引
    {"name": "sample", "type": "string", "default": ""}  # 样本名称
```

运行逻辑
-----------------------------------

建立索引，比对之后，根据比对产生的SJ.out.tab文件，

资源配置
-----------------------------------

```
self._cpu = 20
小基因组：self._memory = "30G"
大基因组：self._memory = "50G"
```