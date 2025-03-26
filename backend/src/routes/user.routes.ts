import express from "express";
import { getAllUsers } from "../controllers/User.controller";

const router = express.Router();

router.get("/users", getAllUsers);

export default router;