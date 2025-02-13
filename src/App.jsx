import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Table01 from "./pages/tables/Table01";
import Form01 from "./pages/forms/Form01";
import PageNotFound from "./notfound/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="table1" element={<Table01 />} />
          <Route path="form1" element={<Form01 />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
