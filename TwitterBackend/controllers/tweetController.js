import express from "express";
import {Tweet} from "../modules/tweetschema.js";

export const createTweet = async (req,res ) =>{
    try{
        const {description, id} = req.body
        if(!description || !id){
            return res.status(401).json({
                message:"please provide description",
                success:false
            })
        }
        await Tweet.create({
            description,
            userId:id
        });
        return res.status(201).json({
            message:"Tweeted successfully",
            success:true
        })
    }catch(e){
        console.log(e)
    }
}