
                        // Async Function
// let greet = async () => {
//     console.log("Hello")
// }



                        // Await Function
// function getNum (){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             let random = Math.floor(Math.random() * 10) + 1;
//             console.log(random);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }



                        // color change function
// h1 = document.querySelector("h1");
// age = document.querySelector("h2");

// function colorChange(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let newtwork = Math.floor(Math.random() * 10) + 1;
//             if(newtwork < 5){
//                 reject("Network Speed would be too low please check your connection!!...");
//             }


//             h1.style.color = color;
//             console.log(`Color Change into ${color}`);
//             resolve("Color was Changed");
//         }, delay);
//     });
// }


// function colorChangeOfAge(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             age.style.color = color;
//             console.log(`Color Change into ${color}`);
//             resolve("Age Color was Changed");
//         }, delay);
//     });
// }

// async function change() {
//     try{
//     await colorChange("orange",1000);
//     await colorChange("red",1000);
//     await colorChange("green",1200);
//     colorChange("yellow",1500);
//     } catch(err){
//         console.log("Error Find");
//         console.log(err);
//     }

//     await colorChangeOfAge("purple", 2000);
//     await colorChangeOfAge("pink", 2200);
//     await colorChangeOfAge("black", 2500);
//     await colorChangeOfAge("gray", 3000);
// }






                        // API Request
// let url = "https://catfact.ninja/fact";

// async function getFacts(params) {
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     } catch (err) {
//         console.log("Error",err);
//     }
// }






                        // Axios 
// let url = "https://catfact.ninja/fact";

// async function getFacts(params) {
//     try {
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//     } catch (err) {
//         console.log("Error",err);
//     }
// }



                        // Random Facts Practics

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);

//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//     let res = await axios.get(url);
//         return res.data.fact;
//     } catch (err) {
//         return "No fact found";
//     }
// }







                            // Sending Headers with API Request
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//     const config = {Headers : { Accept: "application/json "} };    
//     let res = await axios.get(url);
//         return res.data.fact;
//     } catch (err) {
//         return "No fact found";
//     }
// }