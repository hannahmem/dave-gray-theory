// Loops

// while loop
let myNumber = 0;
while (myNumber < 10) {
    myNumber++;
    console.log("while loop: ", myNumber);
}
console.log("\n")

// the "continue" statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
// In a while loop, the condition is tested, and if it's true, the loop is executed again
let name = "Irene";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "n") break;
    counter++;
}
console.log(counter)
console.log("\n")

// do while loop
// you execute the 'do' block, and then execute the while loop
let myNumber2 = 50
do {
    console.log("do while loop: ", myNumber2)
} while (myNumber2 < 50);

// for loop
for (let i = 0; i <= 10; i++) {
    console.log("for loop: ", i);
}

for (let i = 0; i <= name.length; i++) {
    console.log("for loop: ", name.charAt(i));
}