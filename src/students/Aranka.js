import React from "react";
import StudentChart from "./ArankaChart";
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
              src="https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Aranka Hughes"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Aranka
            </p>
            <p>
              <span>Last name: </span> Hughes
            </p>
            <p>
              <span>Age: </span> 28
            </p>
            <p>
              <span>E-mail: </span> student02@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-1345679
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
