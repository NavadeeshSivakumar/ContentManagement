import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img
        className="blogItem-cover"
        src={`data:image/jpeg;base64,${cover}`}
        alt="cover"
      />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
        
        <div>
        <h6>{authorName}</h6>
        <p>{createdAt}</p>
        </div>
        </div>

        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
          </Link>
          </footer>
          </div>
          );
        };
        
        export default BlogItem;
        
        // <img
        //   className="author-avatar"
        //   src={`data:image/jpeg;base64,${authorAvatar}`}
        //   alt="avatar"
        // />