import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaLock } from 'react-icons/fa'; // Add icons for relevant fields
import { Link, useNavigate } from 'react-router-dom';


const SignUpInfluencer = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <form onSubmit={handleSubmit} className='items-center grid-cols-2 grid gap-5'>
            <div className='p-20 w-full'>
                <img className='w-20' src="/Common/musicBlackLogo.png" alt="Logo" />
                <h2 className='text-5xl font-semibold my-5'>Create an Account</h2>
                <p className='text-gray-600 mb-5'>Hello there, Collaborate, Grow, and Earn as an Influencer!</p>

                {/* Full Name Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Full Name</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaUser className='mr-3' />
                        <input className='w-full focus:outline-none' type="text" placeholder="Enter full name" />
                    </div>
                </div>

                {/* User Name Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>User Name</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaUser className='mr-3' />
                        <input className='w-full focus:outline-none' type="text" placeholder="Enter user name" />
                    </div>
                </div>

                {/* Email Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Email</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaEnvelope className='mr-3' />
                        <input className='w-full focus:outline-none' type="email" placeholder="Enter Email" />
                    </div>
                </div>

                {/* Phone Number Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Phone Number</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaPhone className='mr-3' />
                        <input className='w-full focus:outline-none' type="text" placeholder="Enter Phone number" />
                    </div>
                </div>

                {/* Date of Birth Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Date of Birth</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaCalendarAlt className='mr-3' />
                        <input className='w-full focus:outline-none' type="date" placeholder="Enter DoB" />
                    </div>
                </div>

                {/* Social Media Group Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Social Media Group</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaUser className='mr-3' />
                        <input className='w-full focus:outline-none' type="text" placeholder="Add Social Media Group" />
                    </div>
                </div>

                {/* Location Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Location</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaMapMarkerAlt className='mr-3' />
                        <input className='w-full focus:outline-none' type="text" placeholder="Enter Location" />
                    </div>
                </div>

                {/* Password Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Password</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaLock className='mr-3' />
                        <input className='w-full focus:outline-none' type="password" placeholder="Enter password" />
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className='mb-3'>
                    <span className='mb-2 font-semibold block'>Confirm Password</span>
                    <div className='flex items-center border border-[#eee] rounded-xl p-3'>
                        <FaLock className='mr-3' />
                        <input className='w-full focus:outline-none' type="password" placeholder="Confirm password" />
                    </div>
                </div>

                {/* Terms and Conditions */}
                <label className='flex items-center gap-3 mb-5'>
                    <input type="checkbox" />
                    <span>I accept the Terms of Service and Privacy Policy.</span>
                </label>

                {/* Sign Up Button */}
                <button className='bg-black text-white p-5 w-full rounded-xl'>Sign Up</button>

                {/* Login Link */}
                <p className='text-center mt-5'>Already have an account? <Link to="/" className='text-blue-500'> Login</Link></p>
            </div>

            {/* Image Section */}
            <div className=''>
                <img className='w-full ' src="/Auth/register.png" alt="Register" />
            </div>
        </form>
    );
}

export default SignUpInfluencer;
