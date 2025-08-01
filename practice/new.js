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