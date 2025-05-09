// Factory Function
// Used when we don't want our variables to be accessible
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Backing a ${size} ${crust} crust pizza.`)
    };
};

const myPizza = pizzaFactory("small");
console.log("Factory Function:");
myPizza.bake();

// Classes

// Parent class - superclass => blueprint
class Pizza {
    crust = "original";
    // We can only access private fields #varible inside the body of the class
    #sauce = "taditional";
    #size;
    constructor(pizzaSize) {
        // _variable => indicate that it's a private variable (we don't want it to be accessed)
        this.#size = pizzaSize;
        // this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } 
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
};

const mySecondPizza = new Pizza("large");
mySecondPizza.hereYouGo();
console.log("Declaring public field:", mySecondPizza.crust);


// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         // super calls the constructor of the parent
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// };

// const mySpecialty = new SpecialtyPizza("medium");
// console.log("Class:")
// mySpecialty.slice();