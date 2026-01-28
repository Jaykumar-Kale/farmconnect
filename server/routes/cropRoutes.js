import express from "express";
import {
  addCropPrice,
  getCropPrices,
  getMyCrops,
} from "../controllers/cropController.js";
import { protect, isVendor } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCropPrices);
router.post("/add", protect, isVendor, addCropPrice);
router.get("/my", protect, isVendor, getMyCrops);

export default router;
