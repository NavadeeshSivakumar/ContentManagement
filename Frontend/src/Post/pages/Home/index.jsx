import React, { useState, useEffect } from "react";
import axios from "axios";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch all blogs from the backend
  const fetchBlogs = () => {
    axios
      .get("http://localhost:8081/getposts")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const filteredBlogs = blogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey("");
    fetchBlogs(); // Fetch all blogs again to reset the list
  };

  return (
    <div>
      <Header />

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

// {/* Search Bar */}
// <SearchBar
//   value={searchKey}
//   clearSearch={handleClearSearch}
//   formSubmit={handleSearchBar}
//   handleSearchKey={(e) => setSearchKey(e.target.value)}
// />

// import React, { useState, useEffect } from "react";
// import EmptyList from "../../components/common/EmptyList";
// import BlogList from "../../components/Home/BlogList";
// import Header from "../../components/Home/Header";
// import SearchBar from "../../components/Home/SearchBar";
// import axios from "axios";

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [searchKey, setSearchKey] = useState("");

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = () => {
//     axios
//       .get("http://localhost:8080/getposts")
//       .then((response) => {
//         setBlogs(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//       });
//   };

//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };

//   const handleSearchResults = () => {
//     const filteredBlogs = blogs.filter((blog) =>
//       blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
//     );
//     setBlogs(filteredBlogs);
//   };

//   const handleClearSearch = () => {
//     setSearchKey("");
//     fetchBlogs(); // Fetch all blogs again to reset the list
//   };

//   return (
//     <div>
//       <Header />
//       <br/>
//       {/* Blog List & Empty View */}
//       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
//     </div>
//   );
// };

// export default Home;
