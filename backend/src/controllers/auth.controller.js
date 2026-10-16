import User from "../model/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


async function register(req, res) {
    const {username , email , password} = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({message : "All fields are required"});
    }

    try {

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message : "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const user = await User.create({username , email , password  : hashedPassword});

        const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET , {
            expiresIn : "1d"
        })
        return res.cookie("token" , token ).status(201).json({
            message : "User created successfully",
           
            user});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

async function login(req, res) {
    const {email , password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message : "All fields are required"});
    }

    try {

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message : "User does not exist"});
        }
        const match = await bcrypt.compare(password , user.password);
        if(!match) {
            return res.status(400).json({message : "Incorrect password"});
        }
        const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET , {
            expiresIn : "1d"
        })
        return res.cookie("token" , token ).status(201).json({
            message : "User login successfully",
           
            user});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

async function getUsers(req, res) {


    try {
       const user =  await User.find();

        return res.status(200).json({
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : "Eororr"
        })
    }
    
}
export default {register , login, getUsers}