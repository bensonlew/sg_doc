�ʿ���sickleȥ����
===========

Tool ˵��
-----------------------------------

PATH
---------

**sequence.sickle**

���򼰰�װ·��
------------
/bioinfo/seq/sickle-1.33/sickle

��������
--------
�����ʿأ�QC����ȥ������������

��Ҫ�������ģ��
------------------
```
sickle pe  -f clip.1.fq.gz  -r clip.2.fq.gz -t sanger -q 20 -l 50 -n -o clip.sickle.1.fq -p clip.sickle.2.fq -s clip.sickle.s.fq
```

��������
--------
```
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # �����ļ�PE���Ҷ�����
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # PE���������
{"name": "fastq_s", "type": "infile", "format": "sequence.fastq"},  # SE����
{"name": "sickle_r", "type": "outfile", "format": "sequence.fastq"},  # PE���Ҷ�������
{"name": "sickle_l", "type": "outfile", "format": "sequence.fastq"},  # PE�����������
{"name": "sickle_un", "type": "outfile", "format": "sequence.fastq"},  # PE��δ���������
{"name": "sickle_s", "type": "outfile", "format": "sequence.fastq"},  # SE������
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "sickle_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "quality", "type": "int", "default": 30},
{"name": "length", "type": "int", "default": 30},
{"name": "qual_type", "type": "string", "default": 'sanger'},
{"name": "truncate-n", "type": "bool", "default": True},
{"name": "fq_type", "type": "string"},
{"name": "pipeline", "type": "string", "default": ''}
```

�����߼�
-------
1.���������fq���ļ��У��ڸ�������Ʒ��fq�ļ��Լ���Ӧlist����seq_prep������������

2.����������Ʒ����sickle���ȥ�������У�

3.����ʿغ�����У������ɶ�Ӧ��list�ļ����»���ʹ�á�
