import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = () => {
  return (
    <div className="flex min-h-screen gap-5">
      {/* Sidebar */}
      <div >
        <div className=" bg-white shadow-md h-full">
          <Sidebar />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-primary px-4">
          <Header />
        </div>

        {/* Page Content */}
        <div className=" min-h-screen mt-5 pr-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
