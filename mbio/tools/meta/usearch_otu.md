usearch_otu
==========================

模块Path
-----------

**tools.meta.otu.usearch_otu**

功能描述
-----------------------------------

对多样本序列进行OTU聚类分析。

调用程序
-----------------------------------

usearch

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app/meta/usearch.v7.0`



主要命令及功能模块
-----------------------------------

```
uparse -derep_prefix meta.fasta -output meta_derepprefix.fasta -sizeout
uparse -sortbysize meta_derepprefix.fasta -output meta_derepprefix_sorted.fasta -minsize 2
uparse -cluster_otus meta_derepprefix_sorted.fasta -otus cluster.fasta -otu_radius_pct 0.03
uparse -usearch_global meta.fasta -db cluster.fasta -strand plus -id 0.97 -uc map.uc
uc2otuseqids.pl -i map.uc -o cluster.seqids
        cat cluster.seqids|awk '{split($0,line,\"\\t\");new=line[1];for(i=2;i<NF+1;i++){match(line[i],/_[^_]+$/);smp=substr(line[i],1,RSTART-1);id=substr(line[i],RSTART+1,RLENGTH);nsmp=smp;gsub(/_/,\".\",nsmp);new=new\"\\t\"nsmp\"_\"id;print nsmp\"\\t\"smp;print line[i]\"\\t\"smp >\"cluster.groups\"};print new >\"cluster.seqids.tmp\";}'|sort|uniq >name.check
        awk '{ print $1,\"OTU\"NR >\"cluster2otu.rename\";$1=\"OTU\"NR;print $0 }' cluster.seqids|sed 's/ /\\t/g' >otu_seqids.txt
        awk '{$1=\"OTU\"NR;print $0}' cluster.seqids.tmp|sed 's/ /\\t/g' > otu.seqids.tmp
make_otu_table.py -i otu.seqids.tmp  -o otu_table.biom
        cat name.check|awk '{gsub(/\\./,\"\\\\.\",$1);print \"sed '\\''s/\\\"\"$1\"\\\"/\\\"\"$2\"\\\"/g'\\''  otu_table.biom >otu_table.biom.tmp\\nmv otu_table.biom.tmp otu_table.biom\";}' >otu.name.check.sh\n\
        sh otu.name.check.sh
        biom convert -i otu_table.biom -o otu_table.txt  --table-type \"otu table\"  --to-tsv
        cat otu_table.txt|sed -n '2p'|sed 's/#//' >otu_table.xls
        cat otu_table.txt|sed -n '3,$p'|sort -V |sed 's/\\.0//g' >>otu_table.xls
        pick_rep_set.py -i otu_seqids.txt -f meta.fasta -m most_abundant -o otu_reps.fasta
```

参数设计
-----------------------------------

```
{'name': 'fasta', 'type': 'infile', 'format': 'sequence.fasta'},# 输入fasta文件，序列名称格式为'>sampleID_seqID'.
{'name': 'identity', 'type': 'float', 'default': 0.97},# 相似性值，范围0-1.
{'name': 'otu_table', 'type': 'outfile','format': 'meta.otu.otu_table'},  # 输出结果otu表
{'name': 'otu_rep', 'type': 'outfile','format': 'sequence.fasta'},  # 输出结果otu代表序列
{'name': 'otu_seqids', 'type': 'outfile','format': 'meta.otu.otu_seqids'},  # 输出结果otu中包含序列列表
{'name': 'otu_biom', 'type': 'outfile','format': 'meta.otu.biom'}  # 输出结果biom格式otu表
```

运行逻辑
-----------------------------------

各个cmd顺序运行，最后收集结果文件整理到output中。

资源配置
-----------------------------------

```
self._cpu = 10
total = os.path.getsize(self.option("fasta").prop["path"])
total = int(math.ceil(total / (1024 * 1024 * 1024)))
total = int(total * 10)
self._memory = "{}G".format(total)
```