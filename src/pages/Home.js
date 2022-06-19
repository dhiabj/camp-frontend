import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";

const Home = () => {
  const [id, setId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      //console.log(token);
      axios
        .get(`http://localhost:8000/api/users/userconnected`, {
          headers: { authorization: token },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.user) {
            setUsername(res.data.user.username);
            setEmail(res.data.user.email);
            setId(res.data.user._id);
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 center-col">
            <CreatePost userId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
