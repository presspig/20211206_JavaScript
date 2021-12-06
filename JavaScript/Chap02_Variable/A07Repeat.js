
console.log('---------------- [100] Loop Statument -----------------');

var result = 0;
// console.log('Hello World');
// console.log('Hello World');

// for(1. 변수 초기화; 2. 조건; 3. 변수의 증감) {
//      반복 실행할 구문
// }
// for 구문이 처음 실행되는 경우는 1번 변수 초기화  => 2번 조건 체크 { } 실행. 3번은 실행 안됨(최초 1번)
// 두번째 부터는 3번 변수 증감 => 조건 체크 => { } 실행. 1번 2번째부터는 실행되지 않는다.

// for 구문은 반복 회수가 정해져 있는 경우 적합.
for(var i = 0; i < 5; i++) {
    console.log('Hi World => ' + i);
};
console.log('For END');
console.log('');

var total = 0;
// total = total + 1;
// total = total + 2;
// total = total + 3;
// total = total + 4;
// total = total + 5;

// 1부터 10까지의 합
for(var i = 1; i <= 10; i++) {
    // console.log('Hi World => ' + i);
    total = total + i;
};
console.log(total);

// 1부터 10까지의 짝수의 합
total = 0;
for(var i = 2; i <= 10; i = i + 2) {
    total = total + i;
};
console.log(total);
console.log('');


// while => 반복 회수를 모르는 경우 사용.
/*
변수의 초기화
while(조건) {
    조건이 참이면 반복할 실행문..
    ...
    변수의 증감;
}
*/
total = 0;

var i = 1;
while(i <= 10) {
    total = total + i;
    i++;
}   // 조건을 체크하러 while문으로 올가감 
// 조건이 거짓이면 {} 다음을 실행
console.log(total)
console.log('While END');
console.log('');


var i = 1;
while(true) {
    console.log('반복 실행중...');

    if(i === 5) break;          // break => 자신이 속한 가장 가까운 { }을 벗어난다
    i++;
}
console.log('END');

// do ~ while
// 값이 들어와야 반복 조건을 체크 할 수 있는 경우

/*
kor = 0;      
do {
    kor = 값 받음
}while(kor <= 101 || kor < 0);
*/
