cdhit_split_fasta
==========================

模块Path
-----------

**tools.sequence.cdhit_split_fasta**

功能描述
-----------------------------------

将fasta序列从长到短切割为指定份数的序列

调用程序
-----------------------------------

cd-hit-div

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/gene-structure/TransDecoder-3.0.0/util/bin/  # cd-hit软件安装路径`



主要命令及功能模块
-----------------------------------

```
cd-hit-div -i gene.geneset.tmp.fa -o gene.geneset.tmp.fa.div -div n
```

参数设计
-----------------------------------

```
{"name":"gene_tmp_fa","type":"infile","format":"sequence.fasta"},#输入序列
{"name": "number","type":"int","default": 1},#切分为几份
{"name":"ou_dir","type":"string","default":""}#输出路径
```

运行逻辑
-----------------------------------

输入一个fasta文件，指定切割份数n，将fasta序列从长到短切割为n个文件并放在指定目录下

资源配置
-----------------------------------

```
        self._cpu = 1
        self._memory = str(os.path.getsize(self.option("gene_tmp_fa").prop['path']) / 100000000 + 2) + 'G'
```

测试命令
-----------------------------------
data = {
       "id": "split_fasta_zoux_test",
       "type": "tool",
       "name": "sequence.cdhit_split_fasta",
       "options": {
           "gene_tmp_fa": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/gene.uniGeneset.fa",
           "number":7,
           "ou_dir" : "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/fasta"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_split_fasta_zoux_test

测试结果
-----------------------------------