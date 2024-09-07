import express from "express";
import { JsonToCsv } from "../Conlrollers/DataConversion.js";
const router = express.Router();
router.get("/data", JsonToCsv);
export default router;
