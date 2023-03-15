import mongoose from "mongoose";
const WasteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "a waste with a similar name exists"],
      maxlength: 100,
      required: [true, "please provide waste name"],
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      required: true,
      enum: ["working", "not working", "spoilt", "re-usable"],
      default: "spoilt",
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
    disposalStatus: {
      type: String,
      // required: true,
      default: "disposed",
      enum: ["disposed", "pending"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: [true, "please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Waste", WasteSchema);
