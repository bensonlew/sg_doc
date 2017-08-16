diamond(modify)
==========================

模块Path
-----------

**tools.align.diamond**

功能描述
-----------------------------------

diamond软件比对

主要命令及功能模块
-----------------------------------

```
             ####diamond index创建
             cmd = os.path.join(self.cmd_path, "makedb")
             self.db_path = os.path.join(self.work_dir, 'diamond')
             cmd += " makedb -in {} -d {}".format(self.option("reference").prop['path'], db_name)
             ###diamond比对
            cmd = os.path.join(self.cmd_path, "diamond")
            cmd += " {} -q {} -d {} -o {} -e {} -f {} -p {}".format(
            self.blast_type, self.option("query").prop['path'], db, outputfile,
            self.option("evalue"), outfmt, self.option("num_threads"))
```

参数设计
-----------------------------------

```

            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "query_type", "type": "string"，"default": "prot"},  # 输入的查询序列的格式，为nucl或者prot
            {"name": "database", "type": "string", "default": "nr"},
            # 比对数据库 nt nr string swissprot kegg customer_mode ardb card vfdb
            {"name": "outfmt", "type": "int", "default": 5},  # 输出格式，只为5
            {"name": "blast", "type": "string","default": "blastp"},#blastp or blastx
            {"name": "identity", "type": "float", "default": 0.0},  #一致性阈值
            {"name": "coverage", "type": "float"，"default": 0.0},  # 覆盖度阈值
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
            {"name": "num_threads", "type": "int", "default": 10},  # cpu数
            {"name": "reference", "type": "infile", "format": "sequence.fasta"},  # 参考序列  选择customer时启用
            {"name": "outxml", "type": "outfile", "format": "align.blast.blast_xml"},  # 输出格式为5时输出
            {"name": "outtable", "type": "outfile", "format": "align.blast.blast_table"},  # 输出格式为6时输出
            {"name": "sensitive", "type": "int", "default": 0} #fast模式
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