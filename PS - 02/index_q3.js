//Write a JS program to find whether a number is divisible by 2 & 3

const prompt = require("prompt-sync")(); //For prompt in Terminal

console.log("Enter a number");
let num = prompt();
num = Number.parseInt(num);

if(num%2 == 0 && num%3 == 0){
    console.log("Your Number is divisible by 2 & 3");
}
else{
    console.log("Your Number is not divisible by 2 & 3");
}