import { Link } from "react-router-dom";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" className="logo-img" />
        <span className="site-title">MonasterySphere</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
