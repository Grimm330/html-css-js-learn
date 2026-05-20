console.log("Hello World!");
//output
console.log("This is my first JavaScript code.");
//window.alert("Welcome to JavaScript programming!");
//pass text content to h2 and p elements
document.getElementById("myh2").textContent = "JavaScript is fun!";
document.getElementById("myp").textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//variable declaration and assignment
let x = 10;
let y = 20;
let z= 10.33;
let name = "John Doe";
let isStudent = true;
let sum = x+(x+z);
console.log("The sum of x and y is: " + sum);
//2nd way to output the sum
console.log(`The sum of x and y is: ${sum}`);
console.log(typeof z);
console.log(typeof name);
console.log(`Name is ${name}, is a student: ${isStudent}`);
//show variable in html
document.getElementById("myP2").textContent = `The value of x is: ${x}`;
document.getElementById("myP3").textContent = `The name is: ${name}`;
//user input

//windown prompt input
/*let userName = window.prompt("Please enter your name:");
console.log(`User name is: ${userName}`);
document.getElementById("myP4").textContent = `The name is: ${userName}`;*/

//input field and button
document.getElementById("submitBtn").onclick = function() {
    let userName = document.getElementById("username").value;
    document.getElementById("myP4").textContent = `The name is: ${userName}`;}

//type conversion
let num1 = "10";
let num2 = 20;
let sum2 = Number(num1) + Number(num2);
console.log(`The sum of num1 and num2 is: ${sum2}`);

//const declaration(changing the value pI=939383,willcause error after declaring it as const)
const PI = 3.14159;
console.log(`The value of PI is: ${PI}`);

