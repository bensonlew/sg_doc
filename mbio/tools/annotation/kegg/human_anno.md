human_anno
==========================

模块Path
-----------

**tools.annotation.kegg.human_anno**

功能描述
-----------------------------------

调用humann-0.99软件对比对kegg结果进行kegg注释，软件生成module和pathway的相对丰度表

调用程序
-----------------------------------

humann-0.99

安装路径
-----------------------------------

bioinfo/annotation/humann-0.99  # 正式机安装时请直接拷贝这个目录，其中脚本有做修改，请查看相关README

主要命令及功能模块
-----------------------------------

```
~/app/program/Python/bin/scons --site-dir=~/app/bioinfo/annotation/humann-0.99/site_scons -C workdir -j 2  # -j 是cpu数
```

参数设计
-----------------------------------

```
{"name": "blastout", "type": "infile", "format": "align.blast.blast_xml_dir, align.blast.blast_table_relaxed_dir"}  # 输入文件，输出文件暂未设置
```

运行逻辑
-----------------------------------
```
1. 输入如果是xml文件夹，转换为table文件夹
2. 工作目录下创建 input 目录，把输入文件链接如input目录，后缀必须是txt
3. 复制软件目录下的SConstruct文件到工作目录
4. 运行命令
5. 结果文件在humann_output目录中，整理结果文件，去除多余说明
```

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '5G'
```
