import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    Likes:{
        type:Array,
        default: []
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps:true});

export const Tweet = mongoose.model("Tweet", TweetSchema);

