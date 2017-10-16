contribute
==========================

模块Path
-----------

**modules.meta.association_model.contribute**

功能描述
-----------------------------------

宏基因贡献度分析


主要命令及功能模块
-----------------------------------

```
	self.add_tool("meta.association_model.tax_fun")
	self.add_tool("meta.association_model.contribute_cal")

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
```
1、调用tax_fun.py计算物种与功能，功能与物种贡献对应关系表
2、用上一个tool生成的对应关系表，调用contribute_cal.py计算画图所需表。

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