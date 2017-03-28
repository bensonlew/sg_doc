jQuery.highcharts_report = {
  TranscriptLength:function(transcripts,contents)
{
    $('#container').highcharts({
      chart: {
        type:"column",
      },
      title: {
        text: contents.params.title
      },
      xAxis:{
        type: "category",
        labels:{
          rotation:0,
          style:{
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        },title:{
            text:contents.params.x_label
          }
      },
      yAxis:{
        min: 0,
        title:{
          text:contents.params.y_label
        }
      },
      legend:{
        enabled:true,
        layout:"vertical",
        align:"right",
        x:-40,
        y:40,
        floating:true,
        verticalAlign:"top",
      },
      tooltip:{
              pointFormat: '<b>{point.name}:{point.y:.3f}</b>'
    },
     series:[
        {
        names:"population",
        showInLegend:false,
        data:contents.data1,
          dataLabels:{
            enabled:false,
            align:"bottom",
            color:"green",
            format:'<b>{point.percent:.5f}%</b>',
            rotation:0,
            zIndex:6
          },

        },
        {
          type:"line",showInLegend:true,color:contents.colors[0],lineWidth: 3,
          marker: {enabled: true},
          name: contents.names[0],
          animation: true,
          tooltip:{
             followTouchMove:true
          },
          data:[
             {x:contents.data2[0][0],y:contents.data2[1][0],notip:true,lineWidth:contents.params.lineWidth},
             {x:contents.data2[0][0],y:contents.data2[1][0],notip:true,lineWidth:contents.params.lineWidth},
          ]
      },
      //加上最大长度等5个点
      {
        type:"line",showInLegend:true,color:contents.colors[1],lineWidth: 3,
        marker: {enabled: true},
        name: contents.names[1],
        animation: true,
        tooltip:{
           followTouchMove:true
        },
        data:[
           {x:contents.data2[0][1],y:contents.data2[1][1],notip:true,lineWidth:contents.params.lineWidth},
           {x:contents.data2[0][1],y:contents.data2[1][1],notip:true,lineWidth:contents.params.lineWidth},
        ]
      },
      {
        type:"line",showInLegend:true,color:contents.colors[2],lineWidth: 3,
        marker: {enabled: true},
        name: contents.names[2],
        animation: true,
        tooltip:{
           followTouchMove:true
        },
        data:[
           {x:contents.data2[0][2],y:contents.data2[1][2],notip:true,lineWidth:contents.params.lineWidth},
           {x:contents.data2[0][2],y:contents.data2[1][2],notip:true,lineWidth:contents.params.lineWidth},
        ]
      },
      {
        type:"line",showInLegend:true,color:contents.colors[3],lineWidth: 3,
        marker: {enabled: true},
        name: contents.names[3],
        animation: true,
        tooltip:{
           followTouchMove:true
        },
        data:[
           {x:contents.data2[0][3],y:contents.data2[1][3],notip:true,lineWidth:contents.params.lineWidth},
           {x:contents.data2[0][3],y:contents.data2[1][3],notip:true,lineWidth:contents.params.lineWidth},
        ]
      },
      {
        type:"line",showInLegend:true,color:contents.colors[4],lineWidth: 3,
        marker: {enabled: true},
        name: contents.names[4],
        animation: true,
        tooltip:{
           followTouchMove:true
        },
        data:[
           {x:contents.data2[0][4],y:contents.data2[1][4],notip:true,lineWidth:contents.params.lineWidth},
           {x:contents.data2[0][4],y:contents.data2[1][4],notip:true,lineWidth:contents.params.lineWidth},
        ]
      }
      ]
    });
  }
}
