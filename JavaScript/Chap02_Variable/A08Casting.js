
console.log('---------------- [108] Casting -----------------');

// 명시적 형 변환(타입 캐스팅)
var x = 10;
console.log("x: " + x + ', typeof(변수명): ' + typeof(x));

// var str = x.toString();          // 명시적 형 변환
var str = x + '';                   // 암묵적 형 변환
console.log("str: " + str + ', typeof(변수명): ' + typeof(str));

// 암묵적 타입 변환 (강제 타입 변환)
var y = true;
var result = 10 + y;        // true => 1, false => 0
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));
console.log('')

// 숫자를 + 이외로 연산자로 연결하면 숫자로 암묵적인 타입 형 변환이 이루어진다
result = x - '2';
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));

result = x * '2';
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));
console.log('');


// 명시적 형 변환.
result = String(x);
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));

result = Boolean(x);
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));

result = Number(x);
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));
console.log('')

// JavaScript는 값이 있으면 true
// '', 0, undefined, null, NaN, false => false or 값 없음.
if( 10 ) {
    console.log('TRUE');
}

if( 0 ) {
    console.log('FALSE')
}

/*
function console() {
    로직
}
*/
// 지금 사용하는 브라우저가 console을 지원하니 ?
if(console) {
    console.log('지원함.')
}

if( addEventListener ) { 
    console.log('NetScape');
} else {
    console.log('Explorer');
};
console.log('');


// 숫자는 변환 명령을 지원
var str = '123.545abc';
var num = Number(str);
// NaN => Not a Number(숫자가 아님)
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));

// 문자가 나오기 전까지만 짤라서 숫자로 변환. Int => 정수로 짤라서 표시
num = parseInt(str);
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));

// 문자가 나오기 전까지만 짤라서 숫자로 변환. Int => 실수 그대로 표시
num = parseFloat(str);
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));
console.log('');


// 빈 문자열로 넘어오는 경우는 다르다.
str = '';
var num = Number(str);
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));

// NaN
num = parseInt(str);
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));

// NaN
num = parseFloat(str);
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));


str = '123.456';
var num = Number(str);      // 123.456
console.log("num: " + num + ', typeof(변수명): ' + typeof(num));