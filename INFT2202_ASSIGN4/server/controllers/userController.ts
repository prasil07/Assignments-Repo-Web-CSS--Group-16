/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
import { Request, Response } from "express";
import User from "../models/User";

export async function getUserProfile(req: Request, res: Response) {
    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ email: user.email });
}

export async function updateUserProfile(req: Request, res: Response) {
    const user = await User.findByIdAndUpdate(req.session.userId, req.body, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
    const user = await User.findByIdAndDelete(req.session.userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.session.destroy(() => {
        res.json({ message: "User deleted" });
    });
}
