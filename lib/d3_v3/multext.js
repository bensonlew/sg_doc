function appendMultiText(str, width, fontsize){

			fontsize = 14;
			// fontfamily = "simsun, arial";

			//鑾峰彇鍒嗗壊鍚庣殑瀛楃涓�
			var strs = splitByLine(str,width,fontsize);

			// var mulText = container.append("text")
			// 	.attr("x",posX)
			// 	.attr("y",posY)
			// 	.style("font-size",fontsize)
			// 	.style("font-family",fontfamily);

			var tspan = d3.selectAll("tspan")
				.data(strs)
				.enter()
				.append("tspan")
				.attr("x",30)
				.attr("dy","1em")
				.text(function(d){
					console.log(d);
					return d;
				});

			console.log(tspan);
			return tspan;

			function splitByLine(str,max,fontsize){
				var curLen = 0;
				var result = [];
				var start = 0, end = 0;
				for(var i=0;i<str.length;i++){
					var code = str.charCodeAt(i);
					var pixelLen = code > 255 ? fontsize : fontsize/2;
					curLen += pixelLen;
					if(curLen > max){
						end = i;
						result.push(str.substring(start,end));
						start = i;
						curLen = pixelLen;
					}
					if( i === str.length - 1 ){
						end = i;
						result.push(str.substring(start,end+1));
					}
				}
				return result;
			}
}
