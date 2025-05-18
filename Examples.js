const cart = ["🍕 Pizza", "🥤 Soda", "🍔 Burger"];
// forEach didnot return aything
cart.forEach(item => {            
  console.log("You ordered:", item);
});


const prices = [100, 200, 300];       
// .map works on all iteams present in array
const discountedPrices = prices.map(price => price * 0.9);  

console.log(discountedPrices);


const menu = [
  { name: "Burger", isVeg: false },
  { name: "Paneer Wrap", isVeg: true },
  { name: "Salad", isVeg: true }
];

const vegItems = menu.filter(item => item.isVeg);
console.log(vegItems);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
const newNumbers = numbers.map( (num) => num + 10 )
console.log(newNumbers);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
const newNums = numbers
                 .map( (num) => num + 10)
                 .map( (num) => num * 2)
                .filter( (num) => num <= 30)
    console.log(newNumber);                        


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
const Numbers = myNumbers.map( (num) => {
    const addition = num + 10;
    const double = addition * 2;
     return double;
})
.filter( (num) => num >=35 )
console.log(newNumbers);

const bill = [100, 200, 300, 400]
const totalBill = bill.reduce( (acc , currentValue) => { 
    console.log("acc",acc);
    console.log("cu",currentValue);
    return acc + currentValue}, 4)
console.log(totalBill);