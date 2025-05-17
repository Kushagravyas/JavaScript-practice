try {
    console("Hello Kushagra")
}
catch (err) {
    console.log("Plz,check your code", err.message)

}
finally {
    console.log("Hello Vyas")
}

// err:{
//     message: "console is not defined",
// }

function dividenumbers(a, b){
    try {
        if (b === 0) {
            throw new Error("you can not divide by zero")
        }
        let result = a/b;
        console.log("Result", result);
    } catch(error) {
           console.log(error.message)
    } finally {
        console.log("Division has been executed")
    }
}

dividenumbers(6,2);
dividenumbers(3,0);