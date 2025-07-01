//The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Your "+type+" is ready for pickup !")
        }, 10000);
     })
}
let c=prompt("Enter what coffee do you want to order ?")
let p=brewCoffee(c)
p.then((a)=>{
    console.log(a)
})