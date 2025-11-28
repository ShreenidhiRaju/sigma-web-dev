let genbtn=document.getElementById("genbut")
genbtn.addEventListener("click",async()=>{
    let a=await fetch("/generate")
})