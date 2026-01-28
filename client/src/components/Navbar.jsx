import { useNavigate } from "react-router-dom";
import { t, setLang } from "../utils/useLang";

export default function Navbar({ titleKey }) {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h1>{t(titleKey)}</h1>

      <div className="lang-toggle">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("mr")}>मराठी</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
