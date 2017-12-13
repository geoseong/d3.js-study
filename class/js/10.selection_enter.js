const circleData = [30, 40, 50];
const obj = d3.select('#idsvg')
  .selectAll('circle')
  .data(circleData);

const enterObj = obj.enter();
let acumY = 0;
enterObj.append('circle')
  .attr('cx', 100)
  .attr('fill', 'blue')
  .attr('cy', function(d, i){
    console.log('cy this/d/i', this, d, i);
    acumY = acumY + d;
    if(i > 0){
      acumY = acumY + circleData[i - 1];
    };
    return acumY;
  })
  .attr('r', function(d, i){return d;});
