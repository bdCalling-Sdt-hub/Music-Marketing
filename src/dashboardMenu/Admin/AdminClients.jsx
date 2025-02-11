import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';


const AdminClients = () => {
    const [filter, setFilter] = useState('This Week');
    const [searchQuery, setSearchQuery] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };


    // Sample Data for the Table
    const clientsData = [
        {
            key: '1',
            clientName: 'TrendyX',
            totalCampaigns: 13,
            activeCampaigns: 3,
            totalExpenditure: '$1,10,000',
        },
        {
            key: '2',
            clientName: 'TrendyX',
            totalCampaigns: 13,
            activeCampaigns: 3,
            totalExpenditure: '$1,10,000',
        },
        {
            key: '3',
            clientName: 'TrendyX',
            totalCampaigns: 13,
            activeCampaigns: 3,
            totalExpenditure: '$1,10,000',
        },
    ];

    // Table Columns
    const columns = [
        {
            title: 'S. No.',
            dataIndex: 'key',
            key: 'key',
            render: (text, record, index) => index + 1,
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            width: '5%',
        },
        {
            title: 'Client Name',
            dataIndex: 'clientName',
            key: 'clientName',
            width: '25%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        },
        {
            title: 'Total Campaigns',
            dataIndex: 'totalCampaigns',
            key: 'totalCampaigns',
            width: '20%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        },
        {
            title: 'Active Campaigns',
            dataIndex: 'activeCampaigns',
            key: 'activeCampaigns',
            width: '20%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        },
        {
            title: 'Clients Total Expenditure',
            dataIndex: 'totalExpenditure',
            key: 'totalExpenditure',
            width: '20%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Link to={`/admin/clients/profile/:id`} className="flex gap-2 justify-center">
                    <Button icon={<EyeOutlined />} shape="circle" />
                </Link>
            ),
            width: '10%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
        },
    ];


    return (
        <div>
            {/* Filter Dropdown and Search Input */}
            <div className="flex space-x-3 items-center justify-end mb-5">
                <div className="relative">
                    <select
                        className="border p-2 focus:outline-none rounded pl-8 pr-4"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Year</option>
                    </select>
                    <FaFilter className="absolute left-2 top-3 text-gray-400" />
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Client"
                        className="pl-10 pr-4 py-2 border rounded focus:outline-none"
                        value={searchQuery} // Controlled input
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button>
                        <FaSearch className="absolute left-2 top-3 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Back Button */}
            <div className="flex items-center justify-between my-10">
                <Link to={'/admin/clients'} className="flex items-center gap-2">
                    <FaAngleLeft className="text-2xl" />
                    <h1 className="text-2xl font-semibold">Admin Clients</h1>
                </Link>
                <button>
                    <Link to={'/admin/clients/remove'} className="py-3 px-10 rounded-xl bg-[#2e0000] text-white">
                        Remove Client
                    </Link>
                </button>
            </div>

            {/* Clients Table */}
            <div className="text-center">
                <Table
                    columns={columns}
                    dataSource={clientsData}
                    pagination={false}
                    bordered
                    className="text-center"
                    style={{ textAlign: 'center' }} // Ensure the table content is centered
                />
            </div>

        </div>
    );
};

export default AdminClients;
