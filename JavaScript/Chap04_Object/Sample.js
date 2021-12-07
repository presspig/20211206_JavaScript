var hungbu ={
    'name': 'Bangja',
    kor:80,
    eng:90,
    total: 0,
    avg:0,
    ontotal:function(){    //메소드라고 한다
        this.total =this.kor +this.eng;
        return this.total;
    },
}
console.log(hungbu);

var total = hungbu.ontotal();
console.log(total);

console.log(hungbu);

console.log(hungbu.total);


function func() { 
    console.log('Hello World!')
}

console.log( func );

func();

var x = func;

console.log(x);

x();