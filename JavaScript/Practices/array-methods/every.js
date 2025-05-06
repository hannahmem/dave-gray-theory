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

// EVERY

// Does every character have blue eyes?
const hasBlueEyes = characters.every((character) => character.eye_color === "blue");
console.log("every(hasBlueEyes): ", hasBlueEyes);

// Does every character have mass more than 40?
const massGreaterThan40 = characters.every((character) => character.mass > 40);
console.log("every(massGreaterThan40)", massGreaterThan40);

// Is every character shorter than 200?
const shorterThan200 = characters.every((character) => character.height < 200);
console.log("every(shorterThan200)", shorterThan200);

// Is every character male?
const allMales = characters.every((character) => character.gender === "male");
console.log("every(allMales)", allMales);
console.log("\n");