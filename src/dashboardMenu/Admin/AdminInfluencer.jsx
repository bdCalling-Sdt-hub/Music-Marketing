import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import { RiDeleteBin2Line } from 'react-icons/ri';

const AdminInfluencer = () => {
    const [filter, setFilter] = useState('This Week');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);

    // Sample Data for the Table
    const [influencersData, setInfluencersData] = useState([
        {
            key: '1',
            clientName: 'TrendyX',
            totalCampaigns: 13,
            activeCampaigns: 3,
            totalExpenditure: '$1,10,000',
        },
        {
            key: '2',
            clientName: 'BrandZ',
            totalCampaigns: 9,
            activeCampaigns: 2,
            totalExpenditure: '$85,000',
        },
        {
            key: '3',
            clientName: 'AdGuru',
            totalCampaigns: 20,
            activeCampaigns: 5,
            totalExpenditure: '$2,00,000',
        },
    ]);

    // Open the Delete Influencer Modal
    const showDeleteModal = (influencer) => {
        setSelectedInfluencer(influencer);
        setIsModalVisible(true);
    };

    // Close Modal
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedInfluencer(null);
    };

    // Remove Influencer
    const handleRemoveInfluencer = () => {
        setInfluencersData(influencersData.filter(item => item.key !== selectedInfluencer.key));
        handleCancel();
    };

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
            title: 'Influencer Name',
            dataIndex: 'clientName',
            key: 'clientName',
            width: '25%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => (
                <div className='flex items-center gap-2' style={{ textAlign: 'center' }}>
                    <img className='w-5 rounded-full h-5' src="/influencer/Home/Rectangle-1.png" alt="" />{text}
                </div>
            ),
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
            title: 'Total Expenditure',
            dataIndex: 'totalExpenditure',
            key: 'totalExpenditure',
            width: '20%',
            onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
            render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="flex gap-2 justify-center">
                    <Link to={`/admin/influencers/profile/${record.key}`} className="flex gap-2 justify-center">
                        <Button icon={<EyeOutlined />} shape="circle" />
                    </Link>
                    <Button
                        icon={<RiDeleteBin2Line className='text-xl text-red-600' />}
                        shape="circle"
                        onClick={() => showDeleteModal(record)}
                    />
                </div>
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
                        placeholder="Search Influencer"
                        className="pl-10 pr-4 py-2 border rounded focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute left-2 top-3 text-gray-400" />
                </div>
            </div>

            {/* Back Button */}
            <div className="flex items-center justify-between my-10">
                <Link to={'/admin/influencers'} className="flex items-center gap-2">
                    <FaAngleLeft className="text-2xl" />
                    <h1 className="text-2xl font-semibold">All Influencers</h1>
                </Link>
            </div>

            {/* Influencers Table */}
            <div className="text-center">
                <Table
                    columns={columns}
                    dataSource={influencersData}
                    pagination={false}
                    bordered
                    className="text-center"
                />
            </div>

            {/* Delete Influencer Modal */}
            <Modal
                // title="Confirm Influencer Removal"
                open={isModalVisible}
                onCancel={handleCancel}
                width={400}
                footer={[
                    <div className='w-full flex items-center gap-3'>
                        <Button className='w-1/2 h-12' key="cancel" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button className='w-1/2 h-12 bg-red-600 !text-white hover:!text-red-500' key="remove" type="" danger onClick={handleRemoveInfluencer}>
                            Remove Client
                        </Button>
                    </div>
                ]}
            >
                <div className="text-center">
                    <img className="mx-auto w-20 h-20 rounded-full" src="/influencer/Home/Rectangle-2.png" alt="" />
                    <h2 className="font-semibold text-xl my-3">Are You Sure?</h2>
                    <p className="text-gray-400">Influencer Name: {selectedInfluencer?.clientName}</p>
                    <p className="text-gray-400">Email: abc@gmail.com</p>
                </div>
            </Modal>
        </div>
    );
};

export default AdminInfluencer;
