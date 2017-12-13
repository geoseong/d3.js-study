const object = createSVG();

defineData();

setBaseValue(object); // 차트 표현을 위한 기본 값 설정

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
