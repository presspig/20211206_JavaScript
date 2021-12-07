
console.log('---------------- [307] Object -----------------');
/*
var arr = [10, 11];
var ary = new Array();      => []
ary[0] = 10;
ary[1] = 20;
*/

var obj = {             // var obj = new Object();
    a: 1,
    b: 2,
    c: 3
};

/*
var obj = new Object();    => {}
obj.a = 1;
obj.b = 2;
obj.c = 3;
*/
obj.d = 4;

/*
JavaScript 내장 객체에
function Object() {
    method() {}
    method() {}
    return {}
}

Object.prototype.toString = function(value) {
    return value + ''
}

Object.prototype = { methodA(), methodB(), toText() }
var obj = { Object.prototype, a: 1, b: 2 };
var obj2 = { Object.prototype, name: 'Nolbu', age: 20 };

function Array() {
    this.length = 0;
}
Array.prototype.push = function(data) {

}
Array.prototype.pop = function() {

}
var ary = new Array();
var ary = [];               // {Array.prototype, } [[Prototype]]

*/

Object.prototype.toText = function() {
    console.log('toText')
};
console.log(obj);

Array.prototype.toString = function() {

}

// 추가된 동적 prototype 속성까지 함께 출력된다.
var total = 0;
for(var key in obj) {
    total = total + obj[key];
}
console.log(total);
console.log('');


for(var key in obj) {
    console.log(key)
}
console.log('')

for(var key in obj) {
    if(obj.hasOwnProperty(key)) {         // 객체에 정의한 순수 프로퍼티니? => hasOwnPropery
        console.log(key)
    }
}

total = 0;
for(var key in obj) {
    if(obj.hasOwnProperty(key)) {         // 객체에 정의한 순수 프로퍼티니? => hasOwnPropery
        total = total + obj[key];
    }
}
console.log(total);

var arr = [];

console.dir(obj);
console.dir(arr);
console.log('');


var arr = [10, 11, 100];
console.dir(arr);

arr.name = 'NolBu';
arr.age = 30;

Array.prototype.toText = function() {
    console.log('toText')
};

console.log(arr);

for(var index in arr) {
    console.log(index)
};
console.log('');


// 동적으로 추가한 속성은 출력된다.
for(var index in arr) {
    if(arr.hasOwnProperty(index)) {
        console.log(index)                  // prototype만 출력 안됨.
    }
};

// 배열 순환은 기본 for 이용 => 동적 추가 속성은 출력 안됨