import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './../../public/image/logo.png';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useUpdatePasswordMutation } from '../redux/features/auth/updatePassword';
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowLeftLong, FaLock } from 'react-icons/fa6';

const UpdatePassword = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  const [reset, { isLoading }] = useUpdatePasswordMutation();

  const handlePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const handleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const validateConfirmPassword = (rule, value) => {
    const { password } = form.getFieldsValue();
    if (value && value !== password) {
      return Promise.reject('Passwords do not match!');
    }
    return Promise.resolve();
  };

  const resetPassword = async (values) => {
    const { password } = values;
    const resetData = {
      password,
      email,
    };
    try {
      const res = await reset(resetData).unwrap();
      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />

      <form className='items-center grid-cols-2 grid gap-5'>
        <div className='p-20 w-full'>
          <img className='w-20' src="/Common/musicBlackLogo.png" alt="Logo" />
          <h2 className='text-5xl font-semibold my-5'>Reset Password</h2>
          <p className='text-gray-600 mb-5'>Your password must be 8-10 characters long.</p>

          {/* New Password Field */}
          <div className='mb-3'>
            <span className='mb-2 font-semibold block'>New Password</span>
            <div className='flex items-center border border-[#eee] rounded-xl p-3'>
              <FaLock className='mr-3' />
              <input
                className='w-full focus:outline-none right-0'
                type="password"
                placeholder="Enter new password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className='mb-3'>
            <span className='mb-2 font-semibold block'>Confirm Password</span>
            <div className='flex items-center border border-[#eee] rounded-xl p-3'>
              <FaLock className='mr-3' />
              <input
                className='w-full focus:outline-none right-0'
                type="password"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          {/* Reset Button */}
          <button className='bg-black text-white p-5 w-full rounded-xl'>Reset</button>
        </div>

        {/* Image Section */}
        <div className=''>
          <img className='w-full' src="/Auth/verify.png" alt="Reset Password Image" />
        </div>
      </form>


    </div>
  );
};

export default UpdatePassword;
