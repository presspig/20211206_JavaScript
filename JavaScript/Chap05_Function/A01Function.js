
console.log('---------------- [158] 함수 선언문 -----------------');

var result = 100 - 10;
console.log(result);
console.log('');


// 호이스팅
// 평가 과정에서
// 변수는 undefined로 초기화
// 함수는 처리구문과 내부에 필요한 속성까지 다 완성된 상태로 평가가 된다
onAdd();
console.dir(onAdd)
console.log('');


// 선언문 방식의 함수 선언
// 일반 함수
function onAdd() {
    // 중복된 내용을 기술한다 => 재 사용이 가능한 내용을 기술한다.
    var x = 10;
    var y = 20;
    var result = x + y;
    console.log(`${x} + ${y} = ${result}`);
}

onAdd();
console.log('다른 명령구문들.....');
onAdd();
console.log('');

// 매개변수가 있는 함수. => 함수 내부에서 사용할 값을 호출하는 곳에서 전달.
function onMin(x, y) {      // 매개변수, argument
    var result = x - y;
    console.log(`${x} - ${y} = ${result}`);
}
onMin(10, 5);               // 인수
console.log('다른 명령구문들.....');
onMin(100, 5);
console.log('');


// 반환값이 있는 함수.
function onMulti(x, y) {
    var result = x * y;
    return result;          // 호출한 함수에 이 결과값을 전달한다.

    console.log('이 구문은 무시됨.');       // 호출한 곳으로 이미 실행이 넘어간 상태
}
onMulti(10, 2);             // 호출후(return이 실행되고 난 후) 함수 자체가 리턴값을 가진 변수가 된다
console.log( onMulti(10, 2) );

var value = onMulti(10, 2);
var z = value + 100;
console.log(z);


// 반환값이 없는 함수. => undefined 확인.
function onDiv(x, y) {
    if( isNaN(x) ) x = 0;
    if( isNaN(y) || y === 0 ) y = 1;

    var result = x / y;
    console.log(result);
    // return;                  // 이 구문이 생략된 형태
}

value = onDiv(10, 0);           // onDiv(10, 2) 자체가 undefined 값을 받음.
console.log(value);

