tax_fun
==========================

模块Path
-----------

**modules.meta.association_model.tax_fun**

功能描述
-----------------------------------

宏基因物种与功能对应关系计算

调用脚本
-----------------------------------

tax_fun.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = " {} -t {} -g {} -f {} -nl {} -fl {} -n_top {} -f_top {} -o {}".format(
            self.script, self.option("nr_anno").prop['path'], self.option("gene_profile").prop['path'], self.option("function_anno").prop['path'],
            self.option("n_level"), self.option("f_level"), self.option("nr_top"),  self.option("funtion_top"), self.output_dir)

```

参数设计
-----------------------------------

```
       {"name": "nr_anno", "type": "infile", "format": "sequence.profile_table"}, # 物种注释文件
       {"name": "function_anno", "type": "infile", "format": "sequence.profile_table"}, # 功能注释文件
       {"name": "gene_profile", "type": "infile", "format": "sequence.profile_table"}, # 基因丰度文件
       {"name": "f_level", "type": "string" }, # 物种水平
       {"name": "n_level", "type": "string" }, # 功能水平
       {"name": "nr_top", "type": "int", "default": 10}, # 
       {"name": "funtion_top", "type": "int", "default": 10}, # 

```

运行逻辑
-----------------------------------

调用物种注释表和功能注释表,根据选择的水平和top数计算相应的对应关系图。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```

可能存在问题
-----------------------------------

测试命令
-----------------------------------
```

测试结果路径：
```


测试结果
-----------------------------------