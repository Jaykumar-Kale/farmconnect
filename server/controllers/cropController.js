import CropPrice from "../models/CropPrice.js";

// Vendor: Add crop
export const addCropPrice = async (req, res) => {
  const crop = await CropPrice.create({
    ...req.body,
    vendor: req.user._id,
  });
  res.json(crop);
};

// Farmer: View all crops (with filters)
export const getCropPrices = async (req, res) => {
  const { cropName, location } = req.query;

  let query = {};
  if (cropName) query.cropName = cropName;
  if (location) query.location = location;

  const crops = await CropPrice.find(query).populate("vendor", "name phone");
  res.json(crops);
};

// Vendor: View own crops
export const getMyCrops = async (req, res) => {
  const crops = await CropPrice.find({ vendor: req.user._id });
  res.json(crops);
};

// Vendor: Delete own crop
export const deleteMyCrop = async (req, res) => {
  const crop = await CropPrice.findById(req.params.id);

  if (!crop) return res.status(404).json({ message: "Crop not found" });
  if (crop.vendor.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Unauthorized" });

  await crop.deleteOne();
  res.json({ message: "Crop deleted" });
};

// Vendor: Edit own crop
export const updateMyCrop = async (req, res) => {
  const crop = await CropPrice.findById(req.params.id);

  if (!crop) return res.status(404).json({ message: "Crop not found" });

  if (crop.vendor.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  Object.assign(crop, req.body);
  await crop.save();

  res.json({ message: "Crop updated successfully" });
};

