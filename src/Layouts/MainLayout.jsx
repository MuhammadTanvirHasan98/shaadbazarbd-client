import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-600px)] max-w-[2400px] mx-auto">
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  );
};

export default MainLayout;
