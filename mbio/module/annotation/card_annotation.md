card_annotation
==========================

ģ��Path
-----------

**modules.annotation.card_align_anno**

��������
-----------------------------------

�����cardע��ģ�飨�����ȶԺ�ע�ͺ�ͳ�ƣ�

��Ҫ�������ģ��
-----------------------------------

```
     self.ardb_align_anno = self.add_module("annotation.card_align_anno")
     self.anno_stat = self.add_tool("annotation.card_anno_stat")
```

�������
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # �����ļ�
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "card_out_dir", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

�����߼�
-----------------------------------

1����ְ�����fasta�ļ���
2������diamond���߶Բ�����fastq�ļ�����card���ݿ�ȶԣ�
3�����xml�ļ�����tool(card_anno)���зֱ�ע�ͣ�����tool(cat_hmmscanout)�ϲ���
4��������reads_profile_table�ļ��Լ�tool(card_anno_stat)����ע��ͳ�ƣ�