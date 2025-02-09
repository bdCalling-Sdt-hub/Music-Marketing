import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/Common/musicMarketingLogo.png";

import {
    FaRegUser,
    FaSackDollar,
    FaUsers,
} from "react-icons/fa6";

import { BiSolidDashboard, BiUserCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { PiUserFocus } from "react-icons/pi";


const Sidebar = () => {
    const navigate = useNavigate();
    const isActiveInfluencerRoute = location.pathname === "/client/influencers"; // Check if active

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
                                    : "flex text-[#ffffff] cursor-pointer items-center text-[18px] font-medium p-[20px] "
                            }
                        >
                            <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
                            <span className="hidden ml-2 sm:block">Dashboard</span>
                        </NavLink>


                        <NavLink
                            to="campaigns"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#FFFFFF] text-[#193664]  "
                                    : "flex text-[#ffffff] cursor-pointer items-center text-[18px] font-medium p-[20px] "
                            }
                        >
                            <GrAnnounce className="h-7 w-7 lg:h-5 lg:w-5" />
                            <span className="hidden ml-2 sm:block">Campaigns</span>
                        </NavLink>

                        <NavLink
                            to="clients"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#FFFFFF] text-[#193664]  "
                                    : "flex text-[#ffffff] cursor-pointer items-center text-[18px] font-medium p-[20px] "
                            }
                        >
                            <FaUsers className="h-7 w-7 lg:h-5 lg:w-5" />
                            <span className="hidden ml-2 sm:block">Clients</span>
                        </NavLink>

                        <NavLink
                            to="influencers"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#FFFFFF] text-[#193664]  "
                                    : "flex text-[#ffffff] cursor-pointer items-center text-[18px] font-medium p-[20px] "
                            }
                        >
                            {/* <FaSackDollar className="h-7 w-7 lg:h-5 lg:w-5" /> */}


                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={!isActiveInfluencerRoute ? "#fff" : "#193664"}>
                                <g clip-path="url(#clip0_931_3904)">
                                    <path d="M11.2498 3.38281C6.90282 3.38774 3.37993 6.91039 3.375 11.2575C3.37598 12.3615 3.61137 13.4527 4.06559 14.4589C4.19233 14.7424 4.52517 14.8697 4.80876 14.7429C5.09233 14.6161 5.21949 14.2833 5.09261 13.9997C4.70312 13.1379 4.50117 12.2032 4.50012 11.2575C4.50012 7.52971 7.52208 4.50769 11.2498 4.50769C14.9776 4.50769 17.9995 7.52971 17.9995 11.2575C17.9984 12.2032 17.7964 13.1379 17.4069 13.9997C17.2801 14.2833 17.4073 14.616 17.6909 14.7429C17.9745 14.8697 18.3074 14.7425 18.4342 14.4589C18.8884 13.4526 19.1237 12.3615 19.1246 11.2575C19.1196 6.91039 15.597 3.38774 11.2498 3.38281H11.2498Z" fill={!isActiveInfluencerRoute ? "#fff" : "#193664"} />
                                    <path d="M11.2497 0.0078769C5.05084 -0.00628356 0.0143652 5.00736 2.86546e-05 11.2061C-0.00510375 13.4781 0.679334 15.6981 1.96287 17.5728C2.131 17.8338 2.47899 17.9092 2.74029 17.7409C3.00145 17.5728 3.07669 17.2247 2.90856 16.9635C2.90278 16.9548 2.897 16.9461 2.89081 16.9378C1.74163 15.2663 1.12602 13.2858 1.12515 11.2574C1.12515 5.66575 5.65805 1.13272 11.2497 1.13272C16.8414 1.13272 21.3743 5.66575 21.3743 11.2574C21.3734 13.2859 20.7576 15.2664 19.6082 16.9378C19.4258 17.1892 19.4815 17.541 19.733 17.7233C19.9844 17.9057 20.3361 17.85 20.5186 17.5985C20.5248 17.5901 20.5306 17.5816 20.5362 17.5728C24.0382 12.458 22.7307 5.47258 17.6158 1.97058C15.7414 0.68707 13.5215 0.00266324 11.2497 0.00784167V0.0078769Z" fill={!isActiveInfluencerRoute ? "#fff" : "#193664"} />
                                    <path d="M13.7933 14.9623C15.8435 13.5575 16.3666 10.7567 14.9618 8.70678C13.557 6.65658 10.7563 6.13359 8.70622 7.53816C6.65616 8.94293 6.13303 11.7437 7.53788 13.7938C7.85181 14.2521 8.24794 14.6483 8.70622 14.9623C6.19549 15.813 4.5044 18.1673 4.5 20.8183V21.9434C4.5 22.2541 4.75182 22.5058 5.06251 22.5058H17.4371C17.7477 22.5058 17.9996 22.254 17.9996 21.9434V20.8183C17.9953 18.1673 16.3042 15.813 13.7934 14.9623H13.7933ZM7.87505 11.2562C7.87505 9.3923 9.38599 7.88132 11.2499 7.88132C13.1138 7.88132 14.6248 9.3923 14.6248 11.2562C14.6248 13.1201 13.1138 14.6311 11.2499 14.6311C9.38684 14.629 7.87709 13.1193 7.87505 11.2562V11.2562ZM16.8747 21.3809H5.62502V20.8184C5.62819 18.0238 7.89287 15.7592 10.6873 15.7562H11.8124C14.6068 15.7592 16.8716 18.0238 16.8747 20.8184L16.8747 21.3809Z" fill={!isActiveInfluencerRoute ? "#fff" : "#193664"} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_931_3904">
                                        <rect width="24" height="24" fill={!isActiveInfluencerRoute ? "#fff" : "#193664"} />
                                    </clipPath>
                                </defs>
                            </svg>




                            <span className="hidden ml-2 sm:block">influencers</span>
                        </NavLink>


                        <NavLink
                            to="profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#FFFFFF] text-[#193664]  "
                                    : "flex text-[#ffffff] cursor-pointer items-center text-[18px] font-medium p-[20px] "
                            }
                        >
                            <PiUserFocus className="text-3xl" />
                            <span className="hidden ml-2 sm:block">Profile</span>
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
