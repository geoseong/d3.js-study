const obj = d3.select('ul');
// 파라미터가 태그
obj.append('li').text('두 번째');

// 파라미터가 함수
obj.append(function(){
  return document.createElement('li');
});

// 함수 체이닝
obj.append(function(){
  return document.createElement('li');
}).text('함수 체이닝. hi');

// 함수 체이닝
obj.append(function(){
  return document.createElement('li');
}).text('함수 체이닝. hi22');


// createElementNS
obj.append(function(){
  return document.createElementNS('https://www.w3.org/2000/svg', 'li');
}).text('createElementNS으로 추가하기');
