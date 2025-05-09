class Player {
    age = 31;
    // every player will have this fixed property -> useful for default values
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        // age = 31 === this.age = 31;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }
}
// The constructor AND the speak method exist in the prototype of player
// However, the properties names exist on each instance of a player object
// So speak and constructor are shared across all players and the properties are in the state of each instance of player

const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);

hanSolo.speak("Never tell me the odds!");
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
console.log("\n");

const hannah = new Player("Hannah", 50, 5, ["Computer"]);
hannah.speak("Never stop dreaming!");
console.log(hannah);
console.log(Object.getOwnPropertyNames(hannah));
console.log(Object.getOwnPropertyNames(hannah.__proto__));
console.log("\n");

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    // this.speak is not in the prototype, but in the instance of each player
    // this.speak = function(phrase) {
    //     console.log(`${this.name} says: ${phrase}`)
    // }
}

// we need to add it to the prototype to be common to each player 
AnotherPlayer.prototype.speak = function(phrase) {
    console.log(`${this.name} says: ${phrase}`)
};

const darthVader = new AnotherPlayer("Darth Vader", 200, 100, ["Saber"]);
console.log(darthVader);
darthVader.speak("I'm your father!")
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));

// We don't need to assign variables with const, let or var inside classes, because they will be turned into object properties