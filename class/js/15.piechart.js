defineData();

const object = createSVG();

setBaseValue(object);

drawPie(object);

function createSVG(){
  return d3.select(document.body)
  .append('svg').attr('id', 'idsvg');
}

function defineData(){
  window.base = {};
  base.data = [
    {mon: 1, amt: 450},
    {mon: 2, amt: 850},
    {mon: 3, amt: 350},
    {mon: 4, amt: 650},
    {mon: 5, amt: 250},
    {mon: 6, amt: 550},
    {mon: 7, amt: 190},
    {mon: 8, amt: 850},
    {mon: 9, amt: 350},
    {mon: 10, amt: 750},
    {mon: 11, amt: 550},
    {mon: 12, amt: 850},
  ]
}
function setBaseValue(object){
  base.maxAmount = 1000;
  base.trbl = {
    top:20, right:20, bottom:30, left:50
  };
  base.svgWidth = Number.parseInt(object.style('width'));
  base.graphWidth = base.svgWidth - base.trbl.left - base.trbl.right;

  base.svgHeight = Number.parseInt(object.style('height'));
  base.graphHeight = base.svgHeight - base.trbl.top - base.trbl.bottom;

  base.centerX = 100;
  base.centerY = 200;
}

function drawPie(object){
  const pieObj = d3.pie();
  const arcObj = d3.arc()
    .innerRadius(0)
    .outerRadius(base.graphHeight / 2);

  const obj = object.selectAll('g')
    .data(pieObj(base.data))
    .enter()
    .append('g')
    .attr('transform', `translate(${base.centerX}, ${base.centerY})`);

  obj.append('path')
    .attr('class', 'pie')
      .attr('d', arcObj);

}
