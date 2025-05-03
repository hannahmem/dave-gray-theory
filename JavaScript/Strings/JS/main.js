// Strings
const myVariable = "Mathematics";

// The length property
console.log("length: ", myVariable.length)

// charAt method -> returns what is in the specified index position
console.log("charAt: ", myVariable.charAt(6))

// indexOf -> it tells the position of the first ocurrency of the character or group of characters in the string
console.log("indexOf: ", myVariable.indexOf("at"))

// lastIndexOf -> it provides the last position of the character or group of characters we provide
console.log("lastIndexOf: ", myVariable.lastIndexOf("at"))

/* slice -> accepts starting and ending characters and returns the characters from the start position to the ending position 
- The result does not include the ending position
- if the ending position is not provided, the slice method returns the characters from the start position to the end of the string
- if the ending position parameter is less than or equal to the start position parameter, nothing will be returned
*/
console.log("slice: ", myVariable.slice(3, 6))

// toUpperCase, toLowerCase
console.log("toUpperCase: ", myVariable.toLocaleUpperCase())
console.log("toLowerCase: ", myVariable.toLocaleLowerCase())

// includes -> it returns a boolean data -> if the character or group of characters we provide is not inside the string, it returns false, if they are, it returns true
console.log("includes: ", myVariable.includes("mat"), ", ",  myVariable.includes("eh"))

// split -> splits the string wherever the character we provide occurs -> it returns the resulting multiple strings within an array
console.log("split: ", myVariable.split("e"), "\n", myVariable.split(""), "\n", "Yeri,Irene,Seulgi".split(","), "\n", "Let's dominate this JS bitch".split(" "))