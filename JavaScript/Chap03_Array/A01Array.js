
console.log('---------------- [492] Array -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');


// 배열 생성
var hungbu = ['HungBu', 100, 60, 0, 0];

// 값 꺼내기
console.log(`${hungbu[0]}의 국어 점수는 ${hungbu[1]}입니다.`);

var hungbuKor = hungbu[1];
console.log(hungbuKor);


// 값 변경
hungbu[2] = 70;
console.log(hungbu);

hungbu[3] = hungbu[1] + hungbu[2];
hungbu[4] = hungbu[3] / 2;
console.log(`${hungbu[0]}님의 총점은 ${hungbu[3]}이고 평균은 ${hungbu[4]}입니다.`);
console.log('');

// var bangja = []; 
var bangja = new Array();       // 빈 배열 생성
// var bangja = new Array(5);       // 5개 방이 존재하지만 비어있는 배열 생성(실질적으로 만들어지지는 않는다)
// var bangja = new Array(5, 1);       // 배열의 ()안에 인수가 1개 이상이면 그 인수로 배열을 생성 [5, 1] 배열이 생성됨.

bangja[0] = 'BangJa';
bangja[1] = 80;
bangja[2] = 90;
bangja[3] = bangja[1] + bangja[2];
bangja[4] = bangja[3] / 2;

console.log(bangja, bangja.length);

console.log(`${bangja[0]}님의 총점은 ${bangja[3]}이고 평균은 ${bangja[4]}입니다.`);
console.log('');


// 배열 조작 명령.
var arr = [10, 11, 100, 101, 1000];

// 값 추가
// console.log(arr.length);
// arr[arr.length] = 100;           // 이 방식이 push보다 빠르다.

// . 앞의 변수가 배열이면 "배열명.배열이 가지고 있는 내장 명령()" 형태로 사용
var x = arr.push(1001);             // 배열 맨 마지막에 값 추가, x는 추가후 배열의 개수
var y = arr.unshift(1);             // 배열 맨 앞에 값 추가, y는 추가후 배열의 개수

console.log(arr, x, y);

// 삭제
x = arr.pop();              // 배열의 맨 뒤의 값을 삭제. x는 삭제된 값.
y = arr.shift();            // 배열의 맨 앞의 값을 삭제. y는 삭제된 값.
console.log(arr, x, y);


// 배열 중간의 값을 삭제/추가
// ary.splice(시작위치, 몇개 변경할 것인가, 변경 또는 추가될 값)
var arr = [10, 11, 100, 101, 1000];

x = arr.splice(1, 0, 20);       // 1번째 위치에 20이 추가
console.log(arr, x);

// 1번째 위치에 요소 1개를 200으로 치환
arr.splice(1, 1, 200);
console.log(arr);

// 1번째 위치에 요소 1개를 20, 21으로 치환 => 결국 2개의 요소가 추가된다.
arr.splice(1, 1, 20, 21);
console.log(arr);

// 삭제는 마지막 요소 값만 없이 지정
arr.splice(1, 2);
console.log(arr);
console.log('');


// 배열은 그대로 두고 여러개의 값을 꺼내오는 경우. 꺼내온 값도 배열이다.
// arr.slice(시작인텍스, 종료인텍스);   값은 종료인텍스 -1 까지
var arr = [10, 11, 100, 101, 1000];
x = arr.slice(3);               // 시작부터 마지막까지
console.log(arr, x);

x = arr.slice(1, 4);            // 4-1까지
console.log(arr, x);

// -는 시작 인텍스가 1
x = arr.slice(-4);
console.log(arr, x);

x = arr.slice(-4, -1);
console.log(arr, x);
