import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

import { GiWheat } from "react-icons/gi";
import { FaRupeeSign, FaPlusCircle, FaEdit } from "react-icons/fa";
import { MdLocationOn, MdDelete, MdClose } from "react-icons/md";

export default function VendorDashboard() {
  const [form, setForm] = useState({
    cropName: "",
    pricePerQuintal: "",
    quantity: "",
    location: "",
  });

  const [crops, setCrops] = useState([]);
  const [message, setMessage] = useState("");

  // edit modal state
  const [editCrop, setEditCrop] = useState(null);

  const fetchMyCrops = async () => {
    const res = await api.get("/crops/my");
    setCrops(res.data);
  };

  useEffect(() => {
    fetchMyCrops();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const publishCrop = async () => {
    await api.post("/crops/add", form);
    setMessage("✔ " + t("publish"));
    setForm({
      cropName: "",
      pricePerQuintal: "",
      quantity: "",
      location: "",
    });
    fetchMyCrops();
  };

  const deleteCrop = async (id) => {
    if (confirm("हा दर हटवायचा आहे का?")) {
      await api.delete(`/crops/my/${id}`);
      fetchMyCrops();
    }
  };

  const updateCrop = async () => {
    await api.put(`/crops/my/${editCrop._id}`, editCrop);
    setEditCrop(null);
    fetchMyCrops();
  };

  return (
    <>
      <Navbar titleKey="vendorDashboard" />
      <div className="container">
        <h2>{t("addCrop")}</h2>

        {message && <p className="success">{message}</p>}

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

        <button onClick={publishCrop}>
          <FaPlusCircle /> {t("publish")}
        </button>

        <hr style={{ margin: "25px 0" }} />

        <h3>{t("myCrops")}</h3>

        {crops.length === 0 && (
          <p className="empty">{t("noCrops")}</p>
        )}

        {crops.map((c) => (
          <div className="card" key={c._id}>
            <p><GiWheat /> <strong>{t("crop")}:</strong> {c.cropName}</p>
            <p><FaRupeeSign /> <strong>{t("price")}:</strong> ₹{c.pricePerQuintal}</p>
            <p><strong>{t("quantity")}:</strong> {c.quantity}</p>
            <p><MdLocationOn /> <strong>{t("location")}:</strong> {c.location}</p>

            <div className="action-row">
              <button onClick={() => setEditCrop(c)}>
                <FaEdit /> Edit
              </button>

              <button
                style={{ backgroundColor: "#dc3545" }}
                onClick={() => deleteCrop(c._id)}
              >
                <MdDelete /> {t("delete")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== EDIT MODAL ===== */}
      {editCrop && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Edit Crop</h3>
              <button onClick={() => setEditCrop(null)}>
                <MdClose />
              </button>
            </div>

            <input
              value={editCrop.cropName}
              onChange={(e) =>
                setEditCrop({ ...editCrop, cropName: e.target.value })
              }
            />
            <input
              value={editCrop.pricePerQuintal}
              onChange={(e) =>
                setEditCrop({ ...editCrop, pricePerQuintal: e.target.value })
              }
            />
            <input
              value={editCrop.quantity}
              onChange={(e) =>
                setEditCrop({ ...editCrop, quantity: e.target.value })
              }
            />
            <input
              value={editCrop.location}
              onChange={(e) =>
                setEditCrop({ ...editCrop, location: e.target.value })
              }
            />

            <button onClick={updateCrop}>
              <FaEdit /> Update
            </button>
          </div>
        </div>
      )}
    </>
  );
}
