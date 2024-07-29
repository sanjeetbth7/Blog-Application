import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res, next) => {
    const {username,email,password} = req.body;

    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400,"All field required to be filled!.."))
        return ;
    }

    try {
        const hashedPassword = bcryptjs.hashSync(password,10);

        const newUser = new User({
            username,
            email,
            password : hashedPassword
        })

        await newUser.save();
        res.status(200).json({message : "Signup successful!...."})
    } catch (error) {
        next(error)
    }
    
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    // console.log(email);
    
    if(!email ||!password || email==='' || password===''){
        return next(errorHandler(400,"All field required to be filled!.."))
    }
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,"User not found!.."))
            
        }
        const isMatch = bcryptjs.compareSync(password, validUser.password);
        if(!isMatch){
           return  next(errorHandler(401,"Wrong password!.."))
        }
        
        const token = jwt.sign({userId : validUser._id}, process.env.JWT_SECRET);

        const {password:pass, ...rest} = validUser._doc;
        res
        .status(200)
        .cookie('access_token',token,{ httpOnly: true})
        .json(rest);

    } catch (error) {
        next(error)
    }
}


export const google = async(req, res, next) => {
    const {email, name, googlePhotoUrl} = req.body;

    try {
       const user = await User.findOne({email})
       if(user){
        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET);
        const {password:pass,...rest} = user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly: true
        }).json(rest);
       }else{
        const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

        const hashedPassword = await bcryptjs.hash(generatePassword, 10);
        const newUser = new User({
            username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
            email,
            password: hashedPassword,
            profilePicture: googlePhotoUrl
        })
        await newUser.save();

        const token = jwt.sign({userId : newUser._id}, process.env.JWT_SECRET);
        const {password:pass, ...rest} = newUser._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly: true
        }).json(rest);
       }
    } catch (error) {
        next(error)
    }
}