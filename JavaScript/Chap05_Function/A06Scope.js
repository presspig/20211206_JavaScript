
console.log('---------------- [189] Scope -----------------');

// var 변수도 함수의 {} 내부에서는 범위를 갖는다.
var x = 'Global';

function out() {
    var x = 'Local';            // x는 지역변수. 함수 {} 내부에서만 참조 가능한 변수
    var z = '밖에서 참조 안됨';
    console.log('Function IN: ', x, z);
}
out();
// console.log(z);
console.log('Function OUT: ', x);
console.log('');

// 197 Page

// arguments 객체 생성
// scope chian 설정
// 내부 변수 정의
// this 값 결정
// 실행

var x = 'Global X';
var y = 'Global Y';

function outer() {
    var z = 'Outer Local z';

    console.log('outer=> ', x);
    console.log('outer=> ', y);
    console.log('outer=> ', z);

    function inner() {
        var z = 'Inner Local z';

        console.log('inner=> ', x);
        console.log('inner=> ', y);
        console.log('inner=> ', z);
    }

    inner();
};

// inner();
console.dir(outer);

outer();
console.log('');


var x = 'Global X';

function foo() {
    var x = 10;
    bar();          // 평가될때 상위 Scope가 window로 지정된 상태라 window의 x를 출력.
};

// 이 함수가 평가될때 scope chain은 window 밑에 기술된 함수라 상위 스코프가 window
function bar() {
    console.log(x);
};

// bar();
foo();


function outer3() {
    // outer3 => window
    function inner() {
        // 평가될때 상위 스코프는 inner => outer3 => window
    }
};
