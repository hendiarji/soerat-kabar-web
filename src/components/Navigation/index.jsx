import { NavLink } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <div className="dateTime">
            <h4>Senin, 29 Januari 2052, 16:59 WIB</h4>
          </div>
          <div className="main-menu">
            <a href="#">Beranda</a>
            <a href="#">Kategori</a>
            <a href="#">Arsip Nasional</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
