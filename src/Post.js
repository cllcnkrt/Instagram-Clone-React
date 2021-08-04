import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  return (
    <div className="post">
        <div className="post__header">

        </div>
      <Avatar
        clasname="post__avatar"
        alt="Remy Sharp" src="/static/images/avatar/1.jpg"
      />
      <h3>Username</h3>
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/pexels-stephane-hurbe-4198029.jpg"
        alt=""
      />

      <h4 className="post__text">
        <strong>Username:</strong> Wow this is awesome
      </h4>
    </div>
  );
}

export default Post;
