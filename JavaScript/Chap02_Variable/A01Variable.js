
console.log('---------------- [038] Variable -----------------');

// 변수는 식별자라고도 한다.
var x = 10;
var y = 20;
var z = x + y;
var old = z;

z = z + x;

console.log(old)
console.log( z );
console.log('결과: ' + x + ' + ' + y + ' = ' + (x + y) );

// JavaScript은 변수의 타입이 존재하지 않는다. 값에 의해 변경된다.
var nickname = 'NolBu';
console.log('nickname: ' + nickname + ' typeof(변수명): ' + typeof(nickname) );

nickname = 100;
console.log('nickname: ' + nickname + ' typeof(변수명): ' + typeof(nickname) );

nickname = true;
console.log('nickname: ' + nickname + ' typeof(변수명): ' + typeof(nickname) );

nickname = new Date();
console.log('nickname: ' + nickname + ' typeof(변수명): ' + typeof(nickname) );
console.log('');


// 선언한 변수를 재 선언해도 에러가 아니다.
// JavaScript은 문서의 평가가 먼저 이루어진다.
// 변수, 함수를 먼저 읽어서 메모리에 등록 작업을 한 후 처음부터 순차적으로 실행단다.(호이스팅)
var nickname = 'HunbBu';
console.log('nickname: ' + nickname + ' typeof(변수명): ' + typeof(nickname) );


// hosting          42page
console.log('age: ' + age + ' typeof(변수명): ' + typeof(age) );        // undefined

var age = 30;
console.log('age: ' + age + ' typeof(변수명): ' + typeof(age) );


// var가 없어도 변수는 선언된다. (Global 변수로 등록된다.)
address = 'Seoul';
console.log('address: ' + address + ' typeof(변수명): ' + typeof(address) );