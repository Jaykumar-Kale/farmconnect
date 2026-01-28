import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

export default function FarmerDashboard() {
  const [crops, setCrops] = useState([]);
  const [filters, setFilters] = useState({
    cropName: "",
    location: "",
  });

  const fetchCrops = async () => {
    const res = await api.get("/crops", { params: filters });
    setCrops(res.data);
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  return (
    <>
      <Navbar titleKey="farmerDashboard" />
      <div className="container">
        <h2>{t("search")}</h2>

        <input
          placeholder={t("crop")}
          value={filters.cropName}
          onChange={(e) =>
            setFilters({ ...filters, cropName: e.target.value })
          }
        />
        <input
          placeholder={t("location")}
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />

        <button onClick={fetchCrops}>{t("search")}</button>

        <h3 style={{ marginTop: "20px" }}>
          {t("addCrop").replace("Add", "Available")}
        </h3>

        {crops.length === 0 && (
          <p className="empty">{t("noData")}</p>
        )}

        {crops.map((c) => (
          <div className="card" key={c._id}>
            <p>
              <strong>{t("crop")}:</strong> {c.cropName}
            </p>
            <p>
              <strong>{t("price")}:</strong> ₹{c.pricePerQuintal}
            </p>
            <p>
              <strong>{t("location")}:</strong> {c.location}
            </p>
            <p>
              <strong>व्यापारी:</strong> {c.vendor?.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
