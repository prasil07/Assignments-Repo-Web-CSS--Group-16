import { Request, Response } from "express";
import Event from "../models/Event";

export async function getEvents(req: Request, res: Response) {
    const events = await Event.find();
    res.json(events);
}

export async function getEventById(req: Request, res: Response) {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
}

export async function createEvent(req: Request, res: Response) {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
}

export async function updateEvent(req: Request, res: Response) {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
}

export async function deleteEvent(req: Request, res: Response) {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Event deleted" });
}
