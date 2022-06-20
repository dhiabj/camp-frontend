import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import logo from "../assets/camp-logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };
    //console.log(user);
    axios
      .post(`http://localhost:8000/api/users/register`, { ...user })
      .then((res) => {
        console.log(res);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          toast.success("Account created successfully!");
          navigate("/login");
        }
      });
  };
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-6 center-col">
          <div className="card register-card">
            <div className="card-body">
              <img
                src={logo}
                alt="camp-logo"
                className="img-fluid register-img"
              />
              <form className="container-fluid" onSubmit={registerUser}>
                <div className="mb-3">
                  <label htmlFor="exampleInputUsername" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
