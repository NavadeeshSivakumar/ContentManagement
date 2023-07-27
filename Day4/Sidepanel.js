import React, { useState } from "react";
import "./Sidepanel.css";
import { Link } from "react-router-dom";

const Sidepanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`side-panel ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={togglePanel}></button>
        <div className="panel-content">
          <div className="Links">
            <Link to="/home">Post</Link>
            <Link to="/user">Followers</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
