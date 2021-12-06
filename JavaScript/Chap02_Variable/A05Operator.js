
console.log('---------------- [085] Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

// and(&&), or(||), not(!)
result = (x > y) && (x > z);
console.log('(x > y) && (x > z) => ' + result);

result = ! (x > y);
console.log(result);


// 연산자로 사용. 118 Page
// JavaScript에서는 값이 없으면 false다
// '', 0, undefined, null, NaN, false => false or 값 없음.

// false and true => 앞이 false면 && 뒤 구문을 실행하지 않고 false 리턴 
// true or false => 앞이 true면 || 뒤 구문을 실행하지 않고 true 리턴 
var age = 10;

// 값으로 사용하는 경우 앞의 값이 있으면 true로 설정되어 그 값이 대입. 없으면 반대
result = age || 20;         // 앞의 변수 age에 값이 있으면 Result에 age 변수 값을 대입. 없으면 기본값으로 20 대입.
console.log(result);

// 리엑트에서 변수의 값 들어오면 뒤에 HTML을 표시해라
result = age && 20; 
console.log(result)


// ES7
result = 3 ** 3;            // 3 * 3 * 3
console.log(result);
console.log('');


// 값을 boolean 형태로 평가한다
// JavaScript에서는 값이 있으면 true로 취급된다.
// '', 0, undefined, null, NaN, false => false or 값 없음.
console.log( !!10 );

console.log( !!0 );
console.log( !!'' );
console.log( !!undefined );
console.log( !!null );
console.log( !!NaN );

// console.log( !!abc );        // 값이 없는 변수는 평가할 수 없다.