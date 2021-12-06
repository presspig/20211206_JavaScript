
console.log('---------------- [038] Variable -----------------');

// 변수는 식별자라고도 한다.

var x = 10;
var y = 20;
var z = x + y;
var old = z;

z = z + x;

console.log(old)
console.log( z );
console.log('결과: ' + x + ' + ' + y + ' = ' + (x + y) );

