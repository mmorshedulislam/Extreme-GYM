import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blogs-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
