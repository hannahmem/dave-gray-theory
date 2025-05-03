// Conditionals: Switch Statements -> checks an expression or value, then takes a waterfall shape to check any number of possible cases; the logical order of the cases is important
// when it matches, it should stop with a break and never evaluate the next cases

// syntax
/* switch (expression OR value) {
    case choice1:
        // run this code
        break;
    case choice2:
        // run this different code
        break;
    // add as many cases as needed
    default:
        // run this code if no case matches
        // no need for a break here
} */

// switch statements need strict matches (no different datatype is a match)
switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
        console.log(3)
        break;
    default:
        console.log("No match!")
}

let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie game!")
    case "rock":
        if (computer === "paper") {
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
        break;
    default:
        if (computer === "rock") {
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
}