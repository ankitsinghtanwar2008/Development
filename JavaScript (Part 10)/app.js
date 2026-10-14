// let btns = document.querySelectorAll("button");

// for(btn of btns){
    
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", double);
//     btn.addEventListener("mouseenter", function () {
//         console.log("It's a testing button");
//     });
//     btn.addEventListener("mouseleave", function () {
//         console.log("Cursor Leave the Button.");
//     });
// }

// function sayHello() {
//     console.log("Hello");
// }

// function sayName() {
//     console.log("Ankit singh");
// }

// function double() {
//     console.log("You Clicked Double time on button so we open the new Terminal Page.")
// }


// let btn1 = document.querySelector(".name");

// btn1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     console.log("Ankit Singh");
//     this.style.backGroundColor = "green";
// });


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log(event.key);
//     console.log("Key was Pressed!!");
// });


let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
});

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

user.addEventListener("change", function(){
    console.log("UserName would be changed: ", this.value);
});

pass.addEventListener("change", function () {
    console.log("Password should be changed and new password wil be: ", this.value);
});
