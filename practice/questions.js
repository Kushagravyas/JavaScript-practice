
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
console.log(reversed); // "olleh"

let str2 = "hello";
let reversed1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // "olleh"

