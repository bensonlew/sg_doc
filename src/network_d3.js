d3.d3_report = {
    network:function(position, contents)
    {
     var svg = d3.select("body")
        .append("svg")
        .attr("width",contents.width) 
        .attr("height",contents.height);    
       
    if (contents.params.show_svg_text != null) {  
      svg.append("text")
       .attr("x", (contents.width/2))
       .attr("y", (contents.height-100))
       .attr("text-anchor", "middle")
       .style("font-size", "16px")
       .text(contents.params.title);
    }
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    
    if (contents.params.strength == null){
        if (contents.params.link_distance != null ){ 
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(contents.params.link_distance)
            //.strength(0.7)
            )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(contents.width / 2, contents.height / 2));
        }
        else{
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(50)
            //.strength(0.7)
            )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(contents.width / 2, contents.height / 2));
        }
    }else{
        if (contents.params.link_distance != null ){ 
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(contents.params.link_distance)
            .strength(contents.params.strength)
            )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(contents.width / 2, contents.height / 2));
        }
        else{
        var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(50)
            .strength(contents.params.strength))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(contents.width / 2, contents.height / 2));
        }
    }
    
    var links = new Array();   //重新定义节点边的文件，将符合条件的多个对象添加到数组中去
    if (contents.params.eweight != null){
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
                    .attr("x", (contents.width-300))
                    .attr("y", 60)
                    .attr("width", 140)
                    .attr("height", 30)
                    .style("fill","url(#" + linearGradient.attr("id") + ")");
 
        //添加文字
        var minValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.width-300))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(function(){
                        return minvalue;
                    });
                        
        var mideleValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.width-230))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(0);
                    
        var logValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.width-290))
                    .attr("y", 60)
                    .attr("font-size", 13)
                    .attr("dy", "-0.3em")
                    .text("log2(Fold Change)");
                    
        var maxValueText = svg.append("text")
                    .attr("class","valueText")
                    .attr("x", (contents.width-180))
                    .attr("y", 110)
                    .attr("dy", "-0.3em")
                    .attr("font-size", 12)
                    .text(function(){
                        return maxvalue;
                    });
    }
    if (contents.params.network_type == "OTU"){
    //筛选留下links中有的节点    
    var nodes = new Array();
        for (var i = 0; i < contents.nodes.length; i++){
            for (var j = 0; j < node_unique.length; j++){
                if (contents.nodes[i].id == node_unique[j] || contents.nodes[i].id == node_unique[j]){
                    var node = {"id": contents.nodes[i].id, "group": contents.nodes[i].group};                          
                        nodes.push(node);  
                }
            }         
        }        
    console.log(nodes);
    console.log(links);
    //设定样本分组信息
    var group = new Array();
    for (var i = 0; i < nodes.length; i++){
        group.push(nodes[i].group);
    }
    //样本分组信息去重
    group_unique = new Array();
    for (var i = 0; i < group.length; i++){
        if (group_unique.indexOf(group[i]) == -1){
            group_unique.push(group[i]);
        }
    }
    console.log(group_unique);
    //重写legend数据,用于右上节点的信息
    var legend = new Array();   
    var j = 85;    
    for (var i = 0; i < group_unique.length; i++){
        
        var sample = {"sample": group_unique[i], "cy": j}
        j = j + 15;
        legend.push(sample);
    }
    console.log(legend);
    //设定右上方的节点颜色标签              
    var circles_group = svg.append("g")
                .selectAll("circle")
               //.data(contents.circles)
               .data(legend) 
               .enter()
               .append("circle")
               .attr("cx", (contents.width-55))
               .attr("cy",function(d){ return d.cy; })
               .attr("r", 6)
               .attr("fill", function(d){ return color(d.sample); });  
    //添加legend的标签          
    var circles_group = svg.append("g")
               .selectAll("text")               
               .data(legend) 
               .enter()
               .append("text")
               //.style("fill", "blink")
               .text(function(d){ return d.sample;})
               .style("font-size", 8)
               .attr("x", (contents.width-47))               
               .attr("y",function(d){ return d.cy + 4; })               
               .attr("fill", function(d){ return color(d.sample);});  
    } 
    
        
    //添加网络的边信息     
    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 1)
        .style("stroke", contents.params.link_clour);  
    if (contents.params.network_type == "OTU"){        
    //添加网络的节点信息
    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("r", contents.params.node_size)
          .attr("fill", function(d) { return color(d.group); })
          //鼠标停在节点上时候，会显示节点相连边
          .on("mouseover", function(d,i){ 
                      link.style("stroke", function(links){
                          if (links.source === d || links.target === d){
                              return "#FF0033";
                          }
                      });
                    })
          .on("mouseout", function(d,i){
               link.style("stroke", function(links){
                          if (links.source === d || links.target === d){
                              return contents.params.link_clour;
                          }
                      });
                 })
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));   
    }
    
    if (contents.params.network_type == "PPI"){
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
            
    if (contents.params.show_node_label != null) {    
         var svg_texts = svg.selectAll("text")//添加节点的标签
         .data(nodes)
         .enter()
         .append("text")
         .style("fill", "blink")
         .style("text-anchor", "middle")
         .attr("font-size", contents.params.node_label_size)        
         .attr("dx", 1)
         .attr("dy", 1)
         .text(function(d){ return d.id;}); 
       }
       
        node.append("title")
          .text(function(d) { return d.id; });//鼠标停显示节点信息
          
        if (contents.params.network_type == "OTU"){
        circles_group.append("title")
          .text(function(d) { return d.sample; }); //鼠标停显示legend信息
        }
        
        link.append("title")
          .text(function(d) { return "eweight is " + d.value; }); //鼠标停显示边信息
        simulation
          .nodes(nodes)          
          .on("tick", ticked);
         
        simulation.force("link")
          .links(links);
        if (contents.params.network_type == "PPI"){
            simulation.alpha(0.1);
            simulation.stop;
        }
    function ticked() {
        //限制节点边界
        /* nodes.forEach(function (d,i){
            d.x = d.x > contents.width ? contents.width : d.x;
            d.y = d.y > contents.height ? contents.height : d.y;
        }) */
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
            
        svg_texts.attr("x", function(d){ return d.x; })//更新文字坐标
            .attr("y", function(d){ return d.y; });            
      
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
