// Conditionals: Ternary Operator

// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;

let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response)

let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today.` : "Sorry, no soup today.";
console.log(soupAccess)


// testScore
let testScore = 80;
let myGrade = testScore > 89 ? 
    "A" 
    : testScore > 79 ? 
    "B" 
    : testScore > 69 ?
    "C"
    : testScore > 59 ?
    "D"
    : "F";

console.log(`My test grade is a ${myGrade}.`)


// rock scissors paper
let playerOne = "paper";
let computer = "rock";
let result = playerOne === computer ?
    "It's a tie!" :
    computer === "paper" && playerOne === "scissors" ?
    "playerOne wins!" 
    : computer === "scissors" && playerOne === "rock" ?
    "PlayerOne wins!" 
    : computer === "rock" && playerOne === "paper" ?
    "playerOne wins!" 
    : "Computer wins!" 
console.log(result)