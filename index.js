import { connect } from "./config/index.js";
import { upload } from "./Services/Multer/config.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import mailRoutes from "./Routes/Mail.js";
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

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/user", userRoutes);
app.use("/pdf",pdfRoutes);
app.use("/send",mailRoutes);


app.post("/upload", upload.single("image"), (req, res) =>{
  console.log(req.body);
  console.log(req.file);
  res.send(" File successfully uploaded");
});


app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
