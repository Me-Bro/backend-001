import express from "express";
import { login, register } from "../Conlrollers/User.js";
import { verifyToken } from "../Middlewares/Auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
export default router;
