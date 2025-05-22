function max (arr) {
  return Math.max(...arr);
}
console.log(max([1,2,4,7,9]));


function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([2,5,7,8,]));

function maximum(arr) {
    return Math.min(...arr);
}
console.log(maximum([2,3,4,5,]));

// function isPrime(n) {
//   if (n <= 1) return false;
//   for(let i = 2; i <= Math.sqrt(n); i++){
//     if (n % i === 0) return false;
//   } return true;
// }
// console.log(isPrime(11));

function isPrime(n) {
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false;
    } return true;
}   console.log(isPrime(7));

function duplicate(arr) {
    return[...new Set(arr)];
}
console.log(duplicate([1,1,2,2,3,3]));

function dup(arr) {
    return [...new Set(arr)];
}
console.log(dup([4,4,5,5,6,6]));

let A = [1,2,3,4,4,5,5];
let B = [...new Set(A)];
console.log(B);

const bill = [100, 200, 300, 400]
const totalBill = bill.reduce( (acc , currentValue) => { 
    // console.log("acc",acc);
    // console.log("cu",currentValue);
    return acc + currentValue}, 4)
console.log(totalBill);

function sumArray(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4])); 


function array (arr) {
    return arr.reduce((acc, value) => acc + value, 0);
}
console.log (array([1,2,3,4,5]));

let a = [10,2,4,5];
let b = a.reduce((sum, numbers) => sum + numbers,0);
console.log(b);
