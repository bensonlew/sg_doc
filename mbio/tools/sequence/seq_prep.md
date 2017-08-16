�ʿ���seq_prepȥ��ͷ
===========

Tool ˵��
-----------------------------------

PATH
---------

**sequence.seq_prep**

���򼰰�װ·��
------------
/bioinfo/seq/SeqPrep

��������
--------
�����ʿأ�QC������ȥ���������˵Ľ�ͷ

��Ҫ�������ģ��
------------------
```
SeqPrep  -f raw.1.fq  -r raw.2.fq  -1 clip.1.fq.gz  -2 clip.2.fq.gz  -q 20  -L 50  -A adapter1  -B adapter2
```

��������
--------
```
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # �����ļ�PE���Ҷ�����
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # PE���������
{"name": "seqprep_r", "type": "outfile", "format": "sequence.fastq"},  # PE���Ҷ�������
{"name": "seqprep_l", "type": "outfile", "format": "sequence.fastq"},  # PE�����������
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "seqprep_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "quality", "type": "int", "default": 30},
{"name": "length", "type": "int", "default": 30},
{"name": "adapter_a", "type": "string", "default": "AGATCGGAAGAGCACACGTC"},
{"name": "adapter_b", "type": "string", "default": "AGATCGGAAGAGCGTCGTGT"},
```

�����߼�
-------
1.���������fq���ļ��У��ڸ�������Ʒ��fq�ļ��Լ���Ӧlist��

2.����������Ʒ����SeqPrep���ȥ�����н�ͷ��

3.���ȥ��ͷ������У������ɶ�Ӧ��list�ļ����»���ʹ�á�
