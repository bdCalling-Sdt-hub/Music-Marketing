import Dragger from 'antd/es/upload/Dragger';
import React from 'react';
import { Link } from 'react-router-dom';

const Campaignsupload = () => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <img className='w-32 rounded-full' src="/influencer/Home/Rectangle-3.png" alt="" />
                <div className=''>
                    <h2 className='text-2xl font-semibold'>Maria Rodrigez</h2>
                    <p className='my-1 text-gray-500'>Influencer</p>
                    <div className='flex items-center gap-2'>
                        <img className='w-8' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="" />
                        <img className='w-8' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="" />
                        <img className='w-8' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-10'>

                <div className=' bg-[#fffdf9]  p-5  grid grid-cols-2 gap-5'>
                    <div className='border p-5'>
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                {/* <InboxOutlined /> */}
                            </p>
                            <p className="ant-upload-text font-semibold !text-blue-800">Click to Upload</p>
                            <p className="ant-upload-hint">
                                or drag and drop
                            </p>
                        </Dragger>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Instagram</h2>

                        {/* Reels Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Reels Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Posts Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Posts Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Stories Information */}
                        <div className="mt-3">
                            <p className="mb-1 font-semibold text-gray-700">Stories Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <div className=' bg-[#fffdf9]  p-5  grid grid-cols-2 gap-5'>
                    <div className='border p-5'>
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                {/* <InboxOutlined /> */}
                            </p>
                            <p className="ant-upload-text font-semibold !text-blue-800">Click to Upload</p>
                            <p className="ant-upload-hint">
                                or drag and drop
                            </p>
                        </Dragger>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">TikTok</h2>

                        {/* Reels Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Reels Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Posts Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Posts Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Stories Information */}
                        <div className="mt-3">
                            <p className="mb-1 font-semibold text-gray-700">Stories Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <div className=' bg-[#fffdf9]  p-5  grid grid-cols-2 gap-5'>
                    <div className='border p-5'>
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                {/* <InboxOutlined /> */}
                            </p>
                            <p className="ant-upload-text font-semibold !text-blue-800">Click to Upload</p>
                            <p className="ant-upload-hint">
                                or drag and drop
                            </p>
                        </Dragger>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Facebook</h2>

                        {/* Reels Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Reels Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Posts Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Posts Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Stories Information */}
                        <div className="mt-3">
                            <p className="mb-1 font-semibold text-gray-700">Stories Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <div className=' bg-[#fffdf9]  p-5  grid grid-cols-2 gap-5'>
                    <div className='border p-5'>
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                {/* <InboxOutlined /> */}
                            </p>
                            <p className="ant-upload-text font-semibold !text-blue-800">Click to Upload</p>
                            <p className="ant-upload-hint">
                                or drag and drop
                            </p>
                        </Dragger>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">YouTube</h2>

                        {/* Reels Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Reels Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Posts Information */}
                        <div className="my-3">
                            <p className="mb-1 font-semibold text-gray-700">Posts Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>

                        {/* Stories Information */}
                        <div className="mt-3">
                            <p className="mb-1 font-semibold text-gray-700">Stories Information:</p>
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                                <input
                                    className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-transparent"
                                    type="text"
                                    placeholder="-"
                                />
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <div className='flex items-center justify-end'>
                <Link to={`/influencer/campaignsuploadedfiels/fdgdfg`} >
                    <button className='py-3 px-8 rounded-lg flex items-center gap-2 border border-[#344331] bg-[#344331] text-white'> Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default Campaignsupload;
