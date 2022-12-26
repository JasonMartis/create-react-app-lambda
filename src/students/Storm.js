import React from "react";
import StudentChart from "./StormChart";
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
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Storm Steel"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Storm
            </p>
            <p>
              <span>Last name: </span> Steel
            </p>
            <p>
              <span>Age: </span> 29
            </p>
            <p>
              <span>E-mail: </span> student10@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-64137946
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
