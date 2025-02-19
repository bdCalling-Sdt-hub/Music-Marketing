import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const AllPayments = () => {
    const [activeTab, setActiveTab] = useState('client'); // 'client' or 'influencer'

    return (
        <div className="p-5">
            {/* Tabs Navigation */}
            <div className="flex border-b-2">
                <button
                    className={`py-3 px-5 text-lg font-semibold w-1/2 ${activeTab === 'client' ? 'border-b-4 border-b-dark-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('client')}
                >
                    Client Transaction
                </button>
                <button
                    className={`py-3 px-5 text-lg font-semibold w-1/2 ${activeTab === 'influencer' ? 'border-b-4 border-b-dark-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('influencer')}
                >
                    Influencer Payment
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'client' && (
                <div className="mt-5">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="py-3 px-4 text-left">Client Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Campaign Name</th>
                                <th className="py-3 px-4 text-left">Received Amount</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(4)].map((_, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3 px-4 flex items-center gap-2">
                                        <input type="checkbox" />
                                        <img className="w-6 h-6 rounded-full" src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="Client" />
                                        <span>TrendyX</span>
                                    </td>
                                    <td className="py-3 px-4">Abc@gmail.com</td>
                                    <td className="py-3 px-4">Holiday Music Festival</td>
                                    <td className="py-3 px-4">$2,000</td>
                                    <td className="py-3 px-4">
                                        <FaEye className="text-gray-700 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'influencer' && (
                <div className="h-[70vh] flex items-center justify-center">
                    <h2 className="text-3xl font-semibold">Influencer Payments Here</h2>
                </div>
            )}
        </div>
    );
};

export default AllPayments;
