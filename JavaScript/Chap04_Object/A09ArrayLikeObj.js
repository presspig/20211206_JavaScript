/*
유사 배열(Array Like Object)
    1. 0 이상의 정수 값으로 프로퍼티 이름을 갖는다.
    2. length 프로퍼티가 있다.
    3. 요소의 추가, 삭제에 따라 length의 값이 변경되어야 한다.

    HTML DOM의 li 등이 Array Like Object이다.
    함수의 arguments 역시 유사배열이다.
*/

var aryLike = {
    0: 'NolBu',
    1: 'HungBu',
    2: 'BangJa',
    length: 3,

    push: function(item) {
        this[this.length] = item;
        this.length++;

        return this.length;
    },
    pop: function() {
        var last = this[this.length - 1];       // 마지막 요소

        delete this[this.length - 1];
        this.length--;
        return last;
    }
};

console.log( Array.isArray(aryLike) );      // false
console.log(aryLike.length);                // 3
console.log(aryLike[0], aryLike[1]);

var x = aryLike.push(20);
console.log(x, aryLike)

x = aryLike.pop(); 
console.log(x, aryLike)

for(var i = 0; i < aryLike.length; i++) {
    console.log(aryLike[i]);
}