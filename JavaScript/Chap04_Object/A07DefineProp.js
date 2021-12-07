
console.log('---------------- [226] defineProperty -----------------');

function printArray(data) {
    for(var i = 0; i < data.length; i++) {
        console.log(i, data[i]);
    }
};

function printObject(data) {
    for (const prop in data) {
        console.log(prop, data[prop]);
    }
};


var ary = ['one', 'two', 'three'];

