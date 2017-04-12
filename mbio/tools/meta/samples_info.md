sample_info
==========================

模块Path
-----------

**tools.meta.qc.sample_info**

功能描述
-----------------------------------

用于统计一个fastq_dir/或者fasta_dir的样本信息

调用程序
-----------------------------------

安装路径
-----------------------------------

主要命令及功能模块
-----------------------------------

```
from mbio.files.sequence.fasta import FastaFile
python 实现样本信息统计
```

参数设计
-----------------------------------

```
{"name": "fasta_path", "type": "infile", "format": "sequence.fasta_dir"}
```

运行逻辑
-----------------------------------

这是meta分析最开始的一个tool模块
meta分析的目录结构设计如下

```
 ./
 ../
 fastq_dir/
 fasta_dir/
 qc/
```

当数据拆分完成之后自动生成 fastq_dir/ 文件夹,此工具模块中，由外界输入一个路径,由模块检测路径的类型
当检测到类型为fastq_dir时，将他转化为fasta_dir并生成相应的文件夹，检测到是fasta_dir时不做转化
然后根据fasta_dir的fasta文件,生成sample_info格式的统计文件，放在qc/文件夹当中

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