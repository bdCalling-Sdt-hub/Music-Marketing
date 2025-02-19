import React, { useState } from 'react';
import { Modal } from 'antd'; // Import Ant Design Modal
import { FaEdit, FaFilter, FaSearch } from 'react-icons/fa'; // Import filter icon for dropdown
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
    }
];

const AdminCampaigns = () => {
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
            <div className='mb-10 flex items-center justify-end'>
                <Link to={'/admin/campaigns/create'} className='py-3 px-10 rounded-xl bg-[#344331] text-white'>
                    <button className=''>Create Campaign</button>
                </Link>
            </div>
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

                        <div className="flex w-full gap-5 relative">
                            <div className='w-1/4'>
                                <img src={campaign.image} alt={campaign.name} className=" rounded-lg" />
                                {/* {
                                    campaign && campaign.status === 'active' &&
                                    <div className='flex flex-col text-center'>
                                        <button
                                            onClick={() => showModal(campaign)}
                                            className="mt-5 w-full border border-black text-black px-20 py-3 rounded-lg"
                                        >
                                            Go to Campaign
                                        </button>
                                        <Link to={'/admin/campaigns/active/view-ugc'} className='mt-5 w-full border border-black text-black px-20 py-3 rounded-lg'>View UGC</Link>
                                    </div>
                                } */}
                                {
                                    campaign.status === 'completed' &&
                                    <div className='flex flex-col text-center' >
                                        <Link
                                            to={`/admin/campaigns/completed/${campaign.id}`}
                                            className="mt-5 w-full border border-black text-black px-20 py-3 rounded-lg"
                                        >
                                            Go to Campaign
                                        </Link>
                                        <Link to={`/admin/campaigns`} className='mt-5 w-full border border-black text-black px-20 py-3 rounded-lg'>View UGC</Link>
                                    </div>
                                }
                                {
                                    campaign.status === 'active' &&
                                    <div className='flex flex-col text-center' >
                                        <Link
                                            to={`/admin/campaigns/active/${campaign.id}`}
                                            className="mt-5 w-full border border-black text-black px-20 py-3 rounded-lg"
                                        >
                                            Go to Campaign
                                        </Link>
                                        <Link to={`/admin/campaigns`} className='mt-5 w-full border border-black text-black px-20 py-3 rounded-lg'>View UGC</Link>
                                    </div>
                                }
                            </div>

                            <div className="flex-1">
                                <h3 className="text-4xl font-semibold">{campaign.name} {campaign.status === 'upcoming' && <sup className='bg-blue-600 text-white px-1 rounded text-sm'>New</sup>}</h3>
                                <p className="text-sm my-5"><span className='font-semibold'>Details:</span> Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia </p>
                                <p className="text-sm mt-2"><span className="font-semibold">Targeted Timeline:</span> {campaign.timeline}</p>

                                {
                                    campaign && campaign.status !== 'upcoming' &&
                                    <div>
                                        <div className='mt-8 flex justify-between'>
                                            <div>
                                                <h2>Influencer Assigned</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                            <div>
                                                <h2>Joined Influencers</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                            <div>
                                                <h2>Pending Approval</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                            <div>
                                                <h2>Total Impressions</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                            <div>
                                                <h2>Budget </h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                        </div>

                                    </div>
                                }
                                {
                                    campaign && campaign.status === 'upcoming' &&
                                    <div className='mt-8 flex justify-between'>
                                        <div className='flex items-center gap-10'>
                                            <div>
                                                <h2>Influencer Assigned</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                            <div>
                                                <h2>Joined Influencers</h2>
                                                <h3 className='font-semibold text-xl'>1500</h3>
                                            </div>
                                        </div>
                                        <button onClick={() => showModal(campaign)} className='bg-[#000] text-white px-10 py-3 rounded-lg relative top-[-10px]'>
                                            Approve
                                        </button>
                                    </div>

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

                    <div>

                        <div>
                            <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5 relative">

                                <Link to={`/admin/campaigns/edit`} className='absolute right-0 top-0 flex items-start'><span className='bg-blue-500 text-white text-sm font-medium ml-2 flex items-center px-2 py-1 gap-1 rounded'> <FaEdit /> Edit</span></Link>
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
            </Modal >
        </div >
    );
};

export default AdminCampaigns;
