// let info = {
//     Name: "Ankit Singh",
//     Age:  20,
//     City: ["Neem Ka Thana","Roorkee"],
//     College: "Coer University, Roorkee"
// };
// console.log(info);


// info.Name = "Ankit Singh Tanwar";
// info.gender = "Male";
// delete info.College;


                 // To Generate a Random Number
let num = Math.random();
num = num * 20;
num = Math.floor(num);
num = num + 1;
console.log(num);

                    // OR
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);


// let list = [];

// while(true) {
//     let user = prompt("What you want to add: ");

//     if(user == 'quit') {
//         console.log("Successfully Quit the Game");
//         break;
//     }

//     else if(user == 'name') {
//         let name = prompt("Enter Your Name: ");
//         list.push(name);
//         console.log("Added Successfully");
//     }

//     else if(user == 'content') {
//         let content = prompt("Enter Your Content: ");
//         list.push(content);
//         console.log("Content Added Successfully");
//     }

//     else if(user == 'likes') {
//         let likes = Number(prompt("Enter Your Value of Likes: "));
//         list.push(likes);
//         console.log("Likes Added Successfully");
//     }

//     else if(user == 'tags') {
//         let tags = prompt("Enter User ID that you want to tag your post: ");
//         list.push(tags);
//         console.log("Tags Added Successfully");
//     }

//     else if(user == 'show') {
//         console.log(list);
//     }

//     else {
//         console.log("Please Enter a valid command. Try again!");
//     }
// }