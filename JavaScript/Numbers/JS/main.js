// Numbers

// An integer is a whole number
const myInteger = 42;
console.log("Integer: ", myInteger);


// A number with a decimal point is a flat, which references the "floating point"
const myFloat = 42.015;
console.log("Float: ", myFloat);

const myString = "42.123asb";
console.log("String: ", myString)

console.log("(===) equality operator: ", myInteger === myString)

// Used in a string, the adition operator will concatenate the number to the string
console.log("adition operator (+) :", myString + 3)

// Number() -> converts the data to a number
console.log("(===) equality operator: ", myInteger === Number(myString))
// if the data can't be converted to a number, it returns NaN (not a number) -> string or undefined data
console.log("Data conversion not possible: ", Number("Hannah"), ", ", Number(undefined))
// a boolean datatype will return 1 or 0
console.log("Boolean true: ", Number(true), "\n", "Boolean false: ", Number(false))

// Methods
// The Number.isInteger() -> determines whether the passed value is an integer
console.log("Is integer? ", Number.isInteger(myFloat), ", ", Number.isInteger(myInteger))

// Number.parseFloat() -> parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it return NaN.
console.log("parseFloat(integer): ", Number.parseFloat(myInteger))
// it converts other datatype to the number datatype
console.log("parseFloat(string): ", Number.parseFloat(myString))

// toFixed() -> formats a number according to how many decimal points you provide as the parameter, it rounds of the number, it returns a string, not a number data
console.log("toFixed: ", myFloat.toFixed(2))

// parseInt() -> it parses an argument and returns an integer. It also removes non number datatypes when possible
console.log("parseInt(float): ", Number.parseInt(myFloat), "parseInt(string): ", Number.parseInt(myString))

// toString() -> returns a string representing the number
console.log("toString(float): ", myFloat.toString())

// Chaining = using several methods chained together
console.log("Chaining methods: parseFloat().toFixed()", Number.parseFloat(myString).toFixed(2))

// Number.isNaN() -> determines whether the passed value is NaN AND its type is a Number
console.log("Is NaN? ", Number.isNaN(myString))