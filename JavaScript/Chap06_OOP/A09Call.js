
console.log('---------------- [354] call, apply, bind -----------------');

var count = 100;

var myObj = {
    count: 0,

    visit: function() {
        this.count++;
        console.log('visit=> ', this.count, this);

        function inner(x) {
            this.count += x;
            console.log('call, apply this=> ', this.count, this);
        }

        // this를 동적으로 변경
        inner.call(myObj, 2);           // inner 함수 내부에 thisfmf myObj후에 2를 전달하고 실행.
        inner.apply(this, [2])
    }
}
myObj.visit();
console.log('합계', myObj.count);
console.log('');


console.log('--------------- bind의 이용 ---------------');
var count = 100;

var yourObj = {
    count: 0,

    visit: function() {
        this.count++;
        console.log('visit=> ', this.count, this);

        function inner(x) {
            this.count += x;
            console.log('bind this=> ', this.count, this);
        }

        // this를 변경해서 새로운 메서드를 리턴해 준다.         React의 Class Component에서 사용.
        var one = inner.bind(yourObj);
        // console.log(one)
        var two = inner.bind(this);

        one(2);
        two(3);
    }
}
yourObj.visit();
console.log('합계', yourObj.count);
console.log('');


