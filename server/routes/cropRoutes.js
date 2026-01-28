import express from "express";
import {
  addCropPrice,
  getCropPrices,
  getMyCrops,
  deleteMyCrop,
  updateMyCrop,
} from "../controllers/cropController.js";
import { protect, isVendor } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCropPrices); // farmer
router.post("/add", protect, isVendor, addCropPrice);
router.get("/my", protect, isVendor, getMyCrops);
router.delete("/my/:id", protect, isVendor, deleteMyCrop);
router.put("/my/:id", protect, isVendor, updateMyCrop);

export default router;
