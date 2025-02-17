import React, { useState } from 'react';
import { Modal } from 'antd'; // Import Ant Design Modal
import { FaFilter, FaSearch } from 'react-icons/fa'; // Import filter icon for dropdown
import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// Mock data for campaigns
const campaignsData = [
    {
        id: 1,
        name: "Holiday Music Campaign",
        status: "active",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
        timeline: "24 January, 2025 - 30 January, 2025",
        image: "/influencer/Home/Rectangle-2.png"
    },
    {
        id: 2,
        name: "Spring Fashion Campaign",
        status: "upcoming",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
        timeline: "01 February, 2025 - 15 February, 2025",
        image: "/influencer/Home/Rectangle-2.png"
    },

    {
        id: 3,
        name: "Summer Music Campaign",
        status: "completed",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
        timeline: "01 June, 2024 - 30 June, 2024",
        image: "/influencer/Home/Rectangle-2.png"
    },
    {
        id: 4,
        name: "Summer Music Campaign 2",
        status: "completed",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
        timeline: "01 June, 2024 - 30 June, 2024",
        image: "/influencer/Home/Rectangle-2.png"
    }, 
    
];

const Campaigns = () => {
    const [selectedTab, setSelectedTab] = useState('upcoming');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [filter, setFilter] = useState('This Week');
    const [searchQuery, setSearchQuery] = useState('');

    const showModal = (campaign) => {
        setModalContent(campaign);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const filteredCampaigns = campaignsData.filter(campaign =>
        (campaign.status === selectedTab) && campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-5">
            {/* <Link to={'/influencer/campaigns/uploadcampaign'} className='mb-10 flex items-center justify-end'>
                <button className='py-3 px-10 rounded-xl bg-[#344331] text-white'>View Drafts</button>
            </Link> */}
            {/* Tabs Section */}
            <div className="flex justify-between mb-5 border-b-2 border-black">
                <div className="flex space-x-5 font-semibold">
                    <button onClick={() => setSelectedTab('upcoming')} className={`py-2 px-4  ${selectedTab === 'upcoming' ? 'border-b-4 border-black text-black' : ''}`}>Upcoming Campaigns</button>
                    <button onClick={() => setSelectedTab('active')} className={`py-2 px-4  ${selectedTab === 'active' ? 'border-b-4 border-black text-black' : ''}`}>Active Campaigns</button>
                    <button onClick={() => setSelectedTab('completed')} className={`py-2 px-4 ${selectedTab === 'completed' ? 'border-b-4 border-black text-black' : ''}`}>Completed Campaigns</button>
                </div>

                <div className="flex space-x-3 items-center">
                    {/* Filter Dropdown with Icon */}
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

                    {/* Search Input with Icon */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Campaign"
                            className="pl-10 pr-4 py-2 border rounded focus:outline-none right-0"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button>
                            <FaSearch className="absolute left-2 top-3 text-gray-400" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Campaign Cards Section */}
            <div className="">
                {filteredCampaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-[#fffdf9] p-5 rounded-lg w-full">
                        <div className={` ${campaign && campaign.status === 'active' ? 'bg-[#63abfd]' : campaign && campaign.status === 'upcoming' ? 'bg-[#FFC107]' : 'bg-[#22af06]'} inline text-white text-xs font-medium mr-2 px-2.5 py-1 relative top-[-10px] `}>
                            {campaign && campaign.status === 'active' ? 'Active' : campaign && campaign.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </div>
                        <div className="flex items-center w-full gap-5">
                            <img src={campaign.image} alt={campaign.name} className="w-1/4 h-full rounded-lg" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">{campaign.name}</h3>
                                <p className="text-sm mt-2">{campaign.details}</p>
                                <p className="text-sm mt-2"><span className="font-semibold">Targeted Timeline:</span> {campaign.timeline}</p>
                                <button
                                    onClick={() => showModal(campaign)}
                                    className="mt-5 w-auto border border-black text-black px-20 py-3 rounded-lg"
                                >
                                    Go to Campaign
                                </button>
                                {
                                    campaign.status === 'active' && (
                                        <Link className='mt-5 md:ml-2 w-auto border border-black text-black px-20 py-3 rounded-lg' to={`/influencer/campaigns/uploadcampaign`}>Show Draft </Link>
                                    )
                                }
                                {
                                    campaign.status === 'completed' && (
                                        <Link className='mt-5 md:ml-2 w-auto border border-black text-black px-20 py-3 rounded-lg' to={`/influencer/campaigns/uploadcampaign`}>Show Draft </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to show campaign details */}
            <Modal
                // title={modalContent.name}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={700}
                closable={false}
            >
                <div>
                    {/* <h3>Details:</h3>
                    <p>{modalContent.details}</p>
                    <p><strong>Timeline:</strong> {modalContent.timeline}</p> */}

                    <div>
                        <button onClick={handleCancel} className='text-3xl font-semibold mb-5 flex items-center gap-3'> <FaChevronLeft />
                            {modalContent.name}</button>

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
                            {
                                modalContent.status === 'upcoming' &&
                                <button button className='mt-5 w-full bg-[#583333] text-white font-semibold px-10 py-3 rounded-lg'>
                                    Accept
                                </button>
                            }
                        </div>

                    </div>

                </div>
            </Modal >
        </div >
    );
};

export default Campaigns;
