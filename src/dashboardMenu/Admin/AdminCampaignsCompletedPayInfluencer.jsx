import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminCampaignsCompletedPayInfluencer = () => {
    const [activeTab, setActiveTab] = useState('unpaid'); // 'unpaid' or 'paid'
    const [selectedInfluencers, setSelectedInfluencers] = useState([]);
    const [influencerAmounts, setInfluencerAmounts] = useState({});

    // Mock Data for Unpaid & Paid Influencers
    const unpaidInfluencers = [
        { id: 1, name: 'Maria Rodriguez', email: 'Abc@gmail.com', bank: '********1234' },
        { id: 2, name: 'John Doe', email: 'John@gmail.com', bank: '********5678' },
        { id: 3, name: 'Emily Smith', email: 'Emily@gmail.com', bank: '********9012' },
    ];

    const paidInfluencers = [
        { id: 4, name: 'Sophia Williams', email: 'Sophia@gmail.com', amount: '$2,000', bank: '********3456' },
        { id: 5, name: 'Liam Brown', email: 'Liam@gmail.com', amount: '$3,500', bank: '********7890' },
    ];

    // Handle Multi-Selection
    const handleSelectInfluencer = (id) => {
        setSelectedInfluencers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Handle Amount Input
    const handleAmountChange = (id, amount) => {
        setInfluencerAmounts((prev) => ({
            ...prev,
            [id]: amount,
        }));
    };

    // Calculate Total Amount
    const totalAmount = Object.values(influencerAmounts).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

    return (
        <div className="p-5">
            <div className='flex items-start justify-between'>
                <Link className='font-semibold rounded-xl text-2xl text-black mb-8 inline-block' to={`/admin/campaigns/completed/3`} >
                    <FaArrowLeft className='inline-block mr-2' /> Payment
                </Link>
                <div className='text-right p-5 bg-[#34433113] rounded-lg border-[#344331] border'>
                    <h2 className='text-xl font-bold'>Holiday Music Campaign</h2>
                    <p className='text-gray-500'>Campaign Name</p>
                    <br />
                    <h3 className='text-xl font-bold'>$ 1,20,000</h3>
                    <p className='text-gray-500'>Budget</p>
                </div>
            </div>
            {/* Tabs Navigation */}
            <div className="flex mb-10">
                <button
                    className={`py-3 px-5 text-lg font-semibold ${activeTab === 'unpaid' ? 'border-b-4 border-[#242424]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('unpaid')}
                >
                    Unpaid Influencers
                </button>
                <button
                    className={`py-3 px-5 text-lg font-semibold ${activeTab === 'paid' ? 'border-b-4 border-[#242424]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('paid')}
                >
                    Paid Influencers
                </button>
            </div>

            {/* Unpaid Influencers Section */}
            {activeTab === 'unpaid' && (
                <div className="mt-5">
                    {unpaidInfluencers.map((influencer) => (
                        <label id={`influencer-${influencer.id}`} key={influencer.id} className="border p-4 grid grid-cols-5 items-center justify-between my-2">
                            <input
                                type="checkbox"
                                checked={selectedInfluencers.includes(influencer.id)}
                                onChange={() => handleSelectInfluencer(influencer.id)}
                            />
                            <div className="flex items-center gap-4">
                                <img className='w-10 rounded-full h-10' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{influencer.name}</h3>
                                    <p className="text-sm text-gray-500">Influencer Name</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{influencer.email}</h3>
                                <p className="text-sm text-gray-500">Email</p>
                            </div>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="border p-2 w-32"
                                onChange={(e) => handleAmountChange(influencer.id, e.target.value)}
                            />
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{influencer.bank}</p>
                                <h3 className="text-lg font-semibold">Bank Account Number</h3>
                            </div>
                        </label>
                    ))}

                    {/* Payment Summary */}
                    <div className="mt-5 p-4 border rounded-md w-72">
                        <h3 className="text-lg my-2 font-semibold">Payment Summary</h3>
                        <p className='flex my-2 items-center justify-between'>Influencers Selected: <span className='font-semibold '>{selectedInfluencers.length}</span></p>
                        <p className='flex my-2 items-center justify-between'>Total Amount: <span className='font-semibold'>${totalAmount}</span></p>
                        <button
                            className={`py-2 px-5 rounded-lg w-full mt-2 ${selectedInfluencers.length ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                            disabled={!selectedInfluencers.length}
                        >
                            Pay Now
                        </button>
                    </div>

                </div>
            )}

            {/* Paid Influencers Section - Directly Displayed Without Modal */}
            {activeTab === 'paid' && (
                <div className="mt-5">
                    {paidInfluencers.map((influencer) => (
                        <div key={influencer.id} className="border p-4 grid grid-cols-4 items-center justify-between my-2">
                            <div className="flex items-center gap-4">
                                <img className='w-10 rounded-full h-10' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{influencer.name}</h3>
                                    <p className="text-sm text-gray-500">Influencer Name</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{influencer.email}</h3>
                                <p className="text-sm text-gray-500">Email</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{influencer.amount}</h3>
                                <p className="text-sm text-gray-500">Amount</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{influencer.bank}</p>
                                <h3 className="text-lg font-semibold">Bank Account Number</h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminCampaignsCompletedPayInfluencer;
