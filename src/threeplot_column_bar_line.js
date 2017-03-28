jQuery.highcharts_report = {
showThreeplot:function(threeplot, contents)
{
  function plotOption1(){
    if(contents.params.plotOptions == 1){
       return 'normal'
    }else{
        return false
    }
  };        //SSR类型统计分析图柱子叠加
  function showInLegend(){
    if(contents.params.showInLegend == 'true'){
      return true
    }else{
      return false
    }
  };        //柱子图例是否显示
  function doublecoordinate(){
    if(contents.params.dcoordinate){
      var upmax = 0, downmax = 0,upsum =0,downsum=0;
      for(var i = 0; i < contents.params.count; i++){
        var num1 = contents.data1[0][i].y;
        var num2 = contents.data1[1][i].y;
         upsum += num1;
         downsum += num2;
        if(num1 > upmax){
          upmax = num1;
        }else{
          continue;
        }
        if(num2 > downmax){
          downmax = num2;
        }else{
          continue;
        }
      }
      var sum = upsum + downsum;
      var max;
      if(upmax >downmax){
        max = (upmax/sum)*100;
      }else{
        max = (downmax/sum)*100;
      }
      return max;
    }
  };        //上下调基因GO注释柱状图双坐标
  $('#container').highcharts({
    title:{
        text:contents.params.title,
    },
    xAxis:{
        type:'category',
        tickPixelInterval: 40,
        tickLength: 5,
        title:{text:contents.params.x_label}
    },
    yAxis:[{
        tickPixelInterval: 40,
        lineWidth: 1,
        gridLineWidth: 1,
        gridLineColor: '#f6f5ec',
        gridLineDashStyle:'Dash',
        title: {text:contents.params.y_label},
        tickLength: 5,
        tickWidth: 1
    },{
            opposite:true,
            min:0,
            max:doublecoordinate(),
            tickPixelInterval: 40,
            lineWidth: 1,
            gridLineWidth: 1,
            gridLineColor: '#f6f5ec',
            gridLineDashStyle:'Dash',
            tickLength: 5,
            tickWidth: 1,
            title: {text:contents.params.up_label},
            labels:{
                format: '{value} %'
            },
    }],
    labels:{
    style:{color:"#000"},
    items:[{html:contents.names[0],style: {left: '50',top: '10'}},
           {html:contents.names[1],style: {left: '300',top: '10'}},
           {html:contents.names[2],style: {left: '550',top: '10'}},]
    },
    tooltip:{
        formatter:function(){
            if(this.point.notip){
                 return false;
            }else{
                return this.point.name + '<br/>数量: <b>'+this.point.y+'</b>';
            }
    }},
    plotOptions: {
            series: {
              stacking: plotOption1(),
            },
            bar:{
              pointWidth:contents.params.pointWidth,
              dataLabels:{
                enabled:true,
                formatter:function(){
                  if(this.point.num){
                      return this.point.num + '%'
                  }else{
                      return this.y
                  }
                },
              }
            },
     },
    series:[
        {name:contents.name[3],type:contents.params.types,color:contents.params.color1,showInLegend:showInLegend(),data:contents.data1[0]},
        {name:contents.name[4],type:contents.params.types,color:contents.params.color2,showInLegend:showInLegend(),data:contents.data1[1]},
        {type:'line',showInLegend:contents.params.showInLegend2,color:'#7fb80e',lineWidth: 10,
         marker: {enabled: false},
         name: contents.name[0],
         animation: false,
         tooltip:{followTouchMove:false},
         data:contents.data2[0]
        },
        {type:'line',showInLegend:contents.params.showInLegend2,color:'#f47920',lineWidth: 10,
          marker: {enabled: false},
          name: contents.name[1],
          animation: false,
          tooltip:{followTouchMove:false},
          data:contents.data2[1]
        },
        {type:'line',showInLegend:contents.params.showInLegend2,color:'#426ab3',lineWidth: 10,
         marker: {enabled: false},
         name: contents.name[2],
         animation: false,
         tooltip:{followTouchMove:false},
         data:contents.data2[2]
        }
        ]
 });
}
};
