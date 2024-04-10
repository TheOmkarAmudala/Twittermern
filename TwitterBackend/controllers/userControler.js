import {user} from "../modules/userschema.js";
import bcryptjs from "bcryptjs"
const Register = async (req,res) => {
    try {
        const {name, username, email, password} = req.body;
        if (!name || !username || !password || !email) {
            return res.status(401).json({
                message: "All flieds are required why soo",
                success: false

            })
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }


        const hashpassword = await bcryptjs.hash(password, 16);


            await user.create({
                name,
                username,
                password,
                email
            })
            return res.status(201).json({
                message: "Acoount creadited",
                success: true
            })
    } catch (e) {
        console.log(e.message);
    }

}





export default Register;