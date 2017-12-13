const obj = d3.select('circle');
obj.attr('cx', 100)
  .attr('cy', 70)
  .attr('r', 50)
  .attr('stroke', 'blue')
  .attr('fill', 'lime');

// 두번째 파라미터가 function일 때.
obj.attr('stroke-width', function(){
  return 5;
});

const result = obj.attr('stroke-width');
console.log('obj.stroke-width', result);

// stroke-width 속성 삭제하기. --> return null;
obj.attr('stroke-width', function(){
  return null;
});
