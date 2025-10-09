let age = prompt("Hey what is your age ?")
// console.log(typeof age)
age = Number.pagerseInt(age) //Converting a string into a number
console.log(typeof age);
if(age>0){
    alert("This is a valid age");
}
else if(age>=1 && age<13){
    alert("You are a Kid")
}
else if(age>=13 && age<18){
    alert("You are a Teenager")
}
else if(age>=18 && age<60){
    alert("You are an Adult")
}
else if(age>=60){
    alert("You are old")
}
else{
    alert("This is an invalid age");
}

console.log();

console.log("This age is ", (age<18 ? "not valid for driving" : "valid for driving"));
