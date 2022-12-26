import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// https://recharts.org/en-US/examples/SimpleBarChart

const data = [
  { name: "Aranka", course: "SCRUM", difficulty: "1", fun: "1" },
  { name: "Aranka", course: "W1D1-1", difficulty: "4", fun: "3" },
  { name: "Aranka", course: "W1D2-1", difficulty: "3", fun: "1" },
  { name: "Aranka", course: "W1D2-2", difficulty: "3", fun: "2" },
  { name: "Aranka", course: "W1D2-3", difficulty: "4", fun: "1" },
  { name: "Aranka", course: "W1D2-4", difficulty: "2", fun: "3" },
  { name: "Aranka", course: "W1D2-5", difficulty: "4", fun: "2" },
  { name: "Aranka", course: "W1D3-1", difficulty: "3", fun: "2" },
  { name: "Aranka", course: "W1D3-2", difficulty: "2", fun: "1" },
  { name: "Aranka", course: "W1D3-4", difficulty: "1", fun: "2" },
  { name: "Aranka", course: "W1D3-5", difficulty: "4", fun: "1" },
  {
    name: "Aranka",
    course: "W1D3P",
    difficulty: "2",
    fun: "3",
  },
  { name: "Aranka", course: "W1D4-1", difficulty: "3", fun: "2" },
  {
    name: "Aranka",
    course: "W1D4P",
    difficulty: "4",
    fun: "3",
  },
  {
    name: "Aranka",
    course: "W1D5P",
    difficulty: "4",
    fun: "1",
  },
  { name: "Aranka", course: "W2D1-1", difficulty: "2", fun: "4" },
  { name: "Aranka", course: "W2D1-2", difficulty: "4", fun: "4" },
  { name: "Aranka", course: "W2D2-1", difficulty: "3", fun: "4" },
  { name: "Aranka", course: "W2D2-2", difficulty: "3", fun: "4" },
  { name: "Aranka", course: "W2D2-3", difficulty: "1", fun: "4" },
  { name: "Aranka", course: "W2D3-1", difficulty: "4", fun: "3" },
  { name: "Aranka", course: "W2D3-2", difficulty: "4", fun: "1" },
  { name: "Aranka", course: "W2D3-3", difficulty: "1", fun: "1" },
  { name: "Aranka", course: "W2D4-1", difficulty: "1", fun: "4" },
  { name: "Aranka", course: "W2D4-2", difficulty: "2", fun: "3" },
  { name: "Aranka", course: "W2D4-3", difficulty: "2", fun: "3" },
  {
    name: "Aranka",
    course: "W2D5P",
    difficulty: "2",
    fun: "2",
  },
  { name: "Aranka", course: "W3D1-1", difficulty: "4", fun: "2" },
  { name: "Aranka", course: "W3D1-2", difficulty: "3", fun: "2" },
  { name: "Aranka", course: "W3D1-3", difficulty: "1", fun: "4" },
  { name: "Aranka", course: "W3D1-4", difficulty: "1", fun: "3" },
  { name: "Aranka", course: "W3D2-1", difficulty: "1", fun: "3" },
  { name: "Aranka", course: "W3D2-2", difficulty: "2", fun: "3" },
  { name: "Aranka", course: "W3D2-3", difficulty: "2", fun: "3" },
  { name: "Aranka", course: "W3D3-1", difficulty: "2", fun: "2" },
  { name: "Aranka", course: "W3D3-2", difficulty: "4", fun: "3" },
  { name: "Aranka", course: "W3D3-3", difficulty: "3", fun: "3" },
  { name: "Aranka", course: "W3D3-4", difficulty: "1", fun: "3" },
  { name: "Aranka", course: "W3D4-1", difficulty: "1", fun: "1" },
  { name: "Aranka", course: "W3D4-2", difficulty: "3", fun: "2" },
  {
    name: "Aranka",
    course: "W3D5P",
    difficulty: "1",
    fun: "1",
  },
  { name: "Aranka", course: "W4D2-1", difficulty: "2", fun: "1" },
  { name: "Aranka", course: "W4D2-2", difficulty: "3", fun: "2" },
  { name: "Aranka", course: "W4D2-3", difficulty: "2", fun: "2" },
  { name: "Aranka", course: "W4D2-4", difficulty: "3", fun: "4" },
  { name: "Aranka", course: "W4D3-1", difficulty: "2", fun: "1" },
  { name: "Aranka", course: "W4D3-2", difficulty: "4", fun: "4" },
  { name: "Aranka", course: "W4D3-3", difficulty: "3", fun: "1" },
  { name: "Aranka", course: "W4D3-4", difficulty: "3", fun: "1" },
  { name: "Aranka", course: "W4D3-5", difficulty: "4", fun: "3" },
  {
    name: "Aranka",
    course: "W4D3P",
    difficulty: "4",
    fun: "4",
  },
  { name: "Aranka", course: "W5D4-1", difficulty: "1", fun: "3" },
  {
    name: "Aranka",
    course: "W5D5P",
    difficulty: "3",
    fun: "2",
  },
  { name: "Aranka", course: "W6D1-1", difficulty: "1", fun: "1" },
  { name: "Aranka", course: "W6D2-1", difficulty: "2", fun: "2" },
  {
    name: "Aranka",
    course: "W6D2P",
    difficulty: "3",
    fun: "4",
  },
];

const EvelynChart = () => {
  return (
    <div className="chart">
      <div className="title">Aranka Hughes</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          style={{ strokeWidth: 2 }}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
          <ReferenceLine y={0} stroke="#000" />
          {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
          <Bar dataKey="difficulty" fill="#FF6384" />
          <Bar dataKey="fun" fill="#36A2EB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EvelynChart;
