import moment from "moment";
import React from "react";
import img from "../assets/camping.jpg";

const Posts = ({ post }) => {
  return (
    <div className="card mb-3 post-card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <legend>Available Network</legend>
        <p className="card-text">{post.availableNetwork}</p>
        <p className="card-text">
          <small className="text-muted">
            {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Posts;
