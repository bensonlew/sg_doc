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
          
    if (contents.size.width < 1000){
        var distance = contents.size.width / 30;
        //console.log(distance);
        var node_size = contents.size.width / contents.params.node_size; 
        var node_label_size = contents.size.width / contents.params.node_label_size;}
    else {  
        var distance = 50;
        var node_size = 6;
        var node_label_size = 6;}              
    if (contents.params.network_type == "PPI"){
        //放大与缩小网络图 
        var g = svg.append("g");
        /* svg.attr("style", "font-family:arial;font-size:12px;")
          .attr("xmlns", "http://www.w3.org/2000/svg"); */
          
        svg.append("rect")
          .attr("width", contents.size.width-1)
          .attr("height", contents.size.height-1)
          .style("fill", "none")
          .style("pointer-events", "all")
          .call(d3.zoom()
              .scaleExtent([0.8, 1.2])
              .on("zoom", zoomed));   
    }
    if (contents.params.network_type == "OTU" || contents.params.network_type == "corr_net"){
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
    }    
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
    if (contents.params.network_type == "OTU"){
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(distance)
            //.strength(0.7)
            )
        .force("charge", d3.forceManyBody()
            //.strength(-60)
           // .distanceMax(100)
            )
        .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
    }
    if (contents.params.network_type == "corr_net"){
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(contents.params.link_distance)
            .strength(contents.params.strength)
            )
        .force("charge", d3.forceManyBody()
             .strength(-contents.params.charge)  //设定是吸引还是排斥+为吸引-为排斥
             .distanceMax(contents.params.distancemax))   //设定引力消失距离
        .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
    }
    if (contents.params.network_type == "PPI"){
        if (contents.params.strength == null){
            if (contents.params.link_distance != null ){ 
                var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) { return d.id; })
                    .distance(contents.params.link_distance)
                    //.strength(0.7)
                    )
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
            }
            else{
                var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) { return d.id; })
                    .distance(50)
                    //.strength(0.7)
                    )
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
            }
        }else{
            if (contents.params.link_distance != null ){ 
                var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) { return d.id; })
                    .distance(contents.params.link_distance)
                    .strength(contents.params.strength)
                    )
                .force("charge", d3.forceManyBody()
                     .strength(-70) 
                     .distanceMax(200)
                     .theta(0.8)
                     )
                .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
            }
            else{
                var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) { return d.id; })
                    .distance(50)
                    .strength(contents.params.strength))
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
            }
        }
    }
    //PPI&OTU重组边的文件
    if (contents.params.network_type == "PPI" || contents.params.network_type == "OTU"){
        var links = new Array();   //重新定义节点边的文件，将符合条件的多个对象添加到数组中去
        if (contents.params.eweight){
            for (var i = 0; i < contents.links.length; i++){
                if (contents.links[i].value > contents.params.eweight){
                    var edge = {"source": contents.links[i].source, "target": contents.links[i].target, "value": contents.links[i].value};  
                    links.push(edge);                        
                }            
            }
        }
        else{
            for (var i = 0; i < contents.links.length; i++){
                if (contents.links[i].value > 30){
                    var edge = {"source": contents.links[i].source, "target": contents.links[i].target, "value": contents.links[i].value};  
                    links.push(edge);                        
                }            
            }        
        }
    }
    //corr_net重组边，添加边的颜色属性
    if (contents.params.network_type == "corr_net"){ 
        //过滤离散的节点，暂时没有使用  
        /*if (contents.params.filter_by_closeness != false){
            var links = new Array();
            var node_closeness = new Array();
            for (var i = 0; i < contents.closeness.length; i++){
                if (contents.closeness[i].closeness_centrality >= contents.params.value_closeness){
                    var node__ = contents.closeness[i].node_name;
                    node_closeness.push(node__);
                }
            }
            //console.log(node_closeness);
            //报存source中节点在node_closeness中边
            var links1 = new Array();
            //报存target中节点在node_closeness中边
            var links2 = new Array();
            for(var i = 0; i < contents.links.length; i++){
                for(var j = 0; j < node_closeness.length; j++){
                   if (contents.links[i].source == node_closeness[j]){
                       var edge_= {"source": contents.links[i].source, "target": contents.links[i].target, "value": contents.links[i].value};
                       links1.push(edge_);
                   }
                }
            }
            for(var i = 0; i < links1.length; i++){
                for(var j = 0; j < node_closeness.length; j++){
                   if (links1[i].target == node_closeness[j]){
                       var edge__= {"source": links1[i].source, "target": links1[i].target, "value": links1[i].value};
                       links2.push(edge__);
                   }
                }
            }
            //console.log(links2);            
            for (var i = 0; i < links2.length; i++){
                if (links2[i].value >= 0){
                    var edge = {"source": links2[i].source, "target": links2[i].target, "value": links2[i].value, "color": "#EA0000"};
                    links.push(edge);
                } else if (links2[i].value < 0){
                    var edge = {"source": links2[i].source, "target": links2[i].target, "value": links2[i].value, "color": "#02C874"};
                    links.push(edge);
                    }
            }        
        }else{  */
            var links = new Array();
            for (var i = 0; i < contents.links.length; i++){
                if (contents.links[i].value >= 0){
                    var edge = {"source": contents.links[i].source, "target": contents.links[i].target, "value": contents.links[i].value, "color": "#EA0000"};
                    links.push(edge);
                } else if (contents.links[i].value < 0){
                    var edge = {"source": contents.links[i].source, "target": contents.links[i].target, "value": contents.links[i].value, "color": "#02C874"};
                    links.push(edge);
                }
            } 
        //}              
    }
    console.log(links);
    //重构网络的节点数组     
    var node1 = new Array();
    var node2 = new Array();
   
    //将边的两边节点保存到一个数据中，然后进行去重复
    for (var i = 0; i < links.length; i++){
        node1.push(links[i].source);
        node2.push(links[i].target);        
    } 
    //合并两个节点文件
    for (var i = 0; i < node2.length; i++){
        node1.push(node2[i]);
    }
    //进行数据去重复
    var node_unique = new Array();
    for (var i = 0; i < node1.length; i++){
        if (node_unique.indexOf(node1[i]) == -1){
            node_unique.push(node1[i]);
        }
    }
    console.log(node_unique);
    //设定corr_net的节点属性文件&设定节点的颜色属性
    if (contents.params.network_type == "corr_net"){
        if (contents.params.set_node_color != false){
        //#0000CD ~#AFEEEE 17个颜色
        var last_color1 = new Array();        
        var linear1 = d3.scaleLinear()   
            .domain([0, 16])
            .range(["#0000CD", "#AFEEEE"]);
        for (var i = 0; i < 17; i++){
            last_color1.push(linear1(i));
        }
        //console.log(last_color1); 
        //#006400 ~#00FF7F 16个颜色 
        var last_color2 = new Array();
        var linear2 = d3.scaleLinear()   
            .domain([0, 15])
            .range(["#006400", "#00FF7F"]);
        for (var i = 0; i < 16; i++){
            last_color2.push(linear2(i));
        }
         //console.log(last_color2); 
        //#808080 ~#DCDCDC 7个颜色 
        var last_color3 = new Array();
        var linear3 = d3.scaleLinear()   
            .domain([0, 6])
            .range(["#808080", "#DCDCDC"]);
        for (var i = 0; i < 7; i++){
            last_color3.push(linear3(i));
        }
        //console.log(last_color3); 
        //设定大于90个节点的颜色
        var linear4 = d3.scaleLinear()   
            .domain([0, node_unique.length-90])
            .range(["#DAA520", "#FAFAD2"]);         
        var last_color4 = new Array();
        for (var i = 0; i < node_unique.length-90; i++){           
            last_color4.push(linear4(i));
        }
           //console.log(last_color4);  
        var a = last_color1.concat(last_color2);
        var b = a.concat(last_color3);
        var last_color = b.concat(last_color4);
        //console.log(last_color);        
        //小于50个节点的颜色数组        
        var color0 = d3.scaleOrdinal(d3.schemeCategory10);        
        //var color1 = d3.scaleOrdinal(d3.schemeCategory20);
        var color2 = d3.scaleOrdinal(d3.schemeCategory20b);  
        var color3 = d3.scaleOrdinal(d3.schemeCategory20c);
        //构造颜色分类器
        var color_data0 = new Array();
       // var color_data1 = new Array();
        var color_data2 = new Array();
        var color_data3 = new Array();
        for (var i = 0; i < 10; i++){
            var color_0 = color0(i); 
            color_data0.push(color_0);
        }
        for (var i = 0; i < 20; i++){                       
            //var color_1 = color1(i);
            var color_2 = color2(i);
            var color_3 = color3(i);          
            color_data2.push(color_2);
            color_data3.push(color_3);
        }        
        var c = color_data0.concat(color_data2);
        var color_data = c.concat(color_data3);  //保存了前50种颜色
        var color_data_last = color_data.concat(last_color);  //保存了所有节点的颜色      
        //console.log(color_data_last);        
        //根据node_unique，取phylum的值，不能直接根据contents.nodes来取
        var node_phylum = new Array();
        for (var j = 0; j < node_unique.length; j++){
            for (var i = 0; i < contents.nodes.length; i++){
                if (node_unique[j] == contents.nodes[i].node_name){
                    var node_ = contents.nodes[i].phylum;
                    node_phylum.push(node_); 
                }
            }
        }
        console.log(node_phylum);
        //node_phylum去重复
        var node_phylum_uniq = new Array();
        for (var i = 0; i < node_phylum.length; i++){
            if(node_phylum_uniq.indexOf(node_phylum[i]) == -1){
                node_phylum_uniq.push(node_phylum[i]);
            }
        }
        //console.log(node_phylum);
        var node_phylum_color = new Array();
        for (var i= 0; i < node_phylum_uniq.length; i++){
            var phylum_color = {"phylum": node_phylum_uniq[i], "color": color_data_last[i]};
            node_phylum_color.push(phylum_color);
            //console.log(node_phylum_uniq[i]);            
        }
       
        var legend = new Array();
        var j = 60;
        for (var i = 0; i < node_phylum_color.length; i++){
            var name = {"phylum": node_phylum_color[i].phylum.substring(3, node_phylum_color[i].phylum.length), "color": node_phylum_color[i].color, "cy":j};
            j = j + 15;
            legend.push(name);            
        }
        //添加图例
        length_data = new Array();
        for(var i = 0 ; i < legend.length; i++){
            var len = legend[i].phylum.length;
            length_data.push(len);
        }
        var max = length_data[0];
        for (var i = 1; i < length_data.length; i++){
            if (max < length_data[i]){
                max = length_data[i];
            }
        }
         var circles_group = svg.append("g")
               .selectAll("circle")
               .data(legend) 
               .enter()
               .append("circle")
               .attr("cx", (contents.size.width-max*7.5+10))    //原本是55
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
               .text(function(d){ return d.phylum;})
               .style("font-size", 10)
               .attr("x", (contents.size.width-max*7.5+19))        //原本是47       
               .attr("y",function(d){ return d.cy + 4; })               
               .attr("fill", function(d){ return d.color;});        
        
        var nodes_c = new Array();
        for (var i = 0; i < node_unique.length; i++){
            for (var j = 0; j < contents.nodes.length; j++){
                if (node_unique[i] == contents.nodes[j].node_name){
                   var node = {"id": contents.nodes[j].node_name, "abundance": contents.nodes[j].abundance, "phylum": contents.nodes[j].phylum};    
                   nodes_c.push(node);    
                }
            }
        }
        /*  for (var i = 0; i < nodes_c.length; i++){
            console.log(nodes_c[i]);
        } */
        //console.log(nodes_c);
        var nodes = new Array();
        for (var i = 0; i < nodes_c.length; i++){
            for (var j = 0; j < node_phylum_color.length; j++){                
                if (nodes_c[i].phylum == node_phylum_color[j].phylum){
                    var node_c = {"id":nodes_c[i].id, "abundance": Math.log(nodes_c[i].abundance), "phylum": nodes_c[i].phylum, "node_color":node_phylum_color[j].color};
                    nodes.push(node_c);
                }
            }
        }  
        console.log(nodes); 
         //解决corr网络中部分节点没有名字标签问题，该步结果用于后面的svg_text中的data
        var corr_nodes_lab = new Array();    
        for (i = 0; i < legend.length + 1; i++){
            corr_nodes_lab.push(i);       
        }
        var corr_nodes_lab = corr_nodes_lab.concat(nodes);
        //console.log(corr_nodes_lab.length);        
      }else{
          var nodes = new Array();
          for (var i = 0; i < node_unique.length; i++){
            for (var j = 0; j < contents.nodes.length; j++){
                if (node_unique[i] == contents.nodes[j].node_name){
                   var node = {"id": contents.nodes[j].node_name, "abundance": Math.log(contents.nodes[j].abundance), "phylum": contents.nodes[j].phylum, "node_color": contents.params.node_color};    
                   nodes.push(node);    
                }
            }
        }
      }        
    }
    
    //设定ppi网络的节点属性文件
    if (contents.params.network_type == "PPI"){
        var nodes = new Array();
        for (var i = 0; i < contents.nodes.length; i++){
            for (var j = 0; j < node_unique.length; j++){
                if (contents.nodes[i].id == node_unique[j]){
                    var node = {"id": contents.nodes[i].id, "degree": contents.nodes[i].degree, "group": contents.nodes[i].group};
                    nodes.push(node);
                }
            }
        }
        console.log(nodes);
        //解决PPI网络中部分节点没有名字标签问题，该步结果用于后面的svg_text中的data
        var ppi_nodes_lab = new Array();    
        for (i = 0; i < 5; i++){
            ppi_nodes_lab.push(i);       
        }
        var ppi_nodes_lab = ppi_nodes_lab.concat(nodes);
        //console.log(ppi_nodes_lab);           
    }
    //设置PPI网络的节点颜色梯度条
    if (contents.params.network_type == "PPI"){
        //建立节点名字与group（logfc）的对应函数（映射）
        var values = [];
        for (var i = 0; i < nodes.length; i++){
            var id = nodes[i].id;
            var group = nodes[i].group;
            values[id] = group;
        }
        //求logFC的最大与最小值
        var maxvalue = d3.max(nodes, function(d){ return d.group; });
        var minvalue = d3.min(nodes, function(d){ return d.group; });
        //定义一个线性比例尺，将最小值和最大值之间的值映射到[0, 1]
        var linear = d3.scaleLinear()    //d3.scale.linear()这个会出错可能与版本有关系
            .domain([minvalue, maxvalue])
            .range([-5, 5]);
        
        //定义最小值和最大值对应的颜色
        var a = d3.rgb(0,255,0).brighter(1);    //浅蓝色, brighter使得颜色变得更亮
        var b = d3.rgb(255,0,0).brighter(1);    //蓝色
                     
        //颜色插值函数
        var computeColor = d3.interpolate(a,b);
        
       //定义一个线性渐变
        var defs = svg.append("defs");
 
        var linearGradient = defs.append("linearGradient")
                        .attr("id","linearColor")
                        .attr("x1","0%")
                        .attr("y1","0%")
                        .attr("x2","100%")
                        .attr("y2","0%");
 
        var stop1 = linearGradient.append("stop")
                        .attr("offset","0%")
                        .style("stop-color",a.toString());
 
        var stop2 = linearGradient.append("stop")
                        .attr("offset","100%")
                        .style("stop-color",b.toString());
 
        //添加一个矩形，并应用线性渐变
        var colorRect = svg.append("rect")
                    .attr("x", (contents.size.width-300))
                    .attr("y", 60)
                    .attr("width", 140)
                    .attr("height", 30)
                    .style("fill","url(#" + linearGradient.attr("id") + ")");
 
        //添加文字
        var minValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.size.width-300))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(function(){
                        return minvalue;
                    });
                        
        var mideleValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.size.width-230))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(0);
                    
        var logValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.size.width-290))
                    .attr("y", 60)
                    .attr("font-size", 13)
                    .attr("dy", "-0.3em")
                    .text("log2(Fold Change)");
                    
        var maxValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.size.width-180))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(function(){
                        return maxvalue;
                    });
    }
    ////给OTU节点添加颜色属性要素 
    if (contents.params.network_type == "OTU"){       
    var sample_nodes = new Array();
    for (var m = 0; m < node_unique.length; m++){
        for (var i = 0; i < contents.group_detail.length; i++){
            for (var j = 0; j < contents.group_detail[i].samples.length; j++){
                if (node_unique[m] == contents.group_detail[i].samples[j]){
                    var node = {"id": node_unique[m], "group": contents.group_detail[i].color};
                    sample_nodes.push(node);
                }
            }           
        }
    }
    //删除sample的节点，用于后面otu节点添加颜色属性
    var nodes = new Array();
    for (var i = 0; i < node_unique.length; i++){
        for (var j = 0; j < sample_nodes.length; j++){
            if (node_unique[i] == sample_nodes[j].id){        
                node_unique.splice(i, 1);               
            }
        }       
    } 
    for (var i = 0; i < node_unique.length; i++){
        var node = {"id": node_unique[i], "group": contents.params.otu_color};
        nodes.push(node);
    }
    //合并sample节点的属性添加到nodes中
    for (var i = 0; i < sample_nodes.length; i++){
        nodes.push(sample_nodes[i]);
    }
    console.log(nodes);
    console.log(links);   
    //重写legend数据,用于右上节点的信息
    var legend = new Array();   
    var j = 85;    
    for (var i = 0; i < contents.group_detail.length; i++){
        var sample = {"sample": contents.group_detail[i].name, "color": contents.group_detail[i].color, "cy": j};
        j = j + 15;
        legend.push(sample);
    }
    var level = "species(" + contents.params.level+")";
    //console.log(level);
    var otu = {"sample": level, "color": contents.params.otu_color, "cy": legend[contents.group_detail.length-1].cy + 22};
    legend.push(otu);
    //解决otu网络中部分节点没有名字标签问题，该步结果用于后面的svg_text中的data
    var otu_nodes_lab = new Array();    
    for (i = 0; i < legend.length + 1; i++){
        otu_nodes_lab.push(i);       
    }
    var otu_nodes_lab = otu_nodes_lab.concat(nodes);
   // console.log(otu_nodes_lab);
    //设定右上方的节点颜色标签              
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
               .text(function(d){ return d.sample;})
               .style("font-size", 10)
               .attr("x", (contents.size.width-116))        //原本是47       
               .attr("y",function(d){ return d.cy + 4; })               
               .attr("fill", function(d){ return d.color;});               
     
    //添加边
    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 1)
        .style("stroke", "#666");    
    //添加网络的节点信息
    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("r", node_size)          
          .attr("fill", function(d) { return d.group; })
          //鼠标停在节点上时候，会显示节点相连边
          .on("mouseover", function(d,i){
                      link.style("stroke", function(links){
						  if (links.source === d || links.target === d){
                              return "#FF0033";
                          } else {
							return "#6666";
						  }
                      });
                    })
          .on("mouseout", function(d,i){
               link.style("stroke", function(links){
                          if (links.source === d || links.target === d){
                              return '#666';
                          }  else {
							return '#6666';
						  }
                      });
                 })
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));   
    }
    if (contents.params.network_type == "corr_net"){ 
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", function(d){return Math.abs(d.value)+ 0.5;})
            .style("stroke", function(d){return d.color;});       
         //添加网络的节点信息
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
              .attr("r", function(d){return d.abundance+contents.params.node_size;})
              .attr("fill",function(d) { return d.node_color;})
              .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));   
    }

    if (contents.params.network_type == "PPI"){
        //添加网络的边信息     
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", 1)
            .style("stroke", contents.params.link_clour); 
            
        //添加网络的节点信息
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
              .attr("r", function(d){return Math.sqrt(d.degree)+7;})
              .attr("fill", function(d,i) { 
                            var t = linear(values[d.id]);
                            var color = computeColor(t);
                            return color.toString(); })
              .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));   
    }
    //设定节点的标签名字
    if (contents.params.show_node_label != false) {
        if (contents.params.network_type == "OTU"){        
            var svg_texts = svg.selectAll("text")
             .data(otu_nodes_lab)
             .enter()
             .append("text")
             .style("fill", "blink")
             .style("text-anchor", "middle")
             .attr("font-size", node_label_size)        
             .attr("dx", 1)
             .attr("dy", 1)
             .text(function(d){ return d.id;}); 
        } 
        if (contents.params.network_type == "corr_net"){                             
            var svg_texts = svg.selectAll("text")
             .data(corr_nodes_lab)
             .enter()
             .append("text")
             .style("fill", "blink")
             .style("text-anchor", "middle")
             .attr("font-size", contents.params.node_label_size)        
             .attr("dx", 1)
             .attr("dy", 1)
             .text(function(d){return d.id;}); 
        }
        if (contents.params.network_type == "PPI"){        
             var svg_texts = svg.selectAll("text")
             .data(ppi_nodes_lab)
             .enter()
             .append("text")
             .style("fill", "blink")
             .style("text-anchor", "middle")
             .attr("font-size", contents.params.node_label_size)        
             .attr("dx", 1)
             .attr("dy", 1)
             .text(function(d){ return d.id;}); 
        } 
    } 
    
    node.append("title")
        .text(function(d) { return d.id; });//鼠标停显示节点信息
          
    if (contents.params.network_type == "OTU"){
        circles_group.append("title")
          .text(function(d) { return d.sample; }); //鼠标停显示legend信息
    }
    if (contents.params.network_type == "OTU"){   
    link.append("title")
        .text(function(d) { return "eweight is " + d.value; }); //鼠标停显示边信息
    }
    if (contents.params.network_type == "corr_net"){   
    link.append("title")
        .text(function(d) { return "coefficient is " + d.value; }); //鼠标停显示边信息
    }
    simulation
        .nodes(nodes)          
        .on("tick", ticked);
         
    simulation.force("link")
        .links(links);
    if (contents.params.network_type == "OTU"){
        simulation.alpha(0.1);
        simulation.stop;
        }
    if (contents.params.network_type == "PPI" || contents.params.network_type == "corr_net"){
        simulation.alpha(0.2);
        simulation.stop;
    }
    function ticked() {
        //限制节点边界
        /* nodes.forEach(function (d,i){
            d.x = d.x > contents.size.width ? contents.size.width : d.x;
            d.y = d.y > contents.size.height ? contents.size.height : d.y;
        }) */
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
            
        if (contents.params.show_node_label != false){    
        svg_texts.attr("x", function(d){ return d.x; })//更新文字坐标
            .attr("y", function(d){ return d.y; });            
        }
      }
    
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
    }   
}
}
