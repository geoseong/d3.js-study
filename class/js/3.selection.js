const doc = d3.selection()
console.log('doc / nodeName', doc, doc._groups[0][0].nodeName);

d3.selection.prototype.changeText = function(text){
  this.text(text);
};
d3.selectAll('li').changeText('텍스트 수정');
