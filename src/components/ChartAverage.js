import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//   https://recharts.org/en-US/examples/HighlightAndZoomLineChart
const data = [
  { course: "SCRUM", difficulty: "1.9", fun: "2" },
  { course: "W1D1-1", difficulty: "3.1", fun: "3" },
  { course: "W1D2-1", difficulty: "2", fun: "3" },
  { course: "W1D2-2", difficulty: "1.6", fun: "2.7" },
  { course: "W1D2-3", difficulty: "1.9", fun: "2.5" },
  { course: "W1D2-4", difficulty: "2.6", fun: "2.4" },
  { course: "W1D2-5", difficulty: "2.7", fun: "3" },
  { course: "W1D3P", difficulty: "2.5", fun: "2.7" },
  { course: "W1D3-1", difficulty: "1.9", fun: "2.9" },
  { course: "W1D3-2", difficulty: "2.2", fun: "2.5" },
  { course: "W1D3-4", difficulty: "2.4", fun: "2" },
  { course: "W1D3-5", difficulty: "2.7", fun: "2.6" },
  { course: "W1D4P", difficulty: "2.5", fun: "2.9" },
  { course: "W1D4-1", difficulty: "2.9", fun: "2.8" },
  { course: "W1D5P", difficulty: "3", fun: "3.1" },
  { course: "W2D1-1", difficulty: "2.2", fun: "2.8" },
  { course: "W2D1-2", difficulty: "3.3", fun: "2.4" },
  { course: "W2D2-2", difficulty: "2.3", fun: "2.5" },
  { course: "W2D2-3", difficulty: "2.8", fun: "2.5" },
  { course: "W2D3-1", difficulty: "2.4", fun: "2" },
  { course: "W2D3-2", difficulty: "2.4", fun: "2.6" },
  { course: "W2D3-3", difficulty: "2.8", fun: "2.3" },
  { course: "W2D4-1", difficulty: "1.9", fun: "3.4" },
  { course: "W2D4-2", difficulty: "3.1", fun: "3" },
  { course: "W2D4-3", difficulty: "2.6", fun: "2.5" },
  { course: "W2D5P", difficulty: "2.9", fun: "2.1" },
  { course: "W3D1-1", difficulty: "2.4", fun: "2.3" },
  { course: "W3D1-2", difficulty: "2.2", fun: "3.1" },
  { course: "W3D1-3", difficulty: "2.2", fun: "2.9" },
  { course: "W3D1-4", difficulty: "2.2", fun: "2.9" },
  { course: "W3D2-1", difficulty: "1.8", fun: "3" },
  { course: "W3D2-2", difficulty: "2.1", fun: "2.9" },
  { course: "W3D2-3", difficulty: "2.5", fun: "2.6" },
  { course: "W3D3-1", difficulty: "2.4", fun: "3" },
  { course: "W3D3-2", difficulty: "2.9", fun: "2.4" },
  { course: "W3D3-3", difficulty: "2.3", fun: "3.1" },
  { course: "W3D3-4", difficulty: "2.9", fun: "2.4" },
  { course: "W3D4-1", difficulty: "2.6", fun: "3.4" },
  { course: "W3D4-2", difficulty: "2.2", fun: "2.7" },
  { course: "W3D5P", difficulty: "2.2", fun: "3.1" },
  { course: "W4D2-1", difficulty: "2.1", fun: "2.7" },
  { course: "W4D2-2", difficulty: "2.3", fun: "2.8" },
  { course: "W4D2-3", difficulty: "2.4", fun: "3" },
  { course: "W4D2-4", difficulty: "2.4", fun: "3" },
  { course: "W4D3P", difficulty: "2.7", fun: "2.8" },
  { course: "W4D3-1", difficulty: "2.2", fun: "2.5" },
  { course: "W4D3-2", difficulty: "1.9", fun: "3.1" },
  { course: "W4D3-3", difficulty: "2.1", fun: "2.7" },
  { course: "W4D3-4", difficulty: "2.1", fun: "2.6" },
  { course: "W4D3-5", difficulty: "2.5", fun: "2.5" },
  { course: "W5D4-1", difficulty: "1.9", fun: "2.8" },
  { course: "W5D5P", difficulty: "2.7", fun: "1.9" },
  { course: "W6D1-1", difficulty: "2.3", fun: "2.6" },
  { course: "W6D2P", difficulty: "3", fun: "2.8" },
  { course: "W6D2-1", difficulty: "1.9", fun: "2.5" },
];

const ChartAverage = () => {
  return (
    <div className="chart">
      <div className="title">Student Chart Average Rating</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="difficulty"
            stroke="#FF6384"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="fun" stroke="#36A2EB" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartAverage;
