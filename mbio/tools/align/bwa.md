bwa比对
===========


工具PATH
---------
**align.bwa**


程序及安装路径
------------
/app/bioinfo/align/bwa-0.7.9a/bwa


功能描述
--------
将reads比对宿主DNA序列


主要命令及功能模块
------------------
```
bwa aln -f bwa_pair.1.sai -t 6 suzhu_genomic.fasta clip.sickle.1.fq ;
bwa aln -f bwa_pair.2.sai -t 6 suzhu_genomic.fasta clip.sickle.2.fq ;
bwa sampe -f bwa_pair.sam suzhu_genomic.fasta bwa_pair.1.sai bwa_pair.2.sai clip.sickle.1.fq clip.sickle.2.fq ;
bwa aln -f bwa_single.sai -t 6 suzhu_genomic.fasta clip.sickle.s.fq ;
bwa samse -f bwa_single.sam suzhu_genomic.fasta bwa_single.sai clip.sickle.s.fq
```

参数设置
--------
```
{"name": "ref_database", "type": "string", "default": ""},  # 宿主参考序列库中对应的物种名，eg：E.coli ,B.taurus
{"name": "ref_undefined", "type": "infile", "format": "sequence.fasta_dir"},
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq类型，PE、SE、PSE（即PE+SE，单端加双端）
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # 右端序列文件
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # 左端序列文件
{"name": "fastq_s", "type": "infile", "format": "sequence.fastq"},  # SE序列文件
{"name": "head", "type": "string",  # 设置bwad的结果头文件，默认为空
{"name": "sam", "type": "outfile", "format": "align.bwa.sam_dir"},     # sam格式文件夹,内含对应list文件
{"name": "method", "type": "string", "default": "align"},     # sam格式输出文件
{"name": "result_path", "type": "string"}  # 当"fastq_dir"参数未提供时，必须设置该参数 
```


运行逻辑
-------
1.宿主序列准备：
a：参数是已有宿主，则根据宿主名称，直接从宿主database中提取宿主；
b：参数为未定义宿主时，提供宿主所在位置（多个宿主将cat成一个fasta），并构建index。

2.输入文件：
a: 输入参数为fastq文件夹时，且该目录下必须有reads对应list文件（具体内容与"fq_type"相关）下为“PSE”时的格式：
 ```
    HB_H1_sickle_r.fq   HB_H1   r
    HB_H1_sickle_l.fq   HB_H1   l
    HB_H1_sickle_s.fq   HB_H1   s
 ```
 b: 输入参数为fq文件。

3.用bwa软件将序列文件进行比对比对，最终生成sam格式结果文件夹和list文件。


资源配置
-----------------------
self._cpu = 10
self._memory = '10G'


测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "bwa_tool",
       "type": "tool",
       "name": "align.bwa",
       "options": {
           "ref_undefined": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/Bombyx_mori_database/ref_undefined",
           "fastq_r": "/mnt/ilustre/users/sanger-dev/workspace/20170925/Single_qc_and_stat_test/QcAndStat/output/after_remove_dir/HD47.sickle.2.fq",
           "fastq_l": "/mnt/ilustre/users/sanger-dev/workspace/20170925/Single_qc_and_stat_test/QcAndStat/output/after_remove_dir/HD47.sickle.1.fq"‘
           #"fastq_dir": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/HB_H1"
           "fq_type": "PE"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()
```


测试结果
-----------------------------------
tool测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170926/Single_bwa_tool/Bwa/output