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
import { IoNotificationsCircle } from "react-icons/io5";

// import SearchBox from "../SearchBox/SearchBox";

const Header = () => {

  const navigate = useNavigate();



  return (
    <div className=" bg-primary text-white p-5 ">
      <Toaster reverseOrder={false} />
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-3">Welcome</h2>
          <p>Have a nice day</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to={`/influencer/notification`}>
            <IoNotificationsCircle className="text-5xl cursor-pointer font-semibold text-white" />
          </Link>

          <div onClick={() => navigate("/influencer/profile")} className="flex items-center gap-2 cursor-pointer">
            <img className="w-12" src="/Dashboard/User_profile_image.png" alt="" />
            <FaAngleDown />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
