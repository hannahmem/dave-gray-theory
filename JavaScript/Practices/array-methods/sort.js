// SORT

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
// Sort by name
characters.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return - 1;
    if (nameA > nameB) return 1;
    return 0; 
})
console.log("sort by name:", characters);
console.log("\n");

// Sort by mass
characters.sort((a, b) => a.mass - b.mass);
console.log("sort by mass:", characters);
console.log("\n");

// Sort by height
characters.sort((a, b) => a.height - b.height);
console.log("sort by height:", characters);
console.log("\n");

// Sort by gender
characters.sort((a, b) => {
    const genderA = a.gender.toLowerCase();
    const genderB = a.gender.toLowerCase();
    if (genderA < genderB) return - 1;
    if (genderA > genderB) return 1;
    return 0;
})
console.log("sort by gender:", characters);
console.log("\n");