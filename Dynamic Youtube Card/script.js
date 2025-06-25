function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let v
    document.querySelector(".title").innerHTML=`<b>${title}</b>`
    document.querySelector(".channelname").innerHTML=`<b>${cName}</b>`
    document.querySelector(".uploadtime").innerHTML=`<b>. ${monthsOld} months ago</b>`
    if(views<1000){
        v=views
    }
    else if(views>1000000){
        v=views/1000000+"M"
    }
    else{
        v=views/1000+"K"
    }

    document.querySelector(".views").innerHTML=` <b>. ${v} views</b>`
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")