
// ES6

// 함수 선언문이 아닌 함수 리터럴 방식을 Arrow 함수로 변경
var onAdd = function(x, y) {
    var result = x + y;
    return result;
}

// Arrow => function을 생략하고 인수 정의 뒤에 => 를 추가
var onMin = (x, y) => {
    var result = x - y;
    return result;
}

console.log(onAdd(10, 20));
console.log(onMin(10, 20));
console.log('');

// 실행구문이 return 1개만 있는 경우 {} 생략하고 return 생략하고 한줄에 기술 가능 (return 적으면 에러)
// => 뒤에 오는 구문이 값인 경우는 리턴, 아니면 실행
var onMulti = (x, y) => x * y;
var onPlus = (x, y) => console.log(x + y);

console.log(onMulti(10, 20));
onPlus(10, 20);
console.log('');

// 매개변수가 1개인 경우는 () 생략 가능. 매겨변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.
var onDouble = x => x ** 3;         // 2 * 2 * 2(ES6 추가 연산자)

// 모든 함수에 적용. 매개변수의 기본값을 지정할 수 있다.
var onDiv = (x, y = 1) => x / y;

console.log(onDouble(2));
console.log(onDiv(10));
console.log(onDiv(10, 2));
console.log('');

var ary = [10, 11, 100, 101, 1000];
var newArray = ary.map(function(item, index) {
    return item * 2;
});

var newArray = ary.map( (item, index) => item * 2 );
console.log('');

// this가 없다. this 자신을 포함한 상위 scope의 this를 사용한다.
var count = 100;

var myObj = {
	count: 0,
	visit: function(){ 
        this.count++;
        console.log(this.count, this)

        // function inner(x) {
        //     this.count = this.count + x;
        //     console.log('Inner=>', this.count, this)
        // }
        var inner = (x) => {
            this.count = this.count + x;
            console.log('Inner=>', this.count, this)
        }
        inner(2);
	}
};

myObj.visit();


