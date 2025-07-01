//The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let i=0
let sum=0
let arr=[10,20,30,-40,50]
while(arr[i]>0){
    sum=sum+arr[i]
    i++
}
console.log("The sum is : "+sum)