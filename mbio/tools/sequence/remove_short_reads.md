remove_short_reads
==========================

模块Path
-----------

**tools.sequence.remove_short_reads**

功能描述
-----------------------------------

去除fastq文件中较短的reads序列

调用脚本和软件
-----------------------------------

remove_short_reads.pl(单端序列)remove_short_reads.pair.pl(双端序列)

ParaFly(命令并行运行的软件)

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/seq/scripts/`
`/mnt/ilustre/users/sanger-dev/app/program/parafly-r2013-01-21/bin/bin/ParaFly`

主要命令及功能模块
-----------------------------------

```
cmd = '{} {} 50 {}'.format(self.perl_script,os.path.join(self.option('fastq_dir').prop['path'], line[0]),os.path.join(self.output_dir, file_name))
cmd = '{} {} {} 50 {}'.format(self.perl_script_2, l_dict[i + "_l"], l_dict[i + '_r'],os.path.join(self.output_dir, i + ".sickle"))
p_cmd = '{} -c {} -CPU 10 -failed_cmds {}'.format(self.software, cmd_file, wrong_cmd)

```

参数设计
-----------------------------------

```
       {"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq文件夹
       {"name": "reasult_dir", "type": "outfile", 'format': "sequence.fastq_dir"}  # 输出文件夹
```

运行逻辑
-----------------------------------

根据输入文件夹中的list.txt区别单端和双端序列，生成单端和双端序列去除较短reads时的运行命令，接着调用软件parafly使得命令并行运行

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = "15G"
```

环境变量
-----------------------------------

```
self.set_environ(PATH=self.config.SOFTWARE_DIR + '/program/perl/perls/perl-5.24.0/bin')
self.set_environ(PERLBREW_ROOT=self.config.SOFTWARE_DIR + '/program/perl')
```