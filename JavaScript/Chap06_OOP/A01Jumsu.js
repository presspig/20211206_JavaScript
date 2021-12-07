
console.log('---------------- [262] OOP -----------------');

var person = 'NolBu';
var kor = 100;
var eng = 80;
var onTotal = function() {
    return kor + eng;
};
var onAvg = function() {
    return onTotal() / 2;
}
var display = function() {
    console.log(`${person} / ${onTotal()} / ${onAvg()}`);
}
display();;


function Jumsu(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
}

Jumsu.prototype.onTotal = function() {
    return this.kor + this.eng;
};
Jumsu.prototype.onAvg = function() {
    return this.onTotal() / 2;
}
Jumsu.prototype.display = function() {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
}

var nolbu = new Jumsu('NolBu', 100, 80);
var hungbu = new Jumsu('HungBu', 100, 80);

console.dir(nolbu);

console.log(nolbu)
console.log(hungbu);



nolbu.onTotal();
hungbu.onTotal();

nolbu.display();
hungbu.display();