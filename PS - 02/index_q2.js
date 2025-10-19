//Demonstrate the use of Switch Case Statements in JavaScript

const prompt = require("prompt-sync")(); //For prompt in Terminal

console.log("What is your age ?");
let age = prompt();

switch (age) {
  case '10':
    console.log("Your age is 10");
    break
  case '11':
    console.log("Your age is 11");
    break
  case '12':
    console.log("Your age is 12");
    break
  case '13':
    console.log("Your age is 13");
    break
  case '14':
    console.log("Your age is 14");
    break
  case '15':
    console.log("Your age is 15");
    break
  case '16':
    console.log("Your age is 16");
    break
  case '17':
    console.log("Your age is 17");
    break
  case '18':
    console.log("Your age is 18");
    break
  case '19':
    console.log("Your age is 19");
    break
  case '20':
    console.log("Your age is 20");
    break
  default:
    console.log("Your age is not special");
}
