ȥ��bwa�ȶԵ��Ľ��
===========

Tool ˵��
-----------------------------------

PATH
---------

**align.bwa.remove_host_reads**

���򼰰�װ·��
------------
/bioinfo/seq/scripts/remove_AlignSeq_bysam.pl

��������
--------
��sam�ļ�����ȡ�ȶԵ����������У������ʿ�fastq���޳�

��Ҫ�������ģ��
------------------
```
���sam�ļ��������������ID�����ʿ�fastq����Ӧ�����޳�
```

��������
--------
```
{"name": "bwa_dir", "type": "infile", "format": "align.bwa.sam_dir"} , # bwa�ȶ������õ���sam�ļ���
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  #�ʿغ��fastq�ļ��У�����list�ļ�
{"name": "fq_type", "type": "string", "default": ""},  # fq����PE or SE���ش�
{"name": "remove_host_dir", "type": "outfile", 'format': "sequence.fastq_dir"},  # ����ļ���,����list�ļ�
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
```

�����߼�
-------
1.���bwa�ȶԵ�sam��ʽ�ļ��Ƿ���ȷ��

2.����remove_AlignSeq_bysam.pl��ȡsam�ļ�������ID�����Ӷ�Ӧfastq�ļ����޳���

3.����޳��������к��fastq��list�ļ����á�
