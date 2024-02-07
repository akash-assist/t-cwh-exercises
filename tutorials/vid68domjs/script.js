console.log("hello this is search in dom")



let boxes = document.getElementsByClassName("box")
boxes[2].style.backgroundColor = "yellow"


let redBox = document.getElementById("red-box");
redBox.style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box")[0].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[1].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[2].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[3].style.backgroundColor = "aqua";
document.querySelectorAll(".box")[4].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[5].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[6].style.backgroundColor = "aqua";
// document.querySelectorAll(".box")[8].style.backgroundColor = "aqua";



//to do this using for loop
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "aqua";
// })



//output of queryselector all is an array 
//and here too
let e = document.getElementsByTagName("div");

//returns true or false
e[4].matches("red-box"); 



e[3].closest("conatiner");

e[3].closest("tml");


document.querySelector(".container").contains(e[0])

//one returns true other false
document.querySelector(".container").contains(edocumetn.querySelector("body"))
document.querySelector("body").contains(edocumetn.querySelector(".container"))

