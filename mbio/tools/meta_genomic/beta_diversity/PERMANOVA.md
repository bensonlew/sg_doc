
����˵��
==========================

Path
-----------

**betadiversity.PERMANOVA**  # ����Ŀ¼���ã�����

����װ·��
-----------------------------------


ʹ�ó���
-----------------------------------

perl PERMANOVA.pl -i input -env env.txt -o permanova.xls -rg group -pe times

���ܺ���;����
-----------------------------------

�����û���Ԫ�����������

��Ҫ�������ģ��
-----------------------------------

perl PERMANOVA.pl -i input -env env.txt -o permanova.xls -rg group -pe times

�������
-----------------------------------

::

            {"name": "method", "type": "string","default":"bray_curtis"},  # Ĭ�Ͼ����㷨��Ĭ��ѡ�����
            {"name": "input1", "type": "infile", "format": "abundance_table"},  # �����ļ�,Ϊ��ȱ�
            {"name": "input2", "type": "infile", "format": "distancematrix"},  # �����ļ����������ѡ���ṩ�������ʱ������otutable�;����㷨��
            {"name": "input3", "type": "infile", "format": "GroupMaping"},  # ƥ���ļ���������Ϣ
            {"name": "field", "type": "string"},  # ѡ��һ�ַ��鷽��
            {"name": "input4", "type": "infile", "format": "env"},# ���������ļ�
            {"name": "output", "type": "outfile", "format": "AdonisAnosimResult"},  # ���������


�����߼�
-----------------------------------

��ͨ�������㷨�ͷḻ���þ����������ṩ�˾�����󣬸��������ߣ����ݷ�����Ϣ���з���������������