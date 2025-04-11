import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
    title: string;
    description: string;
    date: string;
    time: string;
    category: string;
    image?: string;
}

const EventSchema: Schema = new Schema<IEvent>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String }
});

export default mongoose.model<IEvent>("Event", EventSchema);
