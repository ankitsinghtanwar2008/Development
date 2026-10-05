
// Odd NUmbers
for(let i=1;i<=100;i++){
    if(i%2 != 0){
        console.log(i);
    }
}


// Even Numbers
for(let i=1;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    }
}


// Multiplication table of 5 
for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = `, 5 * i);
}


// Favrouit Movie
let message = console.log("If you don't want to play that game then easily Quit that!!");
let favMovie = "Avenger";
let guess = prompt("Guess Developer FavMovie Name: ");

while((favMovie != guess) && (guess != "quit")){
    guess = prompt("Wrong! Try again please: ");
}

