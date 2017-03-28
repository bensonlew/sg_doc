// write by qiuping , 20161221
jQuery.highcharts_report = {
showBarLine:function(taxon_bar, contents)
{
  var sum_data = 0;
  function sub_y_max(){
      var max_datas = [];
      for(var i in contents.data){
          max_datas.push(Math.max.apply(Math,contents.data[i]));
          for(var d in contents.data[i]){sum_data = sum_data + contents.data[i][d]};
      }
      var max = Math.max.apply(Math,max_datas)/sum_data*100;
      return max
  };
  var chart_opts = {
      chart: {
          renderTo: taxon_bar
      },
      title:{
          text:contents.params.title,
      },
      xAxis:{
          type:'category',
          tickPixelInterval: 40,
          tickLength: 5,
          title:{text:contents.params.x_label},
          categories: contents.categories,
          // labels: {
          //   align: "center",
          //   formatter: function () {
          //     var text = this.value;console.log(text)
          //     formatted = text.length > 20 ? text.substring(0, 20) + '...' : text;
          //       return '<div class="js-ellipse" title="' + text + '">' + formatted + '</div>';
          //   },
          //   style: {
          //      width: '250px'
          //   },
          //   useHTML: true
          // }
      },
      tooltip:{
          formatter:function(){
              if(this.point.notip){
                   return false;
              }else{
                  return this.point.category + '<br/>数量: <b>'+this.point.y+'</b>';
              }
      }},
      plotOptions: {
              series: {
                stacking: contents.params.stack_bar? 'normal': false,
              },
              bar:{
                dataLabels:{
                  enabled:'show_datalabel' in contents.params? contents.params.show_datalabel:true,
                }
              },
       },
       legend: {
           layout: "vertical",
           align: "right",
           x: -15,
           y: 15,
           verticalAlign: "top",
        //    itemStyle: {
        //        "color": "#333333",
        //        "cursor": "pointer",
        //        "fontSize": "11px",
        //        "fontWeight": "normal"
        //    }
       },
  };
  var yAxis = [
    {
        tickPixelInterval: 40,
        lineWidth: 1,
        gridLineWidth: 0, //设置网格线
        title: {text:contents.params.y_label},
        tickLength: 5,  //设置刻度线的长度
        tickWidth: 1
    }
  ];
  // 添加双坐标y轴
  // sub_y_max();
  if(contents.params.two_yaxis){
      var yAxis1 =
        {
            linkedTo: 0,
            opposite:true,
            min:0,
            max:sub_y_max(),
            tickPixelInterval: 40,
            lineWidth: 1,
            gridLineWidth: 0,
            tickLength: 5,
            tickWidth: 1,
            title: {text:contents.params.sub_y_label},
            labels:{
                formatter: function() {
                    return (this.value/sum_data*100).toPrecision(3) + '%';
                }},
        }
    yAxis.push(yAxis1)
  };
  chart_opts.yAxis = yAxis;
  // console.log(chart_opts.yAxis);
  //console.log(chart_opts.xAxis.labels.formatter);
  var series_opts = [];
  var max_data;
  var datas = [];
  for(var i in contents.data){
      var series_tmp = {
        type: contents.params.bar_types,
        color: 'bar_colors' in contents.params?contents.params.bar_colors[i]:null,
        showInLegend: contents.params.show_bar_legend,
        // data: contents.data[i]
      };
      if('data_colors' in contents){
          var data = [];
          for(var d in contents.data[i]){
              data.push({y: contents.data[i][d], color: contents.data_colors[d]})
          };
          series_tmp.data = data
      }else{
          series_tmp.data = contents.data[i]
      };
      series_opts.push(series_tmp);
      datas.push(Math.max.apply(Math,contents.data[i]));
  };
  max_data = Math.max.apply(Math,datas)
  if(contents.params.show_taxon){
    for(var i in contents.taxon_data){
      var line_data = [];
      for(var x=contents.taxon_data[i].start; x<=contents.taxon_data[i].end; x=x+1){
        line_data.push({x:x, y:max_data+max_data*0.1,notip:true})
      };
      var line_sires = {
         type:'line',
         showInLegend:contents.params.show_taxon_legend,
         color:contents.taxon_data[i].color,
         lineWidth: 10,
         marker: {states:{hover:{enabled:false}}},
         name: contents.taxon_data[i].name,
         animation: false,
         tooltip:{followTouchMove:false},
         data:line_data
      };
      series_opts.push(line_sires);
    };
  };
  chart_opts.series = series_opts;
  var chart = new Highcharts.Chart(chart_opts);
 }
};
