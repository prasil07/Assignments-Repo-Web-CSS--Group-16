import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";
import cors from "cors";
import path from "path";

// Routes
import authRoutes from "./routes/authRoutes";
import eventRoutes from "./routes/eventRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI!;
const SESSION_SECRET = process.env.SESSION_SECRET!;

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Middlewares
app.use(cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_URI }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "../")));

app.use(/* "/*", */ (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../index.html"));
});


// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
