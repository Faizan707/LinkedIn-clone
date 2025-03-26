import express from "express"
const app = express();
import dotenv from "dotenv"
import {DbConnection} from "./config/db"
import UserRoutes from "./routes/user.routes"
import cors from "cors"

dotenv.config()
// Middleware
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT
DbConnection()
app.use("/api",UserRoutes)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
