
console.log('---------------- [074] Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + (x - y));

result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

result = x / y;     // 나누기의 몫
console.log(x + ' / ' + y + ' = ' + result);

result = x % y;     // 나누기의 나머지 값
console.log(x + ' % ' + y + ' = ' + result);
console.log('');


// 단항 산술 연산자. ++, --
var z = 10;
z++;            // z = z + 1;
++z;
console.log(z);

// 대입할때는 ++의 위치에 따라 대입값이 달라진다.
z = 10;

// ++ 앞에 변수명이 먼저 있으면 대입 후 증가된다. 선 대입 후 증가
var a = z++;
console.log(a, z);

z = 10;
// ++이 앞에 있으면 증가 후 대입을 한다. 선 증가 후 대입
var b = ++z;
console.log(b, z);

x = 10;
y = 3;
result = x++ + ++y;
console.log(result, x, y);
console.log('');


// 할당 연산자. +=. -=, *= /= %=
var age = 20;
age += 2;               // age = age + 2;
console.log(age);

age *= 2;               // age = age * 2;
console.log(age);
