import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

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
    return (
        <div className="p-5">
            {/* Stats Section */}
            <div className="flex items-center gap-5 flex-wrap">
                {[
                    { title: "Total Influencers", value: "40,689", icon: "/influencer/Home/Icon.png" },
                    { title: "Active Campaigns", value: "10,293", icon: "/influencer/Home/Icon1.png" },
                    { title: "Total Campaigns", value: "$89,000", icon: "/influencer/Home/Icon1.png" }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg"
                    >
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
                        <h3 className="text-lg font-semibold text-gray-700">Total Engagement</h3>
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
                    <ResponsiveContainer width="100%" height={250}>
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
                    <h2 className="text-3xl font-semibold">Active Campaigns</h2>
                    <button className="border border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                        <div className='grid grid-cols-2 gap-3'>
                            <img className='h-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h4 className="font-semibold text-lg mb-2">HOLIDAY MUSIC CAMPAIGN</h4>
                                <p className="text-sm text-gray-600 mb-2">Happening in 2 days</p>
                                <h2 className='text-3xl font-semibold'>$1520</h2>
                                <button className="border mt-3 w-full border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View Details</button>
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
                                <button className="border mt-3 w-full border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View Details</button>
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
                                <button className="border mt-3 w-full border-gray-600 text-gray-600 py-2 px-5 rounded-lg">View Details</button>
                            </div>
                        </div>
                        {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button> */}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClientHome;
