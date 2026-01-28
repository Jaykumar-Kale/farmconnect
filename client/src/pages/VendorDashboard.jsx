import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

export default function VendorDashboard() {
  const [form, setForm] = useState({
    cropName: "",
    pricePerQuintal: "",
    quantity: "",
    location: "",
  });

  const [myCrops, setMyCrops] = useState([]);
  const [message, setMessage] = useState("");

  const fetchMyCrops = async () => {
    try {
      const res = await api.get("/crops/my");
      setMyCrops(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyCrops();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCrop = async () => {
    try {
      await api.post("/crops/add", form);

      setMessage("✔ " + t("publish"));

      setForm({
        cropName: "",
        pricePerQuintal: "",
        quantity: "",
        location: "",
      });

      fetchMyCrops();
    } catch (err) {
      alert("Error adding crop price");
    }
  };

  return (
    <>
      <Navbar titleKey="vendorDashboard" />
      <div className="container">
        <h2>{t("addCrop")}</h2>

        {message && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {message}
          </p>
        )}

        <input
          name="cropName"
          placeholder={t("crop")}
          value={form.cropName}
          onChange={handleChange}
        />
        <input
          name="pricePerQuintal"
          placeholder={t("price")}
          value={form.pricePerQuintal}
          onChange={handleChange}
        />
        <input
          name="quantity"
          placeholder={t("quantity")}
          value={form.quantity}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder={t("location")}
          value={form.location}
          onChange={handleChange}
        />

        <button onClick={addCrop}>{t("publish")}</button>

        <hr style={{ margin: "25px 0" }} />

        <h3>📋 माझे प्रकाशित दर</h3>

        {myCrops.length === 0 && (
          <p>अजून कोणतेही दर प्रकाशित केलेले नाहीत.</p>
        )}

        {myCrops.map((c) => (
          <div className="card" key={c._id}>
            <p><strong>{t("crop")}:</strong> {c.cropName}</p>
            <p><strong>{t("price")}:</strong> ₹{c.pricePerQuintal}</p>
            <p><strong>{t("quantity")}:</strong> {c.quantity}</p>
            <p><strong>{t("location")}:</strong> {c.location}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>
              स्थिती: प्रकाशित ✔
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
