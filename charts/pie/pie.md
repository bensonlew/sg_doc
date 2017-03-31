饼图
========
**Author：xyz**
lib：meta-highcharts_report.js
demo: 暂无

# 说明

常规饼图

# content参数

* data: 饼图数据，一维数据
* categories: 饼图的各饼名称，一维数组
* title：设定图片的名称，对象数据
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

```
content = {
	"data": [{"name":"A","value":3308},{"name":"B","value":578}],//A,B两个饼的数据
	"categories": [A，B],//长度与饼个数相同
	"title": {"text":"pie","subtext":"subpie"} //主标题和副标题
    "size": {
        "width": 800,
        "height": 600
    }
}
```
