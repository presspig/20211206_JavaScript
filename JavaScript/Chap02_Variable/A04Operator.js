
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

result = x == y;
console.log('true == 1 => ' + result);

