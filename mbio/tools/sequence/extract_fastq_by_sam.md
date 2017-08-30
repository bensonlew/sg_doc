samÖÐÌáÈ¡fastq
===========

Tool ËµÃ÷
-----------------------------------

PATH
---------

**sequence.extract_fastq_by_sam**

¹¦ÄÜÃèÊö
--------
´ÓsamÖÐÌáÈ¡unmap/mapÉÏµÄfqÐòÁÐ£¬²¢Í³¼ÆÐòÁÐÐÅÏ¢¡£

Ö÷ÒªÃüÁî¼°¹¦ÄÜÄ£¿é
------------------
```
/bioinfo/seq/scripts/get_fq_bysam.pl
```

²ÎÊýÉèÖÃ
--------
```
{"name": "fq_type", "type": "string", "default": "PSE"},  # fqÀàÐÍ£¬PE¡¢SE¡¢PSE£¨¼´PE+SE£¬µ¥¶Ë¼ÓË«¶Ë£©
{"name": "sam", "type": "infile", "format": "align.bwa.sam_dir"},     # sam¸ñÊ½ÎÄ¼þ,ÄÚº¬¶ÔÓ¦listÎÄ¼þ
{"name": "extract_type", "type": "string", "default": "unmap"},  #ÌáÈ¡µÄfq½á¹ûÀàÐÍÊÇ 'map'µÄ»¹ÊÇ'unmap'µÄ
{"name": "reasult_dir", "type": "outfile", 'format': "sequence.fastq_dir"}  # Êä³öÎÄ¼þ¼Ð
```

ÔËÐÐÂß¼­
-------
1.Ê×ÏÈÈ·¶¨"fq_type"ÀàÐÍ¡£

2.µ±´«Èë"sam"²ÎÊýÊ±£¬¸ù¾Ý"extract_type"²ÎÊýÌáÈ¡map/unmapµÄÐòÁÐ£¬²¢Í³¼ÆfastqÐÅÏ¢¡£

3.×îÖÕÉú³ÉÉú³ÉÏà¹ØfqÎÄ¼þ¼Ð£¬ÆäÖÐº¬fq¶ÔÓ¦µÄ'list.txt'ºÍÑùÆ·¶ÔÓ¦fqÍ³¼ÆÎÄ¼þ'stat.list.txt'¡£
