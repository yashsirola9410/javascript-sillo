 //REDUCE 
//IN REDUCE  WE USE GENERALLY IN CALCULATION (sHOPPING)
// IT HAS ONE "accumulator"  and " current value"

// What is reduce?
// reduce is a powerful method in JavaScript used to combine all elements in an array into a single value. Think of it as folding or accumulating the array into one result.

// Why Use reduce?
// Summing Up Values: Add all numbers in an array.
// Finding Products: Multiply all numbers together.
// Building Objects or Arrays: Create a new structure from the array elements.
// Counting Instances: Count how many times something appears in the array.


const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc , currentvalue){
    console.log(`acc : ${acc} and currentvalue : ${currentvalue}`);
    return acc + currentvalue
},0) 

const myTot = myNums.reduce((acc , curr) => acc+curr , 0 );

console.log(myTot);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0 )

console.log(priceToPay);
