import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/Common/musicMarketingLogo.png";

import {
  FaRegUser,
  FaUsers,
} from "react-icons/fa6";

import { BiSolidDashboard } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000,
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] w-[70px] flex flex-col justify-between bg-primary h-full min-h-screen ">
      <div>
        <Link to={'/influencer/home'} className="p-[16px]">
          <img
            className="w-[60px] ml-5 "
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#FFFFFF] text-[#193664]  "
                  : "flex text-[#430750] cursor-pointer items-center text-[18px] font-medium p-[20px] "
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>



         
         
            
            <div className="mt-20">
              <div
                onClick={handleLogOut}
                className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#eb5757] font-medium"
              >
                <IoIosLogOut className="h-8 w-8 lg:h-5 font-bold lg:w-5" />
                <span className="hidden sm:block font-semibold">Log Out</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
