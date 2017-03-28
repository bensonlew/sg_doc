jQuery.highcharts_report = {
showbox_plot:function(main_scatter,contents)
{
  //alert('js');
    //$('#container').highcharts({
      Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
          return {
              radialGradient: {
                  cx: 0.4,
                  cy: 0.3,
                  r: 0.5
              },
              stops: [
                  [0, color],
                  [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
              ]
          };
	  });

      // Set up the chart
      var chart = new Highcharts.Chart({
          chart: {
              renderTo: 'container',
              margin: 100,
              type: 'scatter',
              options3d: {
                  enabled: true,
                  alpha: 300,
                  beta: 300,
                  depth: 600,
                  viewDistance: 5,
                  fitToPlot: false,
                  frame: {
                      bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                      back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                      side: { size: 1, color: 'rgba(0,0,0,0.06)' }
                  }
              }
          },
          title: {
              text: 'PCA-3D'
          },
          subtitle: {
              text: 'pca-sub'
          },
          plotOptions: {
              scatter: {
                  width: 10,
                  height: 10,
                  depth: 10
              }
          },
          yAxis: {
              min: -10,
              max: 10,
              title: {
                  text: 'PC2'
              }
          },
          xAxis: {
              min: -10,
              max: 10,
              title: {
                  text: 'PC1'
              }
          },
          zAxis: {
              min: -10,
              max: 10,
              title: {
                  text: 'PC3'
              }
          },
          legend: {
              enabled: true
          },
          series: contents.series
      });


      // Add mouse events for rotation
      $(chart.container).bind('mousedown.hc touchstart.hc', function (eStart) {
          eStart = chart.pointer.normalize(eStart);

          var posX = eStart.pageX,
              posY = eStart.pageY,
              alpha = chart.options.chart.options3d.alpha,
              beta = chart.options.chart.options3d.beta,
              newAlpha,
              newBeta,
              sensitivity = 5; // lower is more sensitive

          $(document).bind({
              'mousemove.hc touchdrag.hc': function (e) {
                  // Run beta
                  newBeta = beta + (posX - e.pageX) / sensitivity;
                  chart.options.chart.options3d.beta = newBeta;

                  // Run alpha
                  newAlpha = alpha + (e.pageY - posY) / sensitivity;
                  chart.options.chart.options3d.alpha = newAlpha;

                  chart.redraw(false);
              },
              'mouseup touchend': function () {
                  $(document).unbind('.hc');
              }
          });
      });

}
};
