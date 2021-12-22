import mongoose from "mongoose";

const { Schema } = mongoose;

const tabSchema = new Schema({}, { strict: false });

export const Tab = mongoose.model("Tab", tabSchema);
