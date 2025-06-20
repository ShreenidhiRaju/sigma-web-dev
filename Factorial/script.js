//via reduce method
/*let n=prompt("Enter the number : ")
let arr=[]
for (let element = 1; element <=n; element++){
    arr.push(element);   
}
let red=(a,b)=>{
    return a*b
}
alert(`The factorial is : ${arr.reduce(red)}`)*/

//via normal for loop
let n=prompt("Enter the number : ")
let prod=1
for (let element = 2; element <=n; element++){
    prod*=element;  
}
alert(`The factorial is : ${prod}`)