import React from "react";
import StudentChart from "./EvelynChart";
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
              src="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Evelyn Best"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Evelyn
            </p>
            <p>
              <span>Last name: </span> Best
            </p>
            <p>
              <span>Age: </span> 33
            </p>
            <p>
              <span>E-mail: </span> student01@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-12345678
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
