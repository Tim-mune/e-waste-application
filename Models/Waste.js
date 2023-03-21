import mongoose from "mongoose";
const WasteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 100,
      required: [true, "please provide waste name"],
    },
    type: {
      type: String,
      required: [true, "please provide waste type"],
      enum: ["Home-equipment", "Office-equipment", "other"],
      trim: true,
    },
    condition: {
      type: String,
      required: [true, "please provide waste condition"],
      enum: ["working", "spoilt"],
    },
    location: {
      type: String,
      // required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    weight: {
      type: Number,
      required: [true, "please Provide waste weight"],
    },
    disposalStatus: {
      type: String,
      // required: true,
      default: "disposed",
      enum: ["disposed", "pending"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Waste", WasteSchema);
