//The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let arr=[4,2,3,4,4,5,6,7]
console.log("before doubling : "+arr)
function double(arr){
    let i=0
    while(i<arr.length){
        next=arr[i+1]
        current=arr[i]
        if(current==next){
            arr[i]=arr[i]*2
            i=i+2
        }
        else{
            arr[i]=arr[i]*2
            i=i+1
        }
    }  
}
double(arr)
console.log("after doubling : "+arr)