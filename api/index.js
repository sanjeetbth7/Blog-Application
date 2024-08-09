import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
// Load environment variables from .env file
dotenv.config();
const __dirname = path.resolve();
const app = express();
app.use(cookieParser());

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
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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