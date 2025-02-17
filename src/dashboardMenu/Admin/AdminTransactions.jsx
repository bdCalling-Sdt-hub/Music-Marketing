import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import { Modal, Button } from "antd"; // Ant Design Modal

const transactions = [
    {
        id: "#12345678",
        name: "Maria",
        email: "abc@email.com",
        role: "Influencer",
        address: "Dhaka, Bangladesh",
        date: "01-24-2024",
        accountNumber: "**** **** **** *545",
        amount: "$2.99",
        classType: "A",
        subscription: "Gold",
        package: "P550",
    },
    {
        id: "#12345679",
        name: "TrendyX",
        role: "Client",
        email: "xyz@email.com",
        address: "New York, USA",
        date: "02-12-2024",
        accountNumber: "**** **** **** *123",
        amount: "$5.99",
        classType: "B",
        subscription: "Silver",
        package: "P330",
    }
];

const AdminTransactions = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // Function to open the modal
    const showModal = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalVisible(true);
    };

    // Function to close the modal
    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">All Transaction List</h2>

                {/* Search Input with Button */}
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border rounded-lg shadow-sm w-full pr-10"
                    />
                    <button className="absolute right-3 top-3 text-gray-600 hover:text-black">
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="py-3 px-4 text-left">#SL</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Role</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Amount</th>
                            <th className="py-3 px-4 text-left">Time & Date</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="">
                                <td className="py-5 px-4">{index + 1}</td>
                                <td className="py-5 px-4">{transaction.name}</td>
                                <td className="py-5 px-4">{transaction.role}</td>
                                <td className="py-5 px-4">{transaction.email}</td>
                                <td className="py-5 px-4">{transaction.amount}</td>
                                <td className="py-5 px-4">{transaction.date}</td>
                                <td className="py-5 px-4">
                                    <button
                                        onClick={() => showModal(transaction)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        <FaEye className="text-2xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Transaction Details Modal */}
            <Modal
                title="Transaction Details"
                open={isModalVisible}
                onCancel={handleClose}
                footer={[
                    <Button key="close" onClick={handleClose}>
                        Close
                    </Button>
                ]}
            >
                {selectedTransaction && (
                    <div className="p-4">
                        <p className="flex items-center justify-between my-5"><strong>Transaction ID:</strong> {selectedTransaction.id}</p>
                        <p className="flex items-center justify-between my-5"><strong>Name:</strong> {selectedTransaction.name}</p>
                        <p className="flex items-center justify-between my-5"><strong>Role:</strong> {selectedTransaction.role}</p>
                        <p className="flex items-center justify-between my-5"><strong>Address:</strong> {selectedTransaction.address}</p>
                        <p className="flex items-center justify-between my-5"><strong>Date:</strong> {selectedTransaction.date}</p>
                        <p className="flex items-center justify-between my-5"><strong>A/C Number:</strong> {selectedTransaction.accountNumber}</p>
                        <p className="flex items-center justify-between my-5"><strong>Payment Amount:</strong> {selectedTransaction.amount}</p>
                        <p className="flex items-center justify-between my-5"><strong>Class:</strong> {selectedTransaction.classType}</p>
                        <p className="flex items-center justify-between my-5"><strong>Subscription:</strong> {selectedTransaction.subscription}</p>
                        <p className="flex items-center justify-between my-5"><strong>Package:</strong> {selectedTransaction.package}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AdminTransactions;
