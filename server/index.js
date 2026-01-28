import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.js";

dotenv.config();      // load .env variables
connectDB();          // connect MongoDB

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FarmConnect API is running 🚜");
});

app.get("/create-test-user", async (req, res) => {
  const user = await User.create({
    name: "Test Farmer",
    email: "test@farmconnect.com",
    password: "123456",
    role: "farmer",
  });

  res.json(user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
