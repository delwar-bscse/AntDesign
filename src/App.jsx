import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={"Home"} />
        <Route path="about" element={"About"} />

        <Route element={"AuthLayout"}>
          <Route path="login" element={"Login"} />
          <Route path="register" element={"Register"} />
        </Route>

        <Route element={"DashboardLayout"}>
          <Route index element={"dashboard"} />
          <Route path="settings" element={"Settings"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
