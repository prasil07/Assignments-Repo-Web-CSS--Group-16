/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
import express from "express";
import { login, register, logout } from "../controllers/authController";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

export default router;
