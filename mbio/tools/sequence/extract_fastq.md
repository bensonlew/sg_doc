sam����ȡfastq
===========

Tool ˵��
-----------------------------------

PATH
---------

**sequence.extract_fastq**

��������
--------
sam��ʽ���ļ�����ȡ������Ϣ�õ��µ�fastq

��Ҫ�������ģ��
------------------
```

```

��������
--------
```
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq���ͣ�PE��SE��PSE����PE+SE�����˼�˫�ˣ�
#{"name": "seq_id_list", "type": "infile"�� "format": "sequence.fastx_id"},     # ��Ҫ��ȡ/�޳���sequence ID list�ļ������ú󣬱���ͬʱ����"fastq_dir"��"extract_type"����
#{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"}, # �����ʿغ��fastq�ļ������а���list�ļ�
{"name": "sam", "type": "infile", "format": "align.bwa.sam_dir"},     # sam��ʽ�ļ�,�ں���Ӧlist�ļ�
#{"name": "extract_type", "type": "string", "default": "Del"},  # ����fq���ͣ�Del(ɾ����Ӧseq_id������) Fliter����ȡ��Ӧseq_id�����У�
```

�����߼�
-------
1.����ȷ��"fq_type"���ͣ�

2. ������"sam"����ʱ��ֱ�Ӵ�sam�ļ������mapping��unmapping �����д�ɶ�Ӧ��fq�ļ���

3.���������������fq�ļ���
