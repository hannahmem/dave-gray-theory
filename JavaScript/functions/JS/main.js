// Functions -> provide reusable code

// Methods = Built-in functions

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1
    }
    // return -> the value the function will return
    return num1 + num2;
};

console.log(sum(5, 24));

// const getUsernameFromEmail = function (email) 
const getUsernameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};

console.log(getUsernameFromEmail("baixinhamanes@email.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("hANnNah"));