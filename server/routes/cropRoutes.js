import express from "express";
import { addCropPrice, getCropPrices } from "../controllers/cropController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addCropPrice);
router.get("/", getCropPrices);

export default router;
