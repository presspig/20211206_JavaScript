
console.log('---------------- [208] let, const -----------------');

// 중복 선언도 에러가 아니다.
var nickname = 'NolBu';
var nickname = 'HungBu';
var A = 'ABC';
console.log(window);        // Global 객체
/*
alert = 100;
alert('Hello World')
*/

// 함수 이외의 { } 스코프(참조 범위)를 갖지 않는다.
if(true){
    var nickname = 'BangJa';
    console.log('{} 내부에서의 nickname: ' + nickname);
}

console.log("nickname: " + nickname);
console.log('');

for(var i = 0; i < 3; i++) { }
console.log(i);



// let
let age = 30;
// let age = 20;                // 같은 이름의 변수의 재 선언 불가.
// var age = 20;                // var로도 선언 불가.

// if, for, while, switch 모든 중괄호 해당.
{
    // {} 내부에서만 사용 가능한 지역 변수다. } 를 만나면 알아서 지워준다(가비지 컬렉션)
    let age = 100;
    console.log('{} 내부의 age: ' + age);
}

console.log('{} 바깥의 age: ' + age);

for(let k = 0; k < 3; k++) {}
// console.log(k);                  // 참조 불가. k는 지역변수

// let, const는 Global 영역을 오염시키지 않는다
// 일시적 사각지대(TDZ) 영역에 변수를 선언
let A1 = 'ABC';
console.log(window);

let alert = 100;
// alert('Hello, world!');      // 함수가 아닌 변수. TDZ에 있는 변수가 먼저 참조된다.
console.log(alert);


// const -> 상수. 초기화 후 변경 불가 변수
const MY_PI = 3.141519;
// MY_PI = 100;                 // 초기화 후 값 변경 안됨.

// const로 선언하는 경우 선언시 초기화 하지 않으면 추후에 값 대입 불가.
console.log(MY_PI)

