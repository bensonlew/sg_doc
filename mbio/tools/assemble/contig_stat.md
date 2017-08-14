
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

汇总序列信息，[挑选出最佳的组装结果]，对最终结果做长度分布图。

使用程序
-----------------------------------

contig_stat.py  #原metagen_stat.py

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

Python contig_stat.py -stat_dir <所有统计结果所在的文件夹> -assemble_stat <所有样本所有kmer的汇总信息> -select_stat <挑选出每个样本的最佳结果(有kmer)> -final_stat <最终的输出结果（无kmer）>     #soapdenovo模块命令

Python contig_stat.py -stat_dir <所有统计结果所在的文件夹> -assemble_stat <所有样本所有kmer的汇总信息>  -final_stat <最终的输出结果（无kmer）> #idba模块命令

参数设计
-----------------------------------

```
            {"name": "stat_dir", "type": "string"},  # 输入文件，对组装后的序列进行信息统计结果路径
            {"name": "contig_dir", "type": "string"},  # 输入文件，组装后的序列路径，进行步长统计
            {"name": "choose_kmer", "type": "boolean", "default": "false"},  # 是否进行kmer筛选,默认不筛选
            {"name": "assembly_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，统计组装后的结果文件
```


运行逻辑
-----------------------------------
1、运行脚本contig_stat.py，汇总序列信息，kmer优选[选做]；

2、调用函数step_count，做contig长度分布图；