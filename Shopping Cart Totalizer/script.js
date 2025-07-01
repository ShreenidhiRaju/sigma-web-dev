//The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(array){
    let total=0
    for (let index = 0; index < array.length; index++) {
        total=total+(array[index].price)*(array[index].qty)
    }
    return total
}
let pdtarray=[{
    "name":"bounty",
    "price":30,
    "qty":4
},
{
    "name":"diary milk",
    "price":5,
    "qty":60
}]
console.log("Total cost : "+calculateTotal(pdtarray))
