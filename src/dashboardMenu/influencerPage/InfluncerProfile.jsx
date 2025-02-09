import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons for social media
import { MdEdit } from 'react-icons/md'; // Edit icon for editing profile
import { Button, Calendar, Dropdown, Menu } from 'antd'; // Ant Design Calendar Component
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const InfluencerProfile = () => {

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<FaEnvelope className="text-blue-500 text-2xl" />}>
                Email
            </Menu.Item>
            <Menu.Item key="2" icon={<FaPhone className="text-green-500 text-2xl" />}>
                Call
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            {/* Profile Header */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-5">
                    <img
                        src="https://randomuser.me/api/portraits/men/36.jpg" // Placeholder for profile image
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold">Enrique Smith</h2>
                        <p className="text-lg text-gray-600">Influencer</p>
                    </div>
                </div>
                <div className="flex space-x-5 items-center">
                    <Link to={'/influencer/profile/editprofile'} className="flex items-center text-blue-500 font-semibold hover:underline">
                        <MdEdit className="mr-2" /> Edit Profile
                    </Link>
                    <Dropdown className='flex items-center py-2 bg-[#1e1e1e] text-white' overlay={menu} placement="bottomRight">
                        <Button>Contact Info</Button>
                    </Dropdown>
                </div>
            </div>

            {/* Social Media Stats */}
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
                    <FaInstagram className="text-3xl text-pink-500" />
                    <p className="text-xl font-semibold">40,689</p>
                    <p className="text-gray-500">Instagram Followers</p>
                </div>
                <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
                    <FaTwitter className="text-3xl text-blue-500" />
                    <p className="text-xl font-semibold">10,293</p>
                    <p className="text-gray-500">Twitter Followers</p>
                </div>
                <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
                    <FaYoutube className="text-3xl text-red-500" />
                    <p className="text-xl font-semibold">89,000</p>
                    <p className="text-gray-500">YouTube Followers</p>
                </div>
                <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
                    <FaTiktok className="text-3xl text-black" />
                    <p className="text-xl font-semibold">2,040</p>
                    <p className="text-gray-500">TikTok Subscribers</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {/* Calendar */}
                <div className="bg-white p-5 rounded-lg shadow-md mb-5 col-span-1">
                    <h3 className="text-2xl font-semibold mb-4">May 2023</h3>
                    <Calendar fullscreen={false} />
                </div>

                {/* Active Campaigns */}
                <div className="bg-white p-5 rounded-lg shadow-md col-span-2">
                    <h3 className="text-2xl font-semibold mb-5">Active Campaigns</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                            <div className='flex gap-3'>
                                <img className='w-28' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                    <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                    <h2 className='text-3xl font-semibold'>$1520</h2>
                                </div>
                            </div>

                            <hr className='bg-secondary my-5 h-[2px] border-none' />

                            <div className='flex justify-between'>
                                <p className="text-sm font-medium">Client: <br /><span className='text-2xl font-semibold'>TrendyX</span></p>
                                <p className="text-sm font-medium">Submission Deadline: <br /><span className='text-2xl font-semibold'>20/12/2025</span></p>
                            </div>
                            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                        </div>
                        <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                            <div className='flex gap-3'>
                                <img className='w-28' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                    <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                    <h2 className='text-3xl font-semibold'>$1520</h2>
                                </div>
                            </div>

                            <hr className='bg-secondary my-5 h-[2px] border-none' />

                            <div className='flex justify-between'>
                                <p className="text-sm font-medium">Client: <br /><span className='text-2xl font-semibold'>TrendyX</span></p>
                                <p className="text-sm font-medium">Submission Deadline: <br /><span className='text-2xl font-semibold'>20/12/2025</span></p>
                            </div>
                            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfluencerProfile;
