// Create a variable that contains your name as a value
let fullName: string = "Mitchell Gaylord";

// Create a constant that contains the number of states in the U.S. and name it appropriately
const numOfStates: number = 50;

// Compute the result of adding 5 and 4 and store it in an appropriately named variable
let sum: number = 5 + 4;

// Write a function called sayHello that displays an alert that says Hello World
function sayHello() {
    console.log("Hello World")
};

sayHello();

// Write a function called checkAge that takes two arguments: one for a name and one for an age
function checkAge(name: string, age: number) {
    if (age < 21) {
        console.log("Sorry, " + name + ", you aren't old enough to view this page!")
    };
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// Create an array of your favorite vegetables and name it accordingly
let vegetables: Array<string> = ["potatoes", "corn", "asparagus", "green beans", "bell peppers"];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
};

// Create an object named pet with two properties, name and breed
let pet: {name: string, breed: string} = {
    name: 'Rocky',
    breed: 'Snail'
};

console.log(pet);
console.log(pet.name);
console.log(pet.breed);

// Create an array of 5 objects that contain name and age properties
let array = [
    {name: "Julianna", age: 4},
    {name: "Bethany", age: 26},
    {name: "Coty", age: 2},
    {name: "Hillary", age: 65},
    {name: "Billy Bob", age: 35}
];

for (let i = 0; i < array.length; i++) {
    checkAge(array[i].name, array[i].age);
}

// Create a function called getLength that takes any word as an argument
function getLength(word: string) {
    return word.length
}

let helloWorldLength = getLength('Hello World')

if (helloWorldLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}