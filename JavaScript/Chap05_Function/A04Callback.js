
console.log('---------------- [182] 중첩함수, 콜백함수 -----------------');
/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

var ary = [ function() { return 10} ];
console.log( ary[0]() )
console.log('');

// 중첩함수
function outer() {
    var x = 10;

    function inner() {
        console.log('inner=> ', x);
    }

    inner();
}
outer();
console.log('');


function outer2(x) {
    console.log('outer 함수 호출');
    // console.log(x);
    x();
}

function inner() {
    console.log('Inner');
}

var inner = outer2(inner);


// 함수의 인자나 리턴 값이 될 수 있다.
function outer3(x) {
    console.log('outer 함수 호출', x);

    return function() {
        console.log('Return 함수', x)
    }
}

var inner3 = outer3(100);
console.log(inner3);
inner3();

// callback 함수 사용 예제
function onAdd(x, y) {
    var result = x + y;
    return result + 100;
};

function onMin(x, y) {
    var result = x + y;
    return result - 100;
};

console.log(onAdd(10, 20));
console.log(onMin(10, 30));
console.log('');


function onMulti(x, y, callback) {
    var result = x + y;
    callback(result);
}

onMulti(10, 20, function(data) {
    console.log(data * 10);
});

onMulti(10, 20, function(data) {
    console.log(data / 10);
});


console.log('')



// 시간이 걸리는 작업
var value = 0;
function getData(url, cb) {
    console.log('1 Start', url)

    setTimeout( function(){
        console.log('setTimeout');
        value = 100;
        
        cb(value);
    }, 1000);

    console.log('END')
};

getData('http://localhost', function(data) {
    value = data;
    console.log(value)
});
console.log(value);

