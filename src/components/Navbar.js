import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ userconnected }) => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container">
        <Link to="/home">
          <button className="rounded-btn" type="button">
            <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <div className="ms-auto d-flex">
          <Link to={`/profile/${userconnected._id}`} className="navbar-brand">
            {userconnected.img && (
              <img
                src={`http://localhost:8000/uploads/${userconnected.img}`}
                className="pfp"
                alt="pfp"
              />
            )}
          </Link>
          <div className="dropdown">
            <button
              className="rounded-btn"
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
                <Link
                  to={`/profile/${userconnected._id}`}
                  className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="dropdown-item cursor" onClick={signOut}>
                  <i className="fa-solid fa-right-from-bracket me-2"></i>
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
