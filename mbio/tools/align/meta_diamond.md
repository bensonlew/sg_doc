diamond(modify)
==========================

ģ��Path
-----------

**tools.align.diamond**

��������
-----------------------------------

diamond����ȶ�

��Ҫ�������ģ��
-----------------------------------

```
             ####diamond index����
             cmd = os.path.join(self.cmd_path, "makedb")
             self.db_path = os.path.join(self.work_dir, 'diamond')
             cmd += " makedb -in {} -d {}".format(self.option("reference").prop['path'], db_name)
             ###diamond�ȶ�
            cmd = os.path.join(self.cmd_path, "diamond")
            cmd += " {} -q {} -d {} -o {} -e {} -f {} -p {}".format(
            self.blast_type, self.option("query").prop['path'], db, outputfile,
            self.option("evalue"), outfmt, self.option("num_threads"))
```

�������
-----------------------------------

```

            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # �����ļ�
            {"name": "query_type", "type": "string"��"default": "prot"},  # ����Ĳ�ѯ���еĸ�ʽ��Ϊnucl����prot
            {"name": "database", "type": "string", "default": "nr"},
            # �ȶ����ݿ� nt nr string swissprot kegg customer_mode ardb card vfdb
            {"name": "outfmt", "type": "int", "default": 5},  # �����ʽ��ֻΪ5
            {"name": "blast", "type": "string","default": "blastp"},#blastp or blastx
            {"name": "identity", "type": "float", "default": 0.0},  #һ������ֵ
            {"name": "coverage", "type": "float"��"default": 0.0},  # ���Ƕ���ֵ
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalueֵ
            {"name": "num_threads", "type": "int", "default": 10},  # cpu��
            {"name": "reference", "type": "infile", "format": "sequence.fasta"},  # �ο�����  ѡ��customerʱ����
            {"name": "outxml", "type": "outfile", "format": "align.blast.blast_xml"},  # �����ʽΪ5ʱ���
            {"name": "outtable", "type": "outfile", "format": "align.blast.blast_table"},  # �����ʽΪ6ʱ���
            {"name": "sensitive", "type": "int", "default": 0} #fastģʽ
```

�����߼�
-----------------------------------

����fasta��ʽ�İ����������ļ�����û����Ӧindex��db����ѡ��customer_mode������reference����index��
���ǳ������ݿ⣬ͨ������ѡ��ȶ���Ӧ���ݿ⣬�����������ָ���ļ����С�


��Դ����
-----------------------------------

```
self._cpu = 10
self._memory = "20G"
```