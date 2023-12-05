import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        },
        "contact": {
            type: Number,
            required: true
        },
        "message": {
            type: String,
            required: true
        }
    }
);

export default mongoose.model('Contact',schema);