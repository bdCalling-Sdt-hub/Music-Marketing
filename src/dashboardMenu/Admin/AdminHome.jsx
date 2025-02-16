import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";
import { FaChevronDown } from "react-icons/fa";
import { Table, Tag, Button, Modal } from "antd";
import { EyeOutlined, EditOutlined, DownloadOutlined, LineChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


// Campaign Engagement Data
const campaignData = [
    { month: "Jan", campaigns: 400 },
    { month: "Feb", campaigns: 550 },
    { month: "Mar", campaigns: 600 },
    { month: "Apr", campaigns: 500 },
    { month: "May", campaigns: 450 },
    { month: "Jun", campaigns: 650 },
    { month: "Jul", campaigns: 500 },
    { month: "Aug", campaigns: 480 },
    { month: "Sep", campaigns: 520 },
    { month: "Oct", campaigns: 570 },
    { month: "Nov", campaigns: 590 },
    { month: "Dec", campaigns: 620 },
];

// Payment Data
const paymentData = [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 25000 },
    { month: "Mar", revenue: 45000 },
    { month: "Apr", revenue: 38000 },
    { month: "May", revenue: 20000 },
    { month: "Jun", revenue: 15000 }
];

const AdminHome = () => {
    const [selectedYear, setSelectedYear] = useState("2024");

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

    const campaigns = [
        {
            key: "1",
            name: "Holiday Music Campaign",
            client: "TrendyX",
            status: "Active",
            startDate: "11/12/2025",
            deadline: "20/12/2025",
            budget: "$1,200",
            logo: "/influencer/Home/Rectangle-2.png",
        },
        {
            key: "2",
            name: "Holiday Music Campaign",
            client: "TrendyX",
            status: "Completed",
            startDate: "11/12/2025",
            deadline: "20/12/2025",
            budget: "$1,200",
            logo: "/influencer/Home/Rectangle-2.png",
        },
    ];

    // Table Columns
    const columns = [
        {
            title: "S. No.",
            dataIndex: "key",
            key: "key",
            render: (text, record, index) => index + 1,
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Campaign Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <img src={record.logo} alt="Logo" className="w-6 h-6 rounded-full" />
                    {text}
                </div>
            ),
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Client",
            dataIndex: "client",
            key: "client",
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "Active" ? "#2e0000" : "#197901"} className="px-3 py-1 rounded-lg text-white">
                    {status}
                </Tag>
            ),
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Starting Date",
            dataIndex: "startDate",
            key: "startDate",
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Deadline",
            dataIndex: "deadline",
            key: "deadline",
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "budget",
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     render: () => (
        //         <div className="flex gap-2">
        //             <Button shape="circle" icon={<LineChartOutlined />} />
        //             <Button shape="circle" icon={<EyeOutlined />} />
        //             <Button shape="circle" icon={<EditOutlined />} />
        //             <Button shape="circle" icon={<DownloadOutlined />} />
        //         </div>
        //     ),
        //     onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        // },
    ];


    return (
        <div className="">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {[
                    { title: "Total Influencers", value: "5,500", icon: "/Admin/Home/Frame1.png" },
                    { title: "Active Campaigns", value: "3", icon: "/Admin/Home/Frame4.png" },
                    { title: "Total Payment to Influencers", value: "8700$", icon: "/Admin/Home/Frame3.png" },
                    { title: "Total Income from Clients", value: "25000$", icon: "/Admin/Home/Frame3.png" },
                ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-5 bg-black text-white rounded-lg">
                        <img src={stat.icon} alt={stat.title} className="w-20" />
                        <div className="text-right">
                            <h2 className="text-4xl mb-2 font-semibold">{stat.value}</h2>
                            <p className="text-sm">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {/* Campaign Overview */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Total Payment</h3>
                        {/* Year Dropdown */}
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={paymentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#5D2C2C" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Payment Overview */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
                        {/* Year Dropdown */}
                        {/* <div className="relative">
                            <select
                                className="border p-2 w-32 rounded-lg text-gray-600 appearance-none"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                            <FaChevronDown className="absolute right-3 top-4 text-gray-500" />
                        </div> */}
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={paymentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#5D2C2C" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* <div className="my-10">
                <h2 className="text-2xl font-semibold mb-5">Top Campaigns</h2>
                <Table
                    columns={columns}
                    dataSource={campaigns}
                    pagination={false}
                    bordered
                />
            </div> */}

            <div>
                <div className="flex justify-between my-8">
                    <h2 className="text-3xl font-semibold">Active Campaigns</h2>
                    <Link to={'/admin/campaigns'} className="border text-primary border-primary  py-2 px-5 rounded-lg">Show All</Link>
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

export default AdminHome;
