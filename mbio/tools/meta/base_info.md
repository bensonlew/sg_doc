base_info
==========================

模块Path
-----------

**tools.meta.qc.base_info**

功能描述
-----------------------------------

用于统计一个fastq_dir文件夹下所有fastq的文件的碱基质量

调用程序
-----------------------------------

fasttoolkit

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/`



主要命令及功能模块
-----------------------------------

```
bioinfo/seq/fastx_toolkit_0.0.14/fastx_quality_stats -i fastq -o file_name
```

参数设计
-----------------------------------

```
{"name": "fastq_path", "type": "infile", "format": "sequence.fastq_dir"}]  # 输入fastq文件夹
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
```

由外部提供fastq_dir, 生成相应的qc/base_info_dir文件夹，对文件夹里的每个fastq文件做统计，返回对应的base_info文件,放在qc/base_info_dir文件夹当中

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