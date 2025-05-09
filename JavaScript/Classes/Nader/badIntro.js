// Classes

// This is not a good way of creating players
// Objects in JS are just references, and it only exist once at a time
const player = {
    name: "?",
    hp: 100,
    mp: 0,
    items: []
}

// if we modify han solo, we change our template, so Darth Vader will have the same values as Han Solo
const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);


