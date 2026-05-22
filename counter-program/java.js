const decrise = document.getElementById("decrement");
const incrise = document.getElementById("increment");
const reset = document.getElementById("reset");
const count = document.getElementById("counter");
let c= 0;

incrise.onclick = function () {
    c++;
    count.textContent = c;
}

decrise.onclick = function () {
    c--;
    count.textContent = c;
}

reset.onclick = function () {
    c = 0;
    count.textContent = c;
}

let name = "John";
let p = name == "John" ? "Hello, John!" : "Hello, stranger!";
console.log(p);
