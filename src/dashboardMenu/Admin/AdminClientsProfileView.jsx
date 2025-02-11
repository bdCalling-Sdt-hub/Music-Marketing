import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaEye } from 'react-icons/fa';
import { Modal, Button } from 'antd';

const AdminClientsProfileView = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    // Sample data for the table
    const campaigns = [
        {
            key: '1',
            campaignName: 'Holiday Music Campaign',
            client: 'TrendyX',
            status: 'Active',
            startingDate: '11/12/2025',
            deadline: '20/12/2025',
            budget: '$1,200',
        },
        {
            key: '2',
            campaignName: 'Holiday Music Campaign',
            client: 'TrendyX',
            status: 'Active',
            startingDate: '11/12/2025',
            deadline: '20/12/2025',
            budget: '$1,200',
        },
    ];

    // Function to show the modal and set selected campaign details
    const showModal = (campaign) => {
        setSelectedCampaign(campaign);
        setIsModalVisible(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedCampaign(null);
    };

    return (
        <div>
            <Link to={'/admin/clients'} className='flex items-center gap-2 text-2xl font-semibold mb-5'>
                <FaAngleLeft />
                <h2>Client Details</h2>
            </Link>

            {/* Influencer Details */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center my-10'>
                    <img className='w-32 h-32 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="Profile" />
                    <div>
                        <h2 className='text-2xl font-semibold'>Maria Rodrigez</h2>
                        <h2>Influencer</h2>
                    </div>
                </div>
                <div className='space-y-4 text-right'>
                    <span className='block'>Email: maria123@gmail.com </span>
                    <span className='block'>Phone: 012344556567889 </span>
                    <span className='block'>Joined: December 1, 2025 </span>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-5">Top Campaigns</h2>

                {/* Raw HTML Table */}
                <table className="table-auto w-full border-separate border-spacing-0">
                    <thead className='bg-[#111] text-white'>
                        <tr>
                            <th className="border-b-2 border-white p-5 text-left">S. No.</th>
                            <th className="border-b-2 border-white p-5 text-left">Campaign Name</th>
                            <th className="border-b-2 border-white p-5 text-left">Client</th>
                            <th className="border-b-2 border-white p-5 text-left">Status</th>
                            <th className="border-b-2 border-white p-5 text-left">Starting Date</th>
                            <th className="border-b-2 border-white p-5 text-left">Deadline</th>
                            <th className="border-b-2 border-white p-5 text-left">Budget</th>
                            <th className="border-b-2 border-white p-5 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign.key}>
                                <td className="border-b border-white p-5">{index + 1}</td>
                                <td className="border-b border-white p-5 flex items-center gap-2">
                                    <img className='w-5 h-5 rounded-full' src="/influencer/Home/Rectangle-3.png" alt="" />
                                    {campaign.campaignName}
                                </td>
                                <td className="border-b border-white p-5">{campaign.client}</td>
                                <td className="border-b border-white p-5">
                                    <span className={`tag ${campaign.status === 'Active' ? 'bg-[#2e0000]' : 'bg-red-500'} text-white px-3 py-1 rounded`}>
                                        {campaign.status}
                                    </span>
                                </td>
                                <td className="border-b border-white p-5">{campaign.startingDate}</td>
                                <td className="border-b border-white p-5">{campaign.deadline}</td>
                                <td className="border-b border-white p-5">{campaign.budget}</td>
                                <td className="border-b border-white p-5">
                                    <button
                                        className=""
                                        onClick={() => showModal(campaign)}
                                    >
                                        <FaEye className='text-2xl' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal to show view icon */}
                {selectedCampaign && (
                    <Modal
                        visible={isModalVisible}
                        onCancel={handleCloseModal}
                        footer={null}
                        width={700}
                        closable={false}
                    >
                        <div>

                            <div>

                                <div>
                                    <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                                        <div>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <img src="/influencer/Home/Rectangle-2.png" alt="" />
                                                <div>
                                                    <h2 className='text-xl font-semibold'>Campaign Name</h2>
                                                    <h2 className='text-3xl my-3 font-semibold'>Holiday Music Campaign</h2>
                                                    <p className='my-3 block text-gray-500 font-semibold '>TikTok Sound Link</p>
                                                    <button className='border border-black px-5 py-3 rounded-xl'>Go to Media</button>
                                                </div>
                                            </div>
                                            <hr className='bg-secondary my-5 h-[2px] border-none' />
                                            <div className=''>
                                                <h3>Campaign Details</h3>
                                                <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
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

                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default AdminClientsProfileView;
