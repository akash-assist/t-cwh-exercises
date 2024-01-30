// Create a business name generator by combining list of adjectives and shop name and another word




//don't use arrays, use functions and string


//Adjectives - Crazy, Amazing , Fire
//Shop Names - Engine, Foods, Garments 
//Another Word - Bros, Limited, Hub


//now do it ....


let rand = Math.random();
let first, second, third;
if(rand<0.33){
    first = "Crazy";
}
else if(rand<0.67){
    first = "Amazing";
}
else{
    first = "Fire"
}
let rand2 = Math.random();
if(rand2<0.33){
    second = "Engine";
}
else if(rand2<0.67){
    second = "Foods";
}
else{
    second = "Garments"
}
let rand3 = Math.random();
if(rand3<0.33){
    third = "Bros";
}
else if(rand3<0.67){
    third = "Limited";
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`);