// Conditionals: if statements

// Syntax 
// if (condition) {
//     // run some code
// } else {
//     // run some different code
// }

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
    
} else if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = "Sorry, we're out of soup.";
}
console.log(reply)

let testScore = 59;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
}else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
    console.log(grade)
}

let playerOne = "rock";
let computer = "scissors";

// Decision tree!
if (playerOne === computer) {
    console.log("draw!")
} else if (playerOne === "rock") {
    if (computer === "paper") {
        console.log(`Computer won!`)
    } else {
        console.log(`Player one won!`)

    } 
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        console.log(`Computer won!`)
    } else {
        console.log(`Player one won!`)
    }
} else {
    if (computer === "rock") {
        if (playerOne === "scissors") {
            console.log(`Computer won!`)
        } else {
            console.log(`Player one won!`)
        }
    }
}