// 문제1. 동그라미 두개 그리기
const obj =  d3.select('#idsvgC');
const cx = 250;
const r1 = 50;
const r2 = 100;
console.log('#idsvgC obj', obj);

const circle1 = obj.insert('circle')
  .attr('id', 'circle1')
  .attr('cx', cx).attr('cy', 100)
  .attr('r', r1)
  .attr('stroke', 'blue')
  .attr('stroke-width', 5);

console.log('circle1', circle1);
console.log('groups.cx', circle1._groups[0][0].cx.animVal.value);

obj.insert('circle')
  .attr('id', 'circle2')
  .attr('cx', circle1._groups[0][0].cx.animVal.value)
  .attr('cy', circle1._groups[0][0].cy.animVal.value + r2 + r1)
  .attr('r', r2)
  .attr('fill', 'lime')
  .attr('stroke', 'blue')
  .attr('stroke-width', 5);


// 문제2. 정삼각형 두개 그리기
const startX = 100;
const startY = 20;
const size = 50;

const objT =  d3.select('#idsvgT');
const trianlgle1 = objT.insert('path')
  .attr('d', `M${startX},${startY} l${size/2},${size} l-${size},0, z`)
  .attr('fill', 'lime')
  .attr('stroke', 'blue')
  .attr('stroke-width', 5);

objT.insert('path')
  .attr('d', `M${startX+size},${startY} l${size/2},${size} l-${size},0, z`)
  .attr('fill', 'lime')
  .attr('stroke', 'blue')
  .attr('stroke-width', 5);
