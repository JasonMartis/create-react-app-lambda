import React from "react";
import StudentChart from "./SandraChart";
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
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sandra Serrano"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Sandra
            </p>
            <p>
              <span>Last name: </span> Serrano
            </p>
            <p>
              <span>Age: </span> 33
            </p>
            <p>
              <span>E-mail: </span> student08@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-53141972
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
