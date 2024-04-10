import express from "express"
import  dotenv from "dotenv";
import dataBaseConnection from "./config/database.js";
import cookieParser from  "cookie-parser"
import router from "./routers/usercreation.js"

dotenv.config({
    path:".env"
})



const app = express();

dataBaseConnection();



app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/user", router);






app.listen(3000, ()=> {
    console.log("The Server kingdom is ready to Thrive")

})