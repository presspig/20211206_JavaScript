
console.log('---------------- [388] Closure -----------------');

var x = 10;

function one() {
    var x = 'one';
    two();
}

function two() {
    console.log(x);
};
one();

function three() {
    var x = 'three';
    var y = 'three y';

    function inner() {
        console.log(x, y);
    }
    inner();
}
three();
console.log(x);             // window의 10
// console.log(y);          // Error


// closure
function four() {
    var x = 1;

    function inner() {
        // console.log(x);
        x = x + 100;
        return x;
    }
    // var result = inner();
    return inner;
}
var inner = four();             // 함수 리터럴이 전달된다
var result = inner();
console.log(result)

var inner2 = four()();
console.log(inner2);

