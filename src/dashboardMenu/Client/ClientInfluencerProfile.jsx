import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaDownload } from 'react-icons/fa';

// Chart Data
const chartData = [
    { month: "January", engagement: 55, followers: 53 },
    { month: "February", engagement: 70, followers: 65 },
    { month: "March", engagement: 80, followers: 78 },
    { month: "April", engagement: 85, followers: 80 },
    { month: "May", engagement: 78, followers: 74 },
    { month: "June", engagement: 40, followers: 42 },
];

const ClientInfluencerProfile = () => {
    return (
        <div className="p-5">
            {/* Back Button */}
            <Link to={'/client/influencers'} className='flex items-center gap-2 text-2xl font-semibold mb-5'>
                <FaAngleLeft />
                <h2>Influencer Profile</h2>
            </Link>

            {/* Influencer Details */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center my-10'>
                    <img className='w-32 h-32 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="Profile" />
                    <div>
                        <h2 className='text-2xl font-semibold'>Maria Rodrigez</h2>
                        <h2>Influencer</h2>
                        <div className='flex gap-3 mt-2'>
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="Instagram" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="TikTok" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="X" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="YouTube" />
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    <span className='block'>Email: maria123@gmail.com </span>
                    <span className='block'>Phone: 012344556567889 </span>
                    <span className='block'>Joined: December 1, 2025 </span>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Total Engagement Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-semibold text-gray-700">Total Engagement</h3>
                        <FaDownload className="text-gray-600 cursor-pointer" />
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="engagement" fill="#5D2C2C" radius={[5, 5, 0, 0]} name="2025" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Total Followers Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-semibold text-gray-700">Total Follower</h3>
                        <FaDownload className="text-gray-600 cursor-pointer" />
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="followers" fill="#F39C12" radius={[5, 5, 0, 0]} name="2025" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>



            </div>
            <div>
                <div className="flex justify-between my-8">
                    <h2 className="text-3xl font-semibold">Active Campaigns</h2>
                    <button className="border border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View Activity</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                        <div className='grid grid-cols-2 gap-3'>
                            <img className='h-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                <h2 className='text-3xl font-semibold'>$1520</h2>
                                <Link to={`/client/influencers/influencer-activity/${1}`} className="border mt-3 w-full border-gray-600 block text-center text-gray-600 py-2 px-5 rounded-lg">View Details</Link>
                            </div>
                        </div>
                        {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                    </div>
                    <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                        <div className='grid grid-cols-2 gap-3'>
                            <img className='h-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                <h2 className='text-3xl font-semibold'>$1520</h2>
                                <Link to={`/client/influencers/influencer-activity/${2}`} className="border mt-3 w-full border-gray-600 block text-center text-gray-600 py-2 px-5 rounded-lg">View Details</Link>
                            </div>
                        </div>
                        {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                    </div>
                    <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                        <div className='grid grid-cols-2 gap-3'>
                            <img className='h-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                <h2 className='text-3xl font-semibold'>$1520</h2>
                                <Link to={`/client/influencers/influencer-activity/${3}`} className="border mt-3 w-full border-gray-600 block text-center text-gray-600 py-2 px-5 rounded-lg">View Details</Link>
                            </div>
                        </div>
                        {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ClientInfluencerProfile;
