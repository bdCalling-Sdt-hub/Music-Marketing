import React from 'react';
import { FaLock, FaPhone, FaUser } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const SignUpManager = () => {
    return (
        <div>
            <form className='items-center grid-cols-2 grid gap-5 '>
                <div className='p-20 w-full'>
                    <img className='w-20' src="/Common/musicBlackLogo.png" alt="" />
                    <h2 className='text-5xl font-semibold my-5'>Create an Account</h2>
                    <p className='text-gray-600 mb-5'>Hello there, Collaborate, Grow, and Earn as an Influencer!</p>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>Full Name</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            {/* <i className='fas fa-user mr-3'></i> */}
                            <FaUser className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="text" placeholder="Enter full name" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>User Name</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            <FaUser className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="text" placeholder="Enter user name" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>Email</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            <MdEmail className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="email" placeholder="Enter Email" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>Phone Number</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            <FaPhone className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="text" placeholder="Enter Phone number" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>Password</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            <FaLock className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="password" placeholder="Enter password" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <span className='mb-2 font-semibold block'>Confirm Password</span>
                        <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                            <FaLock className='mr-3' />
                            <input className='w-full focus:outline-none right-0' type="password" placeholder="Confirm password" />
                        </div>
                    </div>

                    <label className='flex items-center gap-3 mb-5'>
                        <input type="checkbox" />
                        <span>I accept the Terms of Service and Privacy Policy.</span>
                    </label>

                    <button className='bg-black text-white p-5 w-full rounded-xl'>Sign Up</button>

                    <p className='text-center mt-5'>Already have an account? <a href="#" className='text-blue-500'>Login</a></p>
                </div>
                <div className=''>
                    <img className='w-full max-h-[120vh]' src="/Auth/register.png" alt="" />
                </div>
            </form>
        </div>
    );
}

export default SignUpManager;
