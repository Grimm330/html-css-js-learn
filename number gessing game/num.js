const minnum = 1;
const maxnum = 100;

const randomnum =
    Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
console.log(randomnum);
let attempts = 0;
let isgameover = false;

function checkGuess() {

    if (isgameover) {
        return;
    }

    let guess = Number(document.getElementById("guess").value);

    if (guess < minnum || guess > maxnum || isNaN(guess)) {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }

    attempts++;

    if (guess < randomnum) {
        alert("Too low! Try again.");
    }
    else if (guess > randomnum) {
        alert("Too high! Try again.");
    }
    else {
        alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        isgameover = true;
    }
}