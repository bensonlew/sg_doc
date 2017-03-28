d3_report = {
    network:function(position, contents)
    {
	 d3.select('div#'+position).selectAll("svg").remove();
    var svg = d3.select("#"+position)
        .append("svg")
        .attr("width",contents.size.width) 
        .attr("height",contents.size.height)
        .attr("version", "1.1")
		.attr("style", "font-family:arial;font-size:12px;")
        .attr("xmlns", "http://www.w3.org/2000/svg");
          
        //放大与缩小网络图 
    var g = svg.append("g");
        svg.append("rect")
          .attr("width", contents.size.width-1)
          .attr("height", contents.size.height-1)
          .style("fill", "none")
          .style("pointer-events", "all")
          .call(d3.zoom()
              .scaleExtent([1, 1]) //只能拖拽不能放大缩小
              .on("zoom", zoomed));    
    
    //将节点与边按照等比例进行放大与缩小
    function zoomed() {
         node.attr("transform", d3.event.transform);
         link.attr("transform", d3.event.transform);
         if (contents.params.show_node_label != false){  
            svg_texts.attr("transform", d3.event.transform);}
     }
      
    if (contents.params.title != false) {  
        svg.append("text")
           .attr("x", (contents.size.width/2))
           .attr("y", 20)
           .attr("text-anchor", "middle")
           .style("font-size", "16px")
           .text(contents.params.title);
    }
        //从nodes中获得颜色分组信息
        var nodes_color = new Array();
        for (var i = 0; i < contents.nodes.length; i++){
            var node_col = contents.nodes[i].color;
            nodes_color.push(node_col);
        }
        var nodes_color_unique = new Array();
        for (var i = 0; i < nodes_color.length; i++){
            if (nodes_color_unique.indexOf(nodes_color[i]) == -1){
                nodes_color_unique.push(nodes_color[i]);
            }
        }
        //console.log(nodes_color_unique);
        //根据有多少种颜色进行数组的申明，数组中包含数组
        var nodes_color_data = new Array();
        for(var i = 0 ; i < nodes_color_unique.length; i++){
            nodes_color_data[i] = new Array();            
        }
        //将所有节点按照不同颜色进行保存到不同数组中
        for (var j = 0; j < nodes_color_unique.length; j++){
            for (var i = 0; i < contents.nodes.length; i++){
                if (contents.nodes[i].color == nodes_color_unique[j]){                    
                    var node = {"id": contents.nodes[i].id, "color": contents.nodes[i].color};
                    nodes_color_data[j].push(node);
                }
            }
        }
        //console.log(nodes_color_data[0]);
        var width = contents.size.width/5;
        if (nodes_color_unique.length > 5){
            var hight = contents.size.height/2.5;
        }else{
            var hight = contents.size.height/2;
        }        
        var nodes = new Array();
        
        //设置节点按照圆形进行分组展示
        for (var i = 0; i < nodes_color_unique.length; i++){   
            var sita = 2*Math.PI/nodes_color_data[i].length; 
            if (nodes_color_data[i].length <= 3){
                var r = 4;
            }else if (nodes_color_data[i].length < 10 && nodes_color_data[i].length > 3){
                var r = 10;
            }else if (nodes_color_data[i].length < 20 && nodes_color_data[i].length >= 10){
                var r = 15;
            }else if (nodes_color_data[i].length >= 20 && nodes_color_data[i].length < 60){
                var r = 40;
            }else if (nodes_color_data[i].length >= 60 && nodes_color_data[i].length < 100){
                var r = 60;
            }else if (nodes_color_data[i].length >= 100 && nodes_color_data[i].length < 200){
                var r = 90;
            }else if (nodes_color_data[i].length >= 200 && nodes_color_data[i].length < 300){
                var r = 110;
            }else if(nodes_color_data[i].length >= 300 && nodes_color_data[i].length < 400){
                var r = 120;
            }else if (nodes_color_data[i].length >= 400){
                var r = 130;
            }
            //设定一行排列几个module
            if (contents.size.width <= 800){
                var n = 4;
            }else if ( 800 < contents.size.width && contents.size.width <= 1500){
                //console.log(contents.size.width);
                var n = 6;
            }else if (contents.size.width > 1500){
                var n = 8;
            }
            
            if (i == n){
                var hight = contents.size.height/3 + contents.params.hight_distance;
                var width = contents.size.width/5;
            }else if (i == n+5){
                var hight = contents.size.height/3 + contents.params.hight_distance*2;
                var width = contents.size.width/5;
            }else if (i == n+10){
                var hight = contents.size.height/3 + contents.params.hight_distance*3;
                var width = contents.size.width/5;
            }else if (i == n+15){
                var hight = contents.size.height/3 + contents.params.hight_distance*4;
                var width = contents.size.width/5;
            }else if (i == n+20){
                var hight = contents.size.height/3 + contents.params.hight_distance*5;
                var width = contents.size.width/5;
            }else if (i == n+25){
                var hight = contents.size.height/3 + contents.params.hight_distance*6;
                var width = contents.size.width/5;
            }else if (i == n+30){
                var hight = contents.size.height/3 + contents.params.hight_distance*7;
                var width = contents.size.width/5;
            }
            for (var j = 0; j < nodes_color_data[i].length; j++){  
                //console.log(nodes_color_data[0]); 
                var n = (j + 1) * sita; 
                if (n == 0){
                    var cx = width + r;
                    var cy = hight;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy };
                    nodes.push(node);
                    //console.log(node); 
                }
                if (n > 0 && n < Math.PI/2){
                    var cx = width + Math.cos(n)*r;
                    //console.log(cx);                    
                    var cy = hight - Math.sin(n)*r;
                    //console.log(cy);
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy };
                    nodes.push(node);
                    //console.log(node);
                }                
                if (n == Math.PI/2){
                    var cx = width;
                    var cy = hight - r;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n < Math.PI && n > Math.PI/2){
                    var cx = width - Math.sin(n - Math.PI/2)*r;
                    var cy = hight - Math.cos(n - Math.PI/2)*r;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n == Math.PI){
                    var cx = width - r;
                    var cy = hight;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n > Math.PI && n < 3*Math.PI/2){
                    var cx = width - Math.cos(n - Math.PI)*r;
                    var cy = hight + Math.sin(n - Math.PI)*r;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n == 3*Math.PI/2){
                    var cx = width;
                    var cy = hight + r;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n > 3*Math.PI/2 && n < 2*Math.PI){
                    var cx = width + Math.sin(n - 3*Math.PI/2)*r;
                    var cy = hight + Math.cos(n - 3*Math.PI/2)*r;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                    //console.log(node);
                }
                if (n == 2*Math.PI){
                    var cx = width + r;
                    var cy = hight;
                    var node = {"id": nodes_color_data[i][j].id, "color": nodes_color_data[i][j].color, "cx": cx, "cy": cy};
                    nodes.push(node);
                   //console.log(node);
                }
            }
            width = width + contents.params.width_distance;
        }
        //定义边的x1,y1,x2,y2坐标
        var links_ = new Array();  //保存了x1,y1
        var links = new Array();   //保存了x1,y1,x2,y2
        for (var i = 0; i < contents.links.length; i++){
            for(var j = 0; j < nodes.length; j++){
                if(contents.links[i].source == nodes[j].id){
                    var link_ = {"source": contents.links[i].source, "target": contents.links[i].target, "value":contents.links[i].value, "x1":  nodes[j].cx, "y1":  nodes[j].cy};
                    links_.push(link_);
                }
            }
        }
        //console.log(links_.length);
        for (var i = 0; i< links_.length; i++){
            for(var j = 0; j < nodes.length; j++){
                if (contents.links[i].target == nodes[j].id){
                    var link_1 = {"source": links_[i].source, "target": links_[i].target, "value": links_[i].value, "x1": links_[i].x1, "y1": links_[i].y1, "x2": nodes[j].cx, "y2": nodes[j].cy};
                    links.push(link_1);
                }
            }            
        }
        
        //重写legend数据,用于右上节点的信息
        var legend = new Array();   
        var j = 65;    
        for (var i = 0; i < nodes_color_unique.length; i++){
            var name = "module" + (i+1) +": " + nodes_color_unique[i];            
            var sample = {"module_name": name, "color": nodes_color_unique[i], "cy": j};
            j = j + 15;
            legend.push(sample);
        }
        //console.log(legend);
        var node_lable = new Array();
        for (var i = 0; i<legend.length+1; i++){
            node_lable.push(i);
        }
        var nodes_lab = node_lable.concat(nodes);
        //console.log(nodes_lab);
         var circles_group = svg.append("g")
               .selectAll("circle")
               .data(legend) 
               .enter()
               .append("circle")
               .attr("cx", (contents.size.width-124))    //原本是55
               .attr("cy",function(d){ return d.cy; })
               .attr("r", 6)
               .attr("fill", function(d){ return d.color; });  
    //添加legend圆的右边标签          
        var circles_group = svg.append("g")
               .selectAll("text")               
               .data(legend) 
               .enter()
               .append("text")
               //.style("fill", "blink")
               .text(function(d){ return d.module_name;})
               .style("font-size", 10)
               .attr("x", (contents.size.width-116))        //原本是47       
               .attr("y",function(d){ return d.cy + 4; })               
               .attr("fill", function(d){ return d.color;});        
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("x1", function(d){ return d.x1; })
            .attr("y1", function(d){ return d.y1; })
            .attr("x2", function(d){ return d.x2; })
            .attr("y2", function(d){ return d.y2; })
            .attr("stroke-width", function(d){return d.value + 0.2;})
            .style("stroke", "#d0d0d0"); 
         //添加网络的节点信息
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
              .attr("r", contents.params.node_size)
              .attr("cx", function(d){ return d.cx; })  
              .attr("cy", function(d){ return d.cy; })
              .attr("fill",function(d) { return d.color;})           
    
    //设定节点的标签名字
    if (contents.params.show_node_label != false) { 
            var svg_texts = svg.selectAll("text")
             .data(nodes_lab)
             .enter()
             .append("text")
             .style("fill", "blink")
             .style("text-anchor", "middle")
             .attr("font-size", contents.params.node_label_size)        
             .attr("dx", function(d){ return d.cx; })
             .attr("dy", function(d){ return d.cy; })
             .text(function(d){return d.id;}); 
    } 
    
    node.append("title")
        .text(function(d) { return d.id; });//鼠标停显示节点信息    
    link.append("title")
        .text(function(d) { return "weight is " + d.value; }); //鼠标停显示边信息,,这里要修改

}
}
