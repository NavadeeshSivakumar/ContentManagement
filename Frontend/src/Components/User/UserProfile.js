import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="content-profile-page">
      <div className="profile-user-page card">
        <div className="img-user-profile">
          <img
            className="profile-bgHome"
            src="src/Assets/user.jpg"
            alt="Profile Background"
          />
          <img className="avatar" src="src/Assets/user.jpg" alt="Name" />
        </div>
        <button>Follow</button>
        <div className="user-profile-data">
          <h1>Name</h1>
        </div>
        <div className="description-profile">
          Description I love to create small things for the internet!
        </div>
        <ul className="data-user">
          <li>
            <Link>
              <strong>3390</strong>
              <span>Posts</span>
            </Link>
          </li>
          <li>
            <Link>
              <strong>718</strong>
              <span>Followers</span>
            </Link>
          </li>
          <li>
            <Link>
              <strong>239</strong>
              <span>Following</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
