const prompt = require("prompt-sync")();

let n = prompt("Enter the value of n > ");

n = Number.parseInt(n);

let i = 10;

do{
    console.log("i = ", i);
    i++;
}while(i<n)