import React from "react";
import StudentChart from "./MartinaChart";
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
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Martina Mata"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Martina
            </p>
            <p>
              <span>Last name: </span> Mata
            </p>
            <p>
              <span>Age: </span> 34
            </p>
            <p>
              <span>E-mail: </span> student05@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-12948979
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
