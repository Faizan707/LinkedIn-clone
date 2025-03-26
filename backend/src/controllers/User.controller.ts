import { Request, Response } from "express";
import { createClerkClient } from "@clerk/backend";
import User from "../schema/user.schema";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

    try {
        const { data } = await clerkClient.users.getUserList();

        if (!Array.isArray(data)) {
            res.status(500).json({ message: "Invalid data format received" });
            return;
        }

        const savedUsers = [];

        for (const user of data) {
            const { id, firstName, lastName, emailAddresses, imageUrl } = user;

            const fullName = `${firstName || ""} ${lastName || ""}`.trim();
            const email = emailAddresses.length > 0 ? emailAddresses[0].emailAddress : "";

            const existingUser = await User.findOne({
                $or: [
                    { user_id: id },
                    { email: email }
                ]
            });

            if (existingUser) {
                existingUser.full_name = fullName;
                existingUser.avatar = imageUrl;
                await existingUser.save();
                savedUsers.push(existingUser);
            } else {
                const newUser = await User.create({
                    user_id: id,
                    avatar: imageUrl,
                    email: email,
                    full_name: fullName
                });
                savedUsers.push(newUser);
            }
        }

        res.status(200).json({ 
            message: "Users processed successfully", 
            users: savedUsers 
        });
    } catch (error) {
        console.error("Error processing users:", error);
        res.status(500).json({ 
            message: "Failed to process users", 
            error: error instanceof Error ? error.message : error 
        });
    }
};