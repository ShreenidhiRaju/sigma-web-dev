import express from "express"
import mongoose from "mongoose"
import { gensch } from "./models/schema.js"
let conn=await mongoose.connect("mongodb://localhost:27017/company")
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = 3000

app.use(express.static('static files'))

app.get('/', (req, res) => {
  res.sendFile("static files/index.html",{root:__dirname})
})
  
const randomfun=(arr)=>{
  return (arr[Math.floor(Math.random()*arr.length)])
}
app.get('/generate', async(req, res) => {

  let namearr=["harry","jerry","berry","lorry"]
  let cityarr=["chennai","banglore","hyderabad","mumbai"]
  let langarr=["hindi","english","tamil","korean"]
  let boolarr=[true,false]


  await gensch.deleteMany({});
  
  for(let i=0;i<10;i++){
    const data=await new gensch({
    name:randomfun(namearr),
    salary:Math.floor(Math.random()*200000),
    language:randomfun(langarr),
    city:randomfun(cityarr),
    isManager:randomfun(boolarr)
  })
  console.log("hi")
  await data.save()
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
