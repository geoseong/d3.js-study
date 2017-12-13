'use strict';
const godSVG = createSVG(); // SVG객체 생성하여 변수로 담음.

drawBar(godSVG);  // 막대 bar 그리기.
drawXYLine(godSVG); // x, y축 선 그리기.
drawYAxis(godSVG);  // Y축 눈금자 표시
drawXAxis(godSVG);  // X축 눈금자 표시

function createSVG(){
  return d3.select(document.body)
  .append('svg').attr('id', 'idsvg');
}
function drawBar(object){
  // 12개월의 데이터
  const salesData = [950, 550, 450, 350, 250, 150, 180, 250, 350, 450, 550, 850];
  const barWidth = 600 / salesData.length - 20;

  // 막대 폭을 계산한다. - 600월 12로 나눔
  // 20픽셀은 막대와 막대 간격으로 - 막대 너비는 30이 된다.
  // <svg> g를 그린다.
  const posList = [];
  const obj = object.append('g')
    .attr('class', 'bar')
    .attr('transform', 'translate(50, 20)')
    .selectAll('rect')
    .data(salesData)
    .enter();

  obj.append('rect')
    .attr('width', barWidth)
    .attr('height', function(d, i){
      posList.push(Math.round(400 * d / 1000));
      return posList[i];
    })
    .attr('x', function(d, i){
      return (barWidth * i) + (20 * i);
    })
    .attr('y', function(d, i){
      return 400 - posList[i];
    })
}
function drawXYLine(object){
  const axisValue = [
    {x:50, y:20},
    {x:50, y:420},
    {x:650, y:420},
  ];
  const lineObj = d3.line()
    .x(function(d){
      console.log('d.x', d.x);
      return d.x;
    })
    .y(function(d){
      console.log('d.y', d.y);
      return d.y;
    });

  object.append('g')
    .attr('class', 'axis')
    .append('path')
    .attr('d', lineObj(axisValue));
}
function drawYAxis(object){
  // y축에 100단위로 금액과 눈금자를 표시한다.
  const yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([400, 0]); // range : domain() 에서 나눈 값에 매핑하여 값을 나눈다.
  const yAxis = d3.axisLeft(yScale);  // 왼쪽에 축 선을 그리는 함수.
  object.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(50, 20)')
    .call(yAxis);
}

function drawXAxis(object){
  const month = [1,2,3,4,5,6,7,8,9,10,11,12];
  const xScale = d3.scaleBand()
    .domain(month)
    .range([0, 600]);
  const xAxis = d3.axisBottom(xScale);
  object.append('g')
    .attr('id', 'xAxis')
    .attr('class', 'axis')
    .attr('transform', 'translate(50, 420)')
    .call(xAxis);

}
