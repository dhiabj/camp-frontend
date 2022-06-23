import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Home = () => {
  const [id, setId] = useState("");
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
            setImgData(res.data.user.img);
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        });

      axios
        .get(`http://localhost:8000/api/posts`, {
          headers: { authorization: token },
        })
        .then((res) => {
          //console.log(res);
          //console.log(res.data);
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
  console.log(posts);
  return (
    <div>
      <Navbar imgData={imgData} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 center-col">
            <CreatePost setPosts={setPosts} userId={id} />
            {posts.map((post) => (
              <Posts key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
