cazy_align_anno
==========================

ģ��Path
-----------

**modules.meta_genomic.cazy_align_anno**

��������
-----------------------------------

�����cazyע��ģ�飨�����ȶԺ�ע�ͣ�

��Ҫ�������ģ��
-----------------------------------

```
     self.hmmscan = self.add_module("align.hmmscan")  # ʹ��hmmscanģ����бȶ�ע��
     self.anno = self.add_tool("annotation.cazy_anno")  # ע�ͽ��ͳ��
```

�������
-----------------------------------

```
			{"name": "query", "type": "infile", "format": "sequence.fasta"},  # ��������򼯵����
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "cazy_family_profile", "type": "outfile", "format": "sequence.profile_table"},
            {"name": "cazy_class_profile", "type": "outfile", "format": "sequence.profile_table"}
```

�����߼�
-----------------------------------

1������hmmscanģ��������fastq�ļ����в�ֺ�cazy���ݿ�ȶԣ�
2�������󣬸���reads_profile_table�ļ��Լ�tool(cazy_anno)����ע�ͽ��ͳ�ƣ�����family��classͳ���ļ�
