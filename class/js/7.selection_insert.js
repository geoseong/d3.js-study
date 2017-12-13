const obj = d3.select('ul');
// case 1.
obj.insert('li').text('2번');

// case 2.
obj.insert(function(){
  const el = document.createElement('li');
  el.textContent = '3번';
  return el;
});

// case 3.
obj.insert('li', ':first-child').text('4번');

// case 4.
obj.insert('ol').text('4번');
