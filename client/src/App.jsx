import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, About, Error, Collect, Devices, Profile, Stats } from "./Pages";
import { lazy } from "react";
const Landing = lazy(() => import("./Pages/Landing"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
import ProtectedRoute from "./Pages/ProtectedRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Auth />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" index element={<Profile />} />
          <Route path="stats" element={<Stats />} />
          <Route path="waste" element={<Collect />} />
          <Route path="devices" element={<Devices />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
