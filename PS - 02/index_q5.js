//Print "You can Drive" or "You cannot Drive" based on the age being greater than 18 using ternary operator

const prompt = require("prompt-sync")();

console.log("Enter your age");
let age = prompt();
let a = age>=18?"You can Drive" : "You cannot Drive"
console.log(a);