//Q.1 Use logical Operator to find whether the age of a person lies betwwen 10 & 20

const prompt = require("prompt-sync")();

let age = prompt("What is your age ?");

if(age > 10 && age < 20){
    console.log("Yes , the age is between 10 & 20");
}
else{
    console.log("No , the age is not between 10 & 20");
}