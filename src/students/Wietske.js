import React from "react";
import StudentChart from "./WietskeChart";
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
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Wietske Stein"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Wietske
            </p>
            <p>
              <span>Last name: </span> Stein
            </p>
            <p>
              <span>Age: </span> 26
            </p>
            <p>
              <span>E-mail: </span> student09@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-44119966
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
