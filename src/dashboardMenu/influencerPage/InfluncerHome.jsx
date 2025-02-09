import React, { useState } from 'react';
import { Area, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { FaChevronLeft } from 'react-icons/fa6';

const InfluncerHome = () => {

    const [isModalVisible, setIsModalVisible] = useState(false); // State to control Modal visibility

    const showModal = () => {
        setIsModalVisible(true); // Set modal visible
    };

    const handleOk = () => {
        setIsModalVisible(false); // Hide modal when 'OK' is clicked
    };

    const handleCancel = () => {
        setIsModalVisible(false); // Hide modal when 'Cancel' is clicked
    };


    const config = {
        data: {
            type: 'fetch',
            value: 'https://assets.antv.antgroup.com/g2/stocks.json',
            transform: [{ type: 'filter', callback: (d) => d.symbol === 'GOOG' }],
        },
        xField: (d) => new Date(d.date),
        yField: 'price',
        style: {
            fill: 'linear-gradient(90deg, white 0%, #da7122 100%)',
        },
        axis: {
            y: { labelFormatter: '~s' },
        },
        line: {
            style: {
                stroke: '#da7122',
                strokeWidth: 2,
            },
        },
    };

    const config2 = {
        data: {
            type: 'fetch',
            value: 'https:// .alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json',
        },
        style: {
            fill: '#583333',
        },
        xField: '城市',
        yField: '销售额',
        scrollbar: {
            x: { ratio: 0.008 },
        },
        columnStyle: (datum) => {
            return {
                fill: datum.sales > 2000 ? '#583333' : '#583333', // Example condition
            };
        },
    };




    return (
        <div className="">
            {/* Stats Section */}
            <div className="flex items-center gap-5 flex-wrap">
                {[
                    { title: 'Total Engagement', value: '40,689', icon: '/influencer/Home/Icon.png' },
                    { title: 'Total Campaign', value: '10,293', icon: '/influencer/Home/Icon1.png' },
                    { title: 'Total Income', value: '$89,000', icon: '/influencer/Home/Icon2.png' },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg"
                    >
                        <div>
                            <h4 className="text-xl font-semibold text-gray-200 mb-3">{stat.title}</h4>
                            <h2 className="text-3xl font-semibold">{stat.value}</h2>
                        </div>
                        <div>
                            <img src={stat.icon} alt={stat.title} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 items-center md:gap-10 ">
                {/* Client Overview 1 */}
                <div className="md:w-full w-auto bg-gray-100 md:p-10 p-5 pb-20 rounded-xl md:my-10 my-5 min-h-[40vh]">
                    <h2 className="mb-10 font-semibold text-xl">Campaign  Overview</h2>
                    <div className="h-full w-full">
                        {/* Ensure the Area chart takes up the full height available */}
                        <Area className="w-full h-full" {...config} />
                    </div>
                </div>

                {/* Client Overview 2 */}
                <div className="md:w-full w-auto bg-gray-100 md:p-10 p-5 pb-20 rounded-xl md:my-10 my-5 min-h-[40vh]">
                    <h2 className="mb-10 font-semibold text-xl">Payment</h2>
                    <div className="h-full w-full">
                        {/* Ensure the Area chart takes up the full height available */}
                        <Column className="w-full h-full" {...config2} />
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-white rounded-lg mb-5">

                    <div className='grid md:grid-cols-2 gap-2 grid-cols-1 lg:gap-2 xl:gap-3 w-full'>

                        <div className="overflow-x-auto bg-[#f3f4f6] rounded-lg px-5">
                            <h2 className="text-2xl font-semibold py-5">Active Campaigns</h2>
                            <div className='flex gap-5 my-5'>
                                <div className='w-2/5'>
                                    <img className='w-full h-full rounded-xl' src="/influencer/Home/Rectangle-2.png" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold mb-2'>Holiday Music Campaign</h3>
                                    <p className='text-sm '><span className='font-semibold'>Details:</span> Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla </p>
                                    <p className='text-sm mt-2'><span className='font-semibold'>Targeted Timeline:</span> 24 January, 2025 - 30 January 2025</p>
                                    <button
                                        onClick={showModal}
                                        className='mt-5 w-full border border-black text-black px-10 py-3 rounded-lg'>
                                        Go to Campaign
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-5 my-5'>
                                <div className='w-2/5'>
                                    <img className='w-full h-full rounded-xl' src="/influencer/Home/Rectangle-2.png" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold mb-2'>Holiday Music Campaign</h3>
                                    <p className='text-sm '><span className='font-semibold'>Details:</span> Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla </p>
                                    <p className='text-sm mt-2'><span className='font-semibold'>Targeted Timeline:</span> 24 January, 2025 - 30 January 2025</p>
                                    <button
                                        onClick={showModal}
                                        className='mt-5 w-full border border-black text-black px-10 py-3 rounded-lg'>
                                        Go to Campaign
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Modal
                            visible={isModalVisible}
                            onOk={handleOk} // Close modal when 'OK' is clicked
                            onCancel={handleCancel} // Close modal when 'Cancel' is clicked
                            footer={null} // We won't use footer
                            width={700}
                            closable={false} // Removes the close (cancel) icon
                        >
                            <div>
                                <button onClick={handleCancel} className='text-3xl font-semibold mb-5 flex items-center gap-3'> <FaChevronLeft />
                                    Holiday Music Campaign</button>
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
                                    <button className='mt-5 w-full bg-[#583333] text-white font-semibold px-10 py-3 rounded-lg'>
                                        Accept
                                    </button>
                                </div>

                            </div>
                        </Modal>



                        <div className='bg-[#f3f4f6] rounded-lg p-10 grid grid-cols-2 gap-5 items-center'>
                            <img className='w-full' src="/influencer/Home/HomePageAnnouncement.png" alt="" />
                            <div>
                                <h2 className='text-5xl font-semibold text-center'>Show All
                                    Campaigns</h2>
                                <div className='flex justify-center'>
                                    <button className='bg-secondary text-white px-10 py-3 rounded-lg mt-8'>Show All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InfluncerHome;
