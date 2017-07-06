
工具说明
==========================

Path
-----------

**assemble.metagen_ass_stat **

程序安装路径
-----------------------------------

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

运行脚本metagen_stat.py，对序列信息汇总，并挑出最佳的kmer拼接出来的结果


使用程序
-----------------------------------

脚本

metagen_stat.py


资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"


主要命令及功能模块
-----------------------------------

Python metagen_stat.py -stat_dir <所有统计结果所在的文件夹> -assemble_stat <所有样本所有kmer的汇总信息> -select_stat <挑选出每个样本的最佳结果(有kmer> -final_stat <最终的输出结果（无kmer）>

参数设计
-----------------------------------

::

            {"name": "stat_dir", "type": "string"},  # 输入文件，对组装后的序列进行信息统计
            {"name": "contig_dir", "type": "string"},  # 输入文件，对组装后的序列进行步长统计
            {"name": "assembly_stat", "type": "outfile", "format": "statistical.stats"},  # 输出文件，统计组装后的结果文件
            


运行逻辑
-----------------------------------

1、
运行脚本metagen_stat.py，对序列信息汇总，并根据公式挑出最佳的kmer拼接出来的结果；