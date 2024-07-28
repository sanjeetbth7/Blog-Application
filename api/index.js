import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

// Load environment variables from .env file
dotenv.config();
const app = express();

const PORT = 3000;

mongoose.connect(process.env.DBLINK)
.then(()=>{
    console.log("Database is connected")
}
).catch((err)=>{ console.log(err)})

app.use(express.json())
app.listen(PORT,()=>{
    console.log("App is running on port 3000....")
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})