import { Button, Checkbox, Form, Input } from "antd";
import signin from "./../../public/image/signin.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import logo from "./../../public/image/logo.png";
import { useAdminLoginMutation } from "../redux/features/auth/Login";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [checkboxError, setCheckboxError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  // const handleCheckboxChange = (e) => {
  //     setIsChecked(e.target.checked);
  //     if (e.target.checked) {
  //         setCheckboxError('');
  //     }
  // };

  const onFinish = async (values) => {
    // if (!isChecked) {
    //     setCheckboxError('You must agree to the terms');
    //     return;
    // }

    try {
      const res = await adminLogin(values).unwrap();
      // console.log(res);
      if (res?.statusCode == 200) {
        toast.success(res?.message);
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data));
      }
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    } catch (error) {
      // console.log(error);
      setError(error?.data?.message);
    }

    // console.log('Form submitted:', values);
  };

  // name="normal_login"
  // layout="vertical"
  // initialValues={{ remember: true }}
  // onFinish={onFinish}

  return (
    <div className=" min-h-screen ">
      <Toaster reverseOrder={false}></Toaster>

      <form className='items-center grid-cols-2 grid gap-5'>
        <div className='p-20 w-full'>
          <img className='w-20' src="/Common/musicBlackLogo.png" alt="Logo" />
          <h2 className='text-5xl font-semibold my-5'>Hello, Welcome!</h2>
          <p className='text-gray-600 mb-5'>Please Enter Your Details Below to Continue</p>

          <div className='mb-3'>
            <span className='mb-2 font-semibold block'>Your email</span>
            <input className='p-3 border border-[#eee] rounded-xl w-full mb-3' type="email" placeholder="Enter Email" />
          </div>

          <div className='mb-3'>
            <span className='mb-2 font-semibold block'>Password</span>
            <input className='p-3 border border-[#eee] rounded-xl w-full mb-3' type="password" placeholder="Enter password" />
          </div>

          <div className='flex justify-between mb-3'>
            <label className='flex items-center gap-3'>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className='text-blue-500'>Forgot password?</a>
          </div>

          <button className='bg-black text-white p-5 w-full rounded-xl'>Login</button>

          <p className='text-center mt-5'>Don’t have an account? <a href="#" className='text-blue-500'>Sign up</a></p>
        </div>

        <div className=''>
          <img className='w-full' src="/Auth/login.png" alt="Login Image" />
        </div>
      </form>

    </div>
  );
};

export default Login;
