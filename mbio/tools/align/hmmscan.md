hmmscan
==========================

模块Path
-----------

**tools.align.hmmscan**

功能描述
-----------------------------------

hmmscan比对dbCAN库

调用软件
-----------------------------------

hmmer-3.1b2-linux-intel-x86_64/binaries/hmmscan

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/align/`



主要命令及功能模块
-----------------------------------

```
hmmscan {} --domtblout {} -o {} --cpu 6 {} {}
```

参数设计
-----------------------------------

```
    {"name": "faa_file", "type": "infile", "format": "sequence.fasta"}, # 输入fasta文件氨基酸序列
    {"name": "align_result", "type": "string", 'default': ""}  # 比对结果存放路径
```

运行逻辑
-----------------------------------

传入fasta格式的氨基酸序列文件，通过软件和dbCAN库进行比对，并将结果放在指定文件夹中

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = "10G"
```