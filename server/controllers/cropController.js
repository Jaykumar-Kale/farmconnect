import CropPrice from "../models/CropPrice.js";

/* ========== VENDOR ADDS CROP PRICE ========== */
export const addCropPrice = async (req, res) => {
  try {
    const { cropName, pricePerQuintal, quantity, location } = req.body;

    const crop = await CropPrice.create({
      vendor: req.user.id,
      cropName,
      pricePerQuintal,
      quantity,
      location,
    });

    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ========== FARMER GETS ALL PRICES ========== */
export const getCropPrices = async (req, res) => {
  try {
    const crops = await CropPrice.find().populate("vendor", "name phone");
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
