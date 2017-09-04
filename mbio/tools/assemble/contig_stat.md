
工具说明
==========================

Path
-----------

**assemble.contig_stat**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

单个样品分别统计，汇总序列信息，[挑选出最佳的组装结果]。

使用程序
-----------------------------------

contig_stat.py  #拆分自原metagen_stat.py

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

Python contig_stat.py -contig_dir [contig文件夹] -select_kmer [用于拼接的kmer值，逗号分隔] -final_stat [最终的输出结果]     #soapdenovo模块命令

Python contig_stat.py -contig_dir [contig文件夹] -final_stat [最终的输出结果] #idba模块命令

参数设计
-----------------------------------

```
            {"name": "contig_dir", "type": "infile", "format": "sequence.fasta_dir"},  # 输入文件，组装后的序列路径，进行步长统计
            {"name": "choose_kmer", "type": "boolean", "default": "false"},  # 是否进行kmer筛选,默认不筛选
            {"name": "assembly_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，统计组装后的结果文件
```


运行逻辑
-----------------------------------
1、运行脚本contig_stat.py，统计汇总序列信息，kmer优选[选做]；