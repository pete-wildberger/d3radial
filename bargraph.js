let bar = [100, 250, 175, 200, 120];
let rectWidth = 100;
let height = 300;

let extent = d3.extent(bar);
console.log('extent ', extent);

let yScale = d3
  .scaleLinear()
  .domain(extent)
  .range([height, 0]);
console.log('yScale ', yScale);

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
  .attr('stroke', '#fff');

let yAxis = d3.axisLeft().scale(yScale);
d3
  .select('svg')
  .append('g')
  .attr('transform', 'translate(40, 20)')
  .call(yAxis);

console.log(graph.nodes());
