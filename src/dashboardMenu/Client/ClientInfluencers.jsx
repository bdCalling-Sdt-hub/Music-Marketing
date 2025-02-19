import React, { useState } from "react";
import { Button, Table } from "antd";
import { EyeOutlined, DownOutlined } from "@ant-design/icons";
import { FaFacebook, FaFilter, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaSearch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
    {
        key: "1",
        name: "Maria Rodriguez",
        email: "maria123@gmail.com",
        platforms: ["tiktok", "twitter", "youtube"],
        profile: "/influencer/Home/Rectangle-2.png",
    },
    {
        key: "2",
        name: "Maria Rodriguez",
        email: "maria123@gmail.com",
        platforms: ["tiktok", "twitter", "youtube"],
        profile: "/influencer/Home/Rectangle-2.png",
    }
];
// Custom Table Header Styling
const customHeaderStyle = {
    backgroundColor: "#000000", // Black background
    color: "#FFFFFF", // White text color
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "left",
    padding: "12px",
}



const ClientInfluencers = () => {
    const [filter, setFilter] = useState("This Week");
    const [searchQuery, setSearchQuery] = useState("");

    // Filtered data based on search query
    const filteredData = data.filter((influencer) =>
        influencer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    // Table Columns
    const columns = [
        {
            title: "S. No.",
            dataIndex: "key",
            key: "key",
            render: (text, record, index) => index + 1,
            onHeaderCell: () => ({ style: customHeaderStyle }), // Apply header styling
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <img src={record.profile} alt="Profile" className="w-8 h-8 rounded-full" />
                    {text}
                </div>
            ),
            onHeaderCell: () => ({ style: customHeaderStyle }), // Apply header styling
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            onHeaderCell: () => ({ style: customHeaderStyle }), // Apply header styling
        },
        {
            title: "Platforms",
            dataIndex: "platforms",
            key: "platforms",
            render: (platforms) => (
                <div className="flex gap-3">
                    {platforms.includes("youtube") && <FaYoutube className="text-red-600 text-2xl" />}
                    {platforms.includes("twitter") && <FaTwitter className="text-black text-2xl" />}
                    {platforms.includes("tiktok") && <FaTiktok className="text-black text-2xl" />}
                </div>
            ),
            onHeaderCell: () => ({ style: customHeaderStyle }), // Apply header styling
        },
        {
            title: "Actions",
            key: "actions",
            render: (record) => (
                <Link to={`/client/influencers/${record.key}`}>
                    <Button icon={<EyeOutlined />} shape="circle" />
                </Link>
            ),
            onHeaderCell: () => ({ style: customHeaderStyle }), // Apply header styling
        },
    ];

    return (
        <div>
            {/* Header with Search and Filter */}
            <div className='flex items-center justify-between mb-5'>
                <h2 className='text-3xl font-semibold'>All Influencers List</h2>
                <div className="flex space-x-3 items-center">
                    {/* Filter Dropdown */}
                    <div className="relative">
                        <select
                            className="border p-2 focus:outline-none right-0 rounded pl-8 pr-4"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                        <FaFilter className="absolute left-2 top-3 text-gray-400" />
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Influencer"
                            className="pl-10 pr-4 py-2 border rounded focus:outline-none right-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button>
                            <FaSearch className="absolute left-2 top-3 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={false}
                bordered

            />
        </div>
    );
};

export default ClientInfluencers;
