//Write a JS program to find whether a number is divisible by either 2 or 3

const prompt = require("prompt-sync")();

console.log("Enter a number");
let num = prompt();
num = Number.parseInt(num);

if(num%2==0 && num%3!=0){
    console.log("The number is divisible by 2");
}
else if(num%3==0 && num%2!=0){
    console.log("The number is divisible by 3");
}
else if(num%2 == 0 && num%3 == 0){
    console.log("Your Number is divisible by 2 & 3 both");
}