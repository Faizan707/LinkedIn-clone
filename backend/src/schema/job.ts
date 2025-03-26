import mongoose, { Schema } from "mongoose"
const JobSchema = new Schema({
    title:String,
    description:String,
    experience:Number,
    
})

const Jobs = mongoose.model("Jobs",JobSchema)
export default Jobs