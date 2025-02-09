import logo from "../../public/image/logo.png";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useVerifyOtpMutation } from "../redux/features/auth/verifyOtp";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";

const VerifyOtp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [error, setError] = useState("");
  const email = queryParams.get("email");

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOtp] = useVerifyOtpMutation();

  const verifyData = {
    code: otp,
    email: email,
  };

  const sendOtp = async () => {
    try {
      const res = await verifyOtp(verifyData).unwrap();

      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/updatepassword?email=${email}`);
        }, 1000);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />

      <form className='items-center grid-cols-2 grid gap-5'>
        <div className='p-20 w-full'>
          <img className='w-20' src="/Common/musicBlackLogo.png" alt="Logo" />
          <h2 className='text-5xl font-semibold my-5'>Verify Email</h2>
          <p className='text-gray-600 mb-5'>Please check your email and enter the code</p>

          <div className='flex justify-center gap-5 mb-5'>
            {Array(6).fill(0).map((_, index) => (
              <input
                key={index}
                className='p-3 text-center border-b border-[#eee]  w-full text-xl'
                type="text"
                maxLength="1"
              />
            ))}
          </div>

          <p className='my-5 flex justify-between'>Didn’t receive code? <a href="#" className='text-blue-500'>Resend</a></p>
          <button className='bg-black text-white p-5 w-full rounded-xl'>Verify</button>

        </div>

        <div className=''>
          <img className='w-full' src="/Auth/verify.png" alt="Verification Image" />
        </div>
      </form>


    </div>
  );
};

export default VerifyOtp;
