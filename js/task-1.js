// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));
const makeTransaction = (quantity, pricePerDroid) => {
  const totalPrice = quantity * pricePerDroid;
  return console.log(
    `You ordered ${quantity} droids worth ${totalPrice} credits!`
  );
};
makeTransaction(5, 300);
