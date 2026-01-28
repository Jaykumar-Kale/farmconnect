import express from "express";
import {
  getVendors,
  approveVendor,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/vendors", protect, adminOnly, getVendors);
router.put("/approve/:vendorId", protect, adminOnly, approveVendor);

export default router;
