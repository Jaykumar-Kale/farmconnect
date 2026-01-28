import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { t } from "../utils/useLang";

export default function AdminDashboard() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    api.get("/admin/vendors").then((res) => setVendors(res.data));
  }, []);

  const approveVendor = async (id) => {
    await api.put(`/admin/approve/${id}`);
    setVendors(vendors.map(v => v._id === id ? { ...v, approved: true } : v));
  };

  return (
    <>
      <Navbar titleKey="adminDashboard" />
      <div className="container">
        <h2>{t("vendorApproval")}</h2>

        {vendors.map((v) => (
          <div className="card" key={v._id}>
            <p><strong>{t("name")}:</strong> {v.name}</p>
            <p>
              <strong>{t("status")}:</strong>{" "}
              {v.approved ? t("approved") : t("pending")}
            </p>
            {!v.approved && (
              <button onClick={() => approveVendor(v._id)}>
                {t("approve")}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
