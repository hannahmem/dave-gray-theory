const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// REDUCE

// Get the total mass of all characters
const totalMass = characters.reduce((total, currentMass) => 
    total + currentMass.mass, 0
);
console.log("Total sum of mass:", totalMass);

// Get the total height of all characters
const totalHeight = characters.reduce((total, currentHeight) => 
    total + currentHeight.height, 0
);
console.log("Total sum of heights:", totalHeight);

// Get the total number of characters in all the character names
const totalChars = characters.reduce((total, char) => {
    const nameLen = char.name.length
    return total + nameLen
}, 0)
console.log("Sum of name characteres:", totalChars);

// Get the total number of characters by eye color (hint. a map of eye color to count)
const characterByEyeColor = characters.reduce((total, cur) => {
    const color = cur.eye_color
    if (total[color]) {
        total[color]++;
    } else {
        total[color] = 1;
    }
    return total;
}, {})
// total[color] = total.color -> obj.prop = obj['prop'] -> forma de acessar propriedades dinamicamente
console.log("Reduce by eye color:", characterByEyeColor);

// alternativa
const characterEyeColor = characters.reduce((total, cur) => {
    total[cur.eye_color] = (total[cur.eye_color] || 0) + 1;
    return total;
}, {});
console.log(characterEyeColor);

// Tallest character
const tallest = characters.reduce((max, person) => {
    console.log(`Max: ${max.height}`);
    console.log(`Person: ${person.height}`)
    return person.height > max.height ? person : max;
}, characters[0]);

console.log("Tallest character:", tallest);