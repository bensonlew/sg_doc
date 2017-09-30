meta_diamond
==========================

模块Path
-----------

**tools.align.meta_diamond**

功能描述
-----------------------------------

diamond软件比对

主要命令及功能模块
-----------------------------------

```
            #### diamond index创建
            cmd += " makedb -in {} -d {}".format(self.option("reference").prop['path'], db_name)
            ### diamond比对
            cmd = os.path.join(self.cmd_path, "diamond")
            cmd += " {} -q {} -d {} -o {} -e {} -f {} -p {}".format(
            self.blast_type, self.option("query").prop['path'], db, outputfile,
            self.option("evalue"), outfmt, self.option("num_threads"))
            if self.option("sensitive") == 1:
                  cmd += " --sensitive"
            elif self.option("sensitive") == 2:
                  cmd += " --more-sensitive"
            if self.option("unalign") == 1:
                  unalignfile = os.path.join(self.output_dir,query_name + "_unalign.fasta")
                  cmd += " --unal 1 --un {}".format(unalignfile)
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "query_type", "type": "string", "default": "prot"},  # 输入的查询序列的格式，为nucl或者prot
            {"name": "database", "type": "string", "default": "plant"},
            # 比对数据库 plant, nr, etc.
            {"name": "outfmt", "type": "int", "default": 5},  # 输出格式，数字默认为5，输出xml
            {"name": "blast", "type": "string", "default": "blastp"},  # 设定diamond程序有blastp，blastx
            {"name": "reference", "type": "infile", "format": "sequence.fasta"},  # 参考序列  选择customer时启用
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
            {"name": "num_threads", "type": "int", "default": 10},  # cpu数
            {"name": "sensitive", "type": "int", "default": 0},
            {"name": "unalign", "type": "int", "default": 0},    # report unaligned queries (0=no, 1=yes)
            {"name": "target_num", "type": "int", "default": 1}  # maximum number of target sequences to report alignments for

```

运行逻辑
-----------------------------------

传入fasta格式的氨基酸序列文件，若没有相应index则db参数选择customer_mode，根据reference创建index，
若是常用数据库，通过参数选择比对相应数据库，并将结果放在指定文件夹中。


资源配置
-----------------------------------

```
self._cpu = 10
self._memory = "20G"

```