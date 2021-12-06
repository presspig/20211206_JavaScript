
// ; 는 명령이 종료됨을 JavaScript 인터프리터에게 알린다.
// 생략하면 자동으로 붙여준다. 단 개행을 해야 한다. (가능하면 붙여서 사용하는 것을 권장);
var x = 10;

console.log('NolBu');
console.log(x);

console.info('NolBu');
console.warn('NolBu');
console.error('NolBu');

console.time('TimeCheck');
for(var i = 0; i < 1000000; i++) {

}
console.timeEnd('TimeCheck');       // TimeCheck의 텍스트 값이 time과 동일해야 한다.

var obj = {name: 'ABC'};
console.log(obj);
console.dir(obj);                   // 구조를 확인할 목적

console.log('');                    // 개행

// JavaScript에서는 문자열은 ', " 어느 것을 사용해도 된다.
console.log('NolBu');
console.log("NolBu");

// ', "은 1 계층에서 혼합 사용이 가능
console.log('Hello "~~~" World');
console.log("Hello '~~~' World");

// console.log를 묶어서 여러번 사용이 가능
console.log(x, obj, 'Hello', 'World');          // console.log를 4번 실행헌 것과 동일한 효과.


// 문자와 +로 연결되면 모두 문자열로 자동 치환된다.
// 뒤에 이어서 출력하는 형태로 변경됨
console.log('Hello ' + x + ' World');

// 1. Value + 10 => Value: 10
// 2. Value 10 + 20 => Value: 1020;
console.log('Value: ' + 10 + 20);

// 1. 10 + 20 => 30
// 2. 30 + '의 결과' => 30의 결과
console.log(10 + 20 + '의 결과')

// 우선 연산은 ()를 사용
console.log('Value: ' + (10 + 20) );