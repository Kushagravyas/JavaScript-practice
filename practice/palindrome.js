// function isPalindrome(str) {
//   let rev = str.split('').reverse().join('');
//   return str === rev;
// }
// console.log(isPalindrome("madam")); 
 


// let str = "madam";
// let newStr = str.split('').reverse().join('');
//  if (str === newStr){
//     console.log("true");
//  }else{
//     console.log("false")
// };

// function isPalindrome(str) {
//     let rev = str.split('').reverse().join('');
//     return str === rev;
// }
// console.log(isPalindrome("huge"));

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); 

function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}
  console.log(fact(3));

function factorial1(n){
    if(n === 0) {return 1;}
    else{
        return n * factorial(n - 1);
    }
}
console.log(factorial1(4));

function fact1(n){
    if(n === 0) return 1;
    return n * fact1(n - 1);
}
 console.log(fact1(6));
 




 
