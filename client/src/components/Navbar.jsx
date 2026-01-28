import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { t, toggleLang } from "../utils/useLang";

export default function Navbar({ titleKey }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1>{t(titleKey)}</h1>

      <div className="nav-actions">
        <button onClick={toggleLang}>🌐</button>
        <button onClick={logout}>
          <MdLogout /> Logout
        </button>
      </div>
    </div>
  );
}
