vfdb_annotation
==========================

ģ��Path
-----------

**modules.meta_genomic.vfdb_annotation**

��������
-----------------------------------

�����vfdbע��ģ��

��Ҫ�������ģ��
-----------------------------------

```
     self.ardb_align = self.add_module("align.meta_diamond")
     self.anno_stat = self.add_tool("annotation.vfdb_anno_stat")
     self.anno_stat = self.add_tool("annotation.vfdb_anno")
     self.anno_stat = self.add_tool("annotation.vvfdb_split_core")
```

�������
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # �����ļ�
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "vfdb_out_dir", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

�����߼�
-----------------------------------

1������diamondģ���ְ��������в��ֱ���vfdb�������ݿ�ȶԣ�
2������vfdb_split_core���߷���û�ȶ��Ϻ��Ŀ�����У��ٵ���diamondģ��ȶ�Ԥ�����ݿ⣻
3������vfdb_anno���߶Ժ��ĺ�Ԥ��ȶ��ļ��ֱ����ע�ͣ�
4��������reads_profile_table�ļ��Լ�tool(vfdb_anno_stat)����ע��ͳ�ƣ�