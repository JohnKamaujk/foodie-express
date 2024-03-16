import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("Connected to database successfully");
});

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Hello there!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
