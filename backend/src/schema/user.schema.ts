import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    user_id:String,
    avatar:String,
    email:String,
    full_name:String
})

const User = mongoose.model("User",UserSchema)

export default User