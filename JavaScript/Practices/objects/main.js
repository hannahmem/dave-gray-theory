// Exercise 1: Accessing Object Properties

/* Write a function that takes an object and a key as input and returns the value associated with that key in the object */

const user = {
    name: "Hannah",
    age: 25,
    email: "hannah@email.com"
};

const getKeyValue = (obj, key) => {
    return obj[key];
    // if we tried to do the dot(.) notation, it'll try to access the object with the name we set in the paramether. 
    // Ex: obj.key, it'll try to find the 'key' value inside the object we want to access, which doens't exist. 
};

console.log(getKeyValue(user, "name"));
console.log("\n");

// Exercise 2: Adding Object Properties

// Write a function that takes an object, a key, and a value as input, and adds the key-value pair to the object

const addKey = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

console.log(addKey(user, "address", "Brussels"));
console.log("\n");

// Exercise 3: Checking if a key exists

// Write a function that takes an object and a key as input and returns true if the key exists in the object, othersewise return false

const checkIfKeyExists = (obj, key) => {
    return obj[key] ? true : false
}

// alternatives
const hasKey = (obj, key) => {
    return key in obj;
}

const isKeyPresent = (obj, key) => {
    return obj.hasOwnProperty(key);
}

console.log(checkIfKeyExists(user, "country"));
console.log(hasKey(user, "age"));
console.log(isKeyPresent(user, "surname"));
console.log("\n");

// Exercise 4: Object Property Count

// Write a function that takes an object as input and returns the number of properties (keys) in the object
const countKeys = (obj) => {
    let count = 0;
    for (keys in obj) {
        count++;
    }
    return count;
};

// alternative
const keyCount = (obj) => {
    return Object.keys(obj).length;
};

console.log(countKeys(user));
console.log(keyCount(user));
console.log("\n");

// Exercise 6: Merging Objects

// Write a function that takes two objects as input and returns a new object that is the result of merging the properties of both projects.
// If there are conflicting keys, the values from the second object should take precedence.

const userHobbies = {
    name: "Hannah",
    age: 31,
    hobbie: "Soccer",
    location: "Aterro do Flamengo",
    weekdays: "mondays, thurdays" 
};

const newObject = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
    // Alternative -> return Object.assing({}, obj1, obj2);
};

console.log(newObject(user, userHobbies));
console.log("\n");

// Exercise 3: Object Sorting

// Write a function that takes an object as input and returns a new object with the keys sorted in alphabetical order

const newSortedObject = (obj) => {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObject = {};
    for (const keyName of sortedKeys) {
        console.log(`${keyName}`);
        sortedObject[keyName] = obj[keyName];
    }
    return sortedObject;
};

console.log(newSortedObject(user));

// Object.value => it transforms the object in an array of keys
// console.log(Object.keys(user));