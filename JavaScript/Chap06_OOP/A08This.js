
console.log('---------------- [348] this -----------------');

// 객체 내부 메소드 내부의 함수.
var count = 100;

var myObj = {
	count: 0,
	visit: function(){ 
        this.count++;
        console.log(this.count, this)

        // 내부 함수
        // 함수 내부의 함수의 this에 대해 정의를 해 놓지 않음. => 함수 내부의 함수의 this는 window(global)
        function inner(x) {
            this.count = this.count + x;
            console.log('Inner=>', this.count, this)
        }

        inner(2);
	}
};

myObj.visit();
console.log('');


console.log('--------------- 편법 that ---------------');
var count = 100;

var myObj = {
	count: 0,
	visit: function(){ 
        this.count++;
        console.log(this.count, this)

        // 이 영역까지는 this가 myObj
        var that = this;
        
        function inner(x) {
            this.count = that.count + x;
            console.log('Inner=>', this.count, this)
            console.log('Inner=>', this.count, that)
        }

        inner(2);
	}
};
myObj.visit();
console.log('');


console.log('--------------- 함수 내부의 함수 ---------------');
var cnt = 10;               // window           var A = 10;

var name = 'Global';

function outer() {
    var cnt = 1;
    this.name = 'NolBu';            // window 영역에서 함수가 호출되었으므로 this는 window. 그래서 window의 name을 'Nolbu'로 변환

    console.log(cnt, this.cnt, this);

    // JavaScript 설계 당시부터 함수 내부의 함수의 this가 어디를 리퍼런스 할 것인지 정의되지 않음.
    // 함수 내부의 함수는 기본적으로 this는 global(브라우저에서는 window) 객체를 참조함.
    function one() {
        cnt++;
        console.log(cnt, this.cnt, this);

        function two() {
            cnt++;
            console.log(cnt, this.cnt, this);
        }
        two();
    }

    // this는 호출한 영역이 this
    one();
}

// var arr = [outer];
// arr[0]();               // this가 배열

outer();





var person = {
    name: 'NolBu',
    display: function() { 
        console.log(this.name);
    }
}

var emp = { name: 'HungBu' };


function onMulti(x,y,cb) {
    /*
        var x = 10
        var y = 20
        var cb = function(30){
        console.log(30*10);
        }
    */
    /*
        var x = 100
        var y = 200
        var cb = function(data){
        console.log( data / 2);
        }
    */
    var result = x + y;     // 30
    cb(result);
}

onMulti(10, 20, function(data){
    console.log(data*10);
})
    
onMulti(100, 200, function(data){
    console.log(data / 2);
});


var obj = {};
console.log(obj);           // => Object
/*
{
    [[Prototype]] = {           => __proto__
        Object 생성자 함수가 정의한 prototype 속성이 여기에 객체 형태로 정의되어 있다
    }
}
*/

var abc = {
    name: 'NolBu',
    show: function() {
        console.log(this.name);
    }
}

obj.__proto__ = abc;
/*
{
    [[Prototype]] = {           => __proto__
        name: 'NolBu',
        show: function() {
            console.log(this.name);
        }
    }
}
*/
console.log(obj.name);
console.log(obj.show())



function Jumsu(name) {
    this.name = name;
}

Jumsu.prototype.getName = function() {
    return this.name;
}

var parent = {
    name: 'NolBu',
    show: function() {
        console.log(this.name);
    }
}

Jumsu.prototype = parent;

var x = new Jumsu('ABC');

console.dir(Jumsu)
console.log(x)
console.log(x.name);
x.show();