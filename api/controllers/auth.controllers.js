import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken';


export const signup = async (req, res,next)=>{
    const {username, email, password} =req.body;
    if(!username || !email || !password || username === '' || email ==='' || password === ''){
        next(errorHandler(400,'All fields are required'))
       // return res.status(400).json({message:'All feilds are required'});
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
        //Error handling via Middleware
        next(err)

    }
    

}

export const signin = async (req,res, next)=>{
    const {email, password} =req.body;
    if(!email ||!password || email===''||password===''){
        next(errorHandler(400,"All Fields are required"));
    }
        try{
            const validUser = await User.findOne({email});
            if(!validUser){
                return next(errorHandler(404,'User not found'));
            }
            const validPassword = bcryptjs.compareSync(password,validUser.password);
            if(!validPassword){
                return next(errorHandler(400,'Invalid password'))
            }
            const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET);
            //const {password:pass, ...res} =validUser._doc;
             res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(validUser);


        }catch(error){
            next(error)
        }
    }

