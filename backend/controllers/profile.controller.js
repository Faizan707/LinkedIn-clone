import Profile from '../model/profile.model.js';
import cloudinary from '../config/cloudinary.js';

export const createProfile = async (req, res) => {
  try {
    const {
      userId,
      coverImage,
      bio,
      location,
      website,
      experience,
      education,
      skills,
      social,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    const uploadedImage = await cloudinary.uploader.upload(coverImage, {
      folder: 'faizan',
    });

    const profile = new Profile({
      user: userId,
      coverImage: uploadedImage.secure_url,
      bio,
      location,
      website,
      experience,
      education,
      skills,
      social,
    });

    await profile.save();

    res.status(201).json({
      message: 'Profile created successfully',
      profile,
    });
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required in params' });
    }

    const profile = await Profile.findOne({ user: userId }).populate('user');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
