const textData = [10, 20, 30];

d3.selectAll('li')
  .data(textData)
  .text(function(d){
    return 'data ' + d;
  });
