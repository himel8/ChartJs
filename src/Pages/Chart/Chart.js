import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ inputData }) => {
  const data = [
    { name: "Page A", uv: 0.4, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 0.5, pv: 2500, amt: 2500 },
    { name: "Page C", uv: 0.6, pv: 2600, amt: 2600 },
    { name: "Page D", uv: 0.7, pv: 2700, amt: 2700 },
    { name: "Page E", uv: 0.12, pv: 2800, amt: 2800 },
    { name: "Page F", uv: 0.9, pv: 2900, amt: 2900 },
    { name: "Page G", uv: 0.18, pv: 3000, amt: 3000 },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={50}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={inputData}
        >
          <Line
            type="monotone"
            dataKey="yData"
            strokeWidth={2}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xData" interval={"preserveStartEnd"} />

          <YAxis
            tickCount={15}
            dataKey="yData"
            interval={0}
            type="number"
            domain={[0, (dataMax) => dataMax * 2]}
          />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
