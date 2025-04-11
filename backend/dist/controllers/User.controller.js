"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUserByClerkId = void 0;
const user_schema_1 = __importDefault(require("../schema/user.schema"));
const saveUserByClerkId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, email, firstName, lastName, profileImage } = req.body;
    if (!user_id || !email) {
        res.status(400).json({ message: "user_id and email are required" });
        return;
    }
    try {
        // Check if user already exists
        const existingUser = yield user_schema_1.default.findOne({ user_id });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        // Create new user
        const newUser = yield user_schema_1.default.create({
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
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.saveUserByClerkId = saveUserByClerkId;
exports.default = exports.saveUserByClerkId;
