import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full flex">
      <div className=" h-screen bg-gray-100  overflow-y-auto">
        <Sidebar />
      </div>
      <div className="h-screen flex-1 relative overflow-y-auto">
        <div className="sticky top-0 bg-gray-100 h-[50px]"></div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
