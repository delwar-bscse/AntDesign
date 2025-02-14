import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

// Sample data
const data = [
  {
    name: "Jan",
    sales: 4000,
    expenses: 2400,
    profit: 1600,
  },
  {
    name: "Feb",
    sales: 3000,
    expenses: 1398,
    profit: 1602,
  },
  {
    name: "Mar",
    sales: 5000,
    expenses: 4800,
    profit: 200,
  },
  {
    name: "Apr",
    sales: 4780,
    expenses: 3908,
    profit: 872,
  },
  {
    name: "May",
    sales: 5890,
    expenses: 4800,
    profit: 1090,
  },
  {
    name: "Jun",
    sales: 4390,
    expenses: 3800,
    profit: 590,
  },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-100 text-gray-500 rounded-lg shadow-lg">
        <h4 className="text-lg font-bold">{label}</h4>
        <p className="mb-1 text-sm">Expenses: ${payload[1].value}</p>
        <p className="mb-1 text-sm">Sales: ${payload[0].value}</p>
        <p className="text-sm">Profit: ${payload[2].value}</p>
      </div>
    );
  }
  return null;
};

const ComplexBarChart = () => {
  return (
    <div className="p-4 rounded-xl border-2 border-red-300 h-[500px] ">
    <div className="h-full">
      <h2 className="text-5xl font-bold mb-4">Bar Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 80
          }}
        >
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="name" style={{ fontSize: "12px" }}>
            <Label value="Months" offset={-10} position="insideBottom" style={{fontSize: "14px"}}/>
          </XAxis>
          <YAxis style={{ fontSize: "12px" }}>
            <Label
              value="Amount (USD)"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fontSize: "14px", height: "30px" }}
            />
          </YAxis >
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend  wrapperStyle={{fontSize: 24}} style={{height: "30px"}}/> */}
          <Bar dataKey="expenses" stackId="a" fill="#82ca9d" />
          <Bar dataKey="sales" stackId="a" fill="#8884d8" />
          <Bar dataKey="profit" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ComplexBarChart;
