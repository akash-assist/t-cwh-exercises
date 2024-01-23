
//ecma script

//video 54

console.log("Hello World!");


let a = 4;
let b = 2;

console.log(a+b+3);



let c = "Akash";

console.log(c)
//here a+b will be added then it will be concatenated with c and the resulting string will be concatenated with 3
console.log(a+b+c+3);

console.log( "type of c is " +typeof c);
console.log( "type of a is "+ typeof a);



//variables naming rules 
// [a-zA-Z_$][a-zA-Z0-9_$]*

//case sensitive


//var let const

//let is similar to c++ variables that is having a block scope but var is having global scope]


{
    let a = 5;
    console.log("printing a inside a block with let " + a)
}
console.log("printing a outside a block with let " + a)


var d = 9;

{
    var d = 5;
    console.log("printing a inside a block with var " + d);
}
console.log("printing a outside a block with var " + d);




//data types

// primitive and object datatype

//primitive data types
// 1 null
// 2 number
// 3 string
// 4 symbol
// 5 undefined
// 6 boolean
// 7 bigint

let x = "Akash"

let y = 3;

let z = 3.55;

const p = true;

let q = undefined;

let r = null;


console.log(x, y, z, p, q, r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);



//object

let o = {
    key : "value",
    //if space is there then double quotes is required for key
    "job id" : 434903,
    is_job_good : true
};

console.log(o);

o.salary = 3432232;

console.log(o);

