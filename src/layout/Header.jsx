import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Dropdown,
  Avatar,
  Badge,
  Button,
  Modal,
  Form,
  Input,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";

import { IoIosNotificationsOutline } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa6";
import "./header.css";
import Swal from "sweetalert2";
import dashboard_welcome_Image from "../../public/Dashboard/Dashboard_welcome.png";
import User_profile_image from "../../public/Dashboard/User_profile_image.png";

import { useState } from "react";
import { useCahngePasswordMutation } from "../redux/features/auth/changePassword";
import toast, { Toaster } from "react-hot-toast";
import { useGetProfileQuery } from "../redux/features/profile/profile";
import url from "../redux/api/baseUrl";
import { MdOutlineMail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

// import SearchBox from "../SearchBox/SearchBox";

const Header = () => {




  return (
    <div className=" bg-primary text-white p-5 ">
      <Toaster reverseOrder={false} />
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-3">Welcome</h2>
          <p>Have a nice day</p>
        </div>
        <div className="flex items-center gap-3">
          {/* <MdOutlineMail className="text-3xl cursor-pointer" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 22 18" fill="none">
            <path d="M4.85716 3.83913C4.62474 3.71398 4.34363 3.72023 4.117 3.85559C3.89037 3.99096 3.75159 4.2355 3.75159 4.49948V13.9995C3.75159 14.4137 4.08737 14.7495 4.50159 14.7495C4.9158 14.7495 5.25159 14.4137 5.25159 13.9995V5.75514L10.646 8.65983C10.868 8.77936 11.1352 8.77936 11.3572 8.65983L16.7516 5.75514V13.9995C16.7516 14.4137 17.0874 14.7495 17.5016 14.7495C17.9158 14.7495 18.2516 14.4137 18.2516 13.9995V4.49948C18.2516 4.2355 18.1128 3.99096 17.8862 3.85559C17.6595 3.72023 17.3784 3.71398 17.146 3.83913L11.0016 7.14766L4.85716 3.83913Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3122 0.721317C12.7788 0.405394 9.22435 0.405394 5.69101 0.721317L4.17367 0.856985C2.54606 1.00251 1.23098 2.24593 0.994593 3.86285C0.496594 7.26917 0.496594 10.7298 0.994593 14.1361C1.23098 15.753 2.54606 16.9964 4.17367 17.142L5.69101 17.2776C9.22436 17.5936 12.7788 17.5936 16.3122 17.2776L17.8295 17.142C19.4571 16.9964 20.7722 15.753 21.0086 14.1361C21.5066 10.7298 21.5066 7.26916 21.0086 3.86285C20.7722 2.24593 19.4571 1.00251 17.8295 0.856985L16.3122 0.721317ZM5.8246 2.21536C9.26906 1.90738 12.7341 1.90738 16.1786 2.21536L17.6959 2.35102C18.6321 2.43472 19.3884 3.14988 19.5244 4.07984C20.0013 7.34226 20.0013 10.6567 19.5244 13.9191C19.3884 14.8491 18.6321 15.5642 17.6959 15.6479L16.1786 15.7836C12.7341 16.0916 9.26906 16.0916 5.8246 15.7836L4.30726 15.6479C3.37114 15.5642 2.61478 14.8491 2.47881 13.9191C2.00185 10.6567 2.00185 7.34226 2.47881 4.07984C2.61478 3.14988 3.37114 2.43472 4.30726 2.35102L5.8246 2.21536Z" fill="white" />
          </svg>
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-12" src="/Dashboard/User_profile_image.png" alt="" />
            <FaAngleDown />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
