// svg rect append
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

// query selector
const el = document.querySelector('em');
console.log('nodeName: ', el.nodeName, el, '/node.length', el.length);

// select()
const d3Node = d3.select('em');
const groups = d3Node._groups[0];
console.log('d3Node', d3Node);
console.log('nodeName: ', groups[0].nodeName);

const parents = d3Node._parents[0];
console.log('nodeName: ', parents.nodeName);

// selectAll()
const d3NodeAll = d3.selectAll('em');
console.log('d3NodeAll', d3NodeAll);

const groupsAll = d3NodeAll._groups[0];
console.log('groupsAll.length: ', groupsAll.length);

const rect = d3.selectAll('rect');
console.log('rect', rect);
console.log('rect.length: ', rect._groups[0].length);
