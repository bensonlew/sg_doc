生信模块库
==========
生信模块存放目录为：`src\mbio`

* [workflow](#user-content-workflow)
* [module](#user-content-module)
* [tool](#user-content-tool)
* [file](#user-content-module)
* [package](#user-content-package)


## workflow

workflow存放目录为：`src\mbio\workflows`

> 说明文档包含要点：功能描述、调用模块、模块关系图、结果目录。

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|----|
| [metabase](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/workflows/meta/meta_base.py)|[meta.metabase](/mbio/workflows/metabase)|微生物多样性流程基础分析工作流.| |
|         |       |             | |

## module

modules存放目录为：`src\mbio\modules`

> 说明文档包含要点：功能描述、调用模块、模块关系图、参数设置、运行逻辑。

| 模块名称 | 路径  | 功能说明 |相关应用|
| ------- |-------|-------------|-----|
| [refrna_assemble](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/assemble/refrna_assemble.py) | [assemble.refrna_assemble](/mbio/module/assemble/refrna_assemble) | 对所有样本进行组装合并，并对合并后的结果进行信息统计和新转录本预测|   |
| [alpha_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/alpha_diversity/alpha_diversity.py) | [meta.alpha_diversity.alpha_diversity] | 无rst文档 |    |
| [beta_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/beta_diversity/beta_diversity.py)  | [meta.beta_diversity.beta_diversity] | 无rst文档 |    |
| [corr_network_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/corr_network_analysis.py) | [meta.otu.corr_network_analysis] | 无rst文档 |    |
| [otu_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/otu_analysis.py) | [meta.otu.otu_analysis] | 无rst文档 |    |
| [miseq_qc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/qc/miseq_qc.py)  | [meta.qc.miseq_qc] | 无rst文档 |    |
| [sample_extract] (http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/sample_extract/sample_extract.py) | [meta.sample_extract.sample_extract] | 无rst文档 |    |
|         |       |             |  |

## tool

tools存放目录为：`src\mbio\tools`

> 说明文档包含要点：功能描述、调用软件、调用package、参数设置、环境变量、运行逻辑、资源配置、测试示例。

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|---------|
| [new_transcripts](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/new_transcripts.py) | [assemble.new_transcripts](/mbio/tools/assemble/new_transcripts) | 根据class_code,挑选新转录本(i,j,o,u,x)和新基因(u) |   |
| [gffcompare](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/gffcompare.py) | [assemble.gffcompare](/mbio/tools/assemble/gffcompare) | 对gtf结果进行比较 |   |
| [stringtie_merge](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/stringtie_merge.py) | [assemble.stringtie_merge](/mbio/tools/assemble/stringtie_merge) | 样本合并|   |
| [stringtie](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/stringtie.py) | [assemble.stringtie](/mbio/tools/assemble/stringtie) | 单个样本组装|   |
| [cuffmerge](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/cuffmerge.py) | [assemble.cuffmerge](/mbio/tools/assemble/cuffmerge) | 样本合并|   |
| [cufflinks](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/assemble/cufflinks.py) | [assemble.cufflinks](/mbio/tools/assemble/cufflinks) | 单个样本进行组装|   |
| [estimators](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/alpha_diversity/estimators.py) | [meta.alpha_diversity.estimators](/mbio/tools/meta/estimators) | 计算样本的多样性指数ace、chao、shannon |             |
| [rarefaction](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/alpha_diversity/rarefaction.py) | [meta.alpha_diversity.rarefaction](/mbio/tools/meta/rarefaction) | 比较测序数据量不同的样本中物种的丰富度 |             |
| [anosim_box](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/anosim_box.py) | [meta.beta_diversity.anosim_box] |             |             |
| [anosim](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/anosim.py) | [meta.beta_diversity.anosim](/mbio/tools/meta/anosim) | 进行AdonisAnosim分析 |             |
| [dbrda](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/dbrda.py) | [meta.beta_diversity.dbrda](/mbio/tools/meta/dbrda) | 进行db-RDA分析 |             |
| [distance_box](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/distance_box.py) | [meta.beta_diversity.distance_box](/mbio/tools/meta/distance_box) |绘制distanbox|             |
| [distance_calc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/distance_calc.py) | [meta.beta_diversity.distance_calc](/mbio/tools/meta/distance_calc) | 用于计算otu表中样本的距离矩阵 |             |
| [enterotyping](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/enterotyping.py) | [meta.beta_diversity.enterotyping](/mbio/tools/meta/enterotyping) | 微生物样本菌群分型分析，对样本进行分型聚类 |             |
| [environmental_regression](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/environmental_regression.py) | [meta.beta_diversity.environmental_regression] |             |             |
| [hcluster](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/hcluster.py) | [meta.beta_diversity.hcluster](/mbio/tools/meta/hcluster) |基于距离矩阵获得样本树文件newick tree|             |
| [metagenomeseq](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/metagenomeseq.py) | [meta.beta_diversity.metagenomeseq] |             |             |
| [meta_sourcetracker](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/meta_sourcetracker.py) | [meta.beta_diversity.meta_sourcetracker](/mbio/tools/meta/meta_sourcetracker) | 微生物涞源组成比例分析，根据已有的物种信息，通过运算获得每个source环境对每个sink样本的相对贡献比例。 |             |
| [nmds](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/nmds.py) | [meta.beta_diversity.nmds](/mbio/tools/meta/nmds) |进行NMDS分析|             |
| [n_pca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/n_pca.py) | [meta.beta_diversity.n_pca] |             |             |
| [pca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/pca.py) | [meta.beta_diversity.pca](/mbio/tools/meta/pca) | 进行PCA分析 |             |
| [pcoa](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/pcoa.py) | [meta.beta_diversity.pcoa](/mbio/tools/meta/pcoa) | 进行PCOA分析 |             |
| [plot-enterotyping](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/plot-enterotyping.py) | [meta.beta_diversity.plot-enterotyping](/mbio/tools/meta/plot-enterotyping) | 在样本菌群分型分析后，调用该模块执行画图数据的生成，获取可视化需要的数据 |             |
| [randomforest](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/randomforest.py) | [meta.beta_diversity.randomforest] |             |             |
| [rda_cca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/rda_cca.py) | [meta.beta_diversity.rda_cca](/mbio/tools/meta/rda_cca) |进行RDA/CCA分析|             |
| [roc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/roc.py) | [meta.beta_diversity.roc] |             |             |
| [fastq_sample_extract](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/fastq_sample_extract.py) | [meta.fastq_sample_extract] |             |             |
| [function_predict](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/function_predict.py) | [meta.function_predict] |             |             |
| [corr_network_calc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/corr_network_calc.py) | [meta.otu.corr_network_calc] |             |             |
| [filter_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/filter_otu.py) | [meta.otu.filter_otu] |             |             |
| [otu_association](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otu_association.py) | [meta.otu.otu_association] |             |             |
| [otunetwork](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otunetwork.py) | [meta.otu.otunetwork] |             |             |
| [otu_taxon_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otu_taxon_stat.py) | [meta.otu.otu_taxon_stat](/mbio/tools/meta/otu_taxon_stat) | 根据原始的otu表和otu的分类信息表生成绝对丰度和相对丰度的单一水平物种分类统计表和多水平物种分类统计 |             |
| [pan_core_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/pan_core_otu.py) | [meta.otu.pan_core_otu] |             |             |
| [sort_samples](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/sort_samples.py) | [meta.otu.sort_samples](/mbio/tools/meta/sort_samples) | 传入一个group表，以及是否进行样本合并的参数生成一张OTU表并对并依照group表OTU表进行筛选合并 |             |
| [sub_sample](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/sub_sample.py) | [meta.otu.sub_sample] |             |             |
| [usearch_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/usearch_otu.py) | [meta.otu.usearch_otu](/mbio/tools/meta/usearch_otu) | 对多样本序列进行OTU聚类分析 |             |
| [pipe_submit_all](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/pipe/pipe_submit_all.py) | [meta.pipe.pipe_submit_all] |             |             |
| [base_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/base_info.py) | [meta.qc.base_info](/mbio/tools/meta/base_info) | 用于统计一个fastq_dir文件夹下所有fastq的文件的碱基质量 |             |
| [qc_format](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/qc_format.py) | [meta.qc.qc_format] |             |             |
| [reads_len_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/reads_len_info.py) | [meta.qc.reads_len_info](/mbio/tools/meta/reads_len_info) |用于统计一个fasta_dir或fastq_dir下的所有文件的碱基长度分布信息|             |
| [samples_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/samples_info.py) | [meta.qc.samples_info](/mbio/tools/meta/samples_info) | 用于统计一个fastq_dir/或者fasta_dir的样本信息|             |
| [sample_check](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/sample_check.py) | [meta.sample_check] |             |             |
| [phylo_tree](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/phylo/phylo_tree.py) | [phylo.phylo_tree] |             |             |
|         |       |             |             |

## file

files存放目录为：`src\mbio\files`

> 说明文档包含要点：格式说明、格式属性（值和说明描述）、方法函数（参数、功能说明、格式示例）

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|---------|
| [merge_txt](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/assembly/merge_txt.py.py) |  [assembly.merge_txt.py] |     |   |  
| [group_file_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/alpha_diversity/group_file_dir.py) | [meta.alpha_diversity.group_file_dir] |             |             |
| [distance_matrix](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/beta_diversity/distance_matrix.py) | [meta.beta_diversity.distance_matrix] |             |             |
| [newick_tree](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/beta_diversity/newick_tree.py) | [meta.beta_diversity.newick_tree] |             |             |
| [env_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/env_table.py) | [meta.env_table] |             |             |
| [biom](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/biom.py) | [meta.otu.biom] |             |             |
| [group_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/group_table.py) | [meta.otu.group_table] |             |             |
| [otu_seqids](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/otu_seqids.py) | [meta.otu.otu_seqids] |             |             |
| [otu_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/otu_table.py) | [meta.otu.otu_table] |             |             |
| [pan_core_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/pan_core_table.py) | [meta.otu.pan_core_otu] |             |             |
| [tax_summary_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/tax_summary_dir.py) | [meta.otu.tax_summary_dir] |             |             |
| [venn_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/venn_table.py) | [meta.otu.venn_table] |             |             |
| [gff3](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/sequence/gff3.py) | [sequence.gff3] |gff3文件check,parse方法  |             |
| [gtf](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/sequence/gtf.py)  |  [sequence.gtf]     | gtf文件check,parse方法|             |
| [sequence_ontology](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/sequence/sequence_ontology.py)  |  [sequence.sequence_ontology] |sequence_ontology(.obo文件解析与检查)|             |
| [bam](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/ref_rna/bam.py)  |  [ref_rna.bam]     | bam文件检查  |             |
| [ctab](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/ref_rna/ctab.py)  |  [ref_rna.ctab]     | ctab格式检查  |组装，rna表达量定量|
| [summary](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/)  |  [ref_rna.summary]     |   featureCounts 输出的summary文件|ref_rna表达量定量|
| [bam_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/ref_rna/assembly/bam_dir.py)  |  [ref_rna.assembly.bam_dir] |  只有bam文件的文件夹检查 |  ref-rna, 组装,基因结构等分析  |

## package

packages存放目录为：`src\mbio\packages`

> 说明文档包含要点：功能描述、参数说明、函数功能

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|-----|
| [trans_step](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/assemble/trans_step.py) | [assemble.trans_step] |             |       |
| [copy_demo](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/copy_demo.py) | [meta.copy_demo] |             |         |
| [export_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/export_otu.py) | [meta.otu.export_otu] |             |       |
| [pan_core_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/pan_core_otu.py) | [meta.otu.pan_core_otu] |             |       |
