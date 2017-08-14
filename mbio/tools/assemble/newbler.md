
工具说明
==========================

Path
-----------

**assemble.newbler**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/*****（未安装，路径待定）

功能和用途描述
-----------------------------------

宏基因组装之newbler拼接。

使用程序
-----------------------------------

runAssembly

资源配置
-----------------------------------

self._cpu = 5

self._memory = "10G"

主要命令及功能模块
-----------------------------------

runAssembly -o [输出路径] -force -cpu [cpu个数] -mi [相似度] -ml [比对长度] -a [最短序列长度] -l [定义长序列长度] [输入fa文件]

参数设计
-----------------------------------

```
            {"name": "contig", "type": "infile", "format": "sequence.fasta"},  # 输入fasta文件
            {"name": "cpu", "type": "int", "default": 5},  # 拼接线程数，默认5
            {"name": "mi", "type": "int", "default": 98},  # 拼接相似度0-100，默认98
            {”name“: "ml", "type": "int", "default": 40},  # 拼接比对长度，默认40
            {”name“: "all_length","type": "int", "default": 300},  # 拼接结果最小contig长度
            {"name": "large_length","type": "int", "default": 1000},  # 拼接结果认为是长contig的长度
            {"name": "output", "type": "string", "format": "sequence.fasta_dir"},  # 输出拼接结果路径
```

运行逻辑
-----------------------------------
1、拼接contig；
