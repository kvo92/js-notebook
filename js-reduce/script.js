const items = [
  { name: "Rice", price: 5 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 100 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];
// group people by age
const result = items.reduce((groupedItems, item) => {
  const price = item.price;
  if (groupedItems[price] == null) groupedItems[price] = [];
  groupedItems[price].push(item);
  return groupedItems;
}, {});

console.table(result);

let totalPrice = 0;
items.forEach((item) => {
  totalPrice += item.price;
});
console.log("without reduce " + totalPrice);

// reduce to a single value
// each call return startingPoint
// (callback(startingPoint, item)=>{}, startingPointValue)
const totalPrice2 = items.reduce((total, item, index, array) => {
  total + item.price;
}, 0);
console.log("with reduce" + totalPrice2);
