import React from 'react';
import { FaAngleLeft, FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Chart Data
const chartData = [
    { month: "January", engagement: 55, followers: 53 },
    { month: "February", engagement: 70, followers: 65 },
    { month: "March", engagement: 80, followers: 78 },
    { month: "April", engagement: 85, followers: 80 },
    { month: "May", engagement: 78, followers: 74 },
    { month: "June", engagement: 40, followers: 42 },
];

const ClientSingleInfluencerActivity = () => {
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
                    </div>
                </div>
                <div className='space-y-4'>
                    <span className='block'>Email: maria123@gmail.com </span>
                    <span className='block'>Phone: 012344556567889 </span>
                    <span className='block'>Joined: December 1, 2025 </span>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
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
                        <h3 className="text-lg font-semibold text-gray-700">Total Likes</h3>
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {/* Total Engagement Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-semibold text-gray-700">Total Comments</h3>
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
                        <h3 className="text-lg font-semibold text-gray-700">Total Share</h3>
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


        </div>
    );
};

export default ClientSingleInfluencerActivity;
