import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
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
  }, []);
  return (
    <div>
      Home
      {/*console.log(id, username, email)*/}
    </div>
  );
};

export default Home;
