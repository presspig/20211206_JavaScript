
console.log('---------------- [285] prototype chain -----------------');

function Jumsu(name) {
    this.name = name;
}
Jumsu.prototype.getName = function() {
    return this.name;
}
console.dir(Jumsu);

var nolbu = new Jumsu('놀부');


// nolbu의 __proto__([[property]])는 Jumsu의 prototype을 쳐다보고 있다.
// Jumsu 생성자 함수의 __proto__([[property]]) 객체 { constructor }는 Object가 만들어 준거므로
// Jumsu 생성자 함수의 __proto__([[property]])는 Object 생성자 함수의 prototype을 쳐다보고 있다.
console.dir(nolbu);

// __proto__ => 각 new로 생성된 객체의 [[Prototype]]
// prototype => 부모 생성자 함수 Jumsu 내부의 함수 평가시 작성되는 객체
// 각 객체(new로 생성된 객체)는 부모 생성자 함수 내부의 protptype을 참조 받아 [[Prototype]] 내부 슬롯이 만들어지고
// 이 [[Prototype]]을 거슬러 올라가면서(prototype chian) 함수를 참조한다.
console.log(nolbu.__proto__ === Jumsu.prototype);               // true
console.log(Jumsu.prototype.__proto__ === Object.prototype);    // true
console.log(Jumsu.constructor);         // Jumsu 함수의 생성자
console.log( Object.getPrototypeOf(Jumsu.prototype.constructor) === Function.prototype )

console.log('');

// 배열
// var ary = new Array();
var ary = [];
console.log(Object.getPrototypeOf(ary));                // ary.__proto__
console.log(Object.getPrototypeOf(ary) === Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype)
console.log('');


console.log('---------------- prototype 동적 변경 -----------------');
var one = { 
    name: 'One',
    display: function() { console.log(this.name) }
};

var two = {
    name: 'Two'
};

var three = {};

console.log(one)
// console.log( Object.getPrototypeOf(one) );      // Object

two.__proto__ = one;
console.log(two);
console.log(two.name);          // Two
two.display();
console.log('');


Object.setPrototypeOf(three, one);
console.log(three)
console.log(three.name);        // One
three.display();                // One
console.log('');


console.log('---------------- prototype 동적 변경 -----------------');

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

var obj = {
    constructor: Person,
    display: function() {
        console.log(this.name);
    },
    greet: function(name) {
        console.log(`Hello ${name}`)
    }
}
Person.prototype = obj;

var hungbu = new Person('흥부');
console.log(hungbu);

// console.log(hungbu.getName());           // 부모가 obj 없음
hungbu.display();
hungbu.greet('NolBu');


// new로 생성된 객체도 동적으로 변경 가능
var bangJa = new Person('방자');
bangJa.display();

var parent = {
    show: function() { 
        console.log(`Hi~ ${this.name}`)
    }
}

Object.setPrototypeOf(bangJa, parent);          // new로 생성한 객체의 __proto__([[Prototype]])을 동적 변경
// bangJa.display();
bangJa.show();
