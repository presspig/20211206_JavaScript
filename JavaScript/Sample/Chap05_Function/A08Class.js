
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


// Class
