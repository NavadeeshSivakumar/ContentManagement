import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import image1 from "./3230320.jpg";
import logo from "./Grifo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const user = useSelector((state) => state.user);
  const nav = useNavigate();

  const handleContent = () => {
    nav("/addpost");
  };

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <img
            src={logo}
            alt="LOGO"
            style={{ height: "80px", width: "80px" }}
          />
          <ul className="links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/home" style={{ color: "white" }}>
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Hi {user}</h1>
            <p>“Think about what the user is going to type”</p>
            <button onClick={handleContent}>Create</button>
          </div>
          <div className="image">
            <img
              src={image1}
              alt="Landing Page"
              style={{ height: "650px", width: "650px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
