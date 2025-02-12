import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Table01 from "./pages/tables/Table01";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={"Settings"} />
          <Route path="table1" element={<Table01 />} />
          <Route path="*" element={"Settings"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
