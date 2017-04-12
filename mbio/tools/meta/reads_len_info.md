read_len_info
==========================

模块Path
-----------

**tools.meta.qc.read_len_info**

功能描述
-----------------------------------

用于统计一个fasta_dir或fastq_dir下的所有文件的碱基长度分布信息

调用程序
-----------------------------------

调用的是file中的一个模块作为分析函数

安装路径
-----------------------------------



主要命令及功能模块
-----------------------------------

```
from mbio.files.sequence.fasta import FastaFile
Python脚本实现序列信息的统计
```

参数设计
-----------------------------------

```
{"name": "fasta_path", "type": "infile", "format": "sequence.fasta_dir"}
```

运行逻辑
-----------------------------------

样本信息统计(sample_info)的目录结构如下

```
 ./
 ../
 fastq_dir/
 fasta_dir/
 qc/base_info_dir
 qc/reads_length_info_dir
```

由外部提供fastq_dir,生成相应的qc/reads_length_info_dir文件夹，对文件夹里的每个fastq文件做统计，返回对应的reads_length_info文件,放在qc/reads_length_info_dir文件夹当中

资源配置
-----------------------------------

```
self._cpu = 10
total = 0
for f in self.option("fasta_path").prop["fasta_fullname"]:
    total += os.path.getsize(f)
total = total / (1024 * 1024 * 1024)
total = total * 4
total = math.ceil(total)
self._memory = '{}G'.format(int(total))
```