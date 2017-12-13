const selection = d3.selectAll('li');

// 1. filter파라미터가 엘리먼트
const node = selection.filter('.first');
console.log('node / node.textContent', node, node._groups[0][0].textContent);

// 2. filter파라미터가 함수
const el = selection.filter(function(d, i, k){
  console.log('selection this/d/i/k', this, d, i, k);
  if(this.className === 'second'){
    return this;
  }
});
console.log('el / el.textContent', el, el._groups[0][0].textContent);
