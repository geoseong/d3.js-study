// selectAll().select()
const d3Node = d3.selectAll('ul').select('li');
console.log(`d3.selectAll('ul').select('li')`, d3Node);

const groups = d3Node._groups[0];
console.log('groups/ groups.textContent', groups[0], groups[0].textContent);

// function chaining
d3.selectAll('ul').select(function(){
  console.log('evt this', this);
  console.log('this.firstElementChild.textContent', this.firstElementChild.textContent);
});
