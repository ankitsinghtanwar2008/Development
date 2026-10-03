let a = 10;
let b = 20;
console.log(`Your Total Amount: ${a+b} `);

let str = "spple";

if(str[0] == "a" && str.length > 3){
    console.log("Yes");
}else{
    console.log("No");
}


let color = "yellow";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready to Go`");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Please choose correct color from red, green, yellow");
        break;
}


// alert("CareFull Reading that page");
// console.log("Some Error Type Messages");
// console.error("It's a Error Message");
// console.warn("It's a Warning Message");

let Message = prompt("Hello");
console.log(Message);