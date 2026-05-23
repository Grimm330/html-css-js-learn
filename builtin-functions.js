// =====================================
// JavaScript Built-in Functions Cheat Sheet (WITH COMMENTS)
// =====================================

// ================= GLOBAL FUNCTIONS =================

console.log(parseInt("10")); // converts string to integer -> 10
console.log(parseFloat("10.5")); // converts string to decimal number -> 10.5
console.log(isNaN("abc")); // checks if value is NOT a number -> true
console.log(isFinite(10)); // checks if value is a finite number -> true
console.log(Number("123")); // converts string to number -> 123
console.log(String(123)); // converts number to string -> "123"
console.log(Boolean(1)); // converts value to boolean -> true


// ================= ARRAY METHODS =================

let arr = [1, 2, 3, 4, 5];

arr.map(e => e * 2); // creates new array by transforming each element
arr.filter(e => e % 2 === 0); // returns only elements that match condition
arr.reduce((acc, e) => acc + e, 0); // combines all elements into single value
arr.forEach(e => console.log(e)); // runs function for each element (no return)
arr.find(e => e > 2); // returns first element matching condition
arr.findIndex(e => e > 2); // returns index of first match
arr.includes(3); // checks if value exists in array
arr.some(e => e > 3); // true if at least one element matches condition
arr.every(e => e > 0); // true if all elements match condition
arr.push(6); // adds element to end of array
arr.pop(); // removes last element
arr.shift(); // removes first element
arr.unshift(0); // adds element at start
arr.slice(1, 3); // returns part of array without modifying original
arr.splice(1, 1); // removes/replaces elements in array (modifies original)
arr.concat([6, 7]); // merges two arrays
arr.sort(); // sorts array (default lexicographic)
arr.reverse(); // reverses array order


// ================= STRING METHODS =================

let str = "Hello World";

str.toUpperCase(); // converts string to uppercase
str.toLowerCase(); // converts string to lowercase
str.trim(); // removes spaces from start and end
str.includes("Hello"); // checks if substring exists
str.indexOf("o"); // returns first position of character
str.lastIndexOf("o"); // returns last position of character
str.slice(0, 5); // extracts part of string
str.substring(0, 5); // similar to slice but no negative index
str.replace("World", "JS"); // replaces first match
str.replaceAll("l", "x"); // replaces all matches
str.split(" "); // splits string into array
str.charAt(1); // returns character at index
str.charCodeAt(1); // returns ASCII code of character
str.startsWith("He"); // checks start of string
str.endsWith("ld"); // checks end of string
str.repeat(2); // repeats string multiple times


// ================= NUMBER & MATH =================

let num = 10.567;

num.toFixed(2); // fixes decimal places (string result)
num.toPrecision(3); // formats number with precision
num.toString(); // converts number to string

Number.isInteger(10); // checks if integer
Number.isNaN(NaN); // checks NaN safely

Math.round(4.6); // rounds to nearest integer
Math.floor(4.9); // rounds down
Math.ceil(4.1); // rounds up
Math.random(); // generates random number (0 to 1)
Math.max(1, 2, 3); // returns largest number
Math.min(1, 2, 3); // returns smallest number
Math.abs(-5); // returns absolute value
Math.pow(2, 3); // power (2^3)
Math.sqrt(16); // square root


// ================= OBJECT METHODS =================

let obj = { a: 1, b: 2 };

Object.keys(obj); // returns array of keys
Object.values(obj); // returns array of values
Object.entries(obj); // returns key-value pairs
Object.assign({}, obj); // copies object
Object.freeze(obj); // prevents changes to object
Object.seal(obj); // allows modification but not adding/removing
obj.hasOwnProperty("a"); // checks if property exists


// ================= DATE METHODS =================

let date = new Date();

date.getFullYear(); // returns year
date.getMonth(); // returns month (0-11)
date.getDate(); // returns day of month
date.getDay(); // returns weekday (0-6)
date.getHours(); // returns hour
date.getMinutes(); // returns minutes
date.getSeconds(); // returns seconds
date.toISOString(); // converts to ISO string format


// ================= JSON METHODS =================

let data = { name: "Aman" };

JSON.stringify(data); // converts object to JSON string
JSON.parse('{"name":"Aman"}'); // converts JSON string to object


// ================= TIMERS =================

setTimeout(() => console.log("Hello"), 1000); // runs once after delay
setInterval(() => console.log("Repeat"), 1000); // runs repeatedly every interval
// clearTimeout(id); // stops timeout
// clearInterval(id); // stops interval


// =====================================
// END OF CHEAT SHEET
// =====================================
