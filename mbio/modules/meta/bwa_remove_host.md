ȥ����
===========

Moudle ˵��
-----------------------------------

PATH
---------

**meta.remove_host**

���򼰰�װ·��
------------

/app/bioinfo/align/bwa-0.7.9a/bwa

��������
--------
��reads�ȶ�����DNA���У���ȥ���ȶ������Ըߵ���Ⱦreads��

��Ҫ�������ģ��
------------------
```
tool:align.bwa
tool:sequece.fastq_extract
tool:sequence.fastq_stat
```

��������
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # �����ʿغ��fastq�ļ������а���list�ļ�
{"name": "ref_database", "type": "string", "default": ""},  # �����ο����п��ж�Ӧ����������eg��E.coli ,B.taurus
{"name": "ref_undefined", "type": "infile", "format": "sequence.fasta_dir"},  # δ������������������ļ��У��������cat��һ���ļ�������Ϊtool:align.bwa�������ļ�
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq���ͣ�PE��SE��PSE����PE+SE�����˼�˫�ˣ�
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ȥ��������ļ��У��ں�����ƽfq�ļ��Ͷ�Ӧlist�ļ�
```

�����߼�
-------
1.��"fastq_dir"��"ref_database"/"ref_undefined"��������������ʱ������[align.bwa] toolȥ������mapping��

2.����mapping���������[sequece.fastq_extract] toolȥ���������������У�

3.[sequence.fastq_stat] toolͳ��ȥ�������������Ϣ��
