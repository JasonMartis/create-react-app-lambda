import React from "react";
// import { DashboardIcon } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlinePersonOutline,
  MdBarChart,
  MdLogout,
} from "react-icons/md";
// import PersonIcon from "@mui/icons-material/Person";
// import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Jason Martis</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdDashboard className="icon" />
            <span>
              <Link to="/">Dashboard</Link>
            </span>
          </li>
          <p className="title">STUDENTS</p>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Evelyn">Evelyn Best</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Aranka">Aranka Hughes</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Floris">Floris Flores</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Hector">Hector Huynh</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Martina">Martina Mata</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Maurits">Maurits Kade</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Rahima">Rahima Davila</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Sandra">Sandra Serrano</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Wietske">Wietske Stein</Link>
            </span>
          </li>
          <li>
            <MdOutlinePersonOutline className="icon" />
            <span>
              <Link to="/students/Storm">Storm Steel</Link>
            </span>
          </li>
          <p className="title">CHARTS</p>
          <li>
            <MdBarChart className="icon" />
            <span>Bar Chart</span>
          </li>
          <li>
            <MdBarChart className="icon" />
            <span>Avg Chart</span>
          </li>
          <li>
            <MdLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
