jQuery.highcharts_report = {
  genome_depth:function(main_scatter, contents){
    $('#containerfirst').highcharts({
		title:{
      text:contents.params.title,
			align:"center"

		},
		xAxis:[{
			minrange:1,
			minTickInterval:1,
			max:20,
			allowDecimals:false,
      visible:false
		},{
      linkedTo: 0,
      categories :contents.params.categories,
      tickInterval:1,
      tickmarkPlacement:"on"
    }],


  tooltip:{formatter:function(){return this.series.name+"<br>"+this.point.name+ " depth:"+this.point.y}},

    navigator:{
      height:80,
      enabled:true,
      xAxis:{
        dateTimeLabelFormats:{
          millisecond:'%L',
	second: '',
	minute: '',
	hour: '',
	day: '',
	week: '',
	month: '',
	year: ''
},
tickInterval:50
      },

      // adaptToUpdatedData: true,
    },

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
          enabled:false,
          selected: 1
      },
		chart:{
			type:"areaspline"
		},
        scrollbar: {
               enabled: true,
               minWidth:40,
               liveRedraw:true
          },
          plotOptions: {
           series: {
               allowPointSelect: true
           }
       },
       series: [{
           data: contents.data,
       }],

     });
 }
 };
