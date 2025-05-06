// for.Each()
const fruits = ["banana", "apple", "mango", "cherry", "maracuja"];
const vegetables = ["potato", "tomato", "carrots", "cucumber"];

fruits.forEach((item) => {
    console.log("for each: ", item);
});
console.log("\n");

// Map()
const bananas = fruits.map((item) => "bananas");
console.log("map:", bananas);
console.log("\n");
const duplicateFruits = fruits.map((any) => any + any);
console.log("map:", duplicateFruits);
console.log("\n");

const products = [
    {name: "Laptop", price: 499, color: "white"},
    {name: "Smartphone", price: 899, color: "black"},
    {name: "Headphones", price: 50, color: "white"},
    {name: "Tablet", price: 199, color: "grey"},
    {name: "Keyboard", price: 210, color: "blue"}
];

const discounts = products.map((product) => {
    return {
        // the spread operator copies the other properties
        ...product,
        price: product.price * 0.5
    };
});
console.log("map -> add discounts to prices ", discounts);
console.log("\n");

const categorizedProducts = products.map(product => {
    let category;
    if (product.price < 100) category = "Budget";
    else if (product.price < 500) category = "Mid-range";
    else category = "Premium";
    return { ...product, category};
});
console.log("map -> add category element: ", categorizedProducts);
console.log("\n");


// Filter()
const filterItems = (arr, query) => { 
    return arr.filter((item) => item.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
console.log("filter:", filterItems(fruits, "ap"));
console.log("filter:", filterItems(fruits, "ma"));

const newArr = products.filter(product => {
    return product.color === "white" && product.price < 100;
});
console.log("filter -> white and price lower than 100: ", newArr);
console.log("\n");


// Concat()
const food = fruits.concat(vegetables);
console.log("concat:", food);
console.log("\n");


// Find()
const banana = fruits.find((item) => item === "banana");
console.log("find: ", banana);
const watermelon = fruits.find((item) => item === "watermelon");
console.log("find: ", watermelon);
console.log("\n");


// FindIndex()
const mangoIndex = fruits.findIndex((item) => item === "mango");
console.log("findIndex: ", mangoIndex);
const watermelonIndex = fruits.findIndex((item) => item === "watermelon");
console.log("findIndex: ", watermelonIndex);
console.log("\n");


// IndexOf()
const cherryIndex = fruits.indexOf("cherry");
console.log("indexOf: ", cherryIndex);
const cocoaIndex = fruits.indexOf("cocoa");
console.log("indexOf: ", cocoaIndex);
console.log("\n");


// Some()
const hasABanana = fruits.some((item) => item === "banana");
console.log("some: ", hasABanana);
const hasAcai = fruits.some((item) => item === "acai");
console.log("some: ", hasAcai);
console.log("\n");


// Every()
const allBananas = fruits.every((item) => item === "banana");
console.log("every: ", allBananas);
console.log("\n");


// Sort()
const months = ["January", "December", "March", "April"];
months.sort();
console.log("sort: ", months);
console.log("\n");

const numbers = [1, 5, 24, 54, 78, 92];
numbers.sort();
console.log("sort standard: ", numbers);
// ascending order
numbers.sort((a, b) => { return a - b });
console.log("sort ascending order: ", numbers);
// descending order
numbers.sort((a, b) => { return b - a });
console.log("sort descending order: ", numbers);
console.log("\n");


// Reduce()
const prices = [4, 8, 15, 16, 23, 42];

const totalPrices = prices.reduce((total, currentPrice) => {
    return total + currentPrice;
}, 0);

console.log("reduce -> total sum of prices:", totalPrices);

const words = ["Hello", " ", "world"];
const sentence = words.reduce((result, words) => {
    return result + words;
}, '');

console.log("reduce -> combining words into a sentence:", sentence);

// it counts how many times the words appear in the array and then return the result as an object
const count = fruits.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {});

console.log("reduce -> counting elements in an object", count);

// populating an array based on people's ages
const people = [
    { name: "Hannah", age: 31 },
    { name: "Irene", age: 34 },
    { name: "Seulgi", age: 31 },
    { name: "Yeri", age: 26 },
    { name: "Joy", age: 29 },
    { name: "Wendy", age: 31 }
];

const result = people.reduce((groupedPeople, person) => {
    const age = person.age;
    // if we don't currently have a group of that specific age, it'll create a new array for those people
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {})

console.log(result)