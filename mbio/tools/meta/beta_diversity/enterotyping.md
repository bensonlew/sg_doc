enterotyping
==========================

模块Path
-----------

**tools.metaGenomic.beta_diversity.enterotyping**

功能描述
-----------------------------------

微生物样本菌群分型分析，对样本进行分型聚类

调用程序
-----------------------------------

Enterotyping.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/meta/scripts`



主要命令及功能模块
-----------------------------------

```
perl Enterotyping.pl -i otu_table -o output_dir
```

参数设计
-----------------------------------

```
    {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table"},  # 用于分析的表格
```

运行逻辑
-----------------------------------

传入表格后，运行Perl脚本，获得分型的最佳分型数目。

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = "5G"
```

环境变量
-----------------------------------

```
self.gcc = self.config.SOFTWARE_DIR + '/gcc/5.1.0/bin'
self.gcc_lib = self.config.SOFTWARE_DIR + '/gcc/5.1.0/lib64'
self.set_environ(PATH=self.gcc, LD_LIBRARY_PATH=self.gcc_lib)
```