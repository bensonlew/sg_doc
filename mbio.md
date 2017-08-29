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
| [fastq2mongo_dc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/paternity_test/fastq2mongo_dc.py) | [paternity_test.fastq2mongo_dc] (mbio.modules.paternity_test/fastq2mongo_dc) |实现亲子的fastq转tab的功能，通过类型判断pt or dcpt选择使用哪个流程转tab| |
| [pt_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/paternity_test/pt_analysis.py) | [paternity_test.pt_analysis] (mbio.modules.paternity_test/pt_analysis) |实现根据父本，母本，胎儿的tab文件，然后进行合并家系，然后在进行分析| |
| [ppinetwork_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/protein_regulation/ppinetwork_analysis.py) | [protein_regulation.ppinetwork_analysis] (mbio.modules.protein_regulation/ppinetwork_analysis) | 可以根据一列gene_id，来预测这些基因之间的蛋白质互作关系，并对预测出的网络进行拓扑属性分析| |
| [refrna_assemble](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/assemble/refrna_assemble.py) | [assemble.refrna_assemble](/mbio/module/assemble/refrna_assemble) | 对所有样本进行组装合并，并对合并后的结果进行信息统计和新转录本预测|   |
| [alpha_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/alpha_diversity/alpha_diversity.py) | [meta.alpha_diversity.alpha_diversity] | 无rst文档 |    |
| [beta_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/beta_diversity/beta_diversity.py)  | [meta.beta_diversity.beta_diversity] | 无rst文档 |    |
| [corr_network_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/corr_network_analysis.py) | [meta.otu.corr_network_analysis] | 该module用于与测物种之间的相关性，构建出相关性网络，然后对网络进行拓扑属性分析 |    |
| [otu_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/otu_analysis.py) | [meta.otu.otu_analysis] | 无rst文档 |    |
| [miseq_qc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/qc/miseq_qc.py)  | [meta.qc.miseq_qc] | 无rst文档 |    |
| [sample_extract] (http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/sample_extract/sample_extract.py) | [meta.sample_extract.sample_extract] | 无rst文档 |    |
| [ref_annotation] (http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/annotation/ref_annotation.py) | [ref_rna.ref_annotation](/mbio/module/ref_rna/ref_annotation) |  |    |
| [sequence.meta_genomic](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/modules/sequence/meta_genomic.py)|[sequence/meta_genomic](/mbio/module/sequence/meta_genomic) | 宏基因样本解压及碱基质量统计 |  |
| [rna.rnaseq_mapping](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/ref-rna/src/mbio/modules/rna/rnaseq_mapping.py)|[rna/rnaseq_mapping](/mbio/module/rna/rnaseq_mapping) | rna reads比对模块 |  |  |
| [meta_genomic.qc_and_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/modules/meta_genomic/qc_and_stat.py)|[meta_genomic/qc_and_stat](/mbio/module/meta_genomic/qc_and_stat) | 宏基因质控及信息统计 |  |
| [meta_genomic.common_anno_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/modules/meta_genomic/common_anno_stat.py)|[meta_genomic.common_anno_stat](/mbio/module/meta_genomic/common_anno_stat) | 宏基因nr/cog/kegg注释部分的丰度统计表模块 |  |
| [meta_genomic.cazy_align_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/modules/meta_genomic/cazy_align_anno.py)|[meta_genomic.cazy_align_anno](/mbio/module/meta_genomic/cazy_align_anno) | 宏基因cazy注释部分 | 宏基因流程 |
| [meta_genomic.ssu_align_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/modules/meta_genomic/ssu_align_anno.py)|[meta_genomic.ssu_align_anno](/mbio/module/meta_genomic/ssu_align_anno) | 宏基因ssu注释部分 | 宏基因流程 |
## tool

tools存放目录为：`src\mbio\tools`

> 说明文档包含要点：功能描述、调用软件、调用package、参数设置、环境变量、运行逻辑、资源配置、测试示例。

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|---------|
| [bwa](/mbio/tools/align/bwa0)||||
| [ppinetwork_map](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/protein_regulation/ppinetwork_map.py)| [protein_regulation.ppinetwork_map](/mbio/tools/protein_regulation/ppinetwork_map) | 使用STRINGdb这个R包，将要预测的基因ID map到stingID，用于后面的蛋白质互作预测| |
| [ppinetwork_predict](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/protein_regulation/ppinetwork_predict.py)| [protein_regulation.ppinetwork_predict](/mbio/tools/protein_regulation/ppinetwork_predict) | 根据stingID来预测蛋白质之间的互作关系| |
| [ppinetwork_topology](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/protein_regulation/ppinetwork_topology.py)| [protein_regulation.ppinetwork_topology](/mbio/tools/protein_regulation/ppinetwork_topology) | 对预测得到的蛋白质互作网络进行拓扑属性的分析| |
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
| [transcript_abstract](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/transcript_abstract.py) | [transcript_abstrac] (mbio/tools/annotation/transcript_abstract)| 提取exons和最长转录本 |             |
| [merge_annot](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/merge_annot.py) | [merge_annot] (mbio/tools/annotation/merge_annot)| cog、go、kegg注释结果合并 |cog、go、kegg分类及富集         |
| [blast_annotation](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/blast_annotation.py) | [blast_annotation] (mbio/tools/annotation/blast_annotation)|对blast结果进行evalue、score、similarity、identity筛选并进行E-value分布和相似度分布的统计 |         |
| [swissprot](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/swissprot.py) | [swissprot] (mbio/tools/annotation/swissprot)| Swiss-Prot注释 |             |
| [string2cog](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/cog/string2cogv9.py) | [string2cog] (mbio/tools/annotation/string2cog)| cog注释及统计 |             |
| [go_annotation](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/go/go_annotation.py) | [go_annotation] (mbio/tools/annotation/go_annotation)| go注释及统计(xml) |             |
| [go_upload](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/go/go_upload.py) | [go_upload] (mbio/tools/annotation/go_upload)| go注释及统计(table) |             |
| [kegg_annotation](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/kegg/kegg_annotation.py) | [kegg_annotation] (mbio/tools/annotation/kegg_annotation)| kegg注释及统计(xml) |             |
| [kegg_upload](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/kegg/kegg_upload.py) | [kegg_upload] (mbio/tools/annotation/kegg_upload)| go注释及统计(table) |             |
|[cazy_align](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/align/cazy_align.py)| [cazy_align](mbio/tools/align/cazy_align)| 碳水化合物活性酶注释比对环节，比对软件hmmscan |             |
|[fastq_ungz](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/sequence/fastq_ungz.py)|[fasq_ungz](mbio/tools/sequence/fastq_ungz)| 解压文件fastq文件|      |
|[ssu_taxon](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/taxon/ssu_taxon.py)|[ssu_taxon](mbio/tools/taxon/ssu_taxon)|silva库SSU注释| |
|[human_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/annotation/kegg/human_anno.py)|[huamn_taxon](mbio/tools/annotation/kegg/human_anno)|humann-0.99注释kegg相对丰度||
|[hmmscan](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/align/hmmscan.py)|[hmmscan](mbio/tools/align/hmmscan)|hmmscan软件比对dbCAN数据库|    |
|[cat_hmmscanout](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/align/cat_hmmscanout.py)|[cat_hmmscanout](mbio/tools/align/cat_hmmscanout)|比对合并|   |
|[cazy_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/annotation/cazy_anno.py)|[cazy_anno](mbio/tools/annotation/cazy_anno)| cazy注释|    |
|[star](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/ref-rna/src/mbio/tools/align/star.py)|[star](mbio/tools/align/star)|star比对|    |
|[sequence.sickle_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/sequence/sickle_stat.py)|[sequence.sickle_stat](mbio/tools/sequence/sickle_stat)| 质控前后序列信息统计 |    |
|[metagen_nr](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/metagen_nr.py)|[metagen_nr](mbio/tools/meta_genomic/metagen_nr)| 宏基因获得nr的tax_profile物种分类信息表 |    |
|[nr_tax_level](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/nr_tax_level.py)|[nr_tax_level](mbio/tools/meta_genomic/nr_tax_level)| 宏基因获得nr注释后的各级物种分类信息丰度表 |    |
|[metagen_cog_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/metagen_cog_stat.py)|[metagen_cog_stat](mbio/tools/meta_genomic/metagen_cog_stat)| 宏基因获得cog注释后的各样本注释信息丰度表 |    |
|[metagen_kegg_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/metagen_kegg_stat.py)|[metagen_kegg_stat](mbio/tools/meta_genomic/metagen_kegg_stat)| 宏基因kegg注释结果统计tool |    |
|[metagen_kegg_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/metagen_kegg_anno.py)|[metagen_kegg_anno](mbio/tools/meta_genomic/metagen_kegg_anno)| 宏基因kegg注释tool |    |
|[meta_genomic.cog_anno](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/cog_anno.py)|[meta_genomic.cog_anno](mbio/tools/meta_genomic/cog_anno)| 宏基因cog注释tool |    |
|[sequence.remove_short_reads](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/sequence/remove_short_reads.py)|[sequence.remove_short_reads](mbio/tools/sequence/remove_short_reads)| 去除fastq文件中长度较短的reads | 宏基因流程质控模块（qc_and_stat） |
|[soap_denovo](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/assemble/soap_denovo.py) | [assemble.soap_denovo](/mbio/tools/assemble/soap_denovo)| 宏基因SOAPdenovo2软件组装|   |
|[get_contig](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/assemble/get_contig.py) | [assemble.get_contig](/mbio/tools/assemble/get_contig)| 宏基因对SOAPdenovo2软件组装结果去N去低质量|   |
|[metagen_ass_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/assemble/metagen_ass_stat.py) | [assemble.metagen_ass_stat](/mbio/tools/assemble/metagen_ass_stat)| 宏基因对统计结果进行汇总，并挑出最佳结果|   |
|[metagene](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/assemble/metagene.py) | [assemble.metagene](/mbio/tools/assemble/metagene)| 宏基因metagene基因预测|   |
|[fastq_mt_fasta](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/fastq_mt_fasta.py) | [meta_genomic.fastq_mt_fasta](/mbio/tools/meta_genomic/fastq_mt_fasta)| 宏基因质控后的fastq合并生成fasta文件|   |
|[add_ssu_result](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/add_ssu_result.py) | [meta_genomic.add_ssu_result](/mbio/tools/meta_genomic/add_ssu_result)| 合并同一样本的ssu注释结果|   |
|[cat_ssu_result](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/tools/meta_genomic/cat_ssu_result.py) | [meta_genomic.cat_ssu_result](/mbio/tools/meta_genomic/cat_ssu_result)| 合并不同样本的ssu注释结果|   |
| [data_split](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/data_split.py)|[paternity_test.data_split](/mbio/tools/paternity_test/data_split)|医学流程数据拆分| |
| [merge_fastq](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/merge_fastq.py)|[paternity_test.merge_fastq](/mbio/tools/paternity_test/merge_fastq)|医学流程fastq合并| |
| [bam2tab](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/bam2tab.py)|[paternity_test.bam2tab](/mbio/tools/paternity_test/bam2tab)|亲子鉴定流程中bam文件转tab| |
| [dedup](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/dedup.py)|[paternity_test.dedup](/mbio/tools/paternity_test/dedup)|亲子鉴定流程中父本查重模块| |
| [family_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/family_analysis.py)|[paternity_test.family_analysis](/mbio/tools/paternity_test/family_analysis)|亲子鉴定流程中家系表分析计算有效值，无效值等| |
| [family_merge](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/family_merge.py)|[paternity_test.family_merge](/mbio/tools/paternity_test/family_merge)|亲子鉴定流程中父本，母本，胎儿进行合并家系| |
| [family2bam](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/family2bam.py)|[paternity_test.family2bam](/mbio/tools/paternity_test/family2bam)|亲子鉴定流程中杂交捕获，fastq转为中间bam文件| |
| [family_tab](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/family_tab.py)|[paternity_test.family_tab](/mbio/tools/paternity_test/family_tab)|亲子鉴定流程中多重fastq转tab| |
| [result_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/master/src/mbio/tools/paternity_test/result_info.py)|[paternity_test.result_info](/mbio/tools/paternity_test/result_info)|亲子鉴定流程中完成所有的画图功能| |



## file

files存放目录为：`src\mbio\files`

> 说明文档包含要点：格式说明、格式属性（值和说明描述）、方法函数（参数、功能说明、格式示例）

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|---------|
| [merge_txt](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/assembly/merge_txt.py) |  [assembly.merge_txt] |     |   |  
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
| [anno_upload](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/annotation/upload/anno_upload.py)  |  [annotation.anno_upload](/mbio/files/annotation/anno_upload) |  客户上传kegg/go注释文件 |     |
| [go_level2](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/annotation/go/level2.py)  |  [annotation.go_level2](/mbio/files/annotation/go_level2)  |  go注释level2文件 |     |
| [go_list](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/annotation/go/go_list.py)  |  [annotation.go_list](/mbio/files/annotation/go_list)  |  go注释list文件 |     |
| [kegg_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/ref-rna/src/mbio/files/annotation/kegg/kegg_table.py)  |  [annotation.kegg_table](/mbio/files/annotation/kegg_table) |  kegg注释kegg_table文件 |     |
| [baif_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/files/sequence/baif_dir.py)|[baif_dir](/mbio/files/sequence/baif_dir)| fastq碱基统计结果表的文件夹|      |
| [profile_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/blob/meta_genomic/src/mbio/files/sequence/profile_table.py)|[profile_table](/mbio/files/sequence/profile_table)| 宏基因非冗余基因集生成的reads_profile.txt|     |

## package

packages存放目录为：`src\mbio\packages`

> 说明文档包含要点：功能描述、参数说明、函数功能

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|-----|
| [trans_step](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/assemble/trans_step.py) | [assemble.trans_step] |             |       |
| [copy_demo](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/copy_demo.py) | [meta.copy_demo] |             |         |
| [export_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/export_otu.py) | [meta.otu.export_otu] |             |       |
| [pan_core_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/pan_core_otu.py) | [meta.otu.pan_core_otu] |             |       |
| [kegg_annotation](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/annotation/kegg_annotation.py) | [annotation.kegg_annotation](/mbio/packages/annotation/kegg_annotation) |             |       |
| [ref_annotation_query](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/annotation/ref_annotation_query.py) | [annotation.ref_annotation_query](/mbio/packages/annotation/ref_annotation_query) |             |       |
| [transcript_gene](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/annotation/transcript_gene.py) | [annotation.transcript_gene](/mbio/packages/annotation/transcript_gene) |             |       |
