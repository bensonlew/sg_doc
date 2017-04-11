气泡散点图
========
**Author：xyz**
lib：kegg_scatter.js
demo: 暂无

# 说明

气泡散点图，用于KEGG气泡图

# content参数

* data: 画图数据，二维数据
* params: 其他参数
	+ title：设定图片的名称
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

	```
	contents = {
		data: [['Ribosome', 7, 7, 0.0359694463508], //[term, study_number, backgroud_number, corrected_pvalue]
	    ['Complement and coagulation cascades', 8, 10, 0.0359694463508], ['Staphylococcus aureus infection', 8, 13, 0.0730286484349], ['Cysteine and methionine metabolism', 4, 5, 0.191935939609], ['Pertussis', 4, 6, 0.224140308891], ['Protein digestion and absorption', 5, 11, 0.303754464542], ['Systemic lupus erythematosus', 4, 10, 0.452300803754], ['Biosynthesis of amino acids', 3, 7, 0.46048092144], ['MicroRNAs in cancer', 1, 5, 0.777877490311], ['Glycolysis / Gluconeogenesis', 1, 5, 0.777877490311], ['Carbon metabolism', 1, 5, 0.777877490311], ['Spliceosome', 1, 6, 0.777877490311], ['Cell adhesion molecules (CAMs)', 1, 7, 0.777877490311], ['PI3K-Akt signaling pathway', 1, 7, 0.777877490311], ['Lysosome', 1, 7, 0.777877490311], ['Protein processing in endoplasmic reticulum', 1, 7, 0.777877490311]],
	    size: {
	        width: 800,
	        height: 17*24+200 //data.lenght * 12 + 200
	    },
	    params:{
	        title: "KEGG 富集散点图" //图名
	    }
	}
	```
