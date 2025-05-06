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

// SOME

// Is there at least one male character?
const oneMale = characters.some((character) => character.gender === "male");
console.log("some(oneMale)", oneMale);

// Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) => character.eye_color === "blue");
console.log("some(oneBlueEyes)", oneBlueEyes);

// Is there at least one character taller than 200?
const oneTallerThan200 = characters.some((character) => character.height > 200);
console.log("some(oneTallerThan200)", oneTallerThan200);

// Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some((character) => character.mass < 50);
console.log("some(massLessThan50)", massLessThan50);
console.log("\n");