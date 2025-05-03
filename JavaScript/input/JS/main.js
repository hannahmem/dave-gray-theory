// User input

/* let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean) */

let name = prompt("Please, enter your name.")
// nullish soalescing operator (??) -> it returns it right-hand side operand when its left-hand side operand is null or undefined
// console.log(name ?? "You didn't enter your name.")

if (name) {
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name.trim())
} else {
    console.log("You didn't enter your name.")
}