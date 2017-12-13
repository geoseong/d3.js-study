const rectData = [40, 50, 60];
const obj = d3.select('#idsvg')
  .selectAll('rect')
  .data(rectData);

  console.log('obj', obj);

const enterObj = obj.enter();
let acumX = 0, acumY = 0;
enterObj.append('rect')
  .attr('fill', 'lime').attr('stroke', 'blue').attr('stroke-width', 3)
  .attr('width', function(d, i){
    return d;
  })
  .attr('height', function(d, i){
    return d;
  })
  .attr('x', function(d, i){
    if(i===0) {
      return 0;
    }
    acumX = acumX + rectData[i-1];
    return acumX;
  })
  .attr('y', function(d, i){
    if(i===0){
      return 0;
    }
    acumY = acumY + (rectData[i-1] / 2);
    return acumY;
  })

console.log('enterObj', enterObj);
