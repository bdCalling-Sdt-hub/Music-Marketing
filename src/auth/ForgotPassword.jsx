import { Form, Input, Button } from "antd";
import character from "../../public/image/forgotpass.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "./../../public/image/logo.png";
import { useForgotPasswordMutation } from "../redux/features/auth/forgotPassword";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEnvelope } from 'react-icons/fa'; // Email icon

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [forgotpassword] = useForgotPasswordMutation();

  const handleForgotPassword = async (values) => {
    // console.log("Received values:", values);
    // navigate(`/verifyotp`);
    try {
      const res = await forgotpassword(values).unwrap();
      // console.log(res);

      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/verifyotp?email=${values?.email}`);
        }, 1000);
      }
    } catch (error) {
      //  console.log(error);
      setError(error?.data?.message);
    }

    // Handle form submission here
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />



      <form className='items-center grid-cols-2 grid gap-5 h-screen'>
        <div className='p-10 w-full '>
          <h2 className='text-3xl font-semibold mb-5 text-center'>Forgot Password</h2>
          <p className='text-gray-600 mb-5 text-center'>Please enter your Email to reset your password.</p>

          {/* Email Field */}
          <div className='mb-5'>
            <span className='mb-2 font-semibold block'>Email</span>
            <div className='flex items-center border border-[#eee] rounded-xl p-3'>
              <FaEnvelope className='mr-3' />
              <input
                className='w-full focus:outline-none'
                type="email"
                placeholder="Enter Email"
              />
            </div>
          </div>

          {/* Verify Button */}
          <button className='bg-black text-white p-4 w-full rounded-xl'>Verify</button>
        </div>

        {/* Image Section */}
        <div className=''>
          <img className='w-full' src="/Auth/verify.png" alt="Forgot Password" />
        </div>
      </form>

    </div>
  );
};

export default ForgotPassword;
