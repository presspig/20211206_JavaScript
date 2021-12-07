
console.log('---------------- [492] Array -----------------');

var ary = [10, 11, 100, 101, 1000, 11, 100];

// join => 배열의 요소를 지정한 문자로 이어서 문자열(string)으로 리턴한다
var str = ary.join('-');
console.log(str)

var str = ary.join('*');
console.log(str);


// concat => push는 기존 배열에 값을 추가
// concat은 값을 추가해서 새로운 배열을 돌려준다. 
var newAry = ary.concat(20);                    // react
console.log(newAry);
console.log(ary);


// indexOf => 위치 찾기
var x = ary.indexOf(11);
console.log(x);             // 1 => 1번째 위치에 존재 

x = ary.indexOf(11, 3);
console.log(x);             // 5 => 0인 첫번재 부터 검색이 아닌 3번째 101 위치부터 감색 시작해서 5번째 위치에 존재 

x = ary.lastIndexOf(11);
console.log(x);             // 5 => 배열의 마지막부터 검색을 시작해서 위치는 0부터의 카운트 위치인 5번째 위치에 존재 

x = ary.lastIndexOf(3000);
console.log(x);             // -1 => 존재하지 않으면 -1이 리턴됨

// 배열에 30 값이 없으면 추가해라. (중복 데이터 입력 방지 목적)
if( ary.indexOf(30) === -1 ) {
    ary.push(30);
}
console.log(ary);


var names = [ 'NolBu', 'BangJa', 'HungBu' ];

