//function test2

function sayHello(name, age){
    return "Hello "+name+"!! you are"+ age+ "years old!";
}

//back tics ---> ``
function sayFxxx(name) {
    console.log(`Fuxx you ${name} !!!`); // you can use variable like this in backtics
}

const returnValueOfSayHello = sayHello("jho00on", 25);
console.log(returnValueOfSayHello);
sayFxxx("bitxx");

//function that is in Object.
const calculator = {
    //is "plus" member function????
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
