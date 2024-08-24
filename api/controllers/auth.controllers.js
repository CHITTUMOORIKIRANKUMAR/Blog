import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'


export const signup = async (req, res)=>{
    const {username, email, password} =req.body;
    if(!username || !email || !password || username === '' || email ==='' || password === ''){
        return res.status(400).json({message:'All feilds are required'});
    }
    const hasedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password :hasedPassword,
    });
    try{
    await newUser.save();
    res.json('SignUp successful!!')

    } catch(err){
        res.status(500).json({
            message:err.message
        })

    }
    

}