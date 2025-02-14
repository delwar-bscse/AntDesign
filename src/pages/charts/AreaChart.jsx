import { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Sunday",
    order: 1000,
  },
  {
    day: "Monday",
    order: 3000,
  },
  {
    day: "Tuesday",
    order: 2000,
  },
  {
    day: "Wednesday",
    order: 2780,
  },
  {
    day: "Thursday",
    order: 1890,
  },
  {
    day: "Friday",
    order: 3290,
  },
  {
    day: "Saturday",
    order: 2790,
  },
];

export default class AreaChartDemo extends PureComponent {
  // Custom Tooltip Function
  renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { day, order } = payload[0].payload; // Access the specific data point
      return (
        <div
          style={{
            backgroundColor: "white",
            color: "rgba(0, 0, 0, 0.7)",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "14px",
            maxWidth: "200px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow
          }}
        >
          <p><strong>{order}</strong> Orders</p>
          <p><strong>{day}</strong></p>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div className="w-full border-2 border-red-300 rounded-2xl p-3">
        <h4 className="text-5xl font-bold text-gray-800">Order Charts</h4>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="0 4" />
            <XAxis dataKey="day" tick={{ fontSize: 14 }} tickLine={false} axisLine={false} />
            <YAxis hide={true} />
            <Tooltip content={this.renderCustomTooltip} />

            {/* Gradient fill definition */}
            <defs>
              <linearGradient id="gradientColor" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="5%" stopColor="#2D9CDB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2D9CDB" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            {/* Area with gradient fill */}
            <Area
              type="monotone"
              dataKey="order"
              stroke="#2D9CDB"
              strokeWidth={3}
              fill="url(#gradientColor)" // Apply gradient by referencing its ID
              activeDot={{
                fill: "#2D9CDB", // Dot fill color
                stroke: "white", // Dot border color
                strokeWidth: 6, // Dot border width
                r: 10, // Dot size (radius)
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
