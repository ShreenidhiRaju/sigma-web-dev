import fs from "fs/promises"
import fsn from "fs"
import path from "path"
let ogpath="C:\\Users\\LENOVO\\OneDrive\\Attachments\\Sigma web dev\\sigma-web-dev\\Clear the clutter"
let files=await fs.readdir(ogpath)
files.forEach(element => {
    let arr=element.split('.')
    if(arr.length>1 && arr[arr.length-1]!="js" && arr[arr.length-1]!="json"){
        if(fsn.existsSync(path.join(ogpath,arr[arr.length-1]))){
            fs.rename(path.join(ogpath,element),path.join(ogpath,arr[arr.length-1],element))
        }
        else{
            fs.mkdir(arr[arr.length-1])
            fs.rename(path.join(ogpath,element),path.join(ogpath,arr[arr.length-1],element))
        }
    }
});
