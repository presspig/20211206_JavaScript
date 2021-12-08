
console.log('---------------- [163] 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
console.log(onAdd)

// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)
var onAdd = function() {
    var x = 10;
    var y = 20;
    var result = x + y;
    console.log(`${x} + ${y} = ${result}`);
};

console.log(onAdd);
onAdd();


// 함수 자체는 이름이 없음 => 익명 함수
var onMin = function(x, y) {
    var result = x - y;
    console.log(`${x} - ${y} = ${result}`);
};
onMin(10, 5);
console.log('');


// 표현식 방식의 함수 선언(기명함수)
// fact라는 함수 명은 함수 내부에서만 호출 가능
var factorial = function fact(x) {
    // console.log('factorial');
    if( x === 1 ) return 1;
    else return x * factorial(x - 1);
}

var result = factorial(10);
console.log(result);
// fact(10);            // 내부 이름은 밖에서 호출 할 수 없다


// 내부 이름으로 사용한다면..
var factorial2 = function fact(x) {
    // console.log('factorial');
    if( x === 1 ) return 1;
    else return x * fact(x - 1);        // 내부에서는 자신의 함수명을 호출할 수 있음
}

console.dir(factorial2);
var result = factorial2(10);
console.log(result);
console.log('');


// Function 생성자 함수 이용
var onMulti = new Function('x', 'y', 'return x * y');       // 마지막 문자열만 실행구문이다.
console.log( onMulti(10, 2) );

