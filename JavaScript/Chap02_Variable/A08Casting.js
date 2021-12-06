
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

