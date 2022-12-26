import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Widget from "./Widget";
import Featured from "./Featured";
import Chart from "./Chart";
import ChartAverage from "./ChartAverage";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="student" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <ChartAverage />
        </div>
        <div className="charts">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
