import mongoose, { Schema } from "mongoose";
const CompanySchema = new Schema({
    company_name:String,
    avatar:String,
    location:String,
    jobs:{type:Schema.Types.ObjectId,ref:"Jobs"}
})

const Company = mongoose.model("Company",CompanySchema)
export default Company