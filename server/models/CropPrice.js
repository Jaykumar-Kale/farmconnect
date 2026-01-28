import mongoose from "mongoose";

const cropPriceSchema = new mongoose.Schema(
  {
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cropName: String,
    pricePerQuintal: Number,
    quantity: Number,
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model("CropPrice", cropPriceSchema);
