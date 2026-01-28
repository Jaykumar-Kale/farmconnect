import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

export default function FarmerDashboard() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    api.get("/crops").then((res) => setCrops(res.data));
  }, []);

  return (
    <>
      <Navbar titleKey="farmerDashboard" />
      <div className="container">
        <h2>{t("availableCrops")}</h2>

        {crops.map((c) => (
          <div className="card" key={c._id}>
            <p><strong>{t("crop")}:</strong> {c.cropName}</p>
            <p><strong>{t("price")}:</strong> ₹{c.pricePerQuintal}</p>
            <p><strong>{t("quantity")}:</strong> {c.quantity}</p>
            <p><strong>{t("location")}:</strong> {c.location}</p>
            <p><strong>{t("vendorName")}:</strong> {c.vendor.name}</p>
            <p><strong>{t("contact")}:</strong> {c.vendor.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}
