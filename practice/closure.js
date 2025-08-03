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

 function my() {
    let a = 1;

    return function your() {
      a++;
      return a;
    };
 }

 let our = my();
 console.log(our());
 console.log(our());

 function outside() {
  let B = 10;

  return function inside() {
    B++;
    return B ;
  }
 }
 let out = outside();
 console.log(out());