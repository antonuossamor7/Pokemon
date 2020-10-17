var svgHeight = 450;
var svgWidth = 1000;
var chartMargin = {
    top: 40,
    bottom: 40,
    left: 100,
    right: 40
};

var chartWidth = svgWidth - (chartMargin.left + chartMargin.right);
var chartHeight = svgHeight - (chartMargin.top + chartMargin.bottom);

var svg = d3
    .select(".container")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

var tooltip = d3.select("#tooltip")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("./Pokemon.csv").then((pokeData) => {
    console.log(pokeData);

    pokeData.forEach((data) => {
        parseFloat(data.name);
        //data.capture_rate = +data.capture_rate;
        //data.flee_rate = +data.flee_rate;
        data.spawn_chance = +data.spawn_chance;
    });

    var xBandScale = d3.scaleBand()
        .domain(pokeData.map(data => data.name))
        .range([0, chartWidth]);
    //.padding(0);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(pokeData, data => data.spawn_chance)])
        .range([chartHeight, 0]);

    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    var barSpacing = 10;
    var scaleY = .25;

    var barWidth = (chartWidth - (barSpacing * (pokeData.length - 1))) / pokeData.length;

    chartGroup.append("g")
        .call(leftAxis);
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    chartGroup.selectAll(".bar")
        .data(pokeData)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", data => barWidth)
        .attr("height", data => data.spawn_chance * scaleY)
        .attr("x", (data, i) => i * (barWidth + barSpacing))
        .attr("y", data => chartHeight - data.spawn_chance * scaleY);


}).catch(function (error) {
    console.log(error)
});
