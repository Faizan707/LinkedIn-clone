import User from '../model/user.model.js';
import generateToken from '../utils/jwt.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: 'User already exists' });

    const user = await User.create({ name, email, password });


    user.password = undefined;

    res.status(201).json({  message:"user created successfully" },user); 
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user)
      return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ msg: 'Invalid credentials' });

    const token = generateToken(user);

    user.password = undefined;

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const googleAuthCallback = async (req, res) => {
  const user = req.user;
  const token = generateToken(user);
  res.redirect(`${process.env.CLIENT_URL}/google/success?token=${token}`);
};
