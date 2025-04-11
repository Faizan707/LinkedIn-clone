import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  useId: { type: String, required: true, unique: true }, 
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  profileImage: { type: String }, 
  headline: { type: String, default: '' }, 
  bio: { type: String, default: '' },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  createdAt: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users",UserSchema)
export default Users