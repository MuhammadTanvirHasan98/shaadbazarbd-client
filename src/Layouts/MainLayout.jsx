import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import UpNav from "../Shared/UpNav/UpNav";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <UpNav />
        <Navbar />
      </div>

      {/* Outlet */}
      <div className="min-h-[calc(100vh-600px)] max-w-[2400px] mx-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
