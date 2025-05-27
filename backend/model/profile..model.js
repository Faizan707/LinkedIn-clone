import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  experience: [
    {
      title: String,
      company: String,
      location: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String,
    },
  ],
  education: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String,
    },
  ],
  skills: [String],
  social: {
    linkedin: String,
    github: String,
    twitter: String,
    facebook: String,
    instagram: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
