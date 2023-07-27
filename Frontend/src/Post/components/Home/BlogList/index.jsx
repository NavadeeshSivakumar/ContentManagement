// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BlogItem from "./BlogItem";
// import "./styles.css";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/getposts")
//       .then((response) => {
//         setBlogs(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog list:", error);
//       });
//   }, []);

//   return (
//     <div className="blogList-wrap">
//       {blogs.map((blog) => (
//         <BlogItem key={blog.id} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default BlogList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios
      .get("http://localhost:8081/getposts")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog list:", error);
      });
  };

  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
