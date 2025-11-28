import mongoose from "mongoose";
const Genschema=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})
export const gensch=mongoose.model("employees",Genschema)