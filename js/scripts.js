
console.log("Is this working");

const myName = "Aeron";
const myAge = 28;
const myHome = "Hawaii";
const faveFood = "Sushi";

console.log("My name is %s and it is spelled differently with an E.", myName);
console.log("My age is %s and the type of is: %s", myAge, typeof myAge);
console.log("I was born and raised in " + myHome + ".");
console.log(`My favorite food is ${faveFood} or anytype of fish like Poke.`);
console.log("Lets compare Strings. Does %s and aeron equal? %s", myName, (myName === "aeron"));

let upperCaseName = myName.toUpperCase;
let lowerCaseName = myName.toLowerCase;
console.log("What is I change the case to upper to match?", upperCaseName === "AERON");
console.log("What if its to lower?", lowerCaseName === "aeron");

console.log("----------------- break")
console.log("The length of my first name is: ", myName.length);
console.log("Does my name have an o? ", myName.includes("o"));
console.log("This is my name split: ", myName.split(""));

let nameArray = myName.split("");
console.log("I can access a char in name array by [position]", nameArray[1]);

let nameSlice = myName.slice(1);
console.log("Slice takes off a letter from my name for example it will be: ", nameSlice);


let x = 999;
let y = 1;
let z = 10;
y = 10.0;
let w;
console.log("---------------- break");
console.log("This is add: ", x + y);
console.log("This is multiply: ", x * y);
console.log("This is divde: ", x / z);
console.log("----------------- break")
console.log("Does 10 and 10.0 equal the same? " + (z === y));
console.log(`What about 10 and "10" a string? ${z === "10"}`);
console.log(`What about we parse int "10" a string? ${z === parseInt("10")}`);
console.log("----------------- break")
console.log("Not a number? 999? ", isNaN(x));
console.log("Not a number? p? ", isNaN("p"));
console.log("Not a number? 1? ", isNaN(y));
console.log("Not a number? 10? ", isNaN(z));
console.log("Not a number? undefined? ", isNaN(w));
console.log("Not a number? null? ", isNaN(null));
console.log("Null is a number because it equals 0.");
