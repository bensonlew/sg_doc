ȥ����
===========

Moudle ˵��
-----------------------------------

PATH
---------

**meta_genomic.remove_host**

���򼰰�װ·��
------------

/app/bioinfo/align/bwa-0.7.9a/bwa
/bioinfo/seq/scripts/remove_AlignSeq_bysam.pl

��������
--------
��reads�ȶ�����DNA���У���ȥ���ȶ������Ըߵ���Ⱦreads��

��Ҫ�������ģ��
------------------
```
tool��align.bwa
file:align.bwa.remove_host_reads
tool:sequence.bwa_stat
```

��������
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # �����ʿغ��fastq�ļ������а���list�ļ�
{"name": "reference", "type": "infile", "format": "fasta"},  # �����ο�����
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ���ý���ļ�����Ҫ��
{"name": "remove_host_stat", "type": "outfile", "format": "sequence.profile_table"},  # ͳ��ȥ������������Ϣ
```

�����߼�
-------
1.��"fastq_dir"��"reference"��������������ʱ������align.bwa Toolȥ������mapping��
[align.bwa ԭ�������޸ģ�metagenomic�����Ѵ��ڵ������ٹ�����,��mapping�����single reads�ıȶ�];

2.����mapping�����ȥ����������������[sequence.remove_host_reads]��

3.ͳ��ȥ�������������Ϣ��
