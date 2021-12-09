
console.log('---------------- [556] Number -----------------');
var str = '123.56';

var one = Number(str);
var two = parseInt(str);
var three = parseFloat(str);
console.log(one, two, three);

var num = 12345.6789;
var four = num.toFixed(2);      // 소수점 2자리까지 표시
console.log(num, four);

var check1 = isNaN('abc');
var check2 = isNaN(123);
console.log(check1, check2);


console.log('---------------- [561] Math -----------------');
var one = Math.PI;
console.log(one);

var two = Math.random();        // 0 ~ 1미만까지의 임의의 난수를 리턴
console.log(two)

var three = Math.random() * 10;
console.log(three);

var four = Math.floor(10.999);      // 무조건 버림
var five = Math.ceil(10.001);       // 무조건 올림
console.log(four, five);

var six = Math.ceil( Math.random() * 10 );
console.log(six);

var lotto = [];
for(var i = 0; i < 7; i++) {
    var value = Math.ceil( Math.random() * 46 );
    lotto.push(value);
}
console.log(lotto)


console.log('---------------- [566] Date  -----------------');
var today = new Date();
console.log(today)
console.log(today.toLocaleDateString());    // 날짜만
console.log(today.toLocaleTimeString());    // 시간
console.log(today.toLocaleString());        // 날짜 시간
console.log(today.toUTCString());           // 표준시

console.log(Date.now());                    // 1970.01.01 00:00:00부터 경과 시간을 밀리초로 표시 (1초 => 1000)

// 월은 1월 => 0
console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());
console.log(today.getHours(), today.getMinutes(), today.getSeconds() );
console.log(today.getDay());            // 0이 일요일

var yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log( yoil[today.getDay()] );
console.log('')


console.log('---------------- [592] String  -----------------');
str = ' abc 123 DEF 456 ';

console.log(str.toUpperCase(), str.toLowerCase());
console.log( str.trim(), str.length, str.trim().length );
console.log( str.replace('123', '일이삼사오'));
console.log( str.substr(1, 3) )           // 0부터 시작. 1부터 3글자 추출
console.log( str.substring(1, 3) )       // 0부터 시작. 1부터 3번째 -1 위치까지 포함된 문자
