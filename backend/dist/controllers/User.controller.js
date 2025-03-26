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
exports.getAllUsers = void 0;
const backend_1 = require("@clerk/backend");
const user_schema_1 = __importDefault(require("../schema/user.schema"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clerkClient = (0, backend_1.createClerkClient)({ secretKey: process.env.CLERK_SECRET_KEY });
    try {
        const { data } = yield clerkClient.users.getUserList();
        if (!Array.isArray(data)) {
            res.status(500).json({ message: "Invalid data format received" });
            return;
        }
        const savedUsers = [];
        for (const user of data) {
            const { id, firstName, lastName, emailAddresses, imageUrl } = user;
            const fullName = `${firstName || ""} ${lastName || ""}`.trim();
            const email = emailAddresses.length > 0 ? emailAddresses[0].emailAddress : "";
            const existingUser = yield user_schema_1.default.findOne({
                $or: [
                    { user_id: id },
                    { email: email }
                ]
            });
            if (existingUser) {
                existingUser.full_name = fullName;
                existingUser.avatar = imageUrl;
                yield existingUser.save();
                savedUsers.push(existingUser);
            }
            else {
                const newUser = yield user_schema_1.default.create({
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
    }
    catch (error) {
        console.error("Error processing users:", error);
        res.status(500).json({
            message: "Failed to process users",
            error: error instanceof Error ? error.message : error
        });
    }
});
exports.getAllUsers = getAllUsers;
