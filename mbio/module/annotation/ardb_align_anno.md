ardb_align_anno
==========================

ģ��Path
-----------

**modules.annotation.ardb_align_anno**

��������
-----------------------------------

�����ardbע��ģ�飨�����ȶԺ�ע�ͣ�

��Ҫ�������ģ��
-----------------------------------

```
     self.ardb_align = self.add_module("align.diamond")
     self.ardb_anno = self.add_tool("annotation.ardb_anno")
     self.ardb_cat = self.add_tool("align.cat_hmmscanout")
```

�������
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # �����ļ�
            {"name": "anno_result", "type": "outfile", "format": "sequence.profile_table"}
```

�����߼�
-----------------------------------

1����ְ�����fasta�ļ���
2������diamondģ��Բ�����fastq�ļ�����ardb���ݿ�ȶԣ�
3�����xml�ļ�����tool(ardb_anno)���зֱ�ע�ͣ�����tool(cat_hmmscanout)�ϲ���

