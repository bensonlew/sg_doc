card_align_anno
==========================

ģ��Path
-----------

**modules.annotation.card_align_anno**

��������
-----------------------------------

�����cardע��ģ�飨�����ȶԺ�ע�ͣ�

��Ҫ�������ģ��
-----------------------------------

```
     self.card_align = self.add_module("align.diamond")
     self.card_anno = self.add_tool("annotation.card_anno")
     self.card_cat = self.add_tool("align.cat_hmmscanout")
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
2������diamondģ��Բ�����fastq�ļ�����card���ݿ�ȶԣ�
3�����xml�ļ�����tool(card_anno)���зֱ�ע�ͣ�����tool(cat_hmmscanout)�ϲ���
