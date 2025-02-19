import React from 'react';
import { FaAngleLeft, FaDownload, FaPlay, FaRegComment } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { BsTiktok } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { CiHeart, CiPlay1 } from 'react-icons/ci';
import { FiRefreshCcw } from 'react-icons/fi';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

// Chart Data
const likesData = [
    { time: "1pm", likes: 50 },
    { time: "2pm", likes: 70 },
    { time: "3pm", likes: 80 },
    { time: "4pm", likes: 90 },
    { time: "5pm", likes: 85 },
    { time: "6pm", likes: 40 },
];

const commentsData = [
    { time: "1pm", comments: 30 },
    { time: "2pm", comments: 50 },
    { time: "3pm", comments: 65 },
    { time: "4pm", comments: 70 },
    { time: "5pm", comments: 60 },
    { time: "6pm", comments: 25 },
];

const AdminSingleInfluencerActivity = () => {
    return (
        <div className="mb-5">
            {/* Back Button */}
            <Link to={'/client/influencers'} className='flex items-center gap-2 text-2xl font-semibold mb-5'>
                <FaAngleLeft />
                <h2>TikTok Post Analytics</h2>
            </Link>

            {/* Influencer Profile Section */}
            <div className='flex items-center gap-5 mb-10'>
                <img className='w-24 h-24 rounded-full object-cover' src="/influencer/Home/Rectangle-2.png" alt="Profile" />
                <div>
                    <h2 className='text-3xl font-semibold'>Maria Rodriguez</h2>
                    <h3 className="text-lg text-gray-500">TikTok Follower: 1,20,000</h3>
                </div>
            </div>

            {/* TikTok Post Details */}
            <div className="grid md:grid-cols-3 gap-5 border p-5 rounded-lg mb-10">

                <div>
                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Campaign Name:</h3>
                        <p className="text-black mt-2 flex items-center gap-1"><img className='w-6 h-6 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="" /> Holiday Music Festival</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Video ID:</h3>
                        <p className="text-black mt-2">243534655465</p>
                    </div>
                </div>
                <div>
                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Posting Date:</h3>
                        <p className="text-black mt-2">1 February, 2025</p>
                    </div>

                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Posting Time:</h3>
                        <p className="text-black mt-2">11:00 AM</p>
                    </div>
                </div>
                <div>

                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-[#ff9b51]">
                            TikTok Username:
                        </h3>
                        <p className="text-black mt-2 flex items-center gap-1"><img className='w-6 h-6 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="" /> maria_rodriz23</p>
                    </div>


                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Total Likes:</h3>
                        <p className="text-black mt-2">1,200</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className="text-lg font-semibold text-[#ff9b51]">Total Comments:</h3>
                        <p className="text-black mt-2">1,200</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {/* Total Likes Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Total Likes</h3>
                        {/* <FaDownload className="text-gray-600 cursor-pointer" /> */}
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={likesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="likes" fill="#ff9b51" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Total Comments Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Total Comments</h3>
                        {/* <FaDownload className="text-gray-600 cursor-pointer" /> */}
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={commentsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="comments" fill="#5D2C2C" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Download Report Button */}
            <div className='flex items-center justify-center gap-2'>
                <button className='border border-black px-5 py-2 rounded-md mt-5 flex items-center justify-center gap-2'>Refresh Analytics <FiRefreshCcw />                    </button>
                <button className='border border-black px-5 py-2 rounded-md mt-5 flex items-center justify-center gap-2'>Download Campaign Report <HiOutlineDocumentDownload />                    </button>
            </div>

            {/* TikTok Post Preview Section */}
            <h2 className="text-2xl font-semibold mb-5">TikTok Post Preview</h2>
            <div className='grid grid-cols-4 gap-5'>
                <div className="border p-5">
                    {/* Post Header */}
                    <div className="flex items-center gap-3 mb-3">
                        <img className="w-12 h-12 rounded-full" src="/influencer/Home/Rectangle-2.png" alt="Profile" />
                        <div className='flex items-start gap-2'>
                            <h3 className="font-semibold">Maria Rodriguez <span className="text-gray-500 text-sm"><br /> 2 days ago</span></h3>
                            <span><MdVerified className='text-xl text-blue-500' /></span>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className="w-full rounded-lg min-h-96" src="/influencer/Home/Rectangle-3.png" alt="TikTok Post" />
                        <FaPlay className='absolute right-2 top-3 text-white text-4xl' />
                    </div>
                    {/* Post Stats */}
                    <div className="flex gap-5 text-gray-600 text-lg mt-3">
                        <span className='flex items-center gap-2'><CiHeart className='text-3xl font-semibold' /> 1000</span>
                        <span className='flex items-center gap-2'><FaRegComment className='text-2xl font-semibold' />120</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminSingleInfluencerActivity;
