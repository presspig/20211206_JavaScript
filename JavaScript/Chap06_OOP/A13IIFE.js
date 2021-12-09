
console.log('---------------- [401] Closure -----------------');
// Immediately Invoked Function Expression

(function(){
    console.log('즉시 실행 함수');
})();

(function(){
    console.log('즉시 실행 함수');
}());

// 즉시 실행 함수는 마지막에 (); 종료 ;를 기술한다.
(function(){
    var alert = 'Hello World';              // 함수 내부에서 선언된 변수라 scope를 갖는다. window를 오염시키지 않는다.

    var x = 10;
    var y = 20;

    function onAdd() {
        return `${x} + ${y} = ${x + y}`
    };

    function onMin() {
        return `${x} - ${y} = ${x - y}`
    };
    
    console.log(onAdd());
    console.log(onMin());
})();                               // 내부에서 사용된 변수는 모두 메모리 공간에서 사라진다. (렉시컬 환경)
// console.log(x);
// console.log(onAdd());
console.log('');

// 외부에서 즉시 실행 함수의 일부를 참조
var myLib = (function(){
    var alert = 'Hello World';              // 함수 내부에서 선언된 변수라 scope를 갖는다. window를 오염시키지 않는다.

    var x = 10;
    var y = 20;

    function onAdd() {
        return `${x} + ${y} = ${x + y}`
    };

    function onMin() {
        return `${x} - ${y} = ${x - y}`
    };
    
    return onAdd;
})();  

console.log(myLib());
// console.log(onMin());


// 여러개를 리턴
var myLib2 = (function(){
    var alert = 'Hello World';              // 함수 내부에서 선언된 변수라 scope를 갖는다. window를 오염시키지 않는다.

    var x = 10;
    var y = 20;

    function onAdd() {
        return `${x} + ${y} = ${x + y}`
    };

    function onMin() {
        return `${x} - ${y} = ${x - y}`
    };

    // return [onAdd, onMin];
    return {
        onAdd,
        min: onMin
    };
})();  
// console.log(myLib2[0]());
console.log(myLib2)

console.log(myLib2.onAdd());
console.log(myLib2.min());
console.log('');


// 변수값을 받지 않고 바로 사용
(function(){
    console.log(this);

    var x = 10;
    var y = 20;

    function onAdd() {
        return `${x} + ${y} = ${x + y}`
    };

    function onMin() {
        return `${x} - ${y} = ${x - y}`
    };

    this.myLib3 = {
        onAdd: onAdd,
        min: onMin
    }
})();  

console.log(myLib3.onAdd());
console.log(myLib3.min());
console.log('');


// var A = 10;
// var alert = 'ABC';

console.log(window)
var myLib4 = {};

(function(obj){
    console.log(obj)

    var A = 10;
    var alert = 'ABC';

    var x = 10;
    var y = 20;

    function onAdd() {
        return `${x} + ${y} = ${x + y}`
    };

    function onMin() {
        return `${x} - ${y} = ${x - y}`
    };

    obj.onAdd = onAdd;
    obj.min = onMin;

})(myLib4);  

console.log(myLib4.onAdd());
console.log(myLib4.min());
console.log('');


{
    let x = 10;
    let y = 20;

    let onAdd = function() {
        return `${x} + ${y} = ${x + y}`
    };

    let onMin = function() {
        return `${x} - ${y} = ${x - y}`
    };

    console.log(onAdd());
    console.log(onMin());

    this.myLib5 = {
        onAdd, onMin
    }
}

