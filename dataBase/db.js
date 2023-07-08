import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config();

const userName = process.env.userName;
const passWord = process.env.passWord;
// console.log(userName); not showing correct one
 const Connection = ()=>{

    const MONGO_URL = `mongodb+srv://${passWord}:${passWord}@merntodo.17nbkao.mongodb.net/`;

    mongoose.connect(MONGO_URL,{useNewUrlParser:true})

    mongoose.connection.on('connected',()=>{
        console.log("successfully connected to mongo DB")
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("disconnected to mongo DB")
    })
    mongoose.connection.on('error',(error)=>{
        console.log("errorrrrrrrrrrrrrrrrrrr while connected to mongo DB",error.message)
    })
}

export default Connection;