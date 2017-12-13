const object = createSVG();

defineData();
setBaseValue(object); // 차트 표현을 위한 기본 값 설정
drawYAxis(object);  // Y축 눈금자 표시
drawXAxis(object);  // X축 눈금자 표시

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
}

function drawYAxis(object){
  // y축에 100단위로 금액과 눈금자를 표시한다.
  base.yScale = d3.scaleLinear()
    .domain([0, base.maxAmount])
    .range([base.graphHeight, 0]); // range : domain() 에서 나눈 값에 매핑하여 값을 나눈다.

  const yAxis = d3.axisLeft(base.yScale);  // 왼쪽에 축 선을 그리는 함수.
  object.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(50, 20)')
    .attr('transform', `translate(${base.trbl.left}, ${base.trbl.top})`)
    .call(yAxis);
}

function drawXAxis(object){
  const month = [1,2,3,4,5,6,7,8,9,10,11,12];
  base.xScale = d3.scaleBand()
    .domain(month)
    .range([0, base.graphWidth]);
  const xAxis = d3.axisBottom(base.xScale);
  object.append('g')
    .attr('id', 'xAxis')
    .attr('class', 'axis')
    .attr('transform', `translate(${base.trbl.left}, ${base.svgHeight - base.trbl.bottom})`)
    .call(xAxis);
}
