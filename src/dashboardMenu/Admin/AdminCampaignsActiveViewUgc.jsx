import React from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AdminCampaignsActiveViewUgc = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold my-10'>Drafts Approved by Admin</h1>

            <div className='my-5'>
                {
                    [...Array(8)].map((_, index) => (
                        <div className='flex gap-3 mt-5 border items-center justify-between border-gray-600 rounded-lg p-2'>
                            {/* <img className='w-24 h-full' src="/influencer/Home/Rectangle-3.png" alt="" /> */}

                            <div className='flex items-center gap-5'>
                                <img className='w-20 h-20 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                                <div>
                                    <h2 className=' font-semibold mb-2'>Maria Rodrigez</h2>
                                    <h2>Influencer</h2>
                                </div>
                            </div>
                            <div>
                                <h2 className=' font-semibold mb-2'>Campaign Name</h2>
                                <h2>Holiday Music Festival</h2>
                            </div>
                            <div>
                                <h2 className=' font-semibold mb-2'>Campaign Name</h2>
                                <h2>3</h2>
                            </div>
                            <div>
                                <h2 className=' font-semibold'>Socials</h2>
                                <div className='flex gap-3 mt-2'>
                                    <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="" />
                                    <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="" />
                                    <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="" />
                                    <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="" />
                                </div>
                            </div>
                            <div className=''>
                                <Link to={`/admin/campaigns/active/view-ugc/${index}`} className='border block text-center border-gray-600 rounded-lg w-full py-3 px-5 '>View Draft</Link>
                                {/* <div className='flex gap-3'>
                                    <button className='bg-[#344331] text-white rounded-lg w-full py-2 px-5 mt-5'>Accept</button>
                                    <button className='border border-gray-600 rounded-lg w-full py-2 px-5 mt-5'>Decline</button>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default AdminCampaignsActiveViewUgc;
