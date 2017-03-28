jQuery.highcharts_report = {
showbox_plot:function(main_scatter,contents)
{
  //alert('js');

    $('#container').highcharts({
          chart: {
              type: 'boxplot',
              inverted: true
          },
          title: {
              text: 'Highcharts Box Plot Example'
          },
          legend: {
              enabled: false
          },
          xAxis: {
              categories: contents.params.categories,
              title: {
                  text: 'Experiment No.'
              }
          },
          yAxis: {
              title: {
                  text: 'Observations'
              }
          },
          series: [{
              name: 'Observations',
              data: contents.data,
              tooltip: {
                  headerFormat: '<em>Experiment No {point.key}</em><br/>'
              }
          }, {
              name: 'Outlier',
              color: Highcharts.getOptions().colors[0],
              type: 'scatter',

              marker: {
                  fillColor: 'white',
                  lineWidth: 1,
                  lineColor: Highcharts.getOptions().colors[0]
              },
              tooltip: {
                  pointFormat: 'Observation: {point.y}'
              }
		  }]
    });
}
};
