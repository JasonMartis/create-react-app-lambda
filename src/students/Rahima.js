import React from "react";
import StudentChart from "./RahimaChart";
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
              src="https://images.pexels.com/photos/6084542/pexels-photo-6084542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Rahima Davila"
            ></img>
          </div>
          <div className="student-info">
            <p>
              <span>First name: </span> Rahima
            </p>
            <p>
              <span>Last name: </span> Davila
            </p>
            <p>
              <span>Age: </span> 30
            </p>
            <p>
              <span>E-mail: </span> student07@mail.nl
            </p>
            <p>
              <span>Phone: </span> 06-53448972
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
