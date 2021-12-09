
console.log('---------------- [401] Closure -----------------');

let num = 0;

const incOne = function() {
    return ++num;
};
console.log(incOne());
console.log(incOne());
console.log(incOne());

num = 100;
console.log(incOne());
console.log('');


const incTwo = function() {
    let cnt = 0;
    return ++cnt;
};
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');


var inc = function() {
    var cnt = 0;

    return cnt++;
}
inc();
// console.log(cnt++)

// closure
var incThree = function() {
    let cnt = 0;

    function inner() {
        return ++cnt
    }

    return inner;
}

let inner = incThree();
// 결론적으로는 incThree()를 호출하면 이렇게 리턴되서 정의된 것과 동일. 받은 값이 함수 리터럴(문자)다.
// let inner = function() { return ++cnt };

// 리턴 받은 함수 리터럴 값을 ()를 이용해 함수로써 실행한다.
// 이 함수는 내부 변수 cnt를 참조하여 값을 1 증가한다.
console.log(inner());   
console.log(inner());       // inner 함수가 cnt 값을 참조하고 있으므로 cnt 변수가 사라지지 않고 증가된 값에 1을 더해 2가 출력된다.
console.log(inner());

// 실행 컨텍스트에 다시 incThree가 실행되면서 별도의 객체가 생성됨
// 따라서 위의 inner와는 다른 메모리 번지주에 생성된 inner 함수 리터럴을 받아서 쳐다보고 있다.
// 따라서 위의 inner 변수와는 별도로 동작하게 된다.
// 여기서도 이렇게 별도로 받음
// let inner = function() { return ++cnt };
const inner2 = incThree();
console.log(inner2());
console.log(inner2());
console.log(inner2());