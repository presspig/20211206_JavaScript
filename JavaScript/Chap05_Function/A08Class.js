
console.log('---------------- [236] Class, Instance -----------------');

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
console.log(hungbu)