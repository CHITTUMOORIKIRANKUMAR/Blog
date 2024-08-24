import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


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

//this is going to allow json as the input to the backend
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server Started");
});

app.use('/api/user',userRoutes);

app.use('/api/auth',authRoutes);

//Middleware
app.use((err, req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message|| 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
