// Objects
// key-value pairs in curly braces
const myObj = { name: "Hannah" };

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return "Hello World!";
    },
    action2: function () {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[1]);
console.log("\n");

// when we use brackets to get the value from a key in the object, we use quotes.
// with brackets, we get the entire nested object
console.log(anotherObj["beverage"]);
// we get a specific object inside a key value (property)
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.action2());
console.log("\n");

const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrrooom!";
    }
}

// constructor -> we create a truck object based on the vehicle object
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
// Inheretance
console.log(truck.wheels);
console.log(truck.engine());
console.log("\n");

const car = Object.create(vehicle);
car.doors = 4;
// we overwrite the inherited method from the vehicle constructor
car.engine = function () { return "Whooosh!" };
console.log(car.engine());
console.log(car.wheels);
console.log("\n");


const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () { return "Shhhh..." };
console.log(tesla.engine());
console.log("\n");

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// adding properties
// band.keyboards = ""

// adding methods
// band.start = function() {}

// deleting an existing method or property
// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// destructuring objects
// we define myVariable and pull the value of the key 'guitar' out of the object
const { guitar: myVariable, bass: myBass } = band;
console.log("Destructured object with myVariable:", myVariable);
console.log("Destructured object with myVariable:", myBass);
const { vocals, guitar, bass, drums } = band;
console.log("Destructured object key names:", vocals);
console.log("Destructured object key names:", drums);
console.log("\n");

function sings({ vocals }) {
    return `${vocals} sings!`
}
console.log(sings(band));
console.log("\n");

console.log(Object.keys(band));
console.log(Object.values(band));
console.log("\n");

for (let job in band) {
    // referring to the keys, we need to use brackets so it can iterate through each of the objects, not an specific object
    // console.log("Values:", band[job]);
    // it shows in the console all the object values of all keys

    console.log(`On ${job}, it's ${band[job]}!`);
    // we access the values from the key position, and from the value position in the object
}
console.log("\n");

// Cloning objects

let user = {
    name: "Hannah",
    age: 31
};

let clone = {}

for (let key in user) {
    clone[key] = user[key];
};

clone.name = "Seulgi";
console.log("Original user:", user.name);
console.log("Cloned user:", clone.name);
console.log("\n");

// Object.assign(dest, ...sources)
let permission1 = { canView: true };
let permission2 = { canEdit: true };

// copies all properties from permission1 and permission2 into user
Object.assign(user, permission1, permission2);

console.log("Original user:", user.name);
console.log("Permission1 copied into user:", user.canView);
console.log("Permission2 copied into user:", user.canEdit);
console.log(user);

// If the copied property name already exists, it gets overwritten
Object.assign(user, { name: "Irene" });
console.log("Reassigned name: ", user.name);

// Simple cloning -> shallow copy
clone = Object.assign({}, user);
console.log("Cloned user with assign:", clone.name, clone.age);
console.log("\n");

// Nested cloning -> properties can be references to other objects
user = {
    name: "Hannah",
    sizes: {
        height: 153,
        width: 40
    }
};

console.log("Nested size value:", user.sizes.height);

// if clone.sizes = user.sizes -> it'll be copied by reference, hence modified
clone = Object.assign({}, user);
console.log("Comparison between the original's e copy's sizes:", user.sizes === clone.sizes);

user.sizes.width = 45;
console.log("Modified cloned width property:", clone.sizes.width);
console.log("\n");

// We need a deep cloning or structured cloning -> it copies the object with all nested properties
// it can clone most data types, such as objects, arrays, primitive values
clone = structuredClone(user);
console.log("Structured cloning comparison:", user.sizes === clone.sizes)
user.sizes.width = 35;
console.log("Structured cloned width property:", clone.sizes.width);

// it also supports circular references (when an object property references the object itself)
user = {};
user.me = user;

clone = structuredClone(user);
console.log("Circular references of clone:", clone.me === clone);
console.log("Circular references: comparison between clone and user:", clone.me === user);

// StructuredClone fails when an object has a function property


// Retrieving a property from an array of objects
const users = [
    { name: "Hannah", age: [ 30, 30 ] }, 
    { name: "Bia", age: [ 45, 45 ] }, 
    { name: "Irene", age: [ 20, 20 ] }, 
];

let ages = [];

ages = users.map(value => value.age);
console.log(ages);

const sum = ages.map(array => {
    return array.reduce((total, cur) => total + cur);
})

console.log(sum);