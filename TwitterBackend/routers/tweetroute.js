import express from "express";
import {createTweet} from "../controllers/tweetController.js";
import {isAuth} from "../config/auth.js";



const router1 = express.Router();



router1.route("/createtweet").post(isAuth,createTweet);




export default router1;