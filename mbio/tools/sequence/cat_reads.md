
工具说明
==========================

Path
-----------

**assemble.cat_reads**

程序安装路径
-----------------------------------
N/A

功能和用途描述
-----------------------------------

将各个样品的unmap fq1 fq2 fqs分别合并为总的fq1 fq2 fqs。

使用程序
-----------------------------------

cat

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

cat [*.fq1] > [mix.fq1]

参数设计
-----------------------------------

```
            {"name": "map_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入提取样品fq路径
```

运行逻辑
-----------------------------------
1、合并fq，提供idba拼接的输入文件
