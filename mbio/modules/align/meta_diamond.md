diamond(modify)
==========================

ģ��Path
-----------

**modules.align.diamond**

��������
-----------------------------------

�����diamond����ȶ�ģ��

��Ҫ�������ģ��
-----------------------------------

```
        self.splitfasta = self.add_tool("sequence.split_fasta")
        self.add_tool('align.diamond')
        #self.catblast = self.add_tool("align.cat_blastout")
```

�������
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # �����ļ�
            {"name": "lines", "type": "int", "default": 100000},  # ��fasta���в�ִ������Ķ���ļ�
            {"name": "query_type", "type": "string"��"default": "prot"},  # ����Ĳ�ѯ���еĸ�ʽ��Ϊnucl����prot
            {"name": "database", "type": "string", "default": "nr"},
            # �ȶ����ݿ� nt nr string swissprot kegg customer_mode ardb card vfdb eggNOG
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
            # �������ʽΪ��5��6ʱ��ֻ�����ļ�����Ϊoutfile
```

�����߼�
-----------------------------------

1����ʹ��split_fasta�������ļ���֣�
2������diamond���߷ֱ�ȶԣ�Ĭ�ϲ���xml�ļ�����
3���ϲ�xml�����