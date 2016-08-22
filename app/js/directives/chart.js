import * as d3 from 'd3';

function BarChart() {

  const tsv = [
    'letter	frequency',
    'A	.08167',
    'B	.01492',
    'C	.02782'
  ].join('\n');

  const margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  return {
    restrict: 'EA',
    scope: {
      // title: '@',
      // message: '@clickMessage'
    },
    link: (scope, element) => {
      const data = d3.tsvParse(tsv, (d) => {
        return {
          letter: d.letter, freq: +d.frequency
        };
      });

      const barWidth = width / data.length;

      const chart = d3.select(element[0]).append('svg');
      debugger
      chart
        .attr('width', width)
        .attr('height', height);

      const bar = chart.selectAll('g')
        .data(data)
        .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(' + i * barWidth + ',0)'; });

      const x = d3.scaleBand()
        .domain(['A','B','C'])
        .rangeRound([0,width]);

      const y = d3.scaleLinear()
        .domain([0,d3.max(data, function(d){return d.freq})])
        .range([height, 0]);

      bar.append('rect')
        .attr('y', function(d) { return y(d.freq); })
        .attr('height', function(d) { return height - y(d.freq); })
        .attr('width', barWidth - 1);

      // element.on('click', () => {
      //   window.alert('Element clicked: ' + scope.message);
      // });
    }
  };
}

export default {
  name: 'barChart',
  fn: BarChart
};
