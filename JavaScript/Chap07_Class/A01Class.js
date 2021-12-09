
console.log('---------------- [417] OOP -----------------');

var Jumsu = (function(){

    function Jumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    Jumsu.prototype.onTotal = function() {
        return this.kor + this.eng;
    }
    Jumsu.prototype.onAvg = function() {
        return this.onTotal() / 2;
    }
    Jumsu.prototype.display = function() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }

    return Jumsu;
})();


let nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();


// ES6 Class
class JumsuOne {
    // name;                // Java 처럼 이렇게 프로퍼티 정의는 안된다. (논의 중.. 곧 된다 크롬은 지원한다)
    // #age;                // private 접근 제한자 (논의 중.. 곧 된다 크롬은 지원한다)

    // 생성자 메서드
    // this 작성할 프로퍼티가 없으면 생략가능
    constructor(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    // prototype으로 정의해 준다.
    onTotal() {
        return this.kor + this.eng;
    };
    onAvg() {
        return this.onTotal() / 2;
    };
    display() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    };

    // getter, setter 구현. 함수지만 프로퍼티 형태로 사용한다.
    get _kor() { 
        return this.kor;
    }
    set _kor(kor) {
        this.kor = kor;
    }

    // static
    static getArea(width, height) {
        console.log(`면적은 ${width * height}입니다.`)
    }
    static progName = '점수 프로그램..'

}
console.dir(JumsuOne);

const hungbu = new JumsuOne('HungBu', 100, 80);
hungbu.display();

// static
JumsuOne.getArea(100, 100);
console.log(JumsuOne.progName);

// getter, setter
console.log(hungbu._kor);

hungbu._kor = 1000;
console.log(hungbu._kor);
