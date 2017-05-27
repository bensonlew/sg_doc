cat_hmmscanout
==========================

模块Path
-----------

**tools.align.cat_hmmscanout**

功能描述
-----------------------------------

将hmmscan的tool比对出的结果进行合并，方便后续进行分析

调用脚本
-----------------------------------

cat.sh

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/align/scripts`



主要命令及功能模块
-----------------------------------

```
cat.sh old_file new_file
```

参数设计
-----------------------------------

```
     {"name": "hmmscan_out", "type": "infile", "format": "paternity_test.data_dir"},  # 输入的hmmscan的比对结果
     {"name": "hmmscan_result", "type": "outfile", "format": "paternity_test.tab"},   # 合并的结果文件
```

运行逻辑
-----------------------------------

循环从输入文件夹中取文件，并入hmmscan——result文件中，利用shell的cat命令

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "3G"
```