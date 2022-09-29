import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
  const { title, description } = blog;
  return (
    <div>
      <div className="blog">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
