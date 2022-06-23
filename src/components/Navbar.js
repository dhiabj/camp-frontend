import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/camp-logo.png";

const Navbar = ({ imgData }) => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container">
        <Link to="/home">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="ms-auto spacing">
          <Link to="/profile" className="navbar-brand">
            <img
              src={`data:image/png;base64,${imgData}`}
              className="pfp"
              alt="pfp"
            />
          </Link>
          <div className="dropdown">
            <button
              className="dropdown-btn"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark dropdown-menu-md-end"
              aria-labelledby="dropdownMenuButton2">
              <li>
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="dropdown-item sign-out" onClick={signOut}>
                  <i className="fa-solid fa-right-from-bracket icon-right"></i>
                  Sign out
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
