let res = 1;
for (let i = 6; i >=1; --i) {
    res *= i;
}
console.log("Result of 6! using reduce : " + res);





let arr = [6,5,4,3,2,1];
let mul = (ele1, ele2) => {
    return ele1*ele2;
}
console.log("Result of 6! using reduce : " + arr.reduce(mul));
