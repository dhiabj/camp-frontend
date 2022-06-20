import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/user.png";
import "../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="camp-logo" width="50" height="50" />
        </Link>
        <div className="ms-auto">
          <button type="button" className="btn btn-danger" onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
