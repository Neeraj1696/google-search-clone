import React from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header_left">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="header_right">
          <p>Gmail</p>
          <p>Image</p>
          <AppsIcon className="header_right" />
          <AccountCircleIcon className="header_right" />
        </div>
      </div>
      <div className="header_body">
        <img
          className="Header_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt=" logo Image 404"
        />
      </div>
      <div className="search_box">
        <div className="search_extra">
          <SearchIcon />
          <input className="input_box" type="text" />
          <MicIcon />
        </div>
      </div>
      <button className="search_btn">Search</button>
    </div>
  );
}

export default Header;
