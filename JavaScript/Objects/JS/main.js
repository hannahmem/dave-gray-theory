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
    action: function() {
        return "Hello World!";
    },
    action2: function() {
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
    engine: function() {
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
car.engine = function() { return "Whooosh!"};
console.log(car.engine());
console.log(car.wheels);
console.log("\n");


const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() { return "Shhhh..." };
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
