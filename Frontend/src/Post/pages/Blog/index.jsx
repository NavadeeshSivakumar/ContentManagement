import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    axios
      .get(`http://localhost:8081/getpost/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };

  return (
    <div>
      <Link className="blog-goBack" to="/home">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1 style={{ fontFamily: "monospace", fontWeight: "1000px" }}>
              {blog.title}
            </h1>
            <center>
              <Chip label={blog.category} />
            </center>
          </header>
          <img
            className="blogItem-cover"
            src={`data:image/jpeg;base64,${blog.cover}`}
            alt="cover"
          />
          <p className="blog-desc">{blog.description}</p>
          <p className="blog-subCategory">{blog.authorname}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
