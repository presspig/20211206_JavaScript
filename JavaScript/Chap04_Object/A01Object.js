
console.log('---------------- [126] Object -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

var fruit = 'Apple'

// 배열 생성
// var arr = new Array();
var hungbu = ['HungBu', 100, 60, 0, 0];
console.log(`${hungbu[0]}의 국어 점수는 ${hungbu[1]}입니다.`);
console.log('');

// 객체로 정의.
// key는 JavaScript의 변수 명명 규칙을 따른다.
// 숫자나 특수문자로 시작 안됨 (_, $는 사용 가능)
// 문자 이후는 숫자와 _, $를 이어서 사용가능
// 대소문자 구분 Abc, abc는 다른 변수명
// 키워드(자바스크립트에서 이미 정의된 변수 또는 함수이름)은 사용 불가.
var bangja = {
    'name': 'Bangja',
    kor: 80,
    eng: 90,
    total: 0,
    avg: 0
};

console.log(bangja.name);
bangja.total = bangja.kor + bangja.eng;
bangja.avg = bangja.total / 2;
console.log(bangja);
console.log('');

// new 사용
var hangdan = new Object();
hangdan.name = 'Hangdan';
hangdan.kor = 80;
hangdan.eng = 80;
hangdan.total = hangdan.kor + hangdan.eng;
hangdan.avg = hangdan.total / 2;
console.log(hangdan);
console.log(hangdan.name + '님의 총점은 ' + hangdan.total + '이고 평균은 ' + hangdan.avg + '입니다');
console.log(`${hangdan.name}님의 총점은 ${hangdan.total}이고 평균은 ${hangdan.avg}입니다`);


