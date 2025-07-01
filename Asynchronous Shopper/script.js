//The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    let d=prompt("What do you want to order ?")
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("ORDER CONFIRMED ! ORDER : "+d)
        }, 5000);
    })
}
let p=placeOrder()
p.then((e)=>{
    console.log(e)
})