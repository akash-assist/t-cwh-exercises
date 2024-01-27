console.log("This is a calculator with 10% error.")



let random = Math.random();
let a = prompt("Enter number 1 : ");
let op = prompt("Enter operator : ");
let b = prompt("Enter number 2 : ");


let obj = {
    "+" : "-",
    "*":"+",
    "-":"/",
    "/":"**"
};
if(random>0.10){
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}else{
    op = obj[op];
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
