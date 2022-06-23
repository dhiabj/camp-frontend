import moment from "moment";
import React from "react";
import Slider from "react-slick";
import "../css/Posts.css";

const Posts = ({ post }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //console.log(post.img);
  return (
    <div className="card mb-4 post-card">
      <div className="card-body">
        <div className="mb-3">
          <img
            src={`data:image/png;base64,${post.userId?.img}`}
            className="user"
            alt="pfp"
          />
          <p className="fw-bold username">@{post.userId?.username}</p>
        </div>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <h5 className="card-title">Available Network</h5>
        <p className="card-text">{post.availableNetwork}</p>
        <p className="card-text">
          <small className="text-muted">
            {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </small>
        </p>
      </div>
      <Slider {...settings}>
        {post.img.map((el) => {
          return (
            <img
              src={`data:image/png;base64,${el}`}
              className="card-img-bottom"
              alt="..."
              key={el}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Posts;
