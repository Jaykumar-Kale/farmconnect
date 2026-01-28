import { useNavigate } from "react-router-dom";
import { getLang, setLang, t } from "../utils/useLang";

export default function Navbar({ titleKey }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const currentLang = getLang();

  const toggleLanguage = () => {
    setLang(currentLang === "en" ? "mr" : "en");
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <strong>{t(titleKey)}</strong>
        {name && (
          <div style={{ fontSize: "14px" }}>
            {t("welcome")}, {name}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={toggleLanguage}
          style={{ marginRight: "10px", padding: "6px 10px" }}
        >
          {currentLang === "en" ? "मराठी" : "English"}
        </button>

        {role && (
          <button onClick={handleLogout} style={{ padding: "6px 10px" }}>
            {t("logout")}
          </button>
        )}
      </div>
    </div>
  );
}
