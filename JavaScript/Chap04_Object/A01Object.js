
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

var ary = [ function(){}, new Date(), ];
ary.push(10);

var obj = { 
    name: 'BangJa',
    'kor-jumsu': 100,
}
console.log(obj.name);
console.log(obj['kor-jumsu'] );         // .을 생략하고 key를 ['문자열'] 형태로 참조한다.
console.log('');

var objKor = 'kor-jumsu'
console.log(obj.objKor);                // obj.objKor라는 키가 있으면 출력 / undefined
console.log( obj[objKor] );             // 100

var nickname = 'name';
console.log(obj.nickname);              // undefined
console.log(obj[nickname]);             // BangJa


// 130 page
var hungbu = {
    'name': 'Bangja',       // 내부적으로는 문자열 형태로 참조된다.
    kor: 80,
    eng: 90,
    total: 0,
    avg: 0,
    onTotal: function() {               // Object {} 내부에 선언된 함수를 메소드(메서드)라고 한다
        // 자신의 속한 객체의 {} 안의 프로퍼티, 메서드는 this 라는 키워드로 참조한다.
        this.total = this.kor + this.eng;
    },
    onAvg: function() {
        this.avg = this.total / 2;
    }
};
// console.log(hungu.'name');           // 이런 문법은 없음
console.log(hungbu['name']);
console.log(hungbu.total);

hungbu.onTotal();
hungbu.onAvg();

console.log(hungbu)


var today = new Date();
console.log(today.toLocaleString());

// onTotal의 내용보기
// 자바스크립트에서는 함수도 값(문자열)
console.log(hungbu.onTotal);            // ()가 없음. () => 함수 실행 명령