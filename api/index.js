import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 
//Connecting to DB
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("MongoDB is Connected")
    }).catch( err =>{
        console.log(err)
    })

    //Create Server
const app =express();

app.listen(3000, ()=>{
    console.log("Server Started");
});