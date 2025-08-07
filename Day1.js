const age = null

//console.log(typeof age);
//console.log(typeof(age));

//console.log(typeof 22);
let valueInNumber = Number(age);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);


//Next Topic

// console.log(1 + 2);
// console.log("1" + 2);
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");
// console.log(1 + "2" + "3");


console.log("2" == 2); // Here the answer is true because JS convert the string datatype in integer by itself.

console.log("2" === 2); // Here the ansewer is false because in this case we are using Strict Check
//  by using (===) so here we want the same data type because JS does not convert data type
//  by itself in Strict Check.


// # Data Type

//  1. Primitive Datatype => 7 datatypes : String, Number, Bigint, Boolean, Null, Undifined, Symbol.
    
//  2. Reference (Non primitive datatype) : Arrays, Objects, Functions.  

 const name = ["Kushagra", "Nidhi", "Vyas"]  // This is called Array

    let myObj = {
    name: "kushagra", 
    age: 22,                  // this is called object
 }


 const myfunction = function(a){
    console.log("kushagra vyas", a);
 }


 myfunction(1)
   
 
                
 



