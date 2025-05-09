/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/

class Animal {
    constructor(animalType, animalName) {
        this.type = animalType;
        this.name = animalName;
    }
}

const animal1 = new Animal("Gato", "Bolinha");
const animal2 = new Animal("Pássaro", "Juninho");

console.log(animal1);
console.log(animal2);

animal1.name = "Titine";
animal2.name = "Carlota";

console.log(animal1);
console.log(animal2);
