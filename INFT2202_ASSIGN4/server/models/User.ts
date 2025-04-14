/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    fullname: string;
    email: string;
    password: string; // hashed password
}

const UserSchema: Schema = new Schema<IUser>({
    fullname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model<IUser>("User", UserSchema);
