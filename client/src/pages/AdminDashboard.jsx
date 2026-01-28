import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

export default function AdminDashboard() {
  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    const res = await api.get("/admin/vendors");
    setVendors(res.data);
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const approveVendor = async (id) => {
    await api.put(`/admin/approve/${id}`);
    fetchVendors();
  };

  const deleteVendor = async (id) => {
    if (confirm("हा व्यापारी हटवायचा आहे का?")) {
      await api.delete(`/admin/vendor/${id}`);
      fetchVendors();
    }
  };

  return (
    <>
      <Navbar titleKey="adminDashboard" />
      <div className="container">
        <h2>{t("vendors")}</h2>

        {vendors.length === 0 && (
          <p className="empty">{t("noData")}</p>
        )}

        {vendors.map((v) => (
          <div className="card" key={v._id}>
            <p>
              <strong>{v.name}</strong> <br />
              {v.email}
            </p>

            {!v.approved && (
              <button onClick={() => approveVendor(v._id)}>
                ✅ {t("approve")}
              </button>
            )}

            <button
              style={{ backgroundColor: "#dc3545", marginTop: "6px" }}
              onClick={() => deleteVendor(v._id)}
            >
              ❌ {t("deleteVendor")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
