import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaAngleLeft, FaFilter, FaSearch } from 'react-icons/fa';
import { MdBlock } from 'react-icons/md';

const AdminClients = () => {
    const [filter, setFilter] = useState('This Week');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientsData, setClientsData] = useState([
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

    // Open Delete Client Modal
    const showDeleteModal = (client) => {
        setSelectedClient(client);
        setIsModalVisible(true);
    };

    // Close Modal
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedClient(null);
    };

    // Remove Client
    const handleRemoveClient = () => {
        setClientsData(clientsData.filter(client => client.key !== selectedClient.key));
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
        // {
        //     title: 'Total Expenditure',
        //     dataIndex: 'totalExpenditure',
        //     key: 'totalExpenditure',
        //     width: '20%',
        //     onHeaderCell: () => ({ style: { backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' } }),
        //     render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
        // },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="flex gap-2 justify-center">
                    <Link to={`/admin/clients/profile/${record.key}`}>
                        <Button icon={<EyeOutlined className='text-2xl' />} shape="circle" />
                    </Link>
                    <button
                        // shape="circle"
                        className='border rounded-full w-8 h-8 flex items-center justify-center'
                        onClick={() => showDeleteModal(record)}
                    >
                        <MdBlock className='text-xl text-red-600' />
                    </button>
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
                        placeholder="Search Client"
                        className="pl-10 pr-4 py-2 border rounded focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute left-2 top-3 text-gray-400" />
                </div>
            </div>

            {/* Back Button */}
            <div className="flex items-center justify-between my-10">
                <Link to={'/admin/clients'} className="flex items-center gap-2">
                    <FaAngleLeft className="text-2xl" />
                    <h1 className="text-2xl font-semibold">Admin Clients</h1>
                </Link>
            </div>

            {/* Clients Table */}
            <div className="text-center">
                <Table
                    columns={columns}
                    dataSource={clientsData}
                    pagination={false}
                    bordered
                    className="text-center"
                />
            </div>

            {/* Delete Client Modal */}
            <Modal
                // title="Confirm Client Removal"
                open={isModalVisible} // Changed from "visible" to "open" for AntD v5
                onCancel={handleCancel}
                width={400}
                closable={false}
                footer={[
                    <div className='w-full flex justify-center items-center gap-3'>
                        {/* <Button className='w-1/2 h-12' key="cancel" onClick={handleCancel}>
                            Cancel
                        </Button> */}
                        <Button className='w-1/2 h-12 bg-red-600 !text-white hover:!text-red-500' key="remove" type="" danger onClick={handleRemoveClient}>
                            Block
                        </Button>
                    </div>
                ]}
            >
                <div>
                    <img className='w-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                    <div className='my-5'>
                        <h2 className='font-semibold text-xl my-2 text-center'>Are You Sure?</h2>
                        <p className='text-center my-2 text-gray-400'>Influencer Name: TrendyX</p>
                        <p className='text-center my-2 text-gray-400'>Email: abc@gmail.com</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminClients;
