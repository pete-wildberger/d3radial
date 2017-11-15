let bar = [100, 250, 175, 200, 120];
let rectWidth = 100;
let bheight = 300;

svg = d3.select('.bargraph').append('svg');
svg
  .selectAll('rect')
  .data(bar)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * rectWidth)
  .attr('y', d => bheight - d)
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
