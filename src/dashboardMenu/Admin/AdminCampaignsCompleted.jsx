import { Avatar } from 'antd';
import React from 'react';
import { FaEdit, FaRegUserCircle } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from "recharts";
import { AntDesignOutlined } from '@ant-design/icons';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiRefreshCcw } from 'react-icons/fi';




const totalLiks = [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 25000 },
    { month: "Mar", revenue: 45000 },
    { month: "Apr", revenue: 38000 },
    { month: "May", revenue: 20000 },
    { month: "Jun", revenue: 15000 },
    // { month: "Jul", revenue: 22000 },
    // { month: "Aug", revenue: 36000 },
    // { month: "Sep", revenue: 40000 },
    // { month: "Oct", revenue: 45000 },
    // { month: "Nov", revenue: 43000 },
    // { month: "Dec", revenue: 60000 },
];



const AdminCampaignsCompleted = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 items-start'>
            {/* Left Section - Campaign Details */}
            <div>
                <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5 relative">
                    <Link to={`/admin/campaigns/edit`} className='absolute right-0 top-0 flex items-start'><span className='bg-blue-500 text-white text-sm font-medium ml-2 flex items-center px-2 py-1 gap-1 rounded'> <FaEdit /> Edit</span></Link>
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
                        <audio controls className='w-full mt-3' src="/influencer/Home/campaignIcons/campainAudio.mp3" />
                    </div>


                </div>
                <div className='mt-8 '>
                    <h2 className='text-3xl font-semibold'>Influencers joined:</h2>
                    <div className=' mt-3'>
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
                    <div className='flex items-center justify-left'>
                        <Link to={`/admin/campaigns/completed/view-ugc`} className='border border-black px-5 py-3 rounded-xl mt-5'>View All</Link>
                    </div>
                </div>
            </div>

            {/* Right Section - Recharts Graph */}
            <div className="bg-white p-5 rounded-lg shadow-md ">  {/* Ensure the parent div has height */}
                <div className='flex items-center justify-end'>
                    <Link to={`/admin/campaigns/pay-influencer/:id`} className='bg-[#344331] px-5 py-3 rounded-xl text-white'>Pay Influencer</Link>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Total Likes</h2>
                    <ResponsiveContainer width="100%" height={400}> {/* Set a definite height */}
                        <BarChart data={totalLiks}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#ff9b51" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Total Comments</h2>
                    <ResponsiveContainer width="100%" height={400}> {/* Set a definite height */}
                        <BarChart data={totalLiks}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#ff9b51" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='flex items-center justify-center gap-2'>
                    <button className='border border-black px-5 py-2 rounded-md mt-5 flex items-center justify-center gap-2'>Refresh Analytics <FiRefreshCcw />                    </button>
                    <button className='border border-black px-5 py-2 rounded-md mt-5 flex items-center justify-center gap-2'>Download Campaign Report <HiOutlineDocumentDownload />                    </button>
                </div>

            </div>

        </div>
    );
}

export default AdminCampaignsCompleted;
