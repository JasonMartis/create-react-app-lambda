import React from "react";
import StudentChart from "./FlorisChart";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Student = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />

        <div className="student-container">
          <div className="student-image">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Floris Flores"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Floris
            </p>
            <p>
              <span>Last name: </span> Flores
            </p>
            <p>
              <span>Age: </span> 23
            </p>
            <p>
              <span>E-mail: </span> student03@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-12248678
            </p>
          </div>
        </div>
        <div className="charts">
          <StudentChart />
        </div>
      </div>
    </div>
  );
};

export default Student;
