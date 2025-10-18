//(Q1) Create a variable of type string & try to add a number to it

let a = "Sam";
let b = 69;

console.log(a+b);

//(A1) Sam69

console.log();


//(Q2) Use typeof operator to find the data type of the string used in previous question
console.log(typeof a);

console.log();


//(A2) String

//(Q3) Create a const obj in JS. Can you change it to hold a number later ?
const obj = {
    name: "SAM",
    age: 20,
    gender: "Male"
}

obj['Friend'] = "Dev"
console.log(obj);
//(A3) { name: 'SAM', age: 20, gender: 'Male', Friend: 'Dev' }

console.log();

//(Q4) Try to add a new key to the const obj in problem 3.
obj['name'] = "SRK"
obj['Friend'] = "Sallu Bhai"
console.log(obj);

//(A4) { name: 'SRK', age: 20, gender: 'Male', Friend: 'Sallu Bhai' }


console.log();

//(Q5) Write a JS Program to create a word meaning dictionary of Five words
const dict = {
    Absence : "A time when somebody is away from somewhere; the fact of being away from somewhere",
    Bare : "Without anything covering it or in it",
    Carousel : "A moving belt at an airport that carries luggage for passengers to collect",
    Define: "To say exactly what a word or idea means",
    Empathy: "The ability to imagine how another person is feeling and so understand their mood"
}

// console.log(dict);

/*

ANS :-

{
  Absence: 'a time when somebody is away from somewhere; the fact of being away from somewhere',
  Bare: 'without anything covering it or in it',
  Carousel: 'a moving belt at an airport that carries luggage for passengers to collect',
  Define: 'to say exactly what a word or idea means',
  Empathy: 'the ability to imagine how another person is feeling and so understand their mood'
}
*/

// console.log(dict.Absence);


//(ANS) => A time when somebody is away from somewhere; the fact of being away from somewhere


console.log(dict.Submit);

//(ANS) => undefined