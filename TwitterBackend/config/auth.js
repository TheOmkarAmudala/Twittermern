import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config({
    path:"../config/.env"
})
export const isAuth = async (req,res,next) => {
    try{
        const token = req.cookies.token;

        console.log(token, "tokem is here");
        if(!token){
            return res.status(401).json({
                message:"user not authenticated why soo",
                success:false
            })
        }
        const decode = await jwt.verify(token,process.env.TOKEN_KEY);
            console.log(decode);
            req.user = decode.id
            next();
    }catch (e){
        console.log(e)
    }
}