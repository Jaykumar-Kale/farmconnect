import User from "../models/User.js";

/* ================= GET ALL VENDORS ================= */
export const getVendors = async (req, res) => {
  const vendors = await User.find({ role: "vendor" }).select("-password");
  res.json(vendors);
};

/* ================= APPROVE VENDOR ================= */
export const approveVendor = async (req, res) => {
  const { vendorId } = req.params;

  const vendor = await User.findById(vendorId);
  if (!vendor || vendor.role !== "vendor") {
    return res.status(404).json({ message: "Vendor not found" });
  }

  vendor.approved = true;
  await vendor.save();

  res.json({ message: "Vendor approved successfully" });
};
