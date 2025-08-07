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

 function outer() {
  let count = 0;

  return function inner() {
       count++;
    return count;   
  }
 }

 let newOuter = outer();
 console.log(newOuter());
 console.log(newOuter());

 function outSide() {
  let count= 1;

  return function inSide() {
    count++;
    return count;
  }
 }
 let newOutSide = outSide();
 console.log(newOutSide());

 function fact(n) {
    if (n === 0) return 1;
    else {
      return n * factorial(n - 1);
    }
 }
 console.log(fact(5));

 function fac(n) {
   if(n === 0) return 1;
   return n * factorial(n - 1);
 }
 console.log(fac(3));

 function fa(n) {
   let result = 1;

   for(let i=2; i<=n; i++){
     result *= i;  // (same as result = result * i)
   }
   return result;
 }
 console.log(fa(5));

 function factorial1(n) {
  let result = 1;

  for (let i = 2; i <= n; i++){
    result *= i;
  }
  return result;
 }
 console.log(factorial1(4));

 function factorial2(n) {
   let result = 1;

   for(let i = 2; i <= n; i++){
    result *= i;
   }
   return result;
 }
 console.log(factorial2(9));

 function factorial3(n) {
  let result = 1;
  for(let i=2; i<=n; i++){
    result *= i;
  }
  return result;
 }
 console.log(factorial(10));

 function outer() {
  let count = 1;

  return function inner(){
    count++;
    return count;
  }
 }
 let numCount = outer();
 console.log(numCount());
 console.log(numCount());

 function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  }
 }
 let newCount = outer();
 console.log(newCount());

 