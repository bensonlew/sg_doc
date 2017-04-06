多功能柱状图
========
**Author：zj**
lib：threeplot_column_bar_line.js
demo: 暂无

# 说明

多功能柱状图，应用于KEGG pathway分类统计图（二级分类柱状图）、GO注释柱形图（双坐标二级分类柱状图）、功能注释（总览）柱状图（每个柱子上面标有百分比数值）、SNP等

# content参数

* data1: 柱状图柱子数据，三维数据
* data2: 柱状图线数据，三维数据
* name: data2（线）的名字
* names: 为data2（三条线）的名字,为图上的线加标记
* params: 图片其他参数
	+ title：设定图片的名称
	+ x_label：设定图片的横坐标名称
	+ y_label：设定图片的纵坐标名称
	+ types: 柱子类型
	+ showInLegend：是否显示图例
	+ pointWidth: 柱子宽度
	+ plotOptions： 柱子是否叠加
	+ dcoordinate：是否为双坐标

# 参数示例

	```
	contents={
	  "data1":[[
	    {name:'binding',color:'#7fb80e',num:58.5,y:16151},
	    {name:'catalytic activity',color:'#7fb80e',num:19.6,y:11392},
	    {name:'transporter activity',color:'#7fb80e',num:41.3,y:1640},
	    {name:'cell',color:'#f47920',num:46.5,y:12846},
	    {name:'cell part',color:'#f47920',num:46.5,y:12846},
	    {name:'membrane',color:'#f47920',num:28.5,y:7877},
	    {name:'organelle',color:'#f47920',num:33.1,y:9142},
	    {name:'cellular process',color:'#426ab3',num:63.2,y:17451},
	    {name:'metabolic process',color:'#426ab3',num:59.0,y:16287},
	    {name:'single-organism process',color:'#426ab3',num:53.3,y:14718},
	    {name:'biological regulation',color:'#426ab3',num:34.7,y:9577}
	  ],[]],
	  "data2":[[
	      {x:0,y:24000,notip:true},
	      {x:1,y:24000,notip:true},
	      {x:2,y:24000,notip:true},
	  ],[
	      {x:3,y:24000,notip:true},
	      {x:4,y:24000,notip:true},
	      {x:5,y:24000,notip:true},
	      {x:6,y:24000,notip:true},
	  ],[
	      {x:7,y:24000,notip:true},
	      {x:8,y:24000,notip:true},
	      {x:9,y:24000,notip:true},
	      {x:10,y:24000,notip:true},
	  ]],
	  "name":['molecular_function', 'cellular_component', 'biological_process'],
	  "names":[],
	  "params":{
	    "title":'GO分类统计',
	    "x_label":"Taxonomy",
	    "y_label":"Number of genes(Up/Down)",
	    "types":'bar',
	    "showInLegend":'false',
	    "pointWidth":22,   
	  }
	}
	'''
