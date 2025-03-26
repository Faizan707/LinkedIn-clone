import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    image:String,
    file:String,
    descriptioin:String,
    link:String,
})

const Posts = mongoose.model("posts",PostSchema)

export default Posts