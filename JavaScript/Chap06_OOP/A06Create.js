
console.log('---------------- [299] 상속 -----------------');

var obj = Object.create(null);
console.log(obj);
// console.log(obj.toString());             // Error

obj.name = 'NolBu';
console.log(obj.name);


var one = Object.create(Object.prototype);
console.log(one);

var two = Object.create(Object.prototype, {
    name: {value: 'NolBu', writable: false, enumerable: false, configurable: false},
});

two.name = 'HungBu';
console.log(two.name);
console.log('');


var parent = {
    display: function() {
        console.log(`Hi~ ${this.name}`)
    }
}
var three = Object.create(parent, {
    name: {value: 'NolBu'},
});
console.log(three);
three.display();



console.log('---------------- 상속 교제 없음 -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`);
};


function Employee(name, age, job) {
    Person.call(this, name, age);
    // this.name = name;
    // this.age = age;
    this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.show = function() {
    console.log(`${this.name} / ${this.age} / ${this.job}`);
};

console.dir(Employee);

var emp = new Employee('방자', 30, '영엉');
emp.show();
emp.display();

