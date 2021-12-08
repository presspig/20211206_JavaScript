
console.log('---------------- [296] Instanceof -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`);
};

var nolbu = new Person('NolBu', 30);
nolbu.display();

var age = 30;
console.log( age, typeof(age) );

// 리퍼런스 타입은 모두 object로 출력됨
var ary = [];
var obj = {};
console.log( typeof(ary), typeof(obj) );
console.log('');


// 리퍼런스 형
console.log( ary.constructor );
console.log( obj.constructor );

// 부모 확인
console.log( ary instanceof Array );
console.log( ary instanceof Object );

console.log(nolbu instanceof Person);
console.log(nolbu instanceof Object);
console.log(nolbu instanceof Array);        // false
console.log('');


console.log('name' in nolbu);
console.log('address' in nolbu);