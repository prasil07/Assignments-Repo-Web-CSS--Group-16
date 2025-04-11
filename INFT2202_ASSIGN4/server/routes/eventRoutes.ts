import express from "express";
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} from "../controllers/eventController";
import { ensureAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", ensureAuth, createEvent);
router.put("/:id", ensureAuth, updateEvent);
router.delete("/:id", ensureAuth, deleteEvent);

export default router;
