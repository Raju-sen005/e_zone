import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid sb2">
        <div className="row">
          <Sidebar />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default MainLayout;
