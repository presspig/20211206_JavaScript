
console.log('---------------- [134] Object -----------------');

var x = 10;
var str = 'Hello World';

var obj = {
    x,              // key와 vaule가 동일한 이름이면 생략가능.
    str: str
}
console.log(obj);
console.log('');


// 계산된 프로퍼티 이름
var prefix = 'prop'

for(var i = 0; i < 3; i++) {
    obj[prefix + '-' + i] = i;
};
console.log(obj);


var nolbu = { 
    name: 'NolBu', 
    age: 20,
    display() {                 // vue 2.X 에서 자주 사용됨.
        console.log(`${this.name} / ${this.age}`);
    }
}
nolbu.display();
