
console.log('---------------- [080] Comparison Operator -----------------');

// 같다( ==, === ), 같지 않다( !=, !==), 크다 (>), 작다(>), 크거나 같다(>=), 작거나 같다( <= )
var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result, typeof(result));

result = x >= y;
console.log('x > y => ' + result);
console.log('');


// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('')


// 일치 비교
var x = true;
var y = 1;

// 자바스크립트가 형 변환을 해 보고 매칭되면 true
// true => 1, false => 0
result = x == y;
console.log('true == 1 => ' + result);

// 일치 연산자
result = x === y;       // === => 타입까지 비교한다.
console.log('true === 1 => ' + result);

x = 10;
y = '10';
console.log('10 == "10" => ' + (x == y) );
console.log('10 === "10" => ' + (x === y) );

console.log('10 != "10" => ' + (x != y) );
console.log('10 !== "10" => ' + (x !== y) );


// 3항 연산자
var id = 'admin';

// (조건) ? 조건이 참이면 대입될 값 : 조건이 거짓이면 대입될 값
result = ( id === 'admin' ) ? '관리자' : '일반 사용자';
console.log(result);

