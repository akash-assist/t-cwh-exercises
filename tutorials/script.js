alert("Hello World");


console.log("hello i am printing on console");
console.log("it can be used for debugging");



var a = prompt("Enter your name :- ");

console.log("Your name is " + a);


var isTrue = confirm("Are you sure you want to leave this page ?");

//no need of semicolon

if(isTrue){
    console.log("Leaving this page.");
}
else{
    console.log("Staying on tghe page.");
}


//alert is only available in browser not in node,,,,,
// that is it is only available for frontend and not backend

//for front end script tag is used 

//for backend js file is run using node


document.title = "Changing title of the page - using script"

document.body.style.backgroundColor = "red"

//this adds some inline css directly

//npm installed with nodejs
