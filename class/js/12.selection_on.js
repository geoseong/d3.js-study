// obj definition
const circleDom = d3.select('#idsvg')
  .append('circle')
    .attr('cx', 150)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('stroke', 'blue')
    .attr('fill', 'lime')
    .attr('stroke-width', 5);

// event
circleDom
  .on('mouseover', mouseoverEvent)
  .on('mouseout', function(d, i){
    // d3.select(this).attr('fill', 'lime');
    circleDom.attr('fill', 'lime');
  });

function mouseoverEvent(d, i){
  // d3.select(this).attr('fill', 'blue');
  circleDom.attr('fill', 'blue');
}
