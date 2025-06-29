
    let arr=["Initializing Hacking","Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to Server",
    "Cleaning up"]
    async function main(){
        for (const st of arr){
          await add(st)
    }
    }
    main()
function getRandomsec(){
    let sec = Math.ceil(1 + Math.random()* (7-1));
    return sec
}
async function add(stri){
    await prom()
    let div=document.createElement("div")
    div.innerHTML=stri
    document.body.append(div)
    await dots()
}
function prom(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },getRandomsec()*1000);
    })
}
function dots(){
    return new Promise((resolve, reject) => {
        let divarr = document.getElementsByTagName("div")
        let last = divarr[divarr.length - 1]
        let a = setInterval(() => {
            if (last.innerHTML.endsWith("...")) {
                last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
            } else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 500);
        setTimeout(() => {
            clearInterval(a)
            resolve()
        }, 4000);
    })
}
