function eatdinner(callback) {
    console.log("Dinner is cooking");
    
    setTimeout(() => {
        console.log("Dinner is getting ready");
        callback();
    },3000)
}

function ready() {
    console.log("I'm eating dinner");
}

eatdinner(ready);




function travel(wait) {
    console.log("I have booked ticket")
    
    setTimeout(() => {
        console.log("I'm coming by bus")
        wait();
    }, 2000)
}

function reached() {
    console.log("I have reached")
}

travel(reached);

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log("I like", fruit);
});




