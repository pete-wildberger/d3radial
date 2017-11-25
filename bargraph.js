let bar = [100, 250, 175, 200, 120];
let rectWidth = 100;
let height = 300;

// getting min and max of data for scale
let extent = d3.extent(bar);
console.log('extent ', extent);

// building scale for graph
let yScale = d3
  .scaleLinear()
  .domain(extent)
  .range([height, 0]);
console.log('yScale ', yScale);

let xScale = d3
  .scaleLinear()
  .domain(bar.length)
  .range([bar.length, 0]);
console.log('xScale ', xScale);

// main bargraph
let graph = d3.select('.bargraph').append('svg');
graph
  .selectAll('rect')
  .data(bar)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * rectWidth)
  .attr('y', d => height - d)
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
  .attr('transform', 'translate(0, 30)')
  .call(xAxis);
console.log('xAxis ', xAxis);

// yAxis tick styling
// axis.tickFormat()
let text = graph.selectAll('text').attr('fill', d => {
  return d === 200 ? 'red' : 'green';
});

console.log('text ', text);
console.log(graph.nodes());
