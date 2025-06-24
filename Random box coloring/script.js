// let boxes = document.getElementsByClassName("box") 

document.body.style.background="black"
function getRandomColor(){
    let g = Math.ceil(0 + Math.random()* (255-0));
    let b = Math.ceil(0 + Math.random()* (255-0));
    let r = Math.ceil(0 + Math.random()* (255-0));
    return `rgb(${r}, ${g}, ${b})`
}
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})