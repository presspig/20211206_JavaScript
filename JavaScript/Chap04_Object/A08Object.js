
console.log('---------------- [230] Object internal Method -----------------');

var one = { name: 'NolBu', age: 30 };

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능



// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
var two = { name: 'NolBu', age: 30 };




// 객체 동결. 읽기만 가능하다
var three = { name: 'NolBu', age: 30 };




// Deep Freeze
var four = { name: 'NolBu', age: 30, info: {tel: '010-1234-5678', address: 'Seoul'} };
Object.freeze(four);