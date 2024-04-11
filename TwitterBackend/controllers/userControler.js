import { user } from "../modules/userschema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !password || !email) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            });
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists.",
                success: false
            });
        }

        const hashpassword = await bcryptjs.hash(password, 16);
        console.log(hashpassword);

        await user.create({
            name,
            username,
            password: hashpassword,
            email
        });
        return res.status(201).json({
            message: `${hashpassword}.`,
            success: true,

        });
    } catch (e) {
        console.log(e.message);
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            });
        }
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({
                message: "User doesn't exist.",
                success: false
            });
        }
        const isMatch = await bcryptjs.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password.",
                success: false
            });
        }
        const tokendata = {
            userId: existingUser._id
        };
        const token = await jwt.sign(tokendata, process.env.TOKEN_KEY, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome back ${existingUser.name}`,
            success: true
        });
    } catch (e) {
        console.log(e);
    }
};

export const Logout = async (req,res) => {
    return res.cookie("token","",{httpOnly: true}).json({
        message: "logout successful",
        success:true
    })
}

