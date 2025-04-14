/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
import express from "express";
import {
    getUserProfile,
    updateUserProfile,
    deleteUser
} from "../controllers/userController";
import { ensureAuth } from "../middleware/auth";

const router = express.Router();

router.get("/me", ensureAuth, getUserProfile);
router.put("/me", ensureAuth, updateUserProfile);
router.delete("/me", ensureAuth, deleteUser);

export default router;
