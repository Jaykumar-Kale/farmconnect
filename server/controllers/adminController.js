import User from "../models/User.js";
import CropPrice from "../models/CropPrice.js";

export const getAllVendors = async (req, res) => {
  const vendors = await User.find({ role: "vendor" });
  res.json(vendors);
};

export const approveVendor = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ message: "Vendor approved" });
};

export const deleteVendor = async (req, res) => {
  const vendorId = req.params.id;

  await CropPrice.deleteMany({ vendor: vendorId });
  await User.findByIdAndDelete(vendorId);

  res.json({ message: "Vendor and crops deleted" });
};
