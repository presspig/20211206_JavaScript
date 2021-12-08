
console.log('---------------- [288] property shadowing -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`);
};

var nolbu = new Person('NolBu', 30);
nolbu.display();

nolbu.display = function(){
    console.log(`Hi~ ${this.name}`)
}
nolbu.display();

delete nolbu.display;
nolbu.display();


// 기존 객체에 prototype 추가
Object.prototype.toText = function() {
    console.log('Hello World');
}

var two = {name: 'Two'};
console.log(two);

var ary = [];
ary.toText();

