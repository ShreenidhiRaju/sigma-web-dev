//Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function asyncarrmap(arr){
    let retarr = []
    for (const i of arr) {
        let p=new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i*2)
            }, 500);
        })
        retarr.push(p)
    }
    return retarr
}
async function main(){
    let ar = [2, 3, 4, 5, 6]
    let parr = await asyncarrmap(ar)
    let resparr=await Promise.all(parr)
    console.log(resparr)
}
main()

