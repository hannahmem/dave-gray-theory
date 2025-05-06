const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP

// Get an array of all names
const names = characters.map((character) => character.name);
console.log("map(names): ", names);
console.log("\n");

// Get an array of all heights
const heights = characters.map((character) => character.height);
console.log("map(heights): ",heights);
console.log("\n");

// Get an array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({ name: character.name, height: character.height }));
// We need to wrap the object in a parenthesis to show that this is an implicit return
console.log("map(miniRecords): ",minifiedRecords);
console.log("\n");

// Get an array of all first names
const firstName = characters.map((character) => character.name.slice(0, character.name.indexOf(" ")));
// solution
const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.log("map(firstName): ",firstName);
console.log("map(firstNames): ",firstNames);
console.log("\n");