import React, { useState } from 'react';
import { FaEye, FaSearch } from 'react-icons/fa'; // Import eye icon for actions
import { Modal } from 'antd'; // Import Modal from Ant Design

const ClientTransactions = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility
    const [selectedTransaction, setSelectedTransaction] = useState(null); // Transaction details for modal

    const data = [
        { id: 1, transactionNumber: '132342', email: 'maria@gmail.com', amount: '$1,200', time: '11 Oct 24, 11:10PM' },
        { id: 2, transactionNumber: '132343', email: 'maria@gmail.com', amount: '$1,200', time: '11 Oct 24, 11:10PM' },
        { id: 3, transactionNumber: '132344', email: 'maria@gmail.com', amount: '$1,200', time: '11 Oct 24, 11:10PM' },
        { id: 4, transactionNumber: '132345', email: 'maria@gmail.com', amount: '$1,200', time: '11 Oct 24, 11:10PM' },
        // Add more data here as needed
    ];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const filteredData = data.filter((transaction) =>
        transaction.transactionNumber.includes(searchQuery)
    );

    const displayedData = filteredData.slice((currentPage - 1) * 12, currentPage * 12); // Pagination for 12 items per page

    // Handle "View" button click
    const showTransactionDetails = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalVisible(true); // Open modal
    };

    // Handle Modal Close
    const handleCancel = () => {
        setIsModalVisible(false); // Close modal
    };

    return (
        <div className="">
            {/* Search Bar */}
            <div className="my-5 flex justify-between items-center">
                <h2 className="font-semibold text-3xl">All Transaction List</h2>
                <div className='flex gap-2'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 min-w-60 border border-gray-300 rounded"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className='px-[14px] bg-black text-white rounded-full '>
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white ">
                <table className="min-w-full">
                    <thead className="bg-[#0f0f0f] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">#SL</th>
                            <th className="px-4 py-3 text-left">Transaction Number</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Amount</th>
                            <th className="px-4 py-3 text-left">Time & Date</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="px-4 py-5">{transaction.id}</td>
                                <td className="px-4 py-5">{transaction.transactionNumber}</td>
                                <td className="px-4 py-5">{transaction.email}</td>
                                <td className="px-4 py-5">{transaction.amount}</td>
                                <td className="px-4 py-5">{transaction.time}</td>
                                <td className="px-4 py-5 ">
                                    <button
                                        onClick={() => showTransactionDetails(transaction)}
                                        className="text-gray-400 text-xl hover:text-gray-500"
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <span className="text-gray-600">
                        Showing {displayedData.length} of {filteredData.length} items
                    </span>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handlePageChange(1)}
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                        disabled={currentPage * 12 >= filteredData.length}
                    >
                        {'>'}
                    </button>
                    <button
                        onClick={() => handlePageChange(Math.ceil(filteredData.length / 12))}
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                    >
                        {'>>'}
                    </button>
                </div>
            </div>

            {/* Modal for Transaction Details */}
            <Modal
                // title="Transaction Details"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={500}
            >
                {selectedTransaction && (
                    <div>
                        <h3 className='font-semibold text-2xl text-center pb-3 border-b'>Transaction Details</h3>
                        <p className='flex items-center justify-between my-5'><strong>Transaction ID:</strong> {selectedTransaction.transactionNumber}</p>
                        <p className='flex items-center justify-between my-5'><strong>Name:</strong> Maria</p>
                        <p className='flex items-center justify-between my-5'><strong>Address:</strong> Dhaka, Bangladesh</p>
                        <p className='flex items-center justify-between my-5'><strong>Date:</strong> 01-24-2024</p>
                        <p className='flex items-center justify-between my-5'><strong>A/C Number:</strong> **** **** **** *545</p>
                        <p className='flex items-center justify-between my-5'><strong>Payment Amount:</strong> $2.99</p>
                        <p className='flex items-center justify-between my-5'><strong>Class:</strong> A</p>
                        <p className='flex items-center justify-between my-5'><strong>Subscription:</strong> Gold</p>
                        <p className='flex items-center justify-between my-5'><strong>Plan:</strong> P550</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ClientTransactions;
