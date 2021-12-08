
console.log('---------------- [242] Class, Instance -----------------');

function onAdd(x, y) {
    return x + y;                   // new로 호출하면 기본 타입의 리턴값은 무시된다.
}

var one = onAdd(10, 20);
console.log(one);

var one1 = new onAdd(10, 20);           // new로 호출
console.log(one1);                      // { }
console.log('');


// 객체를 리턴하는 경우
function createUser(name, role) {
    var x = 10;
    this.y = 100;
    return {name, role}
}
var two = createUser('NolBu', 'admin');
console.log(two);

// 객체로 리턴하면 new로 호출하는 경우 그 객체의 값이 리턴된다.
var two1 = new createUser('NolBu', 'admin');     // new로 호출
console.log(two1);
console.log('');


function Jumsu(kor, eng) {
    this.kor = kor;
    this.eng = eng;

    this.onTotal = function() {
        return this.kor + this.eng;
    }

    // 내부적으로 내부의 this로 선언된 프로퍼티, 함수를 {} 묶어서 묵시적으로 리턴해준다
}

var nolbu = Jumsu(100, 80);
console.log(nolbu);             // undefined

var hungbu = new Jumsu(100, 90);
console.log(hungbu);




function Person(name, age) {

    // 사용자가 new를 빼고 호출하는 경우를 대비
    console.log( this )
    // console.log(new.target);
    // if( !(this instanceof Person) ) return new Person(name, age);
    if( !new.target ) return new Person(name, age);                     // ES6


    this.name = name;
    this.age = age;

    this.info = function() {
        return `${this.name} / ${this.age}`
    }
};

var x = Person('NolBu', 30);            // new 없이 호출
var y = new Person('HungBu', 20);