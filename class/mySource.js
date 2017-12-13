d3.select(document.body)
  .append('svg')
  .attr('id', 'first')
  .attr('width', 150)
  .attr('height', 100)
  .style('position', 'absolute')
  .style('top', '350px')
  .style('left', '100px');

d3.select('#first')
  .append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr('width', 100)
  .attr('height', 50)
  .attr('rx', 5)
  .attr('ry', 5)
  .attr('fill', 'blue');
  // .attr('stroke', 'blue')
  // .attr('stroke-width', 5);
  // 이렇게 한번에 속성적용이 안됨..
  // .attr({'x':10, 'y':10, 'width':100, 'height':50, 'rx':5, 'ry':5})
  // .attr({'stroke':'blue', 'fill':'lime', 'stroke-width':5});
