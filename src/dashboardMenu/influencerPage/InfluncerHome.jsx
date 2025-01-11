import React from 'react';
import { Area, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const InfluncerHome = () => {
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
            value: 'https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json',
        },
        style: {
            fill: '#da7122',
        },
        xField: '城市',
        yField: '销售额',
        scrollbar: {
            x: { ratio: 0.05 },
        },
        columnStyle: (datum) => {
            return {
                fill: datum.sales > 2000 ? '#da7122' : '#f4b598', // Example condition
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
                <div className=" bg-white rounded-lg">

                    <div className='grid md:grid-cols-2 gap-2 grid-cols-1 lg:gap-2 xl:gap-3 w-full'>

                        <div className="overflow-x-auto bg-[#f3f4f6] rounded-lg px-5">
                            <h2 className="text-2xl font-semibold py-5">Recent Campaigns</h2>

                            <table className="min-w-full bg-gray-100">
                                <thead className="bg-[#1b1b1b] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-semibold first:rounded-tl-lg  ">SL</th>
                                        <th className="px-4 py-2 text-left font-semibold">Campaign Name</th>
                                        <th className="px-4 py-2 text-left font-semibold">Client Name</th>
                                        <th className="px-4 py-2 text-left font-semibold">Starting Time</th>
                                        <th className="px-4 py-2 text-left font-semibold">Deadline</th>
                                        <th className="px-4 py-2 text-left font-semibold last:rounded-tr-lg">Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            sl: 1,
                                            campaignName: "Holiday Music Campaign",
                                            clientName: "TrendyX",
                                            startingTime: "12/12/2025",
                                            deadline: "20/12/2025",
                                            payment: "$1,200",
                                        },
                                        {
                                            sl: 2,
                                            campaignName: "Holiday Music Campaign",
                                            clientName: "TrendyX",
                                            startingTime: "12/12/2025",
                                            deadline: "20/12/2025",
                                            payment: "$1,200",
                                        },
                                    ].map((campaign, index) => (
                                        <tr
                                            key={index}
                                            className="cursor-pointer hover:bg-gray-200"
                                            onClick={() => window.location.href = `/influencer/campaignsdetails/${campaign.sl}`}
                                        >
                                            <td className="px-4 py-3">{campaign.sl}</td>
                                            <td className="px-4 py-3">{campaign.campaignName}</td>
                                            <td className="px-4 py-3">{campaign.clientName}</td>
                                            <td className="px-4 py-3">{campaign.startingTime}</td>
                                            <td className="px-4 py-3">{campaign.deadline}</td>
                                            <td className="px-4 py-3">{campaign.payment}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
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
