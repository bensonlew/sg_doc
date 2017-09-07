cdhit_para
==========================

模块Path
-----------

**modules.cluster.cdhit_para**

功能描述
-----------------------------------

序列进行相互比较去冗余及内部去冗余

主要命令及功能模块
-----------------------------------

```
self.add_tool('cluster.cdhit_between_single.py")
self.add_tool('cluster.cdhit_compare_single.py")


```

参数设计
-----------------------------------

```
            {"name": "first", "type": "int", "default": ""},
            {"name": "last", "type": "int", "default": ""},
            {"name": "in_dir", "type": "infile", "format": "uniGene.build_dir"},  # 输入文件夹
            {"name": "identity","type":"float","default":0.95},##给出cdhit的参数identity
            {"name":"coverage","type":"float","default":0.9},##给出cdhit的参数coverage
```

运行逻辑
-----------------------------------

1、多个文件与第一个文件进行自比
2、第二个文件自比后进行互比

