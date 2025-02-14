import AreaChartDemo from "../charts/AreaChart";
import ComplexBarChart from "../charts/BarChartDemo";
import RingChart from "../charts/FoodPieChart";
import LineChartDesign from "../charts/LineChart";


const Dashboard = () => {
  return <div className="text-4xl h-[2000px]">
    <div className="space-y-20 py-12">
      <div className="w-[900px] mx-auto">
        <RingChart />
      </div>
      <div className="w-[900px] mx-auto">
        <AreaChartDemo />
      </div>
      <div className="w-[900px] mx-auto">
        <LineChartDesign />
      </div>
      <div className="w-[900px] mx-auto">
        <ComplexBarChart />
      </div>
    </div>
  </div>;
};

export default Dashboard;
