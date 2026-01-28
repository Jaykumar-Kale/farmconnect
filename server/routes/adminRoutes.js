import express from "express";
import {
  getAllVendors,
  approveVendor,
  deleteVendor,
} from "../controllers/adminController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/vendors", protect, isAdmin, getAllVendors);
router.put("/approve/:id", protect, isAdmin, approveVendor);
router.delete("/vendor/:id", protect, isAdmin, deleteVendor);

export default router;
