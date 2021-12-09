
console.log('---------------- [388] Closure -----------------');

var A = 10;
var alert = 100;

var x = 10;

function one() {
    var x = 'one';

}
one();

{
    let x = 10
}

function two() {
    console.log(x);
};


