regression
==========================

模块Path
-----------

**modules.meta.association_model.regression**

功能描述
-----------------------------------

宏基因贡献度分析


主要命令及功能模块
-----------------------------------
modules.meta.beta_diversity.beta_diversity

```
	self.add_modules("meta.beta_diversity.beta_diversity")
	self.add_modules("meta.alpha_diversity.alpha_diversity")
	self.add_tool("meta.association_model.regression_cal")

```

参数设计
-----------------------------------

```
       {"name": "tax_fun", "type": "infile", "format": "sequence.profile_table"}, # 物种注释文件
       {"name": "type", "type": "string", "default": "alpha"}, # 回归所使用的数据类型，alpha多样性或beta多样性
       {"name": "method", "type": "string" }, # 类型下的方法，pca 、pcoa、NMDS、Shannon、Simpson、invsimpson
       {"name": "dist", "type": "string"  }, # 当为beta类型时，所使用的距离计算方法


```

运行逻辑
-----------------------------------
```
1、根据参数调用beta_diversity模块或alpha_diversity模块计算alpha多样性或beta多样性，
2、根据计算的多样性指数调用regression_cal工具计算回归分析文件

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