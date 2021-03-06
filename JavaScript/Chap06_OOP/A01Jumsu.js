
console.log('---------------- [262] OOP -----------------');

var person = {
    name: 'NolBu', 
    kor: 100, 
    eng: 80,

    onTotal: function() {
        return this.kor + this.eng;
    },

    onAvg: function() {
        return this.onTotal() / 2;
    },
    display: function() {
        // console.log(this);               // 객체 자체가 this
        console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
    }
};
console.log(person);
person.display();
console.log('');


// Class => 생성자 (함수)
// 일반 함수와 구분하기 위해 함수 첫 글자를 대문자로 
function Jumsu(name, kor, eng) {
    // 객체 형태로 제공될 변수는 this 키워드로 정의한다.
    this.name = name;           // { name: '놀부' }
    this.kor = kor;             // { name: '놀부', kor: 100 }
    this.eng = eng;             // { name: '놀부', kor: 100, eng: 80 }

    this.onTotal = function(){
        return this.kor + this.eng;
    }
    this.onAvg = function() {
        return this.onTotal() / 2;
    }

    this.display = function() {
        console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
    }
    // 내부에 return이 없어도 this로 정의된 변수, 함수를 {} 묶어서 리턴해 준다.
}

var nolbu = new Jumsu('놀부', 100, 80);
console.log(nolbu)

var hungbu = new Jumsu('흥부', 70, 60);
console.log(hungbu);
console.log('')


console.log('---------------- prototype -----------------');
// prototype

// 함수이므로 평가가 먼저 이루어 진다. 이루어지면서 이 함수가 이미 생성된 상태
// 생성된 생성자 함수 내부에 prototype 속성을 만들고 이 안에 생성자 메서들 만들어 놓는다
function JumsuOne(name, kor, eng) {
    this.name = name;           // { name: '놀부' }
    this.kor = kor;             // { name: '놀부', kor: 100 }
    this.eng = eng;             // { name: '놀부', kor: 100, eng: 80 }
    // prototype = {생성자, 밑의 prototype의 함수를 정의 완료}

    // 자신의 메서드
    this.getName = function() {
        return this.name;
    }
}

// DTO. 부모가 이 객체를 가지고 있다. (object)
JumsuOne.prototype.address = 'Seoul';

JumsuOne.prototype.onTotal = function(){
    return this.kor + this.eng;
}
JumsuOne.prototype.onAvg = function() {
    return this.onTotal() / 2;
}

JumsuOne.prototype.display = function() {
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
}

// utils 적인 기능을 하는 메서드는 static으로 정의한다.
// 생성자 함수로 호출할 수 있는 메서드 또는 프로퍼티
JumsuOne.getProgramName = function() {
    return '국어, 영어 시험 평가용 프로그램';
};
JumsuOne.progName = '시험 평가용...'

console.dir(JumsuOne);
console.log(JumsuOne.getProgramName());
console.log(JumsuOne.progName);


var one = new JumsuOne('홍길동', 100, 70);      // [[Prototype]] => 생성자의 prototype

// Object의 __proto__의 메서드 호출
console.log(one.hasOwnProperty('name'))
console.log(Object.getOwnPropertyDescriptor(one, 'name'));

console.log(one)
one.display();

console.log(one.__proto__);
console.log(one.__proto__ === JumsuOne.prototype);
