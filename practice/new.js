// let str = "hello";
// let newStr = " ";
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
// }

// console.log(newStr);

// let str1 = "kushagra vyas";
// let newStr1 = "";
// for (let i = str1.length -1; i >= 0; i--) {
//     newStr1 += str1[i]
// } 
// console.log(newStr1);

// // let greet  = "Hello Kushagra Vyas";
// // let revGreet = greet.split(' ').reverse(' ').join(' ');
// // console.log(revGreet);

// let greet = "Hello Kushagra vyas";
// let revGreet = "";
// for (let i = greet.length-1; i >= 0; i--){
//     revGreet += greet[i]
// }
// console.log(revGreet)


// // palindrome
// function isPalindrome(str) {
//     let rev = str.split('').reverse().join('');
//     return str === rev;
// }
// console.log(isPalindrome("huge"));

let my = "madam";
let revMy = "";
for (let i = my.length-1; i >= 0; i--){
    revMy += my[i]
}

if(my === revMy){
    console.log(true)
} else{
    console.log(false)
}


function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); 

function factorial1 (n){
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial1(3));

function factorial5 (n){
    result = 1;
    for (let i = 2; i <= n; i++){
        result *= i; 
    }
    return result;
}
console.log(factorial5(5));

// isPrime

function isPrime(n) {
    if(n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
        else return true;
    }
}

console.log(isPrime(7))

function prime(n){
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false;   
    }
     return true;
} 
console.log(prime(15))

// odd or even

function checkEvenOrOdd(n){
    if(n % 2 === 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
checkEvenOrOdd(5);

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0 ){
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(27);

// function buzzFizz(n) {
//     for (let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 7 === 0){
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 7 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// buzzFizz(21);

function headTell(n) {
  const result = [];

  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
        result.push("headTell");
    } else if ( i % 3 === 0) {
        result.push("Head");
    } else if (i % 5 === 0){
        result.push("Tell");
    } else {
        result.push(i)
    }
  }
  return result;
}
console.log(headTell(15));

function factorialA(n) {
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorialA(2));

function factorialC(n) {
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = result * i;
    }
    return result;
}

console.log(factorialC(5));

// simple way of Factorial

function factorialB(n){
  if (n === 0 || n === 1) return 1;
else return (n * factorialB(n - 1));
}
 console.log(factorialB(3));

//  Sum of number in an array

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i <= arr.length-1; i++){
        sum += arr[i];
    }
    return sum;
}
let number = [1,2,3,4,5];
console.log(sumArray(number));

