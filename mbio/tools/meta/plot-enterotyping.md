plot-enterotyping
==========================

模块Path
-----------

**tools.meta.beta_diversity.plot-enterotyping**

功能描述
-----------------------------------

在样本菌群分型分析后，调用该模块执行画图数据的生成，获取可视化需要的数据。

调用程序
-----------------------------------

plot-Enterotyping.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/meta/scripts`



主要命令及功能模块
-----------------------------------

```
perl plot-Enterotyping.pl -i otu_table -g 1,2,3,4 -s "a","b","c","d" -o output_dir -group group_table -t BCA -l T
```

参数设计
-----------------------------------

```
    {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table"},  # 输入的文件
    {"name": "g", "type": "string", "default": ""},  # 分型组别
    {"name": "s", "type": "string", "default": ""},  # 分组名称（暂定取第一个名称，散点样本不管）
    {"name": "group", "type": "infile", "format": "meta.otu.group_table"}  # 输入样本的分组信息
```

运行逻辑
-----------------------------------

传入`OTUtable`后以及参数分型组别和分型名称和分组信息(分型组别和分型名称从enterotyping(tool)的结果文件中获得)，运行脚本，获得可视化数据。

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