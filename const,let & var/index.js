console.log("JavaScript Tutorail 3: var, let & const")
var a = 45;
let b = "SAM";
// let b = 4; //error
b = 4;
var a = 69; //var allows re-declaration of variables
let c = null;
let d = undefined;
const author = "Samarth Chawla"; //Const can neither be updated nor be re-declare
author = 5; //shows an error...As Const can not be updated
// const harry; //Do not work as it is not initialised

//Note: 'var' use karne ki jyada zarurat nahi hain.....let aur const ko jayda use karna hain, jismein se bhi const jyada tar variables ko de diya jata hain

{
    let b = "DEV";
    console.log(b);
}
console.log(b);

