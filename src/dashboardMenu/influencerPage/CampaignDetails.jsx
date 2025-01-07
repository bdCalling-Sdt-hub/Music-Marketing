import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { TbUpload } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CampaignDetails = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <h2 className='text-3xl font-semibold mb-5'>Holiday Music Campaign</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                        </div>
                        <img className='w-full' src="/influencer/Home/Rectangle-1.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-3xl font-semibold mb-5'>Key highlights</h2>
                        <div className='bg-primary py-5 px-20 grid grid-cols-3 gap-10'>
                            <div>
                                <img className='w-28 mx-auto' src="/influencer/Home/campaignIcons/cam-icon-1.png" alt="" />
                                <h2 className='font-semibold text-2xl text-white text-center mt-2'>Revenue</h2>
                            </div>
                            <div>
                                <img className='w-28 mx-auto' src="/influencer/Home/campaignIcons/cam-icon-2.png" alt="" />
                                <h2 className='font-semibold text-2xl text-white text-center mt-2'>Collaboration</h2>
                            </div>
                            <div>
                                <img className='w-28 mx-auto' src="/influencer/Home/campaignIcons/cam-icon-3.png" alt="" />
                                <h2 className='font-semibold text-2xl text-white text-center mt-2'>engagement</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-secondary bg-[url('/influencer/Home/campaignIcons/campaindetailsGroup.png')] bg-cover bg-center h-full w-full p-5">
                    <div>
                        <div className='grid grid-cols-2 gap-5'>
                            <img src="/influencer/Home/Rectangle-2.png" alt="" />
                            <div>
                                <h2 className='text-3xl font-semibold'>Holiday Music Campaign</h2>
                                <p className='my-3 block text-gray-500 font-semibold '>Happening in 2 days</p>
                                <h3 className='text-5xl font-semibold'>$1,200</h3>
                            </div>
                        </div>
                        <hr className='bg-secondary my-5 h-[2px] border-none' />
                        <div className='flex items-center justify-between gap-5 flex-wrap'>
                            <div className=''>
                                <h3 className='text-xl'>Client</h3>
                                <h2 className='text-3xl font-semibold mt-1'>TrendyX</h2>
                            </div>
                            <div className=''>
                                <h3 className='text-xl'>Submission Deadline</h3>
                                <h2 className='text-3xl font-semibold mt-1'>20/12/2025</h2>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-5 flex-wrap my-5'>
                            <div className=''>
                                <h3 className='text-xl'>Target Platforms</h3>
                                <h2 className='text-3xl font-semibold mt-1'>TikTok, YouTube, Instagram</h2>
                            </div>
                            <div className=''>
                                <h3 className='text-xl'>Check Out Media</h3>
                                <button className='p-2 border border-gray-500 rounded-lg mt-1 '>View Media</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl text-gray-500'>Deliverables</p>
                            <div>
                                <div className='flex items-center gap-3 my-3'>
                                    <img className='w-10' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="" />
                                    <h2 className='text-xl font-semibold'>Instagram Reel (30 seconds), 2 Instagram Stories</h2>
                                </div>
                                <div className='flex items-center gap-3 my-3'>
                                    <img className='w-10' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="" />
                                    <h2 className='text-xl font-semibold'>TikTok video with brand hashtags</h2>
                                </div>
                                <div className='flex items-center gap-3 my-3'>
                                    <img className='w-10' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="" />
                                    <h2 className='text-xl font-semibold'>Instagram Reel (30 seconds), 2 Instagram Stories</h2>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <audio controls className='w-full' src="/influencer/Home/campaignIcons/campainAudio.mp3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-5 mt-10'>
                <button className='py-3 px-8 rounded-lg flex items-center gap-2 border border-gray-600'><RxCross1 /> Decline</button>
                <button className='py-3 px-8 rounded-lg flex items-center gap-2 border border-[#2e0000] bg-[#2e0000] text-white'><FiCheckCircle /> Accept</button>
                <Link to={`/influencer/campaignsupload/fdgdfg`} >
                    <button className='py-3 px-8 rounded-lg flex items-center gap-2 border border-[#344331] bg-[#344331] text-white'><TbUpload /> Upload</button>
                </Link>
            </div>
        </div>
    );
}

export default CampaignDetails;
