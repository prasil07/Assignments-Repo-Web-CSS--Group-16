/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

export async function register(req: Request, res: Response) {
    const { email, password, fullname } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashed, fullname });
        await user.save();
        res.status(201).json({ message: "User registered" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
    }
}

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        req.session.userId = user._id;
        res.json({ message: "Login successful" });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Login failed" });
    }
}

export function logout(req: Request, res: Response) {
    return new Promise((resolve) => {
        try {
            req.session.destroy(err => {
            if (err) {
                throw err;
            } else {
                res.clearCookie('connect.sid')
                res.redirect('/')
            }
            console.log('logged out');
            resolve(res.json({ message: "Logged out" }));
        });
    } catch (er) {
        console.error(er);
        resolve(res.json({ error: "Logged failed" }));
    }
})
}
