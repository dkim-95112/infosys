import * as d3 from 'd3';

function BarChart() {

  const margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  return {
    restrict: 'EA',
    scope: {
      tsv: '=',
      yAxisLabel: '@'
    },
    link: (scope, element) => {

      const x = d3.scaleBand()
        .rangeRound([0,width])
        .paddingInner(.1)
        .paddingOuter(.1);

      const y = d3.scaleLinear()
        .range([height, 0]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y)
        .ticks(10, '%');

      const chart = d3.select(element[0])
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      let data = d3.tsvParse(scope.tsv);
      const kOrdinal = data.columns[0];
      const kValue = data.columns[1];

      data = data.map((d) => {
        return {
          [kOrdinal]: d[kOrdinal],
          [kValue]: +d[kValue] // converting to number
        }
      });

      x.domain(data.map((d) => d[kOrdinal]));
      y.domain([0,d3.max(data, (d) => d[kValue])]);

      chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

      const yGroup = chart.append("g")
        .attr("class", "y axis");

      yGroup
        .append('text')
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(scope.yAxisLabel);

      yGroup
        .call(yAxis);

      chart.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d[kOrdinal]); })
        .attr("y", function(d) { return y(d[kValue]); })
        .attr("height", function(d) { return height - y(d[kValue]); })
        .attr("width", x.bandwidth());

    }
  };
}

export default {
  name: 'barChart',
  fn: BarChart
};
