import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["farmer", "vendor", "admin"],
      default: "farmer",
    },
    approved: {
      type: Boolean,
      default: false, // vendors need admin approval
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
