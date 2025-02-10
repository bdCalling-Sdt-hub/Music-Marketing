import { Avatar } from 'antd';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { AntDesignOutlined } from '@ant-design/icons';


const engagementData = [
    { day: "Mon", engagement: 500000 },
    { day: "Tue", engagement: 200000 },
    { day: "Wed", engagement: 1200000 },
    { day: "Thu", engagement: 300000 },
    { day: "Fri", engagement: 1500000 },
    { day: "Sat", engagement: 50000 },
    { day: "Sun", engagement: 250000 }
];

const AdminCampaignsActive = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            {/* Left Section - Campaign Details */}
            <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                <div className='grid grid-cols-2 gap-5'>
                    <img src="/influencer/Home/Rectangle-2.png" alt="Campaign" />
                    <div>
                        <h2 className='text-xl font-semibold'>Campaign Name</h2>
                        <h2 className='text-3xl my-3 font-semibold'>Holiday Music Campaign</h2>
                        <p className='my-3 block text-gray-500 font-semibold '>TikTok Sound Link</p>
                        <button className='border border-black px-5 py-3 rounded-xl'>Go to Media</button>
                    </div>
                </div>

                <hr className='bg-secondary my-5 h-[2px] border-none' />

                {/* Campaign Details */}
                <div>
                    <h3>Campaign Details</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>

                <div className='my-5 grid grid-cols-2 gap-x-5 gap-y-8'>
                    <div>
                        <h3 className=' font-semibold'>Client</h3>
                        <h2 className='text-3xl font-semibold'>TrendyX</h2>
                    </div>
                    <div>
                        <h3 className=' font-semibold'>Target Starting Date</h3>
                        <h2 className='text-3xl font-semibold'>01/01/2025</h2>
                    </div>
                    <div>
                        <h3 className=' font-semibold'>Budget</h3>
                        <h2 className='text-3xl font-semibold'>$1,200</h2>
                    </div>
                    <div>
                        <h3 className=' font-semibold'>Target Ending Date</h3>
                        <h2 className='text-3xl font-semibold'>01/01/2025</h2>
                    </div>
                </div>

                {/* Uploaded Media */}
                <div className='mt-5'>
                    <span className='font-semibold mb-2'>Uploaded Media</span>
                    <audio controls className='w-full' src="/influencer/Home/campaignIcons/campainAudio.mp3" />
                </div>
            </div>

            {/* Right Section - Recharts Graph */}
            <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-8">Total Engagement</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={engagementData}>
                        <defs>
                            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="100%" stopColor="#f39c12" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#f39c12" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="engagement" stroke="#f39c12" fill="url(#colorEngagement)" />
                    </AreaChart>
                </ResponsiveContainer>
                <div className='mt-8 text-right'>
                    <h2 className='text-3xl font-semibold'>Influencers joined:</h2>
                    <div className='flex justify-end mt-5'>
                        <Avatar.Group
                            size="large"
                            max={{
                                count: 2,
                                style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                            }}
                        >
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<FaRegUserCircle />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCampaignsActive;
