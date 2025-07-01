//The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str="shrEenidhI"
let c=0
for (const i of str){
    if(i==="a" || i==="A" ||i==="e"||i==="E" ||i==="i"||i==="I" ||i==="o" ||i==="O" ||i==="u" ||i==="U"){
        c++
    }
}
console.log("The no. of vowels is : "+c)