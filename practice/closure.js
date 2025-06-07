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
 
