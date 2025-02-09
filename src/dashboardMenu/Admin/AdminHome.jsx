import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";
import { FaChevronDown } from "react-icons/fa";
import { Table, Tag, Button } from "antd";
import { EyeOutlined, EditOutlined, DownloadOutlined, LineChartOutlined } from "@ant-design/icons";


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
    { month: "Jun", revenue: 15000 },
    { month: "Jul", revenue: 22000 },
    { month: "Aug", revenue: 36000 },
    { month: "Sep", revenue: 40000 },
    { month: "Oct", revenue: 45000 },
    { month: "Nov", revenue: 43000 },
    { month: "Dec", revenue: 60000 },
];

const AdminHome = () => {
    const [selectedYear, setSelectedYear] = useState("2024");

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
        {
            title: "Actions",
            key: "actions",
            render: () => (
                <div className="flex gap-2">
                    <Button shape="circle" icon={<LineChartOutlined />} />
                    <Button shape="circle" icon={<EyeOutlined />} />
                    <Button shape="circle" icon={<EditOutlined />} />
                    <Button shape="circle" icon={<DownloadOutlined />} />
                </div>
            ),
            onHeaderCell: () => ({ style: { background: "#000", color: "#fff", fontWeight: "bold", textAlign: "left" } }),
        },
    ];


    return (
        <div className="">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {[
                    { title: "Total Influencers", value: "5,500", icon: "/Admin/Home/Frame1.png" },
                    { title: "Total Engagement Rate", value: "87%", icon: "/Admin/Home/Frame2.png" },
                    { title: "Total Revenue", value: "$25,989", icon: "/Admin/Home/Frame3.png" },
                    { title: "Active Campaigns", value: "3", icon: "/Admin/Home/Frame4.png" },
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
                        <h3 className="text-lg font-semibold text-gray-700">Average Campaign Engagement</h3>
                        {/* Year Dropdown */}
                        <div className="relative">
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
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={campaignData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="campaigns" stroke="#5D2C2C" fill="#5D2C2C" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Payment Overview */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-700">Payment</h3>
                        {/* Year Dropdown */}
                        <div className="relative">
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
                        </div>
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

            <div className="my-10">
                <h2 className="text-2xl font-semibold mb-5">Top Campaigns</h2>
                <Table
                    columns={columns}
                    dataSource={campaigns}
                    pagination={false}
                    bordered
                />
            </div>

        </div>
    );
};

export default AdminHome;
