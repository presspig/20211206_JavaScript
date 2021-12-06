
console.log('---------------- [059] Hosting -----------------');

var x;
var y = 20;     // 초기화를 선언과 함께 실행

x = 10;         // 초기화를 선언 뒤에
console.log(x);

// 자바스크립트의 기본형 변수 (기본형 -> 변수에 실질적인 값이 대입되는 변수)
var intValue = 10;
var floatValue = 10.25;
var strValue = 'NolBu';
var boolValue = true;           // false
var unValue = undefined;
var nullValue = null;

console.log('intValue: ' + intValue + ' typeof(변수명): ' + typeof(intValue) );
console.log('floatValue: ' + floatValue + ' typeof(변수명): ' + typeof(floatValue) );
console.log('strValue: ' + strValue + ' typeof(변수명): ' + typeof(strValue) );
console.log('boolValue: ' + boolValue + ' typeof(변수명): ' + typeof(boolValue) );
console.log('unValue: ' + intValue + ' typeof(변수명): ' + typeof(unValue) );
console.log('nullValue: ' + intValue + ' typeof(변수명): ' + typeof(nullValue) );

var today = new Date();
console.log('today: ' + today + ' typeof(변수명): ' + typeof(today) );

// 이스케이프 문자
console.log('Hello \t\t World')
console.log('Hello \n World');
console.log('I\'m Nolbu');              // '가 문자로 인식. \', \"
