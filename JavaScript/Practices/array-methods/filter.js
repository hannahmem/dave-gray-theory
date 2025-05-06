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

// FILTER

// Get characters with mass greater than 100
const massGreaterThan100 = characters.filter((character) => character.mass > 100); 
console.log("Filter(massGreaterThan100): ", massGreaterThan100);
console.log("\n");

// Get characters with height less than 200
const heightLessThan200 = characters.filter((character) => character.height < 200);
console.log("Filter(heightLessThan200): ", heightLessThan200);
console.log("\n");

// Get all male characters
const males = characters.filter((character) => character.gender === "male");
console.log("Filter(males): ", males);
console.log("\n");

// Get all female characters
const females = characters.filter((character) => character.gender === "female");
console.log("Filter(females): ", females);
console.log("\n");

// alternative
const byGender = characters.sort((a, b) => {
    if (a.gender === "female") return 1; // -1 ladies first; 1 -> mens first
    return -1;
})
console.log("sort by gender:", characters);
console.log("\n");