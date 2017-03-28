jQuery.highcharts_report={
  r:function(main_scatter, contents)
  {
    // alert('js');

    $('#container').highcharts({
        chart: {
            type: 'columnrange',
            inverted: true,
            zoomType:"xy",
        },
        title: {
            text: 'reads分布图'
        },
        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: false
        },
        rangeSelector: {

              selected: 1
          },
          scrollbar: {
                 enabled: true,
           minWidth : 40
            },
            tooltip:{
              enabled:true,
              formatter: function() {return this.series.name+"<br>"+"range:"+this.point.low+" ~ "+this.point.high}
            },
        series: contents.data,
        xAxis:{
          visible : false,
          reversed : false,
          min : contents.params.x_min,
          max :  contents.params.x_max
        },
        yAxis:[{
            title:{
              text:"refGenome"
            },
            gridLineWidth: 0,
            min:0,
          //  max:100
        },
      ],
        credits:{
          enabled: false
        }
    });
  }
};
