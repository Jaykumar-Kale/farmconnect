import User from "../models/User.js";

export const getAllVendors = async (req, res) => {
  const vendors = await User.find({ role: "vendor" });
  res.json(vendors);
};

export const approveVendor = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ message: "Vendor approved successfully" });
};
