let bar = [100, 250, 175, 200, 120];
let rectWidth = 100;
let barHeight = 300;

var margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// getting min and max of data for scale
let extent = d3.extent(bar);
console.log('extent ', extent);
let xExtent = d3.extent(bar, (d, i) => i + 1);
console.log('xExtent', xExtent);
// building scale for graph
let yScale = d3
  .scaleLinear()
  .domain(extent)
  .range([barHeight, 0]);
console.log('yScale ', yScale);

let xScale = d3
  .scaleBand()
  .domain(xExtent)
  .range([margin.left, (bar.length + 1) * rectWidth - margin.right]);
console.log('xScale ', xScale);

// main bargraph
let graph = d3
  .select('.bargraph')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);
graph
  .selectAll('rect')
  .data(bar)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * rectWidth)
  .attr('y', d => barHeight - d)
  .attr('width', rectWidth)
  .attr('height', d => d)
  .attr('fill', d => {
    if (d === 250) {
      return 'red';
    } else {
      return 'blue';
    }
  })
  .attr('stroke', '#fff')
  .attr('transform', 'translate(40, 0)');

// appending yAxis
let yAxis = d3.axisLeft().scale(yScale);
d3
  .select('svg')
  .append('g')
  .attr('transform', 'translate(30, 0)')
  .call(yAxis);
console.log('yAxis ', yAxis);

let xAxis = d3.axisBottom().scale(xScale);
d3
  .select('svg')
  .append('g')
  .attr('transform', 'translate(0,' + barHeight + ')')
  .call(xAxis);

// yAxis tick styling
// axis.tickFormat()
let text = graph.selectAll('text').attr('fill', d => {
  return d === 200 ? 'red' : 'green';
});

console.log('text ', text);
console.log(graph.nodes());
