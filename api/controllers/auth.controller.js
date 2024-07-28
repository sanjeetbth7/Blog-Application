import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


const signup = async (req, res) => {
    const {username,email,password} = req.body;

    if(!username || !email || !password || username==='' || email==='' || password===''){
        return res.status(400).json({message : "All field required to be filled!.."})
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    })

    await newUser.save();
    res.status(200).json({message : "Signup successful!...."})
};

export default signup;