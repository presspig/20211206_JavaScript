
console.log('---------------- [344] Object this -----------------');

const obj = {
    name: 'NolBu', 
    age: 20,
    display() {
        console.log(`${this.name} / ${this.age}`);
    }
};

// .얖의 객체가 this
obj.display();


function Person(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`)
};

var nolbu = new Person('놀부', 20);
// this는 .얖의 객체 nolbu
nolbu.display();

var hungbu = new Person('흥부', 20);
// this는 .얖의 객체 hungbu
hungbu.display();
console.log('');


// 전역에서의 this => window, node => global
// .없이 this를 호출하면 호출한 곳이 this
console.log(this);


// 함수
// 함수를 호출한 영역의 this가 바인딩된다.
function onAdd() {
    console.log(this);
}
onAdd();        // window 영역에서 호출 => window

// 어디서 호출되느냐에따라 this는 동적으로 변경된다
var one = {
    onAdd: onAdd        // one 객체가 this
}
one.onAdd();

var arr = [onAdd];
arr[0]();


