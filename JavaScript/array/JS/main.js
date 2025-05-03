// Arrays

const myArray = [];

// add elements to an array
myArray[0] = "Hannah";
myArray[1] = 2025;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// add something to the end of the array
myArray.push("school");
console.log(myArray);

// delete the last item from the array
myArray.pop();
console.log(myArray);

// adds to the start of the array
myArray.unshift(42);
console.log(myArray);

// removes from the start of the array
myArray.shift();
console.log(myArray);

// it deletes the item, but not their space in the array
delete myArray[1];
console.log(myArray);

// it removes specific elements of the array according to an interval
myArray.splice(1, 1);
console.log(myArray);
// it replaces an element
myArray.splice(1, 1, true);
console.log(myArray);
// it doesn't remove, but adds something to an specific index
myArray.splice(1, 0, 25);
console.log(myArray);


const myArray2 = ["A", "B", "C", "D", "E", "F"];

// it returns a new array without the sliced elements
const slicedArray = myArray2.slice(2, 5);
console.log(slicedArray);

// reverses the order of the elements in the array
myArray2.reverse();
console.log(myArray2);

// creates a new string with the elements in the array
const newString = myArray2.join();
console.log(newString);

const newArray = newString.split(",");
console.log(newArray);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArray2 = myArrayB.concat(myArrayA)
console.log(newArray2);

// spread operator -> it says, take the values in the array and spread them out to be individual elements
const newArray3 = [...myArrayA, ...myArrayB];
console.log(newArray3);

// without the spread operator, it would return two arrays nested in an array
const newArray4 = [myArrayA, myArrayB];
console.log(newArray4);

const equipShelfA = ["Basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
