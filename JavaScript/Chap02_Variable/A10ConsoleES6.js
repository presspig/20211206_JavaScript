
console.log('---------------- [062] Template Literals -----------------');

let userName = 'NolBu';
let age = 30;
let address = 'Seoul';

console.log(userName + '님의 나이는 ' + age + '입니다.');
console.log(userName + '님은 ' + address + '에 거주합니다');
console.log(userName + '님의 나이는 ' + age + '입니다.\n' + userName + '님은 ' + address + '에 거주합니다');
console.log('');

let str = `이름은 ${userName}이고 나이는 ${age}입니다`;
console.log(str);
console.log(`이름은 ${userName}이고 나이는 ${age}입니다`);

console.log(`이름은 ${userName}이고 나이는 ${age}입니다.
        주소는 ${address}에 거주합니다.`)

const dom = `<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hi~</h1>
        <div>${userName}</div>
    </body>
</html>`;
console.log(dom)