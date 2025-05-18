// Ternary operators are oneline if else statements
    // we can write twrnary operators like that (condition ?  valueIftrue : valueIffalse;)


    // Example

    let isHungry = true;

    let message = isHungry ? "yes I am " : "not right now";
    console.log(message);



    let isWaiting = false;

    let reply = isWaiting ? "Yes" : "No"
    console.log(reply);

    


    function greetUser(isLoggedIn) {
  return isLoggedIn ? "Welcome back!" : "Please log in";
}

console.log(greetUser(true));
// console.log(greetUser(false));
