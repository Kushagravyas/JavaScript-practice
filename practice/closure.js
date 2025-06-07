// function outer() {
//     let count = 1;

//     return function inner() {
//         count++;
//      return count;   
//     };
// }

// let counter = outer();
// console.log(counter());
// console.log(counter());

function outer() {
    let count = 0;

  return function inner() {
    count++;
    return count;
  };  
}
 let counter = outer();
 console.log(counter());

 function factorial(n) {
    if (n===0) return 1;
    return n * factorial (n - 1);
 }
 console.log(factorial(5));

 const user = {
    name: "Kushagra",
   greet() {
    console.log("Hi,I am " + this.name);
  }
 };
 user.greet();
