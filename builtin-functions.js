// =====================================
// JavaScript Built-in Functions Cheat Sheet
// =====================================

// ================= GLOBAL FUNCTIONS =================

console.log(parseInt("10"));
console.log(parseFloat("10.5"));
console.log(isNaN("abc"));
console.log(isFinite(10));
console.log(Number("123"));
console.log(String(123));
console.log(Boolean(1));


// ================= ARRAY METHODS =================

let arr = [1, 2, 3, 4, 5];

arr.map(e => e * 2);
arr.filter(e => e % 2 === 0);
arr.reduce((acc, e) => acc + e, 0);
arr.forEach(e => console.log(e));
arr.find(e => e > 2);
arr.findIndex(e => e > 2);
arr.includes(3);
arr.some(e => e > 3);
arr.every(e => e > 0);
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);
arr.slice(1, 3);
arr.splice(1, 1);
arr.concat([6, 7]);
arr.sort();
arr.reverse();


// ================= STRING METHODS =================

let str = "Hello World";

str.toUpperCase();
str.toLowerCase();
str.trim();
str.includes("Hello");
str.indexOf("o");
str.lastIndexOf("o");
str.slice(0, 5);
str.substring(0, 5);
str.replace("World", "JS");
str.replaceAll("l", "x");
str.split(" ");
str.charAt(1);
str.charCodeAt(1);
str.startsWith("He");
str.endsWith("ld");
str.repeat(2);


// ================= NUMBER & MATH =================

let num = 10.567;

num.toFixed(2);
num.toPrecision(3);
num.toString();

Number.isInteger(10);
Number.isNaN(NaN);

Math.round(4.6);
Math.floor(4.9);
Math.ceil(4.1);
Math.random();
Math.max(1, 2, 3);
Math.min(1, 2, 3);
Math.abs(-5);
Math.pow(2, 3);
Math.sqrt(16);


// ================= OBJECT METHODS =================

let obj = { a: 1, b: 2 };

Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.assign({}, obj);
Object.freeze(obj);
Object.seal(obj);
obj.hasOwnProperty("a");


// ================= DATE METHODS =================

let date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();
date.getSeconds();
date.toISOString();


// ================= JSON METHODS =================

let data = { name: "Aman" };

JSON.stringify(data);
JSON.parse('{"name":"Aman"}');


// ================= TIMERS =================

setTimeout(() => console.log("Hello"), 1000);
setInterval(() => console.log("Repeat"), 1000);
// clearTimeout(id);
// clearInterval(id);


// =====================================
// END OF CHEAT SHEET
// =====================================
