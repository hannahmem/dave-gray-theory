// Classes

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        // this.size = "medium";
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    // get pizzaCrust() {
    //     return this.crust;
    // }

    // set pizzaCrust(pizzaCrust) {
    //     this.crust = pizzaCrust;
    // }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(topping) {
        this.toppings.push(topping);
    }
 
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
};

const myPizza = new Pizza("margheritta", "small");
myPizza.bake();

// getting properties
console.log(myPizza.type);
// changing properties (not desirable)
myPizza.type = "supreme";
console.log(myPizza.type);
// changing properties preferable
myPizza.setCrust("cheese");
myPizza.bake();
myPizza.setToppings("tomato");
myPizza.setToppings("oregano");
// it returns an array of things we want to add to the pizza
console.log(myPizza.getToppings());