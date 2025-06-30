//The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let arr=["Harry","Hermonie","Ron","Draco","Neville"]
for(const name of arr){
    sort_house(name)
}
function sort_house(name){
    l=name.length
    if(l<6){
        console.log(name+": GRYFFINDOR !!!")
    }
    else if(l<8){
        console.log(name+": HUFFLEPUFF !!!")
    }
    else if(l<12){
        console.log(name+": RAVENCLAW !!!")
    }
    else if(l>=12){
        console.log(name+": SLYTHERIN !!!")
    }
}