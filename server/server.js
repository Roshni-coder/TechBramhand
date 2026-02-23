import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// 1. Initialize dotenv FIRST
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// 2. Now import the rest of your app
import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();

app.listen(process.env.PORT || 2000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});