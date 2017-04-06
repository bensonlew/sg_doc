热图
========
**Author：xyz**
lib：tree_heatmap.js
demo: 暂无

# 说明

heatmap热图，适用于 样本相关性分析热图、基因集/差异基因表达热图+树图

# content参数

* data: heatmap数据，二维数组
* columns：列名，每列的名字
* rows: 行名，每行的名字
* pvalue_data：[], 默认为空
* params: 图片其它参数
  + title：图片名称
  + tree_1_width：图左侧与图形边框的距离宽度
  + tree_2_height：标题与图形之间的距离高度
  + show_value：逻辑值，是否在图形上显示数值
  + middle_color： 设置图形颜色的中间值
  + start_color：设定图形颜色的初始值
  + end_color：设定图形颜色的终值
  + log: 逻辑值，是否取log值
  + hc_heatmap：逻辑值，默认false且不需要修改, 写死
  + relative: 逻辑值，默认false且不需要修改, 写死
  + if_gap：字符串，默认为'false'且不需要修改, 写死
* size: 图片大小参数
  + width：设定图片的宽度
  + height：设定图片的高度

# 参数示例

```
contents = {
 "heatmap_data":[
          [0,0,0,0,1,0,0,0],
          [3,6,1,2,0,0,0,0],
          [0,1,0,0,11,7,10,0],
          [0,0,10,0,2,1,0,0],
          [75,83,61,31,42,7,14,0],
          [124,204,349,252,497,414,385,0],
          [502,524,491,582,425,474,464,0]],
 "columns":["Test_5","Test_8","Test_7","Test_6","Test_3","Test_4","Test_2", "Test_1"], #例：与heatmap_data的[0,0,0,0,1,0,0,0]长度相同 此例中是8
 "rows":["sample1","sample2","sample3","sample4","sample5","sample6", "sample7"],#长度需要与heatmap_data长度相同 在此例中是7
 "params":{
          "title":"Heatmap",  #字符串
          "tree_1_width":40,  #整数
          "tree_2_height":0,   #整数
          "show_value":true,    #逻辑值
          "middle_color":"#FFFFFF",   
          "start_color":"#FF0000",
          "end_color":"#008000",
          "log":false,   #bool值
          "hc_heatmap": false,  #bool值
          "relative": false,   #bool值
          "if_gap": "false"},   #字符串
 "pvalue_data":[],  #默认为空[]
 "size":{"width":"700","height":"700"}
}
```