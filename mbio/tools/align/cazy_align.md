cazy_align
==========================

模块Path
-----------

**tools.align.cazy_align**

功能描述
-----------------------------------

碳水化合物活性酶注释比对环节，比对软件hmmscan

调用程序
-----------------------------------

cazy_align.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/align/scripts/cazy_align-zx.py`



主要命令及功能模块
-----------------------------------

```
python cazy_align-zx.py -i uniG.faa -o output_dir+file_prefix
```

参数设计
-----------------------------------

```
    {"name": "faa_file", "type": "infile", "format": "sequence.fasta"}  # 输入fasta文件氨基酸序列
```

运行逻辑
-----------------------------------

传入fasta格式的氨基酸序列文件，通过Python脚本cazy_align调用hmmscan软件进行比对，最后生成Query的比对结果表

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = "5G"
```