//The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str="shree"
console.log("Before reversal : "+str)
function reverse(){
    let revst=""
    for (let index = str.length-1; index >=0; index--) {
        revst= revst+str[index]; 
    }
    str=str+revst
}
reverse()
console.log("After reversal : "+str)