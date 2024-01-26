//tutorial 54 

// functions in js

console.log("hello, functions in js");



function helloFunc (name) {
    console.log("Hello, " + name);
}


helloFunc("akash");
helloFunc("anand");
helloFunc("rahul");
helloFunc("ankit");


function sum(a, b) {
    return a+b;
}


let addition = sum(5, 8);

console.log(addition);



function sum(a, b, c=0) {
    return a+b+c;
}


let addition2 = sum(15, 8);

console.log(addition2);


//arrow functions => to store function inside a variable

//it can be used to pass a function (as a variable) inside a function


const myArrowFun = (x)=>{
    console.log("hello arrow function", x);
}

myArrowFun(34);
myArrowFun(45);
myArrowFun(4);
myArrowFun(54);
