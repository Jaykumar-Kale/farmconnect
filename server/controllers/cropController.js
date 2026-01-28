import CropPrice from "../models/CropPrice.js";

export const addCropPrice = async (req, res) => {
  const crop = await CropPrice.create({
    ...req.body,
    vendor: req.user._id,
  });
  res.json(crop);
};

export const getCropPrices = async (req, res) => {
  const crops = await CropPrice.find().populate("vendor", "name phone");
  res.json(crops);
};

export const getMyCrops = async (req, res) => {
  const crops = await CropPrice.find({ vendor: req.user._id });
  res.json(crops);
};
