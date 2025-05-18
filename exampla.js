const cart = ["🍕 Pizza", "🥤 Soda", "🍔 Burger"];

cart.forEach(item => {
  console.log("You ordered:", item);
});


const prices = [100, 200, 300];

const discountedPrices = prices.map(price => price * 0.9); // 10% discount

console.log(discountedPrices);


const menu = [
  { name: "Burger", isVeg: false },
  { name: "Paneer Wrap", isVeg: true },
  { name: "Salad", isVeg: true }
];

const vegItems = menu.filter(item => item.isVeg);
console.log(vegItems);
