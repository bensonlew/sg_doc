network_cor

==========================

模块Path
-----------

**tools.meta.association_model.network_cor**

调用脚本
-----------------------------------

mg_network_cor.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/scripts/`

主要命令及功能模块
-----------------------------------

```
one_cmd = self.python_path + self.script_path + " -i %s -m %s -c %s -o %s" % (self.option('infile'), self.option('method'), self.option('coefficient')，"corr_result")
```

参数设计
-----------------------------------

```
            {"name": "infile", "type": "infile", "format": "sequence.profile_table"}, # 输入物种或功能丰度文件
            {"name": "method", "type": "String", "default": "spearman"}
            {"name": "coefficient", "type": "float", "default": 0.8}  # 相关性系数阈值

```

运行逻辑
-----------------------------------

根据输入的某一具体数据库某一水平的丰度文件计算各个功能或物种的相关性

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