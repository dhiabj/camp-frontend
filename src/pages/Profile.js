import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";

const Profile = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [imgData, setImgData] = useState("");
  const [posts, setPosts] = useState([]);
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
            setId(res.data.user._id);
            setUsername(res.data.user.username);
            setImgData(res.data.user.img);
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        });

      axios
        .get(`http://localhost:8000/api/posts/`, {
          params: { userId: id },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data) {
            setPosts(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, []);
  //console.log(id);
  return (
    <div>
      <img
        src={`data:image/png;base64,${imgData}`}
        className="user-profile pos"
        alt="pfp"
      />
    </div>
  );
};

export default Profile;
