import express from "express";
import { PDFController } from "../Conlrollers/PDFController.js";
const router = express.Router();
router.get("/invoice", PDFController);
export default router;
