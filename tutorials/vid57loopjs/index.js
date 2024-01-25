
//for loop
for(let i=0; i<10; ++i){
    console.log("2" + " * " + (i+1) + " = " + (2*(i+1)));
}

//for in loop
let obj = {
    Name: "Akash",
    Job: "Engineer",
    Company: "akash_assist"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}
//or
for(const key in obj){
    console.log(key);
    const element = obj[key];
    console.log(element);
}

//for of loop
for(const c of "Akash"){
    console.log(c);
}

//for each loop


//while loop
let i=0;
while(i<10){
    console.log("2" + " * " + (i+1) + " = " + (2*(i+1)));
    i++;
}



//do while loop
let j=0;
do{
    console.log("2" + " * " + (j+1) + " = " + (2*(j+1)));
    j++;
} while(j<10);