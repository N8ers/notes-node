var square = (x) => {
    var result = x * x;
    return result;
};
console.log(square(9));

var square = (x) => x * x;
//you do not have to have a return with arrow function, it is implied
console.log(square(3));

var square = x => x * x;
//with arrow function with only one argument you don't need parenthesesis 
//if no arguments, you DO need ()
console.log(square(2));


////////// this examples 
var user = {
    name: 'N8ers',
    sayHi: () => {
        console.log(`hi`);
    }
};
user.sayHi();

//arrow functions don't bind key words this!
var user = {
    name: 'N8ers',
    sayHi: () => {
        console.log(`hi, I'm ${this.name}`);
    }
};
user.sayHi();

//here's how to do it
var user = {
    name: 'N8ers',
    sayHi: () => {
        console.log(`hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(`hi, I'm ${this.name}`);
    }
};
user.sayHiAlt();

//doesn't bind arguments array, so do this
var user = {
    name: 'N8ers',
    sayHi: () => {
        console.log(`hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi, I'm ${this.name}`);
    }
};
user.sayHiAlt(1, 2, 3);