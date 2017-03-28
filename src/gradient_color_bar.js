jQuery.highcharts_report = {

  showGO_enrichment:function(main_scatter, contents)
{
  function value(){
    var new_value=[];
    step = 1.0/10000.0;
    for(var s = 0;s<10000;s++){
      var number = step*s+0;
      new_value.push(number);
     }
    return new_value;
   }
  function gradientColor(startColor,endColor){
      startRGB = this.colorRgb(startColor);//转换为rgb数组模式
      startR = startRGB[0];
      startG = startRGB[1];
      startB = startRGB[2];
      endRGB = this.colorRgb(endColor);
      endR = endRGB[0];
      endG = endRGB[1];
      endB = endRGB[2];
      sR = (endR-startR)/10000;//总差值
      sG = (endG-startG)/10000;
      sB = (endB-startB)/10000;
      var colorArr = [];
      for(var i=0;i<10000;i++){
      //计算每一步的hex值
          var hex = this.colorHex('rgb('+parseInt((sR*i+startR))+','+parseInt((sG*i+startG))+','+parseInt((sB*i+startB))+')');
          colorArr.push(hex);
      }
      return colorArr;
  } // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
  gradientColor.prototype.colorRgb = function(sColor){
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = sColor.toLowerCase();
      if(sColor && reg.test(sColor)){
          if(sColor.length === 4){
              var sColorNew = "#";
              for(var i=1; i<4; i+=1){
                  sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
              }
              sColor = sColorNew;
          }//处理六位的颜色值
          var sColorChange = [];
          for(var i=1; i<7; i+=2){
              sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
          }
          return sColorChange;
      }else{
          return sColor;
      }
  }; // 将rgb表示方式转换为hex表示方式
  gradientColor.prototype.colorHex = function(rgb){
      var _this = rgb;
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if(/^(rgb|RGB)/.test(_this)){
          var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g,"").split(",");
          var strHex = "#";
          for(var i=0; i<aColor.length; i++){
              var hex = Number(aColor[i]).toString(16);
              hex = hex<10 ? 0+''+hex :hex;// 保证每个rgb的值为2位
              if(hex === "0"){
                  hex += hex;
              }
              strHex += hex;
          }
          if(strHex.length !== 7){
              strHex = _this;
          }
          return strHex;
      }else if(reg.test(_this)){
          var aNum = _this.replace(/#/,"").split("");
          if(aNum.length === 6){
              return _this;
          }else if(aNum.length === 3){
              var numHex = "#";
              for(var i=0; i<aNum.length; i+=1){
                  numHex += (aNum[i]+aNum[i]);
              }
              return numHex;
          }
      }else{
          return _this;
      }
  }
  var gradient = new gradientColor(contents.params.startcolor,contents.params.endcolor);
  var P_value = new value();
  var data=contents.data;
  var finalcount=new duiying(contents.params.data_count) ;
  function duiying(){
      for (var i=0;i<contents.params.data_count;i++){
        data[i].p= Math.round(data[i].p*10000)/10000; //P值四舍五入；
          for(var m=0;m<10000;m++){
                  if(data[i].p == P_value[m]){data[i].color=gradient[m];}
                  else continue;
                }
              }
            }
        // alert(data[0].p);
        $('#container').highcharts({
            chart: {
                type: 'column',           //柱状图
                marginRight: 120         //图右边留白
            },
            title: {
                text: contents.params.title
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '18px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: contents.params.y_label
                }
            },
            legend: {
              title: {
                  text: contents.params.legend_title
              },
                align:'right',
                verticalAlign: 'center', //垂直对齐方式
                layout: 'vertical',
                // rtl:true,
                x:-10,
                y:70,

            },
            tooltip: {
                pointFormat: '<b>富集率：{point.y:.1f};富集显著性:{point.p:.4f}</b>'
            },
        colorAxis: {
                stops: [
                    [0, contents.params.startcolor],
                    [1, contents.params.endcolor]
                ],

            },
            series: [{
                type: 'heatmap',
                data: [[null,null,0],[null,null,1]],

            },{
                showInLegend:false,
                data:data,
                dataLabels: {
                    enabled: true,
                    formatter: function(){
                        if (this.point.p<0.05&&this.point.p>0.01){return '*';}
                        if(this.point.p<0.01&&this.point.p>0.001){return '**';}
                        if(this.point.p<0.001){return '***';}
                    },
                    rotation: 0,
                    color: contents.params.startcolor,
                    align: 'center',
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
}
};
