network
==========================

模块Path
-----------

**tools.meta.association_model.network**


调用脚本
-----------------------------------

mg_network.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/scripts/`

主要命令及功能模块
-----------------------------------

```
cmd = self.config.SOFTWARE_DIR + '/program/Python/bin/python '
cmd += ' -i %s -o %s' % (infile_path, self.work_dir + '/network')
cmd += ' -m %s' % (self.group_table)
```

参数设计
-----------------------------------

```
            {"name": "infile", "type": "infile", "format": "sequence.profile_table"}, # 输入物种或功能丰度文件
            {"name": "grouptable", "type": "infile", "format": "meta.otu.group_table"} # 分组文件

```

运行逻辑
-----------------------------------

根据输入的某一具体数据库某一水平的丰度文件计算其在各样本或个分组的分布情况

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