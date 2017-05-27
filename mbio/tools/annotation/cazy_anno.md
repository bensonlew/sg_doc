cazy_anno
==========================

模块Path
-----------

**tools.annotation.cazy_anno**

功能描述
-----------------------------------

根据hmmscan的比对结果，进行cazy的注释信息补充，以及生成以样本为单位的注释结果

调用脚本
-----------------------------------

cazy_anno.py
profile.sumGenesAbund.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`



主要命令及功能模块
-----------------------------------

```
cazy_anno.py --out.dm {} --output_dir {} --class_def {} --FamInfo {}
profile.sumGenesAbund.pl {},{} {} {},{}

```

参数设计
-----------------------------------

```
     {"name": "hmmscan_result", "type": "infile", "format": "paternity_test.tab"},
     {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}  # gene_profile.reads_number.txt
```

运行逻辑
-----------------------------------

用cazy_anno.py根据输入的比对结果生成class级别和family级别的注释信息，后续利用profile.sumGenesAbund.pl根据class和family注释信息生成其profile文件(从而获得各个样本在各个注释丰度表)

资源配置
-----------------------------------

```
self._cpu = 3
self._memory = "5G"
```

环境变量
-----------------------------------

```
self.set_environ(LD_LIBRARY_PATH=self.config.SOFTWARE_DIR + '/program/Python/lib')
self.set_environ(PATH=self.config.SOFTWARE_DIR + '/program/perl/perls/perl-5.24.0/bin')
self.set_environ(PERLBREW_ROOT=self.config.SOFTWARE_DIR + '/program/perl')
```
