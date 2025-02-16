import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaDownload } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { HiOutlineUserGroup } from 'react-icons/hi';

// Chart Data
const chartData = [
    { month: "January", engagement: 55, followers: 53 },
    { month: "February", engagement: 70, followers: 65 },
    { month: "March", engagement: 80, followers: 78 },
    { month: "April", engagement: 85, followers: 80 },
    { month: "May", engagement: 78, followers: 74 },
    { month: "June", engagement: 40, followers: 42 },
];

const campaignData = [
    { id: 1, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
    { id: 2, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
    { id: 3, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
    { id: 4, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
    { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
];

const ClientInfluencerProfile = () => {
    return (
        <div className="">
            {/* Back Button */}
            <Link to={'/client/influencers'} className='flex items-center gap-2 text-2xl font-semibold mb-5'>
                <FaAngleLeft />
                <h2>Influencer Profile</h2>
            </Link>

            {/* Influencer Details */}
            <div className='flex justify-between flex-wrap md:flex-nowrap mb-10'>
                <div className='flex gap-5 items-center'>
                    <img className='w-32 h-32 rounded-full object-cover' src="/influencer/Home/Rectangle-2.png" alt="Profile" />
                    <div>
                        <h2 className='text-3xl font-semibold'>Maria Rodriguez</h2>
                        <h3 className="text-lg text-gray-500">Influencer</h3>
                        <div className='flex gap-3 mt-2'>
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="Instagram" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="TikTok" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="X" />
                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="YouTube" />
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <p className='my-2'>Email: <span className="font-semibold ">maria123@gmail.com</span></p>
                    <p className='my-2'>Phone: <span className="font-semibold ">012344556567889</span></p>
                    <p className='my-2'>Joined: <span className="font-semibold ">December 1, 2025</span></p>
                </div>
            </div>

            {/* Platform Stats */}
            <div className="grid md:grid-cols-3 gap-5 border p-5 rounded-lg">
                {[
                    { platform: "TikTok", username: "Maria Rodriguez", followers: "1,200" },
                    { platform: "YouTube", username: "Maria Rodriguez", followers: "1,200" },
                    { platform: "Instagram", username: "Maria Rodriguez", followers: "1,200" },
                ].map((item, index) => (
                    <div key={index} className="border-r last:border-none pr-5">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <img className="w-5" src={`/influencer/Home/campaignIcons/socialMedia/${item.platform}.png`} alt={item.platform} />
                            {item.platform} Information:
                        </h3>
                        <p className="mt-5 text-[#ff9b51]">
                            <span className="font-semibold">
                                <span className='flex items-center gap-2'>
                                    <CiUser className='text-xl' />
                                    User Name
                                </span>
                            </span>
                            <span className='font-semibold text-xl text-black mt-1 block'>{item.username}</span>
                        </p>

                        <p className="mt-5 text-[#ff9b51]">
                            <span className="font-semibold">
                                <span className='flex items-center gap-2'>
                                    <HiOutlineUserGroup className='text-xl' />
                                    Total Followers
                                </span>
                            </span>
                            <span className='font-semibold text-xl text-black mt-1 block'>{item.followers}</span>
                        </p>

                    </div>
                ))}
            </div>


            {/* Recently Participated Campaigns */}
            <div className="mt-10">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-3xl font-semibold">Recently Participated Campaigns</h2>
                    <Link to={`/client/influencers/all/influencers`} className="border border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                    {campaignData.map((campaign) => (
                        <div key={campaign.id} className="p-4 border rounded-lg shadow-md">
                            <img className="w-full h-40 object-cover rounded-lg" src={campaign.img} alt={campaign.name} />
                            <h3 className="text-center mt-3 font-semibold">{campaign.name}</h3>
                            <div className='mt-5 '>
                                <Link to={`/client/influencers/influencer-activity/${campaign.id}`} className="border border-gray-600 text-gray-600 py-2 px-4 rounded-lg w-full block text-center mt-2">
                                    View Activity
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientInfluencerProfile;
