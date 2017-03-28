jQuery.highcharts_report = {
genome_depth:function(main_scatter, contents){
	//alert("sj");
    $('#containerfirst').highcharts({
		title:{
			text:"genome-site view",
			align:"center"

		},
		xAxis:[{
			minrange:1,
			minTickInterval:1,
			max:20,
			allowDecimals:false
		},{
      linkedTo: 0,
      categories :contents.params.categories,
      tickInterval:1,
      tickmarkPlacement:"on"
    }],
		yAxis:{
			title:{
				text:"depth"
			},
      gridLineWidth: 0
		},
    legend: {
        enabled: false
    },
    rangeSelector: {

          selected: 1
      },
		chart:{
			type:"areaspline"
		},
        scrollbar: {
            enabled: true,
            minWidth:40,
			barBorderWidth: 0.5,
			barBackgroundColor: 'grey',
			barBorderRadius:6,
			barBorderWidth: 0,
			buttonBackgroundColor: 'grey',
			buttonBorderWidth: 0,
			buttonArrowColor: 'grey',
			buttonBorderRadius: 7,
			rifleColor: 'black',
			trackBackgroundColor: 'white',
			trackBorderWidth: 1,
			trackBorderColor: 'grey',
			trackBorderRadius: 8

          },
          plotOptions: {
           series: {
               allowPointSelect: true


           }
       },

        series: [{
            data: contents.data,
        }],
		credits:{
			enabled:false
		}
    });
}
};
