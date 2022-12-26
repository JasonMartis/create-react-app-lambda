import React from "react";
import StudentChart from "./HectorChart";
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
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hector Huynh"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Hector
            </p>
            <p>
              <span>Last name: </span> Huynh
            </p>
            <p>
              <span>Age: </span> 28
            </p>
            <p>
              <span>E-mail: </span> student04@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-12948578
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
