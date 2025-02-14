import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Dot, CartesianGrid } from "recharts";
import { Card, Select } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { duration: "Jan", revenue: 9800 },
  { duration: "Feb", revenue: 15000 },
  { duration: "Mar", revenue: 9000 },
  { duration: "Apr", revenue: 20000 },
  { duration: "May", revenue: 30000 },
  { duration: "Jun", revenue: 38753 },
  { duration: "Jul", revenue: 25000 },
  { duration: "Aug", revenue: 20000 },
  { duration: "Sept", revenue: 22000 },
  { duration: "Oct", revenue: 12657 },
  { duration: "Nov", revenue: 19000 },
  { duration: "Dec", revenue: 21000 },
];

const yearData = [
  { duration: "2020", revenue: 230000 },
  { duration: "2021", revenue: 250000 },
  { duration: "2022", revenue: 270000 },
  { duration: "2023", revenue: 190000 },
  { duration: "2024", revenue: 200000 },
  { duration: "2025", revenue: 150000 },
  { duration: "2026", revenue: 400000 },
  { duration: "2027", revenue: 350000 },
  { duration: "2028", revenue: 600000 },
  { duration: "2029", revenue: 450000 },
];

const maxRevenue = Math.max(...data.map((item) => item.revenue));
const minRevenue = Math.min(...data.map((item) => item.revenue));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#fff",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: 0, color: "#1890ff" }}>Revenue: ${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const CustomDot = (props) => {
  const { cx, cy, value } = props;
  if (value === maxRevenue || value === minRevenue) {
    return (
      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Dot cx={cx} cy={cy} r={6} fill={value === maxRevenue ? "#1890ff" : "#ff4d4f"} />
        <foreignObject x={cx - 30} y={cy - 40} width={80} height={30}>
          <div style={{
            background: value === maxRevenue ? "#e6f7ff" : "#fff1f0",
            color: value === maxRevenue ? "#1890ff" : "#ff4d4f",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            textAlign: "center"
          }}>
            ${value.toLocaleString()}
          </div>
        </foreignObject>
      </motion.g>
    );
  }
  return null;
};

const CustomActiveDot = (props) => {
  const { cx, cy, payload } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={8} // Dot size (radius)
      fill={((minRevenue+maxRevenue)/2) > payload?.revenue ? "#ff4d4f" : "#1890ff"} // Conditional fill color
      stroke="white" // Dot border color
      strokeWidth={3} // Dot border width
    />
  );
};

const LineChartDesign = () => {
  const [selectedFilter, setSelectedFilter] = useState("month"); // Default filter set to "month"
  
  // Select data based on filter
  const filteredData = selectedFilter === "month" ? data : yearData;

  return (
    <section className="rounded-xl border-2 border-red-300">
      <Card style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 className="text-5xl font-bold text-gray-800">Line Chart</h3>
          <Select 
            defaultValue="month"
            style={{ width: 100 }} 
            onChange={(value) => setSelectedFilter(value)}
          >
            <Select.Option value="month">Month</Select.Option>
            <Select.Option value="year">Year</Select.Option>
          </Select>
        </div>
        <ResponsiveContainer  width="100%" height={300}>
          <LineChart data={filteredData} margin={{ top: 50, right: 30, left: 10, bottom: 20 }}>
            <XAxis dataKey="duration" tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: "#aaa" }} tickFormatter={(tick) => `$${tick / 1000}k`} tickLine={false} 
            axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#1890ff"
              strokeWidth={2}
              // dot={<CustomDot />}
              dot={false}
              activeDot={<CustomActiveDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </section>
  );
};

export default LineChartDesign;
