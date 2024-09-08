import express from "express";
import { CsvToJson, JsonToCsv } from "../Conlrollers/DataConversion.js";
const router = express.Router();
router.get("/jsontocsv", JsonToCsv);
router.post("/csvtojson", CsvToJson);
export default router;
