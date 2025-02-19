import { Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar } from "recharts";

const engagementData = [
    { day: "MON", engagement: 500000 },
    { day: "TUE", engagement: 200000 },
    { day: "WED", engagement: 1200000 },
    { day: "THU", engagement: 300000 },
    { day: "FRI", engagement: 1500000 },
    { day: "SAT", engagement: 50000 },
    { day: "SUN", engagement: 250000 }
];

const campaignData = [
    { name: "Active", value: 50, color: "#3498db" },
    { name: "Completed", value: 70, color: "#2ecc71" },
    { name: "Upcoming", value: 18, color: "#e67e22" }
];

const ClientHome = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentCampaign, setCurrentCampaign] = useState(null);

    // Function to show the modal
    const showModal = (campaign) => {
        setCurrentCampaign(campaign);
        setIsModalVisible(true);
    };

    // Function to handle modal close
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const paymentData = [
        { month: "Jan", revenue: 10000 },
        { month: "Feb", revenue: 25000 },
        { month: "Mar", revenue: 45000 },
        { month: "Apr", revenue: 38000 },
        { month: "May", revenue: 20000 },
        { month: "Jun", revenue: 15000 },
        { month: "Jul", revenue: 22000 },
        { month: "Aug", revenue: 36000 },
        { month: "Sep", revenue: 40000 },
        { month: "Oct", revenue: 45000 },
        { month: "Nov", revenue: 43000 },
        { month: "Dec", revenue: 60000 },
    ];



    return (
        <div className="p-5">
            {/* Stats Section */}
            <div className="flex items-center gap-5 flex-wrap">
                {[{ title: "Total Influencers", value: "40,689", icon: "/influencer/Home/Icon.png" },
                { title: "Total Payment", value: "$1,20,000", icon: "/influencer/Home/bank-icon.png" },
                { title: "Active Campaigns", value: "10,293", icon: "/influencer/Home/Icon1.png" },
                { title: "Total Campaigns", value: "89,000", icon: "/influencer/Home/Icon1.png" }].map((stat, index) => (
                    <div key={index} className="flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-200 mb-3">{stat.title}</h4>
                            <h2 className="text-3xl font-semibold">{stat.value}</h2>
                        </div>
                        <div>
                            <img src={stat.icon} alt={stat.title} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {/* Total Engagement Area Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Total Payment</h3>
                        <select className="p-1 border rounded">
                            <option>December</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                        </select>
                    </div>
                    <div className="flex-1"> {/* Ensures full height usage */}
                        <ResponsiveContainer width="100%" height={300}>  {/* Ensure height is set */}
                            <BarChart data={paymentData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#2e0000" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>

                {/* Campaign Pie Chart */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Campaign</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={campaignData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                innerRadius={50}
                                fill="#8884d8"
                                label
                            >
                                {campaignData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <div className="flex justify-between my-8">
                    <h2 className="text-3xl font-semibold">Active Campaigns <sup className='text-sm bg-secondary text-white px-1 rounded'>100</sup></h2>
                    <Link to={'/client/campaigns'} className="border text-primary border-primary  py-2 px-5 rounded-lg">Show All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {["Campaign 1", "Campaign 2", "Campaign 3"].map((campaign, index) => (
                        <div
                            key={index}
                            className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5"
                        >
                            <div className='grid grid-cols-2 gap-3'>
                                <img className='h-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">{campaign} Campaign</h4>
                                    <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                    <h2 className='text-3xl font-semibold'>$1520</h2>
                                    <button onClick={() => showModal(campaign)} className="border mt-3 w-full border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={700}
                closable={false}
            >
                <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                    <div>
                        <div className='grid grid-cols-2 gap-5'>
                            <img src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h2 className='text-xl font-semibold'>Campaign Name</h2>
                                <h2 className='text-3xl my-3 font-semibold'>{currentCampaign}</h2>
                                <p className='my-3 block text-gray-500 font-semibold '>TikTok Sound Link</p>
                                <button className='border border-black px-5 py-3 rounded-xl'>Go to Media</button>
                            </div>
                        </div>
                        <hr className='bg-secondary my-5 h-[2px] border-none' />
                        <div>
                            <h3>Campaign Details</h3>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
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

                        <div className='mt-5'>
                            <span className='font-semibold mb-2'>Uploaded Media</span>
                            <audio controls className='w-full ' src="/influencer/Home/campaignIcons/campainAudio.mp3" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ClientHome;
