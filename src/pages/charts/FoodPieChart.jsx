import React from 'react';
import { Flex, Progress } from 'antd';

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

const RingChart = () => (
  <Flex vertical gap="middle">
    <Flex gap="small" wrap>
      <Progress type="circle" percent={81} strokeColor="#FF5B5B" trailColor="rgba(255, 91, 91, 0.15)"strokeWidth={16} size={400}/>
      <Progress type="circle" percent={22} strokeColor={twoColors} strokeWidth={12} />
      <Progress type="circle" percent={62} strokeColor={conicColors} strokeWidth={12} />
    </Flex>
  </Flex>
);

export default RingChart;
