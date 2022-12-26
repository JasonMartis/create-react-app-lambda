import React from "react";
import StudentChart from "./MauritsChart";
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
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Maurits Kade"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Maurits
            </p>
            <p>
              <span>Last name: </span> Kade
            </p>
            <p>
              <span>Age: </span> 24
            </p>
            <p>
              <span>E-mail: </span> student06@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-13448979
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
