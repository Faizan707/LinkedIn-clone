import express from "express";
import saveUserByClerkId  from "../controllers/User.controller";

const router = express.Router();

router.get("/users", saveUserByClerkId);

export default router;