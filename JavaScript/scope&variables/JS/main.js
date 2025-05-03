// var, let, const

/* 
    Global: Not in a function or block. Not desirable.
    Local = In a function or block. Not global.
    var instantiates function() scoped variables.
    let and const instantiate {block} scoped variables.

    tips:
    1- avoid using var.
    2- use const unless you need to reassign a value.
    3- use let if you know you will reassign value.
*/

// it doesn't throw an error when we redeclare the variable
var x = 1;
var x = 3;

console.log(x);

// we get an error when we try to redeclare the variable "Uncaught SyntaxError: Identifier 'y' has already been declared"
let y = 2;
// let y = 1;
y = 1;

console.log(y);

// const throw an error when we try to reassign it "Uncaught TypeError: Assignment to constant variable."
const k = 1;
// k = 2;
console.log(k);

// global scope
var a = 5;
let b = 4;
const c = 11;

myFunc();
console.log("\n")

console.log(`Global: ${a}`);
console.log(`Global: ${b}`);
console.log(`Global: ${c}`);

// local scope
{
    let y = 4;
}

function myFunc() {
    const z = 5;
    console.log(b);

    if (true) {
        let b = 6;
        console.log(b);
    }
}

function myFunct() {
    var a = 10;
    const c = 30;
    
    {
        var a = 40; // function scoped
        const c = 50; // block scoped
        console.log(`block: ${a}`);
        console.log(`block: ${b}`);
        console.log(`block: ${c}`);
    }
    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);
}

myFunct()


