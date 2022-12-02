
// console.log("Is this working");

// const myName = "Aeron";
// const myAge = 28;
// const myHome = "Hawaii";
// const faveFood = "Sushi";

// console.log("My name is %s and it is spelled differently with an E.", myName);
// console.log("My age is %s and the type of is: %s", myAge, typeof myAge);
// console.log("I was born and raised in " + myHome + ".");
// console.log(`My favorite food is ${faveFood} or anytype of fish like Poke.`);
// console.log("Lets compare Strings. Does %s and aeron equal? %s", myName, (myName === "aeron"));

// let upperCaseName = myName.toUpperCase();
// let lowerCaseName = myName.toLowerCase();

// console.log(upperCaseName);
// console.log(lowerCaseName);
// console.log("What is I change the case to upper to match?", (upperCaseName === "AERON"));
// console.log("What if its to lower?", lowerCaseName === "aeron");

// console.log("----------------- break")
// console.log("The length of my first name is: ", myName.length);
// console.log("Does my name have an o? ", myName.includes("o"));
// console.log("This is my name split: ", myName.split(""));

// let nameArray = myName.split("");
// console.log("I can access a char in name array by [position]", nameArray[1]);

// let nameSlice = myName.slice(1);
// console.log("Slice takes off a letter from my name for example it will be: ", nameSlice);


// let x = 999;
// let y = 1;
// let z = 10;
// y = 10.0;
// let w;
// console.log("---------------- break");
// console.log("This is add: ", x + y);
// console.log("This is multiply: ", x * y);
// console.log("This is divde: ", x / z);
// console.log("----------------- break")
// console.log("Does 10 and 10.0 equal the same? " + (z === y));
// console.log(`What about 10 and "10" a string? ${z === "10"}`);
// console.log(`What about we parse int "10" a string? ${z === parseInt("10")}`);
// console.log("----------------- break")
// console.log("Not a number? 999? ", isNaN(x));
// console.log("Not a number? p? ", isNaN("p"));
// console.log("Not a number? 1? ", isNaN(y));
// console.log("Not a number? 10? ", isNaN(z));
// console.log("Not a number? undefined? ", isNaN(w));
// console.log("Not a number? null? ", isNaN(null));
// console.log("Null is a number because it equals 0.");

// const sentence = "I am new to learning JavaScript";

// //using slice -> I am new

// console.log(sentence.slice(0,8));
// console.log(sentence.slice(-31,-23));

// let fruits = "apple banana papaya avacado";
// console.log(fruits.split(" "));

// console.log(sentence.replace("i", "a"));
// console.log(sentence.concat(". It is fun :)"))

// const userAge = prompt("How old are you?");

// if (userAge > 21){
//     console.log("You can drink.")
// } else {
//     console.log("Go home!")
// }


function difference(num1, num2){
    return num1 - num2;
}
console.log(difference(4,2));

const product = (num1, num2) => {
    return num1 + num2;
}
console.log(product(2,2));

function dayOfWeek(number){
    if (number === 1){
        return "Sunday";
    } if (number === 2){
        return "Monday";
    } if (number === 3){
        return "Tuesday";
    } if (number === 4){
        return "Wednesday";
    } if (number === 5){
        return "Thursday";
    } if (number === 6){
        return "Friday";
    } if (number === 7){
        return "Saturday";
    } else {
        return undefined;
    }
}
console.log(dayOfWeek(8));

const lastElement = (array) => {
    // let result = array.length - 1;
    // if (!array){
    //     return undefined;
    // } else {
    //     return array[result];
    // }
    return array[array.length - 1];
}
console.log(lastElement([1,2,3,4]));

const numbersCompare = (num1, num2) => {
    if (num1 > num2){
        return "First is Greater";
    } if (num2 > num1){
        return "Second is greater";
    } else {
        return "Numbers are equal";
    }
}
console.log(numbersCompare(3,5));

const singleLetterCount = (str, ch) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === ch.toLowerCase()){
            count++;
        }
    }
    return count;
}
console.log(singleLetterCount("Rithm School", "Z"));

const multipleLetterCount = (str) => {
    str = str.toLowerCase();
    let result = {};
    for (let i = 0; i < str.length; i++){
        if (result[str[i]] === undefined){
            result[str[i]] = 1;
        } else {
            result[str[i]]++;
        }
    }
    return result;
}
console.log(multipleLetterCount("hello"));

const arrayManipulation = (array, command, location, value) => {
    if (command === "remove" && location === "end"){
        return array.pop();
    } if (command === "remove" && location === "beginning"){
        return array.shift();
    } if (command === "add" && location === "end"){
        array.push(value);
        return array;
    } else {
        array.unshift(value);
        return array;
    }
}
console.log(arrayManipulation([1,2,3,4], "add", "beginning", 20));

//Arrays Exercise..
const people = ["Greg", "Mary", "Devon", "James"];
//people.shift();
//people.pop();
//people.unshift("Matt");
//people.push("Aeron");
//peopleCopy = people.slice(2);
//console.log(peopleCopy);
//console.log(people.indexOf("Mary"));
//console.log(people.indexOf("Foo"));
//people.splice(2, 1, "Elizabeth", "Artie");
withBob = people.concat("Bob");
console.log(withBob);

const myObj = {
    favColor: "Black",
    favFood: "Sushi",
    favNum: 3
};

//using . notation
console.log(myObj.favColor);

//using bracket notation
console.log(myObj["favFood"]);

//Objects exercise..
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
console.log(programming);

//For loops practice..
const nums = [1,2,3,4,5,6,7];
for (num in nums){
    console.log(num);
}

const twoDArray = [[1,2,3], [4,5,6], [7,8,9]];
console.log("this is flat function", twoDArray.flat());

flatArray = twoDArray.flat();
for(arr of flatArray){
    console.log(arr);
}