import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddPost.css";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [createdAt, setCreatedat] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const nav = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleNameChange = (e) => {
    setAuthorname(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubCategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleBodyChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDateChange = (e) => {
    setCreatedat(e.target.value);
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setCover(selectedImage);
  };
  const handleAvatarChange = (e) => {
    const selectedImage = e.target.files[0];
    setAvatar(selectedImage);
  };

  const handlePost = () => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Cover:", cover);
    console.log("Avatar:", avatar);
    nav("/home");
  };

  return (
    <div className="add-post">
      <h1>Write the Blog</h1>
      <div>
        <TextField
          label="Blog Title"
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{
            marginLeft: 1,
            width: 500,
          }}
        />
      </div>
      <div>
        <TextField
          label="Category"
          value={category}
          onChange={handleCategoryChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 500 }}
        />
      </div>
      <div>
        <TextField
          label="Sub Category"
          value={subcategory}
          onChange={handleSubCategoryChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 500 }}
        />
      </div>
      <div>
        <TextField
          label="Author name"
          value={authorname}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 500 }}
        />
      </div>
      <div>
        <TextField
          label="Create At"
          value={createdAt}
          onChange={handleDateChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 500 }}
        />
      </div>
      <div>
        <TextField
          label="Description"
          value={description}
          onChange={handleBodyChange}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={8}
          style={{ marginLeft: 1, width: 800 }}
        />
      </div>
      <div>
        <h2>Upload Image</h2>
        <center>
        <h4>Cover</h4>
        <TextField
        type="file"
          // label="Upload Image"
          onChange={handleImageChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 800, justifyItems: "center" }}
        />
        <h4>Avatar</h4>
        <TextField
          type="file"
          // label="Upload Image"
          onChange={handleAvatarChange}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ marginLeft: 1, width: 800, justifyItems: "center" }}
        />
        </center>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handlePost}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default AddPost;
