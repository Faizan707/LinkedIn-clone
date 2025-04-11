import { Request, Response } from "express";
import Users from "../schema/user.schema"; 

interface SaveUserRequestBody {
  user_id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
}

export const saveUserByClerkId = async (
  req: Request<{}, {}, SaveUserRequestBody>,
  res: Response
): Promise<void> => {
  const { user_id, email, firstName, lastName, profileImage } = req.body;

  if (!user_id || !email) {
    res.status(400).json({ message: "user_id and email are required" });
    return;
  }

  try {
    // Check if user already exists
    const existingUser = await Users.findOne({ user_id });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create new user
    const newUser = await Users.create({
      user_id,
      email,
      firstName: firstName || "", // Default to empty string if not provided
      lastName: lastName || "",
      profileImage: profileImage || "",
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default saveUserByClerkId;