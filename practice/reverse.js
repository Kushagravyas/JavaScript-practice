
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your name: ", function(name) {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

// Reverse a string

let str = "Hello";
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

let str1 = "hello";
let reversed = str.split("").reduce((rev, char) => char + rev, "");
console.log(reversed); 

let str2 = "hello";
let reversed1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed1 += str2[i];
}
console.log(reversed); 


// string reverse without using builtin methods

let str4 = "Hello Kushagra";
let reversed4= "";
for (let i = str4.length - 1; i >= 0; i--) {
    reversed += str4[i];
}
console.log(reversed);

// // using builtin method

let myStr = "Hello Kushagra";
let revStr = myStr.split("").reverse().join("");
console.log(revStr);

let my = "Hello Kushagra Vyas";
let newStr = "";

for(let i = my.length - 1; i >= 0; i--){
    newStr += my[i]; 
}console.log(newStr);

let greet = "Hello Kushagra Vyas";
let revGreet = greet.split(' ').reverse().join(' ');
console.log(revGreet);




