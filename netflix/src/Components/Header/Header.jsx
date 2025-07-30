import React from "react";
import "./header.css";
import logo from "../../assets/images/Netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className="outer-container">
        <div className="header-container">
          <div className="header_left">
            <ul>
              <li>
                <img src={logo} width="100" />
              </li>
              <li>Home </li>
              <li>Tv shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My list</li>
              <li>Browse by language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
