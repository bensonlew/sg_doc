sam����ȡfastq
===========

Tool ˵��
-----------------------------------

PATH
---------

**sequence.extract_fastq_by_sam**

��������
--------
��sam����ȡunmap/map�ϵ�fq���У���ͳ��������Ϣ��

��Ҫ�������ģ��
------------------
```
/bioinfo/seq/scripts/get_fq_bysam.pl
```

��������
--------
```
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq���ͣ�PE��SE��PSE����PE+SE�����˼�˫�ˣ�
{"name": "sam", "type": "infile", "format": "align.bwa.sam_dir"},     # sam��ʽ�ļ�,�ں���Ӧlist�ļ�
{"name": "extract_type", "type": "string", "default": "unmap"},  #��ȡ��fq��������� 'map'�Ļ���'unmap'��
{"name": "reasult_dir", "type": "outfile", 'format': "sequence.fastq_dir"}  # ����ļ���
```

�����߼�
-------
1.����ȷ��"fq_type"���ͣ�

2.������"sam"����ʱ������"extract_type"������ȡmap/unmap�����У���ͳ��fastq��Ϣ��

3.���������������fq�ļ��У����к�fq��Ӧ��'list.txt'����Ʒ��Ӧfqͳ���ļ�'stat.list.txt''��
