分类柱图
========
**Author：qindanhua**
lib：go_bar.src.js
demo: 暂无

# 说明

常规饼图

# content参数

* data: 柱图数据，二维数据
* categories: 大柱的名称，及GO最大类，[BP, CC, MF]
* colors: categories对应的颜色
* params: 图片其他参数
	* title：设定图片的名称
	* x_label：设定图片的x轴
	* y_label：设定图片的y轴
	* angle: 横坐标框的角度
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

```
	content = {
		"data": [['biological_process', 'cell killing', 32, 0.0218281],['biological_process', 'cellular process', 1276, 0.87039563] ,['cellular_component', 'synapse part', 55, 0.03751705]], //[parent_name, go_name, num , rate]
		"categories": ["biological_process", "cellular_component"],
		"colors":["blue", "red"],//长度与categories相同
		"title": "GO Bar", //主标题和副标题
	    "size": {
	        "width": 800,
	        "height": 600
	    },
	    "params":{
	  		"x_label": "phylum level name ",
	  		"y_label": "Mean proportion(%)",
	  		"title": "GO BAR ",
	  		"angle": 18
	 	}
	}
```
