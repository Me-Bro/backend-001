import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
//import { fileURLToPath } from "url";
//import path from "path";

import userRoutes from "./Routes/User.js";
import pdfRoutes from "./Routes/Pdf.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" with { type: "json" };

/*    Configuration    */
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.set("view engine","ejs");
app.get("/upload",(req,res)=>{
  res.render("upload");
});

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//app.use("/assets", express.static(path.join(__dirname, "public/assets")));


/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/user", userRoutes);
app.use("/pdf",pdfRoutes);


app.post("/upload", upload.single("image"), (req, res) =>{
  console.log(req.body);
  console.log(req.file);
  res.send("Uploaded");
});

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
