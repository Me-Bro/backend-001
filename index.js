import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

/*    Configuration    */
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

/* Mongoose settings */
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected to MongoDB");
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
