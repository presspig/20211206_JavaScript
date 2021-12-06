
console.log('---------------- [094] Conditional Statument -----------------');

// var 변수는 함수를 제외한 { } scope를 갖지 않는다.

console.log('');

// 변수 선언의 또 다른 방식.

// 선언
var kor, eng, avg;

// 초기화
kor = 80;
eng = 70;
avg = (kor + eng) / 2;

// 단순 IF (조건에 따라 분기)
var result = (avg >= 80) ? '합격' : '불합격';
console.log(result);
console.log('');

if( avg >= 80 ) {
    // 위의 조건이 참인 경우 실행할 명령 그룹.
    var str = '합격';
    console.log(avg + '로 ' + str + '입니다');
    console.log('축하드립니다.')
}
// 위의 조건이 거짓이면 {} 안의 문은 실행되지 않고 바로 이리 이동해서 다음문을 실해한다.
console.log('IF END')
console.log('');



// IF ~ ELSE
// 참일때 실행할 명령과 거짓일때 실행할 명령을 나누어야 하는 경우
if( avg >= 80 ) {
    // 위의 조건이 참인 경우 실행할 명령 그룹.
    var str = '합격';
    console.log(avg + '로 ' + str + '입니다');
    console.log('축하드립니다.')
} else {
    // 위의 조건이 거짓인 경우 실행할 명령 그룹.
    var str = "죄송합니다..."
    console.log(avg + '로 ' + str);
    console.log('다시 도전해 주세요.')
}
// if의 참 {} 블럭이나 else 의 거짓{} 블럭이 실행되고 난 후 벗어나는 위치
console.log('IF ~ ELSE ~ END')
console.log('');



// 다중 IF
var h = '';

var avg = 51

// 이 IF가 1개의 블럭으로 실행된다. 해당 조건이 매칭되면 전체 if 블럭을 벗어난다.
if( avg >= 90 ) {
    h = 'A';
} else if( avg >= 80 ) {
    h = 'B';
} else if( avg >= 70 ) {
    h = 'C';
} else if( avg >= 60 ) {
    h = 'D'
} else {            // 위의 모든 조건이 매칭되지 않는 경우 이 블럭이 반드시 실행된다.
    h = 'F';
}
console.log(h);



// switch
var year = 2000;
var month = 2;
var day = 0;

