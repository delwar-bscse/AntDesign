import AreaChartDemo from "../charts/AreaChart";
import RingChart from "../charts/FoodPieChart";
import LineChartDesign from "../charts/LineChart";


const Dashboard = () => {
  return <div className="text-4xl h-[2000px]">
    <div>
      <div className="w-[900px] h-[600px] mx-auto py-10">
        <RingChart />
      </div>
      <div className="w-[900px] h-[600px] mx-auto py-10">
        <AreaChartDemo />
      </div>
      <div className="w-[900px] mx-auto py-10">
        <LineChartDesign />
      </div>
    </div>
  </div>;
};

export default Dashboard;
