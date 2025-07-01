//The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(arr, fc) {
    let newarr=[]
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].category==fc){
            newarr.push(arr[index])
        }   
    }
    return newarr
}
let arr = [
{
    "name": "stylo heels",
    "category": "Platform heels",
    "Price": 1000
},
{
    "name": "genz heels",
    "category": "Pointed heels",
    "Price": 1500

},
{
    "name": "crazy stylo heels",
    "category": "Platform heels",
    "Price": 2000

}]
console.log(filterProducts(arr,"Platform heels"))