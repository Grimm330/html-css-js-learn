let fruts = ["apple", "banana", "orange", "grape"];
let vegetables = ["carrot", "broccoli", "spinach", "potato"];

let itm = [...fruts, ...vegetables];
console.log(itm);
console.log(`The length of the combined array is: ${itm.length}`);
itm.push("strawberry");
itm.sort();
console.log(itm);
itm.unshift("watermelon");//adds an item to the beginning of the array
console.log(itm);
itm.pop();//removes the last item from the array
console.log(itm);
itm.shift();//removes the first item from the array
console.log(itm);
