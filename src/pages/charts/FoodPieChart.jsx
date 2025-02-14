import React from "react";
import { Flex, Progress } from "antd";
import { motion } from "framer-motion";

const RingChartComponent = ({
  ringData: { rPercent, rStrokeColor, rTrailColor },
}) => (
  <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-8"
    >
      <motion.div
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Progress
          type="circle"
          strokeLinecap="butt"
          percent={rPercent}
          strokeColor={rStrokeColor}
          trailColor={rTrailColor}
          strokeWidth={20}
          size={220}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-bold text-3xl text-gray-600"
      >
        Total Food Sell
      </motion.p>
    </motion.div>
);

const RingChart = () => (
  <div className="space-y-16 p-8 border-2 border-red-300 rounded-2xl ">
    <div>
      <h3 className="text-5xl font-bold text-gray-800">Pie Chart</h3>
    </div>
    <div>
      <Flex vertical gap="middle">
        <Flex justify="space-around"  wrap>
          <RingChartComponent
            ringData={{
              rPercent: 81,
              rStrokeColor: "#FF5B5B",
              rTrailColor: "rgba(255, 91, 91, 0.15)",
            }}
          />
          <RingChartComponent
            ringData={{
              rPercent: 22,
              rStrokeColor: "#00B074",
              rTrailColor: "rgba(0, 176, 116, 0.15)",
            }}
          />
          <RingChartComponent
            ringData={{
              rPercent: 63,
              rStrokeColor: "#2D9CDB",
              rTrailColor: " rgba(45, 156, 219, 0.15)",
            }}
          />
        </Flex>
      </Flex>
    </div>
  </div>
);

export default RingChart;
