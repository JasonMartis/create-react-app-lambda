import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <h1 className="featured-title">Course Rating</h1>
        <MdOutlineMoreVert fontSize="small" />
      </div>
      <div className="featured-bottom">
        <div className="featuredChart">
          <CircularProgressbar value={87} text={"87%"} strokeWidth={5} />
        </div>
        <p className="featured-chart-title">Course evaluation</p>
        <p className="featured-amount">420K reviews</p>
        <p className="featured-desc">
          Review means to go over a subject again as part of study or to look at
          something another time.
        </p>
        <div className="summary">
          <div className="summary-item">
            <div className="item-title">Target</div>
            <div className="item-result negative">
              <MdKeyboardArrowDown fontSize="small" />
              <div className="result-amount">12.4k</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <MdOutlineKeyboardArrowUp fontSize="small" />
              <div className="result-amount">1.3k</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <MdOutlineKeyboardArrowUp fontSize="small" />
              <div className="result-amount">3.7k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
