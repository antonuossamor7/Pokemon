d3.csv("pokemon2.csv")
                                .then(d => chart(d))

                            function chart(csv) {
                                var keys = ['attack', 'defense', 'hp', 'speed', 'sp_attack', 'sp_defense']
                                let poke   = [...new Set(csv.map(d => d.name))]
                                var options = d3.select("#poke").selectAll("option")
                                    .data(poke)
                                    .enter().append("option")
                                    .text(d => d)

                                var svg = d3.select("#chart"),
                                    margin = {top: 25, bottom: 0, left: 25, right: 25},
                                    width = +svg.attr("width") - margin.left - margin.right,
                                    height = +svg.attr("height") - margin.top - margin.bottom;

                                var x = d3.scaleBand()
                                    .range([0, width])
                                    .padding(0.4);
                                    
                                var y = d3.scaleLinear()
                                    .range([height - margin.bottom, margin.top])

                                var xAxis = d3.axisBottom(x).tickSizeOuter(0)
                                var yAxis = d3.axisLeft(y)

                                svg.append("g")
                                    .attr("class", "x-axis")
                                    .attr("transform", `translate(0,${height - margin.bottom})`)
                                    .call(xAxis);
                                svg.append("g")
                                    .attr("class","y-axis")
                                    .attr("transform", `translate(${margin.left},0)`)
                                    .call(yAxis);
                                
                                update(d3.select("#poke").property("value"), 0)

                                function update(input, speed) {
                                    let rawData = csv.filter(f => f.name == input)[0]
                                    let data = []
                                    for(let i = 0; i < keys.length; i++){
                                        let obj = {
                                            "attribute": keys[i],
                                            "value": Number(rawData[keys[i]])
                                        }
                                        data.push(obj)
                                    }

                                    y.domain([0, d3.max(data, d => d.value) + 5]).nice()
                                    svg.selectAll(".y-axis").transition().duration(speed)
			                            .call(yAxis);

                                    x.domain(data.map(d => d.attribute))
                                    svg.selectAll(".x-axis").transition().duration(speed)
			                            .call(xAxis)
                                    let pokedex = rawData.pokedex_number
                                    if(pokedex < 10){
                                        pokedex = '00' + pokedex
                                    } else if(pokedex < 100){
                                        pokedex = '0' + pokedex
                                    }
                                    d3.select("#image").select("img").remove()
                                    var img = d3.select("#image")
                                        .append("img")
                                        .attr("src", `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedex}.png`)
                                        .attr("width", "300px")
                                        .attr("height", "300px")
                                    
                                    var tooltip = d3.select("#tooltip")
                                        .append("div")	
                                        .attr("class", "tooltip")			
                                        .style("opacity", 0);
                                    
                                    let color = {
                                        'bug': '#88970E',
                                        'electric': '#EF9700',
                                        'fairy': '#F5AFF5',
                                        'fire': '#CF2701',
                                        'flying': '#95A8F5',
                                        'grass': '#379D00',
                                        'normal': '#ABA493',
                                        'poison': '#924494',
                                        'psychic': '#EA3A73',
                                        'water': '#217FDE',
                                    }

                                    var bar = svg.selectAll(".bar")
                                        .data(data)
                                        bar.enter().append("rect")
                                        .attr("class", "bar")
                                        .attr("width", x.bandwidth())
                                        .merge(bar)
                                        .on("mouseover", function(d) {
                                            tooltip.transition()
                                                .duration(200)		
                                                .style("opacity", .9);			
                                            tooltip.html(`<b>${d.attribute.toUpperCase()}  ${d.value}`)	
                                                .style("left", (d3.event.pageX - width/1.5) + "px")		
                                                .style("top", (d3.event.pageY - height/2) + "px")
                                                .style("padding", "8px")                                          
                                                .style("background-color", "white");
                                        })					
                                        .on("mouseout", function(d) {		
                                            tooltip.transition()		
                                                .duration(500)		
                                                .style("opacity", 0);	
                                        })
                                        .transition().duration(speed)
                                            .attr("x", d => x(d.attribute))
                                            .attr("y", d => y(d.value))
                                            .attr("height", d => y(0) - y(d.value))
                                            .attr("fill", color[rawData.type1])
                                }

                                    var select = d3.select("#poke")
                                        .on("change", function() {
                                            update(this.value, 750)
                                        })

                            }