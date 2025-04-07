// reduce 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal;
// }, 10);
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'shirt 1',
        price: 2499
    },
    {
        itemName: 'shirt 2',
        price: 2299
    },
    {
        itemName: 'pant 1',
        price: 1799
    },
    {
        itemName: 'pant 2',
        price: 3499
    },
    {
        itemName: 't-shirt 1',
        price: 1299
    },
]
const totalBill = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(totalBill);