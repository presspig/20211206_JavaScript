
console.log('---------------- [448] 상속 -----------------');

class Jumsu {
    // 생성자 메서드. 반환문을 갖지 않는다.
    constructor(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }
    onTotal() {
        return this.kor + this.eng;
    }
    onAvg() {
        return this.onTotal() / 2;
    }
    display() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }
}

class JumsuThree extends Jumsu {
    constructor(name, kor, eng, math) {
        // Jumsu.constructor(name, kor, eng);
        super(name, kor, eng);                  // Jumsu.constructor 호출
        this.math = math;
    };

    // 부모가 가진 메서드를 재 정의 => 메서드 오버라이드.
    onTotal() {
        return this.kor + this.eng + this.math;
    };

    onAvg() {
        return this.onTotal() / 3;
    };
}

var two = new Jumsu('TWO', 100, 70);
two.display();

var three = new JumsuThree('THREE', 100, 90, 80);
three.display();

console.log(two);
console.log(three)
