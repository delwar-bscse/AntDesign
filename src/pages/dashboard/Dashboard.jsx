import RingChart from "../charts/FoodPieChart";
import TwoLevelPieChart from "../charts/FoodPieChart";


const Dashboard = () => {
  return <div className="text-4xl h-[2000px]">
    <div>
      <div className="w-[700px] h-[600px]">
        <RingChart />
      </div>
    </div>
  </div>;
};

export default Dashboard;
