const original = {
  name: 'Kushagra',
  skills: {
    frontend: 'React',
    backend: 'Node.js'
  }
};

// Shallow copy using spread (...)
const shallowCopy = { ...original };

shallowCopy.name = 'Raaj';  // ✅ Changes only in copy
shallowCopy.skills.backend = 'Express';  // ❌ Affects original too

console.log(original.skills.backend);  // Output: 'Express'

const old = {
  name: 'Kushagra',
  skills: {
    frontend: 'React',
    backend: 'Node.js'
  }
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.skills.backend = 'Express';

console.log(original.skills.backend);  // Output: 'Node.js' ✅ original is safe


function oddEven(n) {
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}
oddEven(3);

function oddEven1(n) {
  let result;
  if (n % 2 === 0){
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
}
console.log(oddEven1(4));

function isPrime(n) {
   if(n <= 1) return false;

   for(let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0) return false;
   } return true;
}
console.log(isPrime(3));
console.log(isPrime(4));

function primeIs(n) {
  if(n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false;
  }
  return true;
}
console.log(primeIs(2));

function secondLargestNumber(arr){
  let max= -Infinity, second = -Infinity;

  for (let num of arr){
    if (num > max ){
      second = max;
      max = num;
    } else if (num > second && num !== max){
        second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondLargestNumber([2,3,4,5,6,7,8]));

function secondNum(arr){
  let max = -Infinity, second = -Infinity;
  for (let num of arr){
    if(num > max){
      second = max;
      max = num;
    } else if (num > second && num !== max){
        second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondNum([3,,7,10,44,35]));


function secondLargest(arr){
  let max = -Infinity, second = -Infinity;

  for (let num of arr){
    if(num > max ){
      second = max;
      max = num;
    } else if(num > second && num !== max){
       second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondLargest([3,5,6,7,9]));