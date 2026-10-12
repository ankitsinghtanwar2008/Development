     // Select By ID
document.getElementById("description");

console.dir(document.getElementById("description"));


     // Select By ClASS
document.getElementsByClassName("oldImg");
document.getElementsByClassName("oldImg")[0];


     // Selct By TagName
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText = "abc";


     // Query Selector
document.querySelector("#description");
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("h1"));


     // Using Properties and Method
let para = document.querySelector('p');
para.innerText;
para.innerHTML;
para.textContent;

console.dir(para.innerText);


     // Manipulating Attributes
// let img = document.querySelector('img');
// img.setAttributes('src', "");

     // Style
let heading = document.querySelector('h1');
heading.style.color = "red";
para.style.backgroundColor = "vilot";
