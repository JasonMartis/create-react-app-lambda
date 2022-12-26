import React from "react";
import { TbSearch, TbWorld } from "react-icons/tb";
import {
  MdOutlineDarkMode,
  MdOutlineFullscreenExit,
  MdOutlineNotificationsNone,
  MdChatBubbleOutline,
  MdList,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <TbSearch className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <TbWorld className="icon" /> English
          </div>
          <div className="item">
            <MdOutlineDarkMode className="icon" />
          </div>
          <div className="item">
            <MdOutlineFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdOutlineNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <MdList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/5749076/pexels-photo-5749076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
