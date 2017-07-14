fastq_mt_fasta
==========================

模块Path
-----------

**tools.meta_genomic.fastq_mt_fasta**

功能描述
-----------------------------------

质控后的fastq合并生成fasta文件

调用脚本
-----------------------------------

fq2fa.combine.pl(script)
ParaFly(app)

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/seq/scripts/`
`/mnt/ilustre/users/sanger-dev/app/program/parafly-r2013-01-21/bin/bin/ParaFly`

主要命令及功能模块
-----------------------------------

```
 cmd = '{} {} {}'.format(self.perl_script, fq_list, os.path.join(self.output_dir, '{}.fa'.format(line[1])))
 p_cmd = '{} -c {} -CPU 10 -failed_cmds {}'.format(self.software, cmd_file, wrong_cmd)

```

参数设计
-----------------------------------

```
        {"name": "clean_fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 质控模块的结果文件夹
        {"name": "merge_fasta_dir", "type": "outfile", 'format': 'sequence.fasta_dir'}  # 输出fa文件的文件夹
```

运行逻辑
-----------------------------------

通过输入的fastq文件夹及其中的list文件

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = '15G'

```
