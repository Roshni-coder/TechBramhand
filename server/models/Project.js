import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    target: { type: String, required: true },
    budget: { type: String, required: true },
    timeline: { type: String, required: true },

    name: { type: String, required: true },        // ✅ NEW
    phone: { type: String, required: true },       // ✅ NEW
    contactEmail: { type: String, required: true },

    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
