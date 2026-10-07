let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];


// For Each
// arr.forEach((el) => {
//     console.log(el);
// });

        // OR

// arr1.forEach(function(el) {
//     console.log(el);
// });




// Map
// let square = arr.map((el) => {
//     console.log(el ** 2);
// }); 



//Filter
// let even = arr.filter((el) => {
//     return el % 2 == 0;
// });



// Every or Some
// arr.every((el) => el%2 == 0);
// arr.every((el) => el%2 != 0);


//Redude
// let finalValue = arr.reduce((res, el) => (res+el));
// console.log(finalValue);


// Maximum in Array
// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     }else {
//         return max;
//     }
// });

// console.log(max);




// Default Parameter
// function sum(a, b = 5){
//     return a + b;
// }

// console.log(sum(3));



//Spread
// Math.max(...arr);


// let even = [2, 4, 6, 8, 10];
// let odd = [1, 3, 5, 7, 9];

// let num = [...even, ...odd];
// console.log(num);




// Spread (Object literals)
const data = {
    name: "Tony Strak",
    email: "ironman@gmail.com",
}

let copyData = {...data, country: "US", Height: 6.2};
console.log(copyData);