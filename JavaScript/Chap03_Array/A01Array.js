
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

var x = arr.push(1001);             // 배열 맨 마지막에 값 추가
var y = arr.unshift(1);             // 배열 맨 앞에 값 추가

console.log(arr, x, y)