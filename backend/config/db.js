import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    if (connection) {
      console.log('Successfully connected to database');
    }
  } catch (error) {
    console.log(`error connecting to database ${error}`);
  }
};
