// Write a Javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

const checkNumbers = (num1, num2) => {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100) return true
    else return false
}

// solution
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(checkNumbers(44, 40));
console.log(isEqualTo100(55, 40));


// Write a Javascript program to get the extension of a filename
const getExtension = (filename) => { 
    // bad solution: return filename.slice(filename.indexOf(".")) -> it'll return the first dot (.), not the last one
    return filename.slice(filename.lastIndexOf("."))
};

// solution
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getExtension("uashdiuhasduas.hahah.css"))
console.log(getFileExtension("uashdiuhasduas.hahaha.css"))


// Write a Javascript program to replace every character in a given string with the character following it in the alphabet
// String.fromCharCode
// charCodeAt
// let char = String.fromCharCode(83)

// Strings in JavaScript are immutable, meaning you can't modify individual characters by index (like str[i] = char). Instead, you need to build a new string with the transformed characters.

const textTransform = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = String.fromCharCode(str.charCodeAt(i) + 1)
        // console.log(char)
        result += char;
    }
    return result;
}

console.log(textTransform("Hannah"));

// solution
const moveCharsForward = (str) => {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    
}

console.log(moveCharsForward('abcd'));


/* 
Write a Javascript program to get the current date 
Expected output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();
console.log(date.toLocaleDateString())
const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
console.log(formattedDate)

// solution
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    return `${days}/${months}/${years}`
}

console.log(formatDate());

// Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string beings with "New!" already then return the original string

const addNew = (str) => {
    // bad solution: if (str.includes("New!")) return str -> it'll check if there's New! in the whole sentence, not only at the beginning
    if (str.startsWith("New!")) return str
    else {
        const newArray = str.split(' ')
        newArray.unshift("New!")
        const newString = newArray.join(' ')
        return newString;
    }
}

console.log(addNew("Minha nada mole vida! New!"))

// solution
const addNew2 = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew2("New! offers"))