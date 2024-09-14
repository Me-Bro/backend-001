import express from "express";
import { sendMail } from "../Conlrollers/Mail.js";
const router = express.Router();
router.get("/mail", sendMail);
export default router;
