import mongoose from "mongoose";
export const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("Connected to database ");
    } catch (e: any) {
        console.error("Database connection error ❌:", e.message || e);
    }
};
