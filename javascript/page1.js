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

//math

let radius = 5.8474747466;
let a= Math.round(radius);
let b= Math.ceil(radius);
let c= Math.floor(radius);
console.log(`The rounded value of radius is: ${a}`);
console.log(`The ceiling value of radius is: ${b}`);
console.log(`The floor value of radius is: ${c}`);
let e = Math.sqrt(radius);
console.log(`The square root of radius is: ${e}`);
let randomNum = Math.random();
console.log(`A random number between 0 and 1 is: ${randomNum}`);
let t= Math.pow(radius, 2);
console.log(`The value of radius raised to the power of 2 is: ${t}`);
let maxNum = Math.max(10, 20, 5, 15);
console.log(`The maximum number among 10, 20, 5, and 15 is: ${maxNum}`);
let minNum = Math.min(10, 20, 5, 15);
console.log(`The minimum number among 10, 20, 5, and 15 is: ${minNum}`);

//if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration number: ${i}`);
}

//while loop
let count = 1;
while (count <= 5) {
    console.log(`Count is: ${count}`);
    count++;
}
//switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    default:
        console.log("It's the weekend!");
}   
