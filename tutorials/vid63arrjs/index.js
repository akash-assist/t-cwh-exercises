
console.log("Hello World!");


// arrays in js
//use is array of objects in react

const arr = [2, 5, 65, 87];

console.log(arr.length);
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//arrays are mutable  but strings are immutable
arr[0] = 234324;
console.log(arr[0]);

console.log("Printing arr through for loop->");
for(let i=0; i<5; ++i){
    console.log(arr[i]);
}
console.log("Type of array is " + typeof arr);

console.log(arr.toString());
console.log(arr);


console.log(arr.join(" and "));
console.log(arr);


arr.pop();
console.log(arr);

arr.push(9824);
arr.push("anand");
arr.push(true);
arr.push(34.24);
arr.push(typeof false);
console.log(arr);


//just another pop operation but from the front
arr.shift();
console.log(arr);

//push from front
arr.unshift("hello akash");
console.log(arr);
console.log(arr);
console.log(arr);



console.log(arr.length);
delete arr[3]; console.log("deleted fourth element.");
console.log(arr.length); //but still the size of the array is same
console.log(arr[3]);

console.log(arr);


let brr = [23,52,241];
let crr = [231,524,5251];


console.log(arr.concat(brr));
console.log(arr.concat(crr));
console.log(arr.concat(brr, crr));
console.log(arr);
//concat is only temporary
console.log(arr);




arr.sort();
// or to print it after sorting console.log(arr.sort());
//sort permanently sorts
//it can also take a comparator function as argument
console.log(arr);
console.log(arr);

brr.push(2323);
brr.unshift(98);
brr.unshift(78);
brr.unshift(6982);

console.log(brr);
brr.splice(2,3); // delete 3 elements starting from index 2
console.log(brr);
brr.splice(2,3, 242432, 534523, 2343,234,2343,2431); // delete 3 elements starting from index 2 and add other elements after these arguments
console.log(brr);

console.log(brr.slice(2));

console.log(brr.slice(3,5));

//reverse array

brr.reverse();
console.log(brr);



console.log("hello");
arr.forEach((value, index, arr)=>{
    console.log(value, index, arr);
})



//

let myObj = {
    name : "alice",
    country : "doesn't matter",
    what : "she is loveable"
}
for (const i in myObj) {
    if (Object.hasOwnProperty.call(myObj, i)) {
        const toPrint = myObj[i];
        console.log(i + " -> " + toPrint);
    }
}


for (const iterator of arr) {
    console.log(iterator);
}




//map filter reduce

// let newArr = [];
// for(let idx=0; idx<brr.length; ++idx){
//     const element = brr[idx];
//     newArr.push(element*element);
// }


let newArr = brr.map((i, index, brrcp)=>{
    return i*i;
})

for(let i=0; i<newArr.length; ++i){
    console.log(newArr[i]);
}





const greaterThanHund = (ele)=>{
    return ele>100;
}

console.log(brr.filter(greaterThanHund))

// for(let i=0; i<newArr.length; ++i){
//     console.log(newArr[i]);
// }

console.log(brr.filter((ele)=>{
    return ele>100;
}))



let arr2 = [3,52,14,2,5]
let add = (ele1, ele2) => {
    return ele1+ele2;
}
//keep reducing from front adding till last
console.log(arr2.reduce(add));


let str  = "akash";
console.log(Array.from("str"));

let newObject = {
    name : "anand",
    class : "Expert Programmer",
    techStack : "everything you can think of"

};

let xrr = Array.from(newObject);
//don't know what happened need to take a look
console.log(xrr);