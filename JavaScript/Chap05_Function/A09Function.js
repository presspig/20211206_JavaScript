
console.log('---------------- [242] Class, Instance -----------------');

function onAdd(x, y) {
    return x + y;
}

var one = onAdd(10, 20);
console.log(one);


function createUser(name, role) {
    return {name, role}
}
var two = createUser('NolBu', 'admin');
console.log(two);


function Jumsu(kor, eng) {
    this.kor = kor;
    this.eng = eng;

    this.onTotal = function() {
        return this.kor + this.eng;
    }
}




function Person(name, age) {
    this.name = name;
    this.age = age;

    this.info = function() {
        return `${this.name} / ${this.age}`
    }
};
